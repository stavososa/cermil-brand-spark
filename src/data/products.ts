import seixoBranco from "@/assets/ecom-seixo-branco.png";
import seixoRajado from "@/assets/ecom-seixo-rajado.png";
import seixoNatural from "@/assets/ecom-seixo-natural.png";
import ametistas from "@/assets/ecom-ametistas.png";
import bigRocks from "@/assets/ecom-big-rocks.png";
import outrasPedras from "@/assets/ecom-outras-pedras.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

import seixoBrancoSack from "@/assets/seixo-branco-sack.jpg";
import seixoBrancoWood from "@/assets/seixo-branco-wood.jpg";
import seixoBrancoGarden from "@/assets/seixo-branco-garden.jpg";

import seixoRajadoSack from "@/assets/seixo-rajado-sack.jpg";
import seixoRajadoWood from "@/assets/seixo-rajado-wood.jpg";
import seixoRajadoGarden from "@/assets/seixo-rajado-garden.jpg";

import seixoNaturalSack from "@/assets/seixo-natural-sack.jpg";
import seixoNaturalWood from "@/assets/seixo-natural-wood.jpg";
import seixoNaturalGarden from "@/assets/seixo-natural-garden.jpg";

import ametista1 from "@/assets/ametista-1.jpg";
import ametista2 from "@/assets/ametista-2.jpg";

const granulometrias = ["Fino: ~5 mm", "Médio: ~50 mm", "Grande: ~100 mm"];

export type SizeDetail = {
  name: string;
  desc: string;
};

import branco2 from "@/assets/branco-2.jpg";
import rajado2 from "@/assets/rajado-2.jpg";
import blend2 from "@/assets/blend-2.jpg";

export type ProntaEntregaProduct = {
  id: string;
  name: string;
  img: string;
  type: "pronta-entrega";
  desc: string;
  granulometrias: string[];
  badge: string | null;
  gallery?: string[];
  sizes?: SizeDetail[];
  weightsText?: string;
};

export type SobConsultaProduct = {
  id: string;
  name: string;
  img: string;
  type: "sob-consulta";
  desc: string;
  badge: string | null;
  gallery?: string[];
  sizes?: SizeDetail[];
  weightsText?: string;
};

export type Product = ProntaEntregaProduct | SobConsultaProduct;

