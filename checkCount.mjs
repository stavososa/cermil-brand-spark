import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://owqmuxisxjugakqccsuw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cW11eGlzeGp1Z2FrcWNjc3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNDQ5MDcsImV4cCI6MjA4ODkyMDkwN30.NH3ixQyckcGjHf2kCjkZYe8x70onS-TxTxslGUatNAU';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function check() {
  const { data, error } = await supabase
    .from('estoque')
    .select('Placa, fotos');
    
  let successCount = 0;
  data.forEach(row => {
    if (row.fotos && row.fotos.length > 0 && row.fotos[0].includes('owqmuxisxjugakqccsuw')) {
      successCount++;
    }
  });
  console.log(`Sucesso: ${successCount} motos atualizadas com as novas URLs do Supabase!`);
}
check();
