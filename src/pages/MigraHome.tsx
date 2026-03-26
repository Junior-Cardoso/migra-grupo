import MigraNavigation from "@/components/MigraNavigation";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import heroMigraBg from "@/assets/hero-migra-bg.jpg";
import sobreMigraImg from "@/assets/sobre-migra.png";
import { Card } from "@/components/ui/card";
import {
  Globe,
  BookOpen,
  Scale,
  FileText,
  MapPin,
  ArrowRight,
  Mail,
  GraduationCap,
  Compass,
  Radio,
  Map,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import MigraFooter from "@/components/MigraFooter";

const MigraHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroMigraBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            maskImage: "linear-gradient(to right, transparent 0%, transparent 15%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.7) 60%, black 80%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 15%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.7) 60%, black 80%)",
          }}
        />
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
              Universidade Federal de Pernambuco
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-wide uppercase">
              MIGRA
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Grupo de Pesquisa e Extensão em Migrações, Mobilidades e Gestão Contemporânea de Populações — UFPE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-normal text-base px-8 uppercase tracking-wider"
                asChild
              >
                <Link to="/sobre">
                  Conheça o grupo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white font-heading font-normal text-base px-8 uppercase tracking-wider"
                asChild
              >
                <a href="#contato">Contato</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2 uppercase tracking-wide">
                Sobre o MIGRA
              </h2>
              <div className="w-12 h-1 bg-accent mt-3 mb-6 rounded-full" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                O MIGRA é um grupo de pesquisa e extensão vinculado à Universidade Federal de Pernambuco, 
                dedicado ao estudo das migrações, mobilidades e gestão contemporânea de populações. 
                Nosso trabalho combina rigor acadêmico com impacto social.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Atuamos na produção de conhecimento, formação de pesquisadores e apoio 
                à comunidade migrante, contribuindo para políticas públicas mais justas e inclusivas.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg bg-muted overflow-hidden">
                  <img src={sobreMigraImg} alt="Pessoas caminhando em pátio universitário" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Linhas de Pesquisa */}
      <section id="pesquisa" className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
                Áreas de Atuação
              </h2>
              <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-4 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Conheça as linhas de pesquisa que orientam nossos estudos e publicações.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Migrações Internacionais", desc: "Estudo dos fluxos migratórios contemporâneos e seus impactos sociais, econômicos e culturais." },
              { icon: Scale, title: "Direito dos Refugiados", desc: "Análise das normativas internacionais e nacionais de proteção a refugiados e solicitantes de refúgio." },
              { icon: Radio, title: "Comunicação e Migração", desc: "Estudos sobre narrativas midiáticas, representação e comunicação intercultural no contexto migratório." },
              { icon: MapPin, title: "Políticas Migratórias", desc: "Avaliação de políticas públicas de acolhimento e integração de migrantes no Brasil." },
              { icon: Map, title: "Geografia das Migrações", desc: "Análise espacial dos fluxos migratórios, territorialidades e dinâmicas socioespaciais." },
              { icon: Compass, title: "Fronteiras e Mobilidade", desc: "Análise das dinâmicas fronteiriças e seus efeitos na mobilidade humana contemporânea." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="p-6 bg-background border-border hover:border-primary/30 transition-colors group h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-normal text-sm sm:text-base px-6 sm:px-8 uppercase tracking-wider"
              >
                Saiba mais sobre nossas pesquisas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
                Nossa Equipe
              </h2>
              <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-4 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Pesquisadores dedicados ao estudo das migrações, mobilidades e gestão de populações.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Prof. Dr. Coordenador", role: "Coordenador" },
              { name: "Pesquisador(a) 1", role: "Doutorando(a)" },
              { name: "Pesquisador(a) 2", role: "Mestrando(a)" },
              { name: "Pesquisador(a) 3", role: "Graduando(a)" },
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-muted mb-4 overflow-hidden flex items-center justify-center">
                    <GraduationCap className="h-12 w-12 text-muted-foreground/40" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-normal text-base px-8 uppercase tracking-wider"
                asChild
              >
                <Link to="/sobre">
                  Conheça toda a equipe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Grupos de Estudo */}
      <section id="grupos" className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
                Grupos de Estudo
              </h2>
              <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-4 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Espaços de aprendizado colaborativo sobre temas centrais das migrações contemporâneas.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Migração e Direitos Humanos", desc: "Estudo aprofundado sobre a proteção jurídica dos migrantes e refugiados no cenário internacional." },
              { icon: Users, title: "Interculturalidade e Pertencimentos", desc: "Reflexões sobre identidade, diversidade cultural e processos de integração de comunidades migrantes." },
              { icon: Scale, title: "Políticas Migratórias Comparadas", desc: "Análise comparativa de legislações e políticas públicas de diferentes países sobre migração." },
            ].map((group, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="p-6 bg-background border-border hover:border-primary/30 transition-colors group h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <group.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 uppercase tracking-wide">
                    {group.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {group.desc}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-normal text-base px-8 uppercase tracking-wider"
                asChild
              >
                <Link to="/grupos-de-estudo">
                  Conheça nossos grupos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Produção */}
      <section id="producao" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
                Produção
              </h2>
              <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-4 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Publicações recentes do nosso grupo de pesquisa.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "Artigo", title: "Migrações venezuelanas no Nordeste brasileiro: desafios e perspectivas", author: "Ana Beatriz Souza", initials: "AS", year: "2024" },
              { type: "Capítulo", title: "Apatridia e proteção internacional: uma análise do caso brasileiro", author: "Carlos Drummond", initials: "CD", year: "2024" },
              { type: "Working Paper", title: "Políticas públicas de acolhimento: estudo comparado Brasil-Portugal", author: "Elena Ferreira", initials: "EF", year: "2023" },
              { type: "Artigo", title: "Direito ao refúgio e a crise humanitária na fronteira norte", author: "Gabriel Henrique", initials: "GH", year: "2023" },
              { type: "Dissertação", title: "Integração local de refugiados sírios em Recife", author: "Isabela Jardim", initials: "IJ", year: "2023" },
              { type: "Artigo", title: "Mobilidade humana e direitos fundamentais no Mercosul", author: "Karen Lima", initials: "KL", year: "2022" },
            ].map((pub, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 100}>
                <Card className="p-6 bg-background border-border hover:border-primary/30 transition-colors h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {pub.type}
                    </span>
                    <span className="text-muted-foreground text-xs">{pub.year}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-4 leading-snug">
                    {pub.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-semibold">{pub.initials}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{pub.author}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-normal text-base px-8 uppercase tracking-wider"
                asChild
              >
                <Link to="/producao">
                  Ver toda a produção
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
                Nosso Blog
              </h2>
              <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-4 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Acompanhe nossas publicações, novidades e reflexões sobre migração.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { category: "Pesquisa", title: "Migração venezuelana em Pernambuco: desafios e acolhimento", excerpt: "Uma análise sobre os fluxos migratórios recentes e as políticas de integração no estado.", date: "15 Fev 2026" },
              { category: "Eventos", title: "Documentário 'Travessias' estreia em festival universitário", excerpt: "Produção do MIGRA foi selecionada para o Festival de Cinema Acadêmico da UFPE.", date: "02 Fev 2026" },
              { category: "Políticas Públicas", title: "Nova legislação brasileira sobre refúgio: o que muda?", excerpt: "Entenda as principais alterações na política migratória e seus impactos práticos.", date: "20 Jan 2026" },
            ].map((post, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <Card className="overflow-hidden bg-background border-border hover:border-primary/30 transition-colors group h-full">
                  <div className="aspect-[16/10] bg-secondary/80 relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-white/20" />
                    </div>
                    <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-bold text-foreground leading-snug mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="text-primary text-sm font-medium flex items-center gap-1">
                        Ler mais <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-normal text-base px-8 uppercase tracking-wider"
                asChild
              >
                <Link to="/blog">
                  Ver todos os posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA / Contato — somente emails */}
      <section id="contato" className="py-20 md:py-28 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Mail className="h-10 w-10 text-accent mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
              Entre em Contato
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Tem interesse em estudar migrações, mobilidades e gestão contemporânea de populações? 
              Entre em contato e faça parte do nosso grupo de pesquisa e extensão.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:migra@ufpe.br"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-lg font-medium"
              >
                <Mail className="h-5 w-5" />
                migra@ufpe.br
              </a>
              <a
                href="mailto:migra.extensao@ufpe.br"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-lg font-medium"
              >
                <Mail className="h-5 w-5" />
                migra.extensao@ufpe.br
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <MigraFooter />
    </div>
  );
};

export default MigraHome;
