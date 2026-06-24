import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://owqmuxisxjugakqccsuw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cW11eGlzeGp1Z2FrcWNjc3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNDQ5MDcsImV4cCI6MjA4ODkyMDkwN30.NH3ixQyckcGjHf2kCjkZYe8x70onS-TxTxslGUatNAU';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const DATA_FILE = 'c:\\Users\\Gustavo\\stock control\\heicconversor\\dados api estoque.txt';

async function checkMissing() {
  const rawData = fs.readFileSync(DATA_FILE, 'utf-8');
  let apiData = JSON.parse(rawData);
  const veiculosApi = apiData[0]?.data?.data || [];
  
  const placasNaApi = veiculosApi.map(v => v.veiculoPlaca).filter(Boolean);
  
  console.log(`Temos ${placasNaApi.length} placas na API.`);
  
  // Buscar as placas no banco
  const { data: veiculosDb, error } = await supabase
    .from('estoque')
    .select('*');
    
  if (error) {
    console.error("Erro ao buscar no banco:", error.message);
    return;
  }
  
  const placasNoDb = veiculosDb.map(v => v.Placa);
  console.log(`Temos ${placasNoDb.length} placas no Banco de Dados.`);
  
  const placasFaltandoNoDb = veiculosApi.filter(v => !placasNoDb.includes(v.veiculoPlaca));
  
  console.log("\n=== VEÍCULOS DA API QUE NÃO EXISTEM NA TABELA 'estoque' ===");
  if (placasFaltandoNoDb.length === 0) {
    console.log("Nenhum! Todos os veículos da API existem no banco.");
  } else {
    placasFaltandoNoDb.forEach(v => {
      console.log(`- Modelo: ${v.veiculoDescricao} | Placa: ${v.veiculoPlaca}`);
    });
  }
}

checkMissing();