export const prontaEntregaProducts: ProntaEntregaProduct[] = [
  {
    id: "seixo-branco",
    name: "Seixo Branco",
    img: branco2,
    type: "pronta-entrega",
    desc: "Quartzo de alta alvura, indicado para composições de maior contraste e projetos que valorizam iluminação e limpeza visual.",
    granulometrias,
    badge: "Mais vendido",
    gallery: [branco2, seixoBrancoWood, seixoBrancoSack, seixoBrancoGarden],
    pricing: {
      "Grande: ~100 mm": { "10 kg": "R$ 20", "25 kg": "R$ 47", "100 kg": "R$ 166", "500 kg": "R$ 755", "1.000 kg": "R$ 1.440" },
      "Médio: ~50 mm": { "10 kg": "R$ 22", "25 kg": "R$ 51", "100 kg": "R$ 182", "500 kg": "R$ 830", "1.000 kg": "R$ 1.580" },
      "Fino: ~5 mm": { "10 kg": "R$ 24", "25 kg": "R$ 56", "100 kg": "R$ 199", "500 kg": "R$ 910", "1.000 kg": "R$ 1.730" }
    },
    sizes: [
      {
        name: "Fino: aproximadamente 5 mm",
        desc: "Formato bem fino, próximo a um grão de milho, ideal para pisos drenantes, áreas de circulação externa e aplicações em que a drenagem e o conforto ao pisar são fundamentais.",
      },
      {
        name: "Médio: faixa em torno de 50 mm",
        desc: "Indicado para jardins, paisagismo geral, composições decorativas em canteiros, bordas de caminhos e áreas de destaque.",
      },
      {
        name: "Grande: faixa em torno de 100 mm",
        desc: "Indicado para pontos focais de paisagismo, contornos de espelhos d'água, delimitação de áreas e composições em que a pedra tenha presença visual mais marcante.",
      }
    ],
    weightsText: "A CERMIL Stone trabalha com cinco quantidades padrão para pronta entrega:\n\n10 kg\n\n25 kg\n\n100 kg\n\n500 kg\n\n1.000 kg",
  },
  {
    id: "seixo-rajado",
    name: "Seixo Rajado",
    img: rajado2,
    type: "pronta-entrega",
    desc: "Seixo com variações naturais em tons terrosos e avermelhados, ideal para jardins rústicos e orgânicos.",
    granulometrias,
    badge: null,
    gallery: [rajado2, seixoRajadoWood, gallery3, seixoRajadoSack, seixoRajadoGarden],
    pricing: {
      "Grande: ~100 mm": { "10 kg": "R$ 19", "25 kg": "R$ 43", "100 kg": "R$ 152", "500 kg": "R$ 695", "1.000 kg": "R$ 1.320" },
      "Médio: ~50 mm": { "10 kg": "R$ 20", "25 kg": "R$ 47", "100 kg": "R$ 167", "500 kg": "R$ 760", "1.000 kg": "R$ 1.450" },
      "Fino: ~5 mm": { "10 kg": "R$ 22", "25 kg": "R$ 51", "100 kg": "R$ 182", "500 kg": "R$ 830", "1.000 kg": "R$ 1.580" }
    },
    sizes: [
      {
        name: "Fino: aproximadamente 5 mm",
        desc: "Formato bem fino, próximo a um grão de milho, ideal para pisos drenantes, áreas de circulação externa e aplicações em que a drenagem e o conforto ao pisar são fundamentais.",
      },
      {
        name: "Médio: faixa em torno de 50 mm",
        desc: "Indicado para jardins, paisagismo geral, composições decorativas em canteiros, bordas de caminhos e áreas de destaque.",
      },
      {
        name: "Grande: faixa em torno de 100 mm",
        desc: "Indicado para pontos focais de paisagismo, contornos de espelhos d'água, delimitação de áreas e composições em que a pedra tenha presença visual mais marcante.",
      }
    ],
    weightsText: "A CERMIL Stone trabalha com cinco quantidades padrão para pronta entrega:\n\n10 kg\n\n25 kg\n\n100 kg\n\n500 kg\n\n1.000 kg",
  },
  {
    id: "seixo-natural",
    name: "Seixo Mix Blend",
    img: blend2,
    type: "pronta-entrega",
    desc: "Blend natural das cores da jazida. Visual orgânico e autêntico, com variação equilibrada de tons.",
    granulometrias,
    badge: null,
    gallery: [blend2, seixoNaturalWood, seixoNaturalSack, seixoNaturalGarden],
    pricing: {
      "Grande: ~100 mm": { "10 kg": "R$ 17", "25 kg": "R$ 39", "100 kg": "R$ 138", "500 kg": "R$ 630", "1.000 kg": "R$ 1.200" },
      "Médio: ~50 mm": { "10 kg": "R$ 19", "25 kg": "R$ 43", "100 kg": "R$ 152", "500 kg": "R$ 695", "1.000 kg": "R$ 1.320" },
      "Fino: ~5 mm": { "10 kg": "R$ 20", "25 kg": "R$ 47", "100 kg": "R$ 166", "500 kg": "R$ 755", "1.000 kg": "R$ 1.440" }
    },
    sizes: [
      {
        name: "Fino: aproximadamente 5 mm",
        desc: "Formato bem fino, próximo a um grão de milho, ideal para pisos drenantes, áreas de circulação externa e aplicações em que a drenagem e o conforto ao pisar são fundamentais.",
      },
      {
        name: "Médio: faixa em torno de 50 mm",
        desc: "Indicado para jardins, paisagismo geral, composições decorativas em canteiros, bordas de caminhos e áreas de destaque.",
      },
      {
        name: "Grande: faixa em torno de 100 mm",
        desc: "Indicado para pontos focais de paisagismo, contornos de espelhos d'água, delimitação de áreas e composições em que a pedra tenha presença visual mais marcante.",
      }
    ],
    weightsText: "A CERMIL Stone trabalha com cinco quantidades padrão para pronta entrega:\n\n10 kg\n\n25 kg\n\n100 kg\n\n500 kg\n\n1.000 kg",
  },
];

export const sobConsultaProducts: SobConsultaProduct[] = [
  {
    id: "ametistas",
    name: "Ametistas e derivados",
    img: ametistas,
    type: "sob-consulta",
    desc: "Portfólio não padronizado, alta variabilidade natural (cor, forma, textura, raridade). Comercialização exclusivamente sob consulta.",
    badge: "Exclusivo",
    gallery: [ametistas, ametista1, ametista2],
  },
  {
    id: "big-rocks",
    name: "Quartzo Big Rocks",
    img: bigRocks,
    type: "sob-consulta",
    desc: "Peças diferenciadas de quartzo em tamanhos grandes. Forma natural ou polida/trabalhada sob especificação do cliente.",
    badge: null,
  },
  {
    id: "outras-pedras",
    name: "Outras Pedras Naturais",
    img: outrasPedras,
    type: "sob-consulta",
    desc: "Pedras com potencial decorativo singular. Ajustes técnicos para uso seguro: remoção de pontas e planeamento da base.",
    badge: null,
  },
];

export const allProducts: Product[] = [...prontaEntregaProducts, ...sobConsultaProducts];
