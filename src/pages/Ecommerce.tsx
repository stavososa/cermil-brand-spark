import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { ArrowLeft, ArrowUpRight, Truck, ShoppingBag, MessageCircle, CheckCircle2, Star, Globe, Package, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-cermil.png";

import seixoBranco from "@/assets/ecom-seixo-branco.png";
import seixoRajado from "@/assets/ecom-seixo-rajado.png";
import seixoNatural from "@/assets/ecom-seixo-natural.png";

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
    img: seixoBranco,
    type: "pronta-entrega",
    desc: "Quartzo de alta alvura, indicado para composições de maior contraste e projetos que valorizam iluminação e limpeza visual.",
    granulometrias,
    badge: "Mais vendido",
  },
  {
    id: "seixo-rajado",
    name: "Seixo Rajado",
    img: seixoRajado,
    type: "pronta-entrega",
    desc: "Seixo com variações naturais em tons terrosos e avermelhados, ideal para jardins rústicos e orgânicos.",
    granulometrias,
    badge: null,
  },
  {
    id: "seixo-natural",
    name: "Seixo Natural (blend)",
    img: seixoNatural,
    type: "pronta-entrega",
    desc: "Blend natural das cores da jazida. Visual orgânico e autêntico, com variação equilibrada de tons.",
    granulometrias,
    badge: null,
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
  const activeWeight = selectedWeight !== null ? weights[selectedWeight] : null;
  const displayImg = activeWeight ? activeWeight.img : product.img;

  return (
    <article className="group flex flex-col border border-border bg-card overflow-hidden hover:shadow-[0_12px_40px_-12px_hsl(30_20%_20%/0.18)] transition-shadow duration-300">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-bone">
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
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="font-display text-xl lg:text-2xl text-foreground leading-tight">{product.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{product.desc}</p>
        </div>

        {/* Granulometrias — pronta entrega only */}
        {isPE && product.type === "pronta-entrega" && (
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">Granulometria disponível</p>
            <div className="flex flex-wrap gap-1.5">
              {product.granulometrias.map((g) => (
                <span key={g} className="text-[10px] uppercase tracking-[0.12em] bg-muted px-2.5 py-1 text-muted-foreground border border-border">
                  {g}
                </span>
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
        <div className="mt-auto pt-1">
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

      {/* ESPECIFICAÇÕES — seção completa */}
      <section className="border-t border-border">

        {/* Header da seção */}
        <div className="bg-foreground text-background py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4">Especificações · Pronta entrega</p>
              <h2 className="font-display font-bold text-3xl lg:text-5xl leading-[1.05] text-background text-balance">
                Quantidades & <em className="text-accent not-italic">Granulometrias</em>
              </h2>
            </div>
            <p className="lg:col-span-4 lg:col-start-9 text-background/60 leading-relaxed text-sm">
              Linha principal dedicada ao seixo de quartzo, com foco em aplicações decorativas, paisagismo e revenda. Cada produto disponível nas granulometrias e quantidades padrão abaixo.
            </p>
          </div>
        </div>

        {/* Conteúdo em duas colunas */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── Quantidades ── */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-8">Quantidades a pronta entrega</p>

            {/* Tabela de quantidades */}
            <div className="space-y-0 border border-border divide-y divide-border">
              {[
                { kg: "10 kg",     icon: <Package className="w-4 h-4" />,  nota: "Saco reforçado · varejo e hobbistas" },
                { kg: "25 kg",     icon: <Package className="w-4 h-4" />,  nota: "Saco de ráfia · gardens e paisagistas" },
                { kg: "100 kg",    icon: <Package className="w-4 h-4" />,  nota: "Saco industrial · construtoras e atacado" },
                { kg: "500 kg",    icon: <Truck className="w-4 h-4" />,    nota: "Big bag intermediário · revenda estruturada" },
                { kg: "1.000 kg",  icon: <Truck className="w-4 h-4" />,    nota: "Big bag FIBC · indústria e contratos" },
              ].map((q) => (
                <div key={q.kg} className="flex items-center justify-between gap-4 px-4 py-4 bg-card hover:bg-muted/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-accent">{q.icon}</span>
                    <span className="font-display text-lg text-foreground">{q.kg}</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground text-right">{q.nota}</span>
                </div>
              ))}
            </div>

            {/* Política de disponibilidade */}
            <div className="mt-8 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">Política de disponibilidade</p>

              <div className="flex items-start gap-4 p-4 border border-border bg-card">
                <div className="mt-0.5 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-display text-base text-foreground">10 kg · 25 kg · 100 kg</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Disponíveis para <span className="text-foreground font-medium">vendas locais e online</span>. Indicados para projetos pequenos e médios, revendas em menor escala e amostras pagas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border border-border bg-card">
                <div className="mt-0.5 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-display text-base text-foreground">500 kg · 1.000 kg</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Disponíveis para <span className="text-foreground font-medium">entregas locais</span> (região de atendimento direto da CERMIL Stone). Indicados para gardens, revendas estruturadas, obras e contratos regionais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Granulometrias ── */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-8">Granulometrias a pronta entrega</p>

            <div className="space-y-4">
              {[
                {
                  name: "Fino",
                  range: "aproximadamente 5 mm",
                  desc: "Formato bem fino, próximo a um grão de milho, ideal para pisos drenantes, áreas de circulação externa e aplicações em que a drenagem e o conforto ao pisar são fundamentais.",
                },
                {
                  name: "Médio",
                  range: "faixa em torno de 50 mm",
                  desc: "Indicado para jardins, paisagismo geral, composições decorativas em canteiros, bordas de caminhos e áreas de destaque.",
                },
                {
                  name: "Grande",
                  range: "faixa em torno de 100 mm",
                  desc: "Indicado para pontos focais de paisagismo, contornos de espelhos d'água, delimitação de áreas e composições em que a pedra tenha presença visual mais marcante.",
                },
              ].map((g, i) => (
                <div key={g.name} className="p-5 border border-border bg-card">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center text-[11px] font-medium mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display text-lg text-foreground">
                        {g.name} <span className="text-muted-foreground font-normal text-sm">— {g.range}</span>
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Nota fora dos padrões */}
            <div className="mt-6 p-5 border border-accent/30 bg-accent/5">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-medium">Fora dos padrões:</span>{" "}
                <span className="text-muted-foreground">
                  Qualquer granulometria fora desses parâmetros será ofertada na modalidade sob consulta, com produção customizada conforme a necessidade do cliente — projetos especiais, contratos industriais, especificações técnicas próprias.
                </span>
              </p>
            </div>

            {/* CTA */}
            <Link
              to="/#contato"
              className="mt-8 flex items-center justify-center gap-2 w-full py-4 text-xs uppercase tracking-[0.3em] font-medium bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Solicitar orçamento
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

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
