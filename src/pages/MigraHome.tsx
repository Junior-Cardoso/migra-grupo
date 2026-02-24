import MigraNavigation from "@/components/MigraNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Globe,
  BookOpen,
  Users,
  Scale,
  FileText,
  MapPin,
  ArrowRight,
  Mail,
  GraduationCap,
  Compass,
} from "lucide-react";

const MigraHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <MigraNavigation />

      {/* Hero */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4">
              Universidade Federal de Pernambuco
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-wide uppercase">
              Grupo de Estudos sobre Migrações
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Pesquisa, ensino e extensão dedicados ao estudo das migrações internacionais, refúgio e apatridia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8"
              >
                Conheça o grupo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-medium text-base px-8"
              >
                Acervo digital
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
                Sobre o MIGRA
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-wide">
                Pesquisa que transforma realidades
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O MIGRA é um grupo de estudos vinculado à Universidade Federal de Pernambuco, 
                dedicado à pesquisa sobre migrações internacionais, refúgio e apatridia. 
                Nosso trabalho combina rigor acadêmico com impacto social.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Atuamos na produção de conhecimento, formação de pesquisadores e apoio 
                à comunidade migrante, contribuindo para políticas públicas mais justas e inclusivas.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-primary">15+</p>
                  <p className="text-muted-foreground text-sm mt-1">Pesquisadores</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-primary">50+</p>
                  <p className="text-muted-foreground text-sm mt-1">Publicações</p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-primary">8</p>
                  <p className="text-muted-foreground text-sm mt-1">Anos de atuação</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                  <Globe className="h-24 w-24 text-primary/40" />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Linhas de Pesquisa */}
      <section id="pesquisa" className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Linhas de Pesquisa
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
              Áreas de atuação
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Migrações Internacionais",
                desc: "Estudo dos fluxos migratórios contemporâneos e seus impactos sociais, econômicos e culturais.",
              },
              {
                icon: Scale,
                title: "Direito dos Refugiados",
                desc: "Análise das normativas internacionais e nacionais de proteção a refugiados e solicitantes de refúgio.",
              },
              {
                icon: Users,
                title: "Apatridia",
                desc: "Pesquisa sobre a condição de apatridia e mecanismos de proteção às pessoas sem nacionalidade.",
              },
              {
                icon: MapPin,
                title: "Políticas Migratórias",
                desc: "Avaliação de políticas públicas de acolhimento e integração de migrantes no Brasil.",
              },
              {
                icon: BookOpen,
                title: "Direitos Humanos",
                desc: "Estudo dos direitos fundamentais aplicados ao contexto das migrações e mobilidade humana.",
              },
              {
                icon: Compass,
                title: "Fronteiras e Mobilidade",
                desc: "Análise das dinâmicas fronteiriças e seus efeitos na mobilidade humana contemporânea.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="p-6 bg-background border-border hover:border-primary/30 transition-colors group"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Nossa Equipe
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
              Pesquisadores
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Prof. Dr. Coordenador", role: "Coordenador" },
              { name: "Pesquisador(a) 1", role: "Doutorando(a)" },
              { name: "Pesquisador(a) 2", role: "Mestrando(a)" },
              { name: "Pesquisador(a) 3", role: "Graduando(a)" },
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 mx-auto rounded-full bg-muted mb-4 overflow-hidden flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-muted-foreground/40" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publicações / Acervo */}
      <section id="publicacoes" className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              Publicações Recentes
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
              Acervo Digital
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "Artigo", title: "Migrações venezuelanas no Nordeste brasileiro: desafios e perspectivas", author: "Autor, A. B.", year: "2024" },
              { type: "Capítulo", title: "Apatridia e proteção internacional: uma análise do caso brasileiro", author: "Autor, C. D.", year: "2024" },
              { type: "Working Paper", title: "Políticas públicas de acolhimento: estudo comparado Brasil-Portugal", author: "Autor, E. F.", year: "2023" },
              { type: "Artigo", title: "Direito ao refúgio e a crise humanitária na fronteira norte", author: "Autor, G. H.", year: "2023" },
              { type: "Dissertação", title: "Integração local de refugiados sírios em Recife", author: "Autor, I. J.", year: "2023" },
              { type: "Artigo", title: "Mobilidade humana e direitos fundamentais no Mercosul", author: "Autor, K. L.", year: "2022" },
              { type: "Capítulo", title: "Gênero e migração: perspectivas interseccionais", author: "Autor, M. N.", year: "2022" },
              { type: "Working Paper", title: "Crianças migrantes e o direito à educação no Brasil", author: "Autor, O. P.", year: "2022" },
              { type: "Tese", title: "Fronteiras, soberania e hospitalidade: uma leitura decolonial", author: "Autor, Q. R.", year: "2021" },
            ].map((pub, i) => (
              <Card
                key={i}
                className="p-6 bg-background border-border hover:border-primary/30 transition-colors"
              >
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                  {pub.type}
                </span>
                <h3 className="font-semibold text-foreground mb-3 leading-snug">
                  {pub.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {pub.author} · {pub.year}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-medium"
            >
              Ver todo o acervo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
              Nosso <span className="text-primary">Blog</span>
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-4 rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Acompanhe nossas publicações, novidades e reflexões sobre migração.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                category: "Pesquisa",
                title: "Migração venezuelana em Pernambuco: desafios e acolhimento",
                excerpt: "Uma análise sobre os fluxos migratórios recentes e as políticas de integração no estado.",
                date: "15 Fev 2026",
              },
              {
                category: "Eventos",
                title: "Documentário 'Travessias' estreia em festival universitário",
                excerpt: "Produção do MIGRA foi selecionada para o Festival de Cinema Acadêmico da UFPE.",
                date: "02 Fev 2026",
              },
              {
                category: "Políticas Públicas",
                title: "Nova legislação brasileira sobre refúgio: o que muda?",
                excerpt: "Entenda as principais alterações na política migratória e seus impactos práticos.",
                date: "20 Jan 2026",
              },
            ].map((post, i) => (
              <Card
                key={i}
                className="overflow-hidden bg-background border-border hover:border-primary/30 transition-colors group"
              >
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
                    <a href="#" className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Ler mais <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contato */}
      <section id="contato" className="py-20 md:py-28 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Mail className="h-10 w-10 text-accent mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
            Participe do MIGRA
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Tem interesse em estudar migrações internacionais, refúgio ou apatridia? 
            Entre em contato e faça parte do nosso grupo de estudos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8"
            >
              Entre em contato
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-medium text-base px-8"
            >
              <FileText className="mr-2 h-4 w-4" />
              Leia nosso blog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <span className="font-heading text-xl font-bold tracking-wider text-white">
                MIGRA
              </span>
              <p className="text-sm mt-3 leading-relaxed">
                Grupo de Estudos sobre Migrações Internacionais, Refúgio e Apatridia – UFPE
              </p>
            </div>
            <div>
              <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Links
              </h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
                <a href="#pesquisa" className="hover:text-primary transition-colors">Pesquisa</a>
                <a href="#publicacoes" className="hover:text-primary transition-colors">Publicações</a>
                <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contato
              </h4>
              <div className="flex flex-col gap-2 text-sm">
                <p>migra@ufpe.br</p>
                <p>UFPE – Centro de Ciências Jurídicas</p>
                <p>Recife, PE – Brasil</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs">
            © {new Date().getFullYear()} MIGRA – UFPE. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MigraHome;
