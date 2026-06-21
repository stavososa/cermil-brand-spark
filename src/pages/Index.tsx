import logo from "@/assets/logo-cermil.png";
import hero from "@/assets/hero-quartz.jpg";
import product from "../../imagens/export.png";
import operation from "@/assets/operation.jpg";
import landscape from "@/assets/application-landscape.jpg";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import { ArrowUpRight, Mountain, Layers, Truck, Compass, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
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
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between backdrop-blur-md bg-background/70 border-b border-border/60">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="CERMIL" className="h-8 w-auto" />
            <span className="hidden sm:inline-block font-display text-sm tracking-[0.3em] uppercase text-stone">Stone</span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <li><a href="#sobre" className="hover:text-foreground transition-colors">Quem somos</a></li>
            <li><Link to="/ecommerce" className="hover:text-foreground transition-colors">Produtos</Link></li>
            <li><a href="#aplicacoes" className="hover:text-foreground transition-colors">Aplicações</a></li>
            
            <li><a href="#contato" className="hover:text-foreground transition-colors">Contato</a></li>
          </ul>
          <a href="#contato" className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] bg-foreground text-background px-4 py-2.5 hover:bg-accent hover:text-accent-foreground transition-colors">
            Orçamento <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[78svh] overflow-hidden bg-[hsl(30_12%_8%)] text-background pt-[100px]">
        {/* Background image lateral, com vinheta forte para contraste editorial */}
        <div className="absolute inset-0">
          <img src={hero} alt="Seixos de quartzo CERMIL" className="absolute inset-0 w-full h-full object-cover opacity-90" width={1920} height={1280} />
          {/* Vinheta diagonal: dark sólido à esquerda, imagem revelada à direita */}
          <div className="absolute inset-0 bg-[linear-gradient(95deg,hsl(30_12%_6%)_0%,hsl(30_12%_8%/0.96)_38%,hsl(30_12%_8%/0.55)_60%,transparent_92%)]" />
          {/* Gradiente vertical para reforçar base/topo */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,hsl(30_12%_6%),transparent_40%,hsl(30_12%_6%/0.6))]" />
          {/* Glow âmbar sutil no canto */}
          <div className="absolute -bottom-40 -right-40 w-[680px] h-[680px] rounded-full bg-accent/20 blur-[140px]" aria-hidden />
        </div>
        {/* Grain layer */}
        <div className="absolute inset-0 grain pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 min-h-[78svh] flex flex-col justify-center pt-20 pb-20">
          <div className="max-w-4xl">
            <h1 className="reveal reveal-delay-1 font-display font-bold text-balance text-5xl sm:text-6xl lg:text-8xl leading-[0.9] tracking-[-0.02em] text-background">
              Seixo
              <span className="block">
                de <span className="italic font-normal text-accent">Quartzo</span>
              </span>
              <span className="block text-background/70 text-3xl sm:text-4xl lg:text-5xl mt-3 font-normal italic tracking-[-0.01em]">
                & pedras naturais
              </span>
            </h1>

            <div className="reveal reveal-delay-2 mt-14 grid sm:grid-cols-[auto,1fr] gap-8 items-start max-w-2xl">
              <span className="hidden sm:block w-16 h-px bg-accent mt-3" />
              <p className="text-base lg:text-lg text-background/80 leading-relaxed">
                Origem mineral, estrutura produtiva consolidada e fornecimento sob demanda
                ao serviço do mercado de pedras naturais.
              </p>
            </div>

            <div className="reveal reveal-delay-3 mt-12 flex flex-wrap items-center gap-4">
              <a href="#contato" className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-xs uppercase tracking-[0.3em] font-medium hover:bg-background hover:text-foreground transition-all shadow-elegant">
                Solicitar orçamento <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="#produtos" className="group inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.3em] border border-background/30 text-background hover:border-accent hover:text-accent transition-colors">
                Conhecer o produto
              </a>
            </div>
          </div>

        </div>

        {/* Faixa inferior — alto contraste */}
        <div className="absolute bottom-0 inset-x-0 border-t border-background/10 bg-[hsl(30_12%_5%)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-[10px] uppercase tracking-[0.35em] text-background/60">
            <span className="flex items-center gap-2"><span className="text-accent">◆</span> Origem mineral</span>
            <span className="flex items-center gap-2"><span className="text-accent">◆</span> Estrutura produtiva</span>
            <span className="flex items-center gap-2"><span className="text-accent">◆</span> Atendimento sob demanda</span>
            <span className="flex items-center gap-2"><span className="text-accent">◆</span> Fornecimento recorrente</span>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative py-32 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Quem somos</p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl leading-[1.05] text-balance">
              Uma base mineral <em className="text-accent not-italic font-normal">real</em>, traduzida em presença comercial.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              A <span className="text-foreground font-medium">CERMIL Stone</span> nasce como a frente comercial dedicada
              ao fornecimento de seixo de quartzo e pedras naturais, estruturada sobre a base produtiva,
              a experiência operacional e a credibilidade institucional já existentes na CERMIL Construção e Mineração.
            </p>
            <p>
              Não somos uma operação paralela, e tampouco uma vitrine improvisada. Somos a expansão natural de
              uma estrutura mineral consolidada, agora orientada ao mercado decorativo e a demandas industriais sob consulta.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 hairline">
              {[
                { k: "Operação", v: "Consolidada" },
                { k: "Histórico", v: "Recorrente" },
                { k: "Atendimento", v: "Sob demanda" },
              ].map((s) => (
                <div key={s.k}>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground/70">{s.k}</p>
                  <p className="font-display text-2xl mt-2 text-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SELO MULTINACIONAIS */}
      <section aria-label="Reconhecimento" className="relative bg-foreground text-background py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-1 bg-accent" aria-hidden />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-2 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent">Reconhecimento</span>
          </div>
          <p className="lg:col-span-7 font-display text-2xl lg:text-3xl leading-snug text-balance text-background">
            Fornecemos quartzo a grupos multinacionais com presença em mais de
            <span className="text-accent"> 60 países</span>.
          </p>
          <ul className="lg:col-span-3 grid gap-2 text-[10px] uppercase tracking-[0.3em] text-background/60">
            <li className="flex items-center gap-2"><span className="text-accent">◆</span> Padrão industrial</li>
            <li className="flex items-center gap-2"><span className="text-accent">◆</span> Auditoria de origem</li>
            <li className="flex items-center gap-2"><span className="text-accent">◆</span> Recorrência contratual</li>
          </ul>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="relative bg-gradient-graphite text-background py-32 lg:py-44 overflow-hidden grain">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Produtos</p>
              <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.05] max-w-2xl text-background text-balance">
                Material natural, <em className="text-accent not-italic">portfólio aberto</em>.
              </h2>
            </div>
            <p className="max-w-md text-background/70 leading-relaxed">
              Seixo de Quartzo como produto principal. Outras pedras, granulometrias e
              especificações disponíveis sob consulta.
            </p>
          </div>

          
          <div className="grid lg:grid-cols-12 gap-8">
            <article className="lg:col-span-7 group relative overflow-hidden bg-background/5 border border-background/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={product} alt="Seixo de Quartzo" loading="lazy" width={1280} height={1280} className="w-full h-full object-cover scale-[1.12] origin-top-left transition-transform duration-[1200ms] group-hover:scale-[1.18]" />
              </div>
              <div className="p-8 lg:p-10 flex items-end justify-between gap-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-accent mb-3">Produto principal</p>
                  <h3 className="font-display text-3xl lg:text-4xl text-background">Seixo de Quartzo</h3>
                  <p className="mt-3 text-background/60 max-w-md">Origem mineral selecionada. Granulometrias e formatos negociáveis conforme aplicação.</p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-accent shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </article>

            <div className="lg:col-span-5 grid gap-8">
              {[
                { t: "Pedras Naturais", d: "Variedades minerais sob consulta para projetos decorativos e técnicos." },
                { t: "Granulometrias específicas", d: "Faixas e calibrações sob demanda, incluindo referências como 20 a 30 mm." },
                { t: "Demandas industriais", d: "Volumes e padrões compatíveis com operações de alta exigência." },
              ].map((c) => (
                <div key={c.t} className="group p-8 border border-background/10 hover:border-accent/60 transition-colors bg-background/[0.03]">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h4 className="font-display text-xl text-background">{c.t}</h4>
                      <p className="mt-3 text-sm text-background/60 leading-relaxed">{c.d}</p>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-accent">Consulta</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              to="/ecommerce"
              className="group inline-flex items-center gap-3 border border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground transition-colors px-6 py-3 text-[11px] uppercase tracking-[0.3em]"
            >
              Ver catálogo e-commerce
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* APLICAÇÕES */}
      <section id="aplicacoes" className="py-32 lg:py-44">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-end mb-20">
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Aplicações</p>
              <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.05] text-balance">
                Do paisagismo refinado <em className="text-accent not-italic">ao fornecimento</em> de larga escala.
              </h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 text-muted-foreground leading-relaxed">
              O mesmo material atravessa universos distintos, sustentado por uma capacidade
              produtiva preparada para projetos especiais, revenda e demandas técnicas.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 relative overflow-hidden">
              <img src={landscape} alt="Pilhas de seixo na operação CERMIL" loading="lazy" width={1280} height={960} className="w-full h-[560px] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-foreground/85 to-transparent">
                <p className="font-display text-2xl text-background">Fornecimento & Estoque</p>
                <p className="text-background/70 text-sm mt-1">Material disponível em escala para paisagismo, decoração e indústria.</p>
              </div>
            </div>
            <ul className="lg:col-span-5 divide-y divide-border">
              {[
                { i: <Layers className="w-5 h-5" />, t: "Revenda", d: "Parcerias e fornecimento contínuo a distribuidores." },
                { i: <Mountain className="w-5 h-5" />, t: "Projetos especiais", d: "Especificações dedicadas, formatos sob demanda." },
                { i: <Compass className="w-5 h-5" />, t: "Demandas industriais", d: "Pedidos de grande porte e padrão técnico exigente." },
                { i: <Truck className="w-5 h-5" />, t: "Fornecimentos específicos", d: "Combinações de material conforme projeto do cliente." },
              ].map((a) => (
                <li key={a.t} className="py-7 flex items-start gap-6 group">
                  <span className="text-accent mt-1">{a.i}</span>
                  <div className="flex-1">
                    <h4 className="font-display text-xl text-foreground">{a.t}</h4>
                    <p className="text-muted-foreground text-sm mt-1.5">{a.d}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 mt-1 transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="relative py-32 lg:py-44 bg-foreground text-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-end mb-16">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Galeria</p>
              <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.05] text-balance text-background">
                Operação <em className="text-accent not-italic">em movimento</em>.
              </h2>
            </div>
            <p className="lg:col-span-4 lg:col-start-9 text-background/70 leading-relaxed">
              Imagens reais da estrutura produtiva, do beneficiamento mineral e do material em estoque.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <figure className="col-span-12 lg:col-span-8 relative overflow-hidden group">
              <img src={gallery2} alt="Operação CERMIL ao entardecer" loading="lazy" className="w-full h-[320px] lg:h-[560px] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-foreground/90 to-transparent text-[11px] uppercase tracking-[0.3em] text-background/80">Pátio · Entardecer</figcaption>
            </figure>
            <figure className="col-span-12 lg:col-span-4 relative overflow-hidden group">
              <img src={gallery3} alt="Pilha de seixo de quartzo" loading="lazy" className="w-full h-[320px] lg:h-[560px] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-foreground/90 to-transparent text-[11px] uppercase tracking-[0.3em] text-background/80">Estoque · Quartzo bruto</figcaption>
            </figure>
            <figure className="col-span-12 relative overflow-hidden group">
              <img src={gallery1} alt="Vista aérea da operação CERMIL" loading="lazy" className="w-full h-[320px] lg:h-[520px] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
              <figcaption className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-foreground/90 to-transparent text-[11px] uppercase tracking-[0.3em] text-background/80">Vista aérea · Beneficiamento</figcaption>
            </figure>
          </div>
        </div>
      </section>


      {/* CONTATO */}
      <section id="contato" className="relative bg-foreground text-background py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">Contato comercial</p>
              <h2 className="font-display font-bold text-4xl lg:text-6xl leading-[1.02] text-balance text-background">
                Vamos estruturar o seu <em className="text-accent not-italic">próximo fornecimento</em>.
              </h2>
              <p className="mt-8 text-background/70 max-w-lg text-lg leading-relaxed">
                Envie sua demanda informando granulometria, volume, destino e aplicação, e nossa equipe retorna com
                proposta sob medida.
              </p>

              <div className="mt-12 space-y-5 text-background/80">
                <a href="tel:+5585991124238" className="flex items-center gap-4 group">
                  <span className="w-10 h-10 border border-background/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-colors"><Phone className="w-4 h-4" /></span>
                  <span>(85) 99112-4238</span>
                </a>
                <a href="mailto:comercial@cermil.com.br" className="flex items-center gap-4 group">
                  <span className="w-10 h-10 border border-background/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-colors"><Mail className="w-4 h-4" /></span>
                  <span>comercial@cermil.com.br</span>
                </a>
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 border border-background/20 flex items-center justify-center"><MapPin className="w-4 h-4" /></span>
                  <span>São Gonçalo do Amarante · Ceará</span>
                </div>
              </div>
            </div>

            <form className="lg:col-span-6 space-y-6 lg:pl-10 lg:border-l border-background/10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Nome" name="nome" />
                <Field label="Empresa" name="empresa" />
                <Field label="E-mail" name="email" type="email" />
                <Field label="Telefone" name="telefone" />
              </div>
              <Field label="Aplicação / Projeto" name="aplicacao" />
              <div>
                <label className="text-[11px] uppercase tracking-[0.3em] text-background/60">Mensagem</label>
                <textarea rows={4} className="mt-2 w-full bg-transparent border-b border-background/30 focus:border-accent focus:outline-none py-3 text-background placeholder:text-background/30 transition-colors resize-none" placeholder="Volume, granulometria, destino..." />
              </div>
              <button type="submit" className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm uppercase tracking-[0.25em] hover:bg-background hover:text-foreground transition-colors">
                Enviar solicitação <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/60 border-t border-background/10">
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

          {/* Col 3 — info legal */}
          <div className="flex flex-col gap-2 md:items-end">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-1">CERMIL Stone</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-background/50">Seixo de Quartzo · Pedras Naturais</p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-background/40">CNPJ 20.150.507/0001-39</p>
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

const Field = ({ label, name, type = "text" }: { label: string; name: string; type?: string }) => (
  <div>
    <label htmlFor={name} className="text-[11px] uppercase tracking-[0.3em] text-background/60">{label}</label>
    <input id={name} name={name} type={type} className="mt-2 w-full bg-transparent border-b border-background/30 focus:border-accent focus:outline-none py-3 text-background transition-colors" />
  </div>
);

export default Index;
