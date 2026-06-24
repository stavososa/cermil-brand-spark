import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import heicConvert from 'heic-convert';

// Configurações do Supabase
const supabaseUrl = 'https://owqmuxisxjugakqccsuw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cW11eGlzeGp1Z2FrcWNjc3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNDQ5MDcsImV4cCI6MjA4ODkyMDkwN30.NH3ixQyckcGjHf2kCjkZYe8x70onS-TxTxslGUatNAU';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const BASE_API_URL = 'https://arquivos.boomsistemas.com.br/veiculos/';
const DATA_FILE = 'c:\\Users\\Gustavo\\stock control\\heicconversor\\dados api estoque.txt';
const BUCKET_NAME = 'veiculos';

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function ensureBucket() {
  const { data: buckets, error: listError } = await supabase.storage.listBuckets();
  if (listError) {
    console.warn("⚠️ Não foi possível listar os buckets. Verifique suas permissões (RLS).");
    return;
  }
  
  const bucketExists = buckets.find(b => b.name === BUCKET_NAME);
  if (!bucketExists) {
    console.log(`🪣 Criando bucket '${BUCKET_NAME}'...`);
    const { error: createError } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: true,
    });
    if (createError) {
      console.error("❌ Erro ao criar bucket. Talvez você precise criá-lo manualmente no painel e deixá-lo público.", createError);
    } else {
      console.log(`✅ Bucket '${BUCKET_NAME}' criado com sucesso!`);
    }
  }
}

async function processImage(urlPath, placa, index) {
  const fullUrl = BASE_API_URL + urlPath;
  console.log(`   ⬇️ Baixando: ${fullUrl}`);
  
  try {
    const response = await fetch(fullUrl);
    if (!response.ok) {
      console.error(`   ❌ Falha ao baixar ${fullUrl}: ${response.statusText}`);
      return null;
    }
    
    let buffer = await response.arrayBuffer();
    buffer = Buffer.from(buffer);
    
    let fileExt = path.extname(urlPath).toLowerCase();
    let contentType = 'image/jpeg';
    
    // Convert HEIC to JPEG
    if (fileExt === '.heic' || fileExt === '.heif') {
      console.log(`   🔄 Convertendo HEIC para JPEG...`);
      try {
        buffer = await heicConvert({
          buffer: buffer,
          format: 'JPEG',
          quality: 0.6 // Reduzindo qualidade conforme solicitado
        });
        fileExt = '.jpg';
      } catch (convertErr) {
        if (convertErr.message.includes('not a HEIC image')) {
          console.warn(`   ⚠️ O arquivo não parece ser um HEIC válido. Verificando se já é JPEG...`);
          // Alguns iPhones salvam jpg com extensão heic, vamos tentar subir como jpg direto.
          fileExt = '.jpg';
        } else {
          throw convertErr;
        }
      }
    } else if (fileExt === '.png') {
      contentType = 'image/png';
    } else if (fileExt === '.webp') {
      contentType = 'image/webp';
    }
    
    const fileName = `${placa}/foto_${index + 1}${fileExt}`;
    
    console.log(`   ☁️ Fazendo upload: ${fileName}`);
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, buffer, {
        contentType,
        upsert: true
      });
      
    if (uploadError) {
      console.error(`   ❌ Erro ao subir ${fileName}:`, uploadError.message);
      return null;
    }
    
    const { data: publicUrlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);
      
    console.log(`   ✅ Sucesso: ${publicUrlData.publicUrl}`);
    return publicUrlData.publicUrl;
    
  } catch (err) {
    console.error(`   ❌ Erro processando imagem ${urlPath}:`, err.message);
    return null;
  }
}

async function runMigration() {
  console.log("🚀 Iniciando migração de fotos...");
  
  await ensureBucket();
  
  // Lê o arquivo de dados
  const rawData = fs.readFileSync(DATA_FILE, 'utf-8');
  let apiData;
  try {
    apiData = JSON.parse(rawData);
  } catch (e) {
    console.error("❌ Erro ao parsear o arquivo TXT como JSON.");
    return;
  }
  
  // O JSON raiz é um array com um objeto dentro
  const veiculos = apiData[0]?.data?.data || [];
  console.log(`📋 Encontrados ${veiculos.length} veículos para processar.`);
  
  for (const veiculo of veiculos) {
    const placa = veiculo.veiculoPlaca;
    const galeria = veiculo.galeria || [];
    
    console.log(`\n🏍️ Processando Veículo: ${veiculo.veiculoDescricao} (Placa: ${placa}) com ${galeria.length} fotos.`);
    
    if (galeria.length === 0) continue;
    
    const novasUrls = [];
    for (let i = 0; i < galeria.length; i++) {
      const urlPath = galeria[i].veiculo_galeria_url;
      if (!urlPath) continue;
      
      const newUrl = await processImage(urlPath, placa, i);
      if (newUrl) {
        novasUrls.push(newUrl);
      }
    }
    
    if (novasUrls.length > 0) {
      console.log(`💾 Atualizando tabela 'estoque' para a Placa ${placa}...`);
      
      // Converte o array para JSON string caso a coluna seja texto/json no banco
      const { data, error } = await supabase
        .from('estoque')
        .update({ fotos: JSON.stringify(novasUrls) })
        .eq('Placa', placa);
        
      if (error) {
        console.error(`❌ Erro ao atualizar veículo ${placa} no Supabase:`, error.message);
      } else {
        console.log(`✅ Veículo ${placa} atualizado com sucesso no Supabase!`);
      }
    }
  }
  
  console.log("\n🎉 Migração concluída!");
}

runMigration();
