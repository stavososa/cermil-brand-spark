import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { ArrowLeft, ArrowUpRight, Truck, ShoppingBag, MessageCircle, CheckCircle2, Star, Globe, Package, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-cermil.png";

import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.jpg";

import ametistas from "@/assets/ecom-ametistas.png";
import bigRocks from "@/assets/ecom-big-rocks.png";
import outrasPedras from "@/assets/ecom-outras-pedras.jpg";

import pkg10 from "@/assets/pkg-10kg.jpg";
import pkg25 from "@/assets/pkg-25kg.jpg";
import pkg100 from "@/assets/pkg-100kg.jpg";
import pkg500 from "@/assets/pkg-500kg.jpg";
import pkg1000 from "@/assets/pkg-1000kg.jpg";

type FilterType = "all" | "pronta-entrega" | "sob-consulta";

const weights = [
  { label: "10 kg",    img: pkg10,   nota: "Saco reforçado · varejo e hobbistas",           disponibilidade: "Vendas locais e online" },
  { label: "25 kg",   img: pkg25,   nota: "Saco de ráfia · gardens e paisagistas",           disponibilidade: "Vendas locais e online" },
  { label: "100 kg",  img: pkg100,  nota: "Saco industrial · construtoras e atacado",        disponibilidade: "Vendas locais e online" },
  { label: "500 kg",  img: pkg500,  nota: "Big bag intermediário · revenda estruturada",     disponibilidade: "Entregas locais (região direta)" },
  { label: "1.000 kg",img: pkg1000, nota: "Big bag FIBC · indústria e contratos",            disponibilidade: "Entregas locais (região direta)" },
];

const granulometrias = ["Fino: ~5 mm", "Médio: ~50 mm", "Grande: ~100 mm"];

type ProntaEntregaProduct = {
  id: string;
  name: string;
  img: string;
  type: "pronta-entrega";
  desc: string;
  granulometrias: string[];
  badge: string | null;
  pricing?: {
    [granulometria: string]: {
      [peso: string]: string;
    };
  };
};

type SobConsultaProduct = {
  id: string;
  name: string;
  img: string;
  type: "sob-consulta";
  desc: string;
  badge: string | null;
};

type Product = ProntaEntregaProduct | SobConsultaProduct;

const prontaEntregaProducts: ProntaEntregaProduct[] = [
  {
    id: "seixo-branco",
    name: "Seixo Branco",
    img: gallery1,
    type: "pronta-entrega",
    desc: "Quartzo de alta alvura, indicado para composições de maior contraste e projetos que valorizam iluminação e limpeza visual.",
    granulometrias,
    badge: "Mais vendido",
    pricing: {
      "Grande: ~100 mm": { "10 kg": "R$ 20", "25 kg": "R$ 47", "100 kg": "R$ 166", "500 kg": "R$ 755", "1.000 kg": "R$ 1.440" },
      "Médio: ~50 mm": { "10 kg": "R$ 22", "25 kg": "R$ 51", "100 kg": "R$ 182", "500 kg": "R$ 830", "1.000 kg": "R$ 1.580" },
      "Fino: ~5 mm": { "10 kg": "R$ 24", "25 kg": "R$ 56", "100 kg": "R$ 199", "500 kg": "R$ 910", "1.000 kg": "R$ 1.730" }
    }
  },
  {
    id: "seixo-rajado",
    name: "Seixo Rajado",
    img: gallery3,
    type: "pronta-entrega",
    desc: "Seixo com variações naturais em tons terrosos e avermelhados, ideal para jardins rústicos e orgânicos.",
    granulometrias,
    badge: null,
    pricing: {
      "Grande: ~100 mm": { "10 kg": "R$ 19", "25 kg": "R$ 43", "100 kg": "R$ 152", "500 kg": "R$ 695", "1.000 kg": "R$ 1.320" },
      "Médio: ~50 mm": { "10 kg": "R$ 20", "25 kg": "R$ 47", "100 kg": "R$ 167", "500 kg": "R$ 760", "1.000 kg": "R$ 1.450" },
      "Fino: ~5 mm": { "10 kg": "R$ 22", "25 kg": "R$ 51", "100 kg": "R$ 182", "500 kg": "R$ 830", "1.000 kg": "R$ 1.580" }
    }
  },
  {
    id: "seixo-natural",
    name: "Seixo Natural (blend)",
    img: gallery2,
    type: "pronta-entrega",
    desc: "Blend natural das cores da jazida. Visual orgânico e autêntico, com variação equilibrada de tons.",
    granulometrias,
    badge: null,
    pricing: {
      "Grande: ~100 mm": { "10 kg": "R$ 17", "25 kg": "R$ 39", "100 kg": "R$ 138", "500 kg": "R$ 630", "1.000 kg": "R$ 1.200" },
      "Médio: ~50 mm": { "10 kg": "R$ 19", "25 kg": "R$ 43", "100 kg": "R$ 152", "500 kg": "R$ 695", "1.000 kg": "R$ 1.320" },
      "Fino: ~5 mm": { "10 kg": "R$ 20", "25 kg": "R$ 47", "100 kg": "R$ 166", "500 kg": "R$ 755", "1.000 kg": "R$ 1.440" }
    }
  },
];

const sobConsultaProducts: SobConsultaProduct[] = [
  {
    id: "ametistas",
    name: "Ametistas e derivados",
    img: ametistas,
    type: "sob-consulta",
    desc: "Portfólio não padronizado, alta variabilidade natural (cor, forma, textura, raridade). Comercialização exclusivamente sob consulta.",
    badge: "Exclusivo",
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

const allProducts: Product[] = [...prontaEntregaProducts, ...sobConsultaProducts];

// ─── Product Card ───────────────────────────────────────────────────────────

const ProductCard = ({ product }: { product: Product }) => {
  const isPE = product.type === "pronta-entrega";
  const [selectedWeight, setSelectedWeight] = useState<number | null>(null);
  const [selectedGranulometria, setSelectedGranulometria] = useState<string | null>(null);
  const activeWeight = selectedWeight !== null ? weights[selectedWeight] : null;
  const displayImg = activeWeight ? activeWeight.img : product.img;

  let priceStr = null;
  if (product.type === "pronta-entrega" && selectedWeight !== null && selectedGranulometria !== null && product.pricing) {
    priceStr = product.pricing[selectedGranulometria]?.[weights[selectedWeight].label];
  }

  return (
    <article className="group flex flex-col border border-border bg-card overflow-hidden hover:shadow-[0_12px_40px_-12px_hsl(30_20%_20%/0.18)] transition-shadow duration-300">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-bone block">
        <img
          src={displayImg}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        {/* Type badge */}
        <span className={`absolute top-3 left-3 text-[9px] uppercase tracking-[0.3em] px-2.5 py-1 font-medium ${
          isPE
            ? "bg-foreground text-background"
            : "bg-accent text-accent-foreground"
        }`}>
          {isPE ? "Pronta entrega" : "Sob consulta"}
        </span>
        {product.badge && (
          <span className="absolute top-3 right-3 text-[9px] uppercase tracking-[0.3em] px-2.5 py-1 bg-accent text-accent-foreground font-medium">
            {product.badge}
          </span>
        )}
        {!isPE && (
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent pointer-events-none" />
        )}
      </Link>

      {/* Content */}
      <div className="p-5 lg:p-6 flex flex-col flex-1 gap-4">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-display text-xl lg:text-2xl text-foreground leading-tight hover:text-accent transition-colors">{product.name}</h3>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{product.desc}</p>
        </div>

        {/* Granulometrias — pronta entrega only */}
        {isPE && product.type === "pronta-entrega" && (
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Granulometria disponível</p>
            <div className="flex flex-wrap gap-1.5">
              {product.granulometrias.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setSelectedGranulometria(selectedGranulometria === g ? null : g)}
                  className={`text-[10px] uppercase tracking-[0.12em] px-2.5 py-1.5 border transition-colors ${
                    selectedGranulometria === g
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Weight selector — pronta entrega only */}
        {isPE && (
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Quantidade</p>
            <div className="flex flex-wrap gap-1.5">
              {weights.map((w, i) => (
                <button
                  key={w.label}
                  type="button"
                  onClick={() => setSelectedWeight(selectedWeight === i ? null : i)}
                  className={`text-[10px] uppercase tracking-[0.12em] px-2.5 py-1.5 border transition-colors ${
                    selectedWeight === i
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
            {activeWeight && (
              <p className="mt-2 flex items-center gap-1.5 text-[10px] text-accent">
                <Truck className="w-3 h-3" />
                {activeWeight.nota} · {activeWeight.disponibilidade}
              </p>
            )}
          </div>
        )}

        {/* Sob consulta info */}
        {!isPE && (
          <div className="flex items-start gap-2 p-3 bg-muted/50 border border-border">
            <Star className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Ornamental · exclusivo · produzido sob medida. Entre em contato para consultar disponibilidade e especificações.
            </p>
          </div>
        )}

        {/* CTA button — styled like "Add to cart" */}
        <div className="mt-auto pt-1 flex flex-col gap-3">
          {isPE && (
            <div className="h-8 flex items-end">
              {priceStr ? (
                <p className="font-display text-2xl text-foreground">{priceStr}</p>
              ) : (
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.1em]">Selecione opções para preço</p>
              )}
            </div>
          )}
          <Link
            to="/#contato"
            className={`flex items-center justify-center gap-2 w-full py-3.5 text-xs uppercase tracking-[0.25em] font-medium transition-all ${
              isPE
                ? "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
                : "bg-accent text-accent-foreground hover:bg-foreground hover:text-background"
            }`}
          >
            {isPE ? (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                Solicitar Orçamento
              </>
            ) : (
              <>
                <MessageCircle className="w-3.5 h-3.5" />
                Consultar Disponibilidade
              </>
            )}
          </Link>
        </div>
      </div>
    </article>
  );
};

// ─── Main Page ───────────────────────────────────────────────────────────────

const Ecommerce = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return allProducts;
    return allProducts.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  const filterOptions: { id: FilterType; label: string; count: number }[] = [
    { id: "all", label: "Todos", count: allProducts.length },
    { id: "pronta-entrega", label: "Pronta entrega", count: prontaEntregaProducts.length },
    { id: "sob-consulta", label: "Sob consulta", count: sobConsultaProducts.length },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50">
        {/* Topbar de contato */}
        <div className="h-9 bg-foreground border-b border-background/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-center justify-between gap-4">
            <span className="hidden md:flex items-center gap-1.5 text-[10px] text-background/50">
              <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
              Vila Salgado dos Moreiras, SN – Cágado, São Gonçalo do Amarante – CE, 62670-000
            </span>
            <div className="flex items-center gap-5 text-[10px] text-background/50 ml-auto">
              <a href="tel:+5585991124238" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Phone className="w-3 h-3" /> (85) 99112-4238
              </a>
              <a href="mailto:adm@almineracao.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                <Mail className="w-3 h-3" /> adm@almineracao.com
              </a>
            </div>
          </div>
        </div>
        {/* Nav principal */}
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between backdrop-blur-md bg-background/80 border-b border-border/60">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="CERMIL" className="h-8 w-auto" />
            <span className="hidden sm:inline-block font-display text-sm tracking-[0.3em] uppercase text-stone">Stone</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar ao site
          </Link>
        </nav>
      </header>

      {/* PAGE HEADER */}
      <section className="pt-[116px] pb-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
            <span>/</span>
            <span className="text-foreground">Produtos</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3">Catálogo · Pronta entrega & sob consulta</p>
              <h1 className="font-display font-bold text-4xl lg:text-5xl leading-[1.05] text-balance">
                Seixo de Quartzo &amp; <em className="text-accent not-italic">Pedras Naturais</em>
              </h1>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Pronta entrega de 10 kg a 1.000 kg e linha ornamental exclusiva sob consulta. São Gonçalo do Amarante – CE.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Origem certificada
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-accent" /> Entrega regional
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-accent" /> Multinacionais atendidas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR — sticky */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between gap-4">
          {/* Category tabs */}
          <div className="flex items-center gap-1">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setActiveFilter(opt.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors ${
                  activeFilter === opt.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {opt.label}
                <span className={`text-[9px] px-1.5 py-0.5 ${
                  activeFilter === opt.id
                    ? "bg-white/20 text-background"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {opt.count}
                </span>
              </button>
            ))}
          </div>

          {/* Product count */}
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground hidden sm:block">
            {filtered.length} produto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <main className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>



      {/* FOOTER */}
      <footer className="border-t border-border bg-foreground text-background/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Col 1 — marca + endereço */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="CERMIL" className="h-7 w-auto brightness-0 invert opacity-80" />
              <span className="font-display text-xs tracking-[0.3em] uppercase text-background/80">Stone</span>
            </div>
            <p className="text-[11px] italic tracking-[0.15em] text-background/40">"Sertão em pedra, mundo em projeto."</p>
            <div className="flex items-start gap-2 mt-2 text-[11px] text-background/50 leading-relaxed">
              <MapPin className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
              <span>Vila Salgado dos Moreiras, SN – Cágado, São Gonçalo do Amarante – CE, 62670-000</span>
            </div>
          </div>

          {/* Col 2 — contato */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-1">Contato</p>
            <a href="tel:+5585991124238" className="flex items-center gap-2 text-[12px] text-background/60 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5" /> (85) 99112-4238
            </a>
            <a href="mailto:adm@almineracao.com" className="flex items-center gap-2 text-[12px] text-background/60 hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5" /> adm@almineracao.com
            </a>
          </div>

          {/* Col 3 — nav + legal */}
          <div className="flex flex-col gap-3 md:items-end">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-1">Navegação</p>
            <Link to="/" className="text-[11px] uppercase tracking-[0.25em] text-background/50 hover:text-accent transition-colors">
              ← Voltar ao site
            </Link>
            <p className="text-[11px] uppercase tracking-[0.2em] text-background/40 mt-auto">CNPJ 20.150.507/0001-39</p>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-background/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-background/30">
              © {new Date().getFullYear()} CERMIL Construção e Mineração. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Ecommerce;
