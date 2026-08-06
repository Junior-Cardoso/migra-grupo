import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import MigraNavigation from "@/components/MigraNavigation";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import heroMigraBg from "@/assets/hero-migra-bg.jpg";
import migraLogoHero from "@/assets/migra-logo-hero.webp";
import heroPattern from "@/assets/hero-pattern.webp";
import radioMigraLogo from "@/assets/radio-migra-logo.png";
import sobreMigraImg from "@/assets/sobre-migra.jpg";
import SpotifyEpisodeRow from "@/components/SpotifyEpisodeRow";

import sofiaZanforlin from "@/assets/team/sofia-zanforlin.png";
import carolinaLeiteAsset from "@/assets/team/carolina-leite.png.asset.json";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  FileText,
  Headphones,
  ArrowRight,
  Mail,
  GraduationCap,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import MigraFooter from "@/components/MigraFooter";
import { usePageContent } from "@/hooks/usePageContent";
import { resolveIcon } from "@/lib/iconMap";
import AuthorList from "@/components/AuthorList";

import m1 from "@/assets/mosaico/mosaico-1.jpeg.asset.json";
import m2 from "@/assets/mosaico/mosaico-2.jpeg.asset.json";
import m3 from "@/assets/mosaico/mosaico-3.jpeg.asset.json";
import m4 from "@/assets/mosaico/mosaico-4.jpeg.asset.json";
import m5 from "@/assets/mosaico/mosaico-5.jpeg.asset.json";
import m6 from "@/assets/mosaico/mosaico-6.jpeg.asset.json";
import m7 from "@/assets/mosaico/mosaico-7.jpeg.asset.json";
import m8 from "@/assets/mosaico/mosaico-8.jpeg.asset.json";
import m9 from "@/assets/mosaico/mosaico-9.jpeg.asset.json";
import m10 from "@/assets/mosaico/mosaico-10.jpeg.asset.json";

const mosaicoFotos = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10].map((a) => a.url);

const PHOTO_MAP: Record<string, string> = { sofia: sofiaZanforlin, carolina: carolinaLeiteAsset.url };

const MigraHome = () => {
  const { data: content } = usePageContent("inicio");

  // Real data from Supabase for the home page
  const { data: studyGroups = [] } = useQuery({
    queryKey: ["home_study_groups"],
    queryFn: async () => {
      const { data } = await supabase
        .from("study_groups")
        .select("id, title, description")
        .order("sort_order")
        .limit(3);
      return data ?? [];
    },
  });

  const { data: latestPublications = [] } = useQuery({
    queryKey: ["home_latest_publications"],
    queryFn: async () => {
      const { data } = await supabase
        .from("publications")
        .select("id, title, type, year, authors")
        .order("year", { ascending: false })
        .order("created_at", { ascending: false })
        .limit(6);
      return data ?? [];
    },
  });

  const { data: latestEpisodes = [] } = useQuery({
    queryKey: ["home_latest_episodes"],
    queryFn: async () => {
      const { data } = await supabase
        .from("radio_episodes")
        .select("*")
        .order("sort_order")
        .limit(3);
      return data ?? [];
    },
  });

  if (!content) return null;
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
        <div className="absolute inset-0 bg-secondary/70 md:bg-secondary/20" />
        {/* Pattern overlay (same as secondary pages) — centered on the left, faded */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-full md:w-2/3 lg:w-1/2 bg-no-repeat pointer-events-none opacity-25 mix-blend-screen"
          style={{
            backgroundImage: `url(${heroPattern})`,
            backgroundSize: "auto 90%",
            backgroundPosition: "center left",
          }}
        />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="mb-6">
              <span className="sr-only">{content.hero.title}</span>
              <img
                src={migraLogoHero}
                alt={content.hero.title}
                className="w-full max-w-[140px] md:max-w-[170px] lg:max-w-[200px] h-auto"
              />
            </h1>
            <p className="text-accent font-heading uppercase tracking-[0.2em] text-xs md:text-sm mb-6">
              Universidade Federal de Pernambuco
            </p>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              {content.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-normal text-base px-8 uppercase tracking-wider"
                asChild
              >
                <Link to={content.hero.btn1.link}>
                  {content.hero.btn1.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white/10 hover:text-white font-heading font-normal text-base px-8 uppercase tracking-wider"
                asChild
              >
                <a href={content.hero.btn2.link}>{content.hero.btn2.label}</a>
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
                {content.sobre.title}
              </h2>
              <div className="w-12 h-1 bg-accent mt-3 mb-6 rounded-full" />
              <p className="text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: content.sobre.paragraph1Html }} />
              <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: content.sobre.paragraph2Html }} />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg bg-muted overflow-hidden">
                  <img src={sobreMigraImg} alt="Multidão em movimento" className="w-full h-full object-cover object-left" />
                </div>
                <div className="hidden md:block absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mosaico de fotos */}
      <section id="mosaico" className="py-16 md:py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {mosaicoFotos.map((src, i) => (
              <ScrollReveal key={i} delay={(i % 4) * 80}>
                <div
                  className={`overflow-hidden rounded-lg bg-muted ${
                    i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* Equipe */}
      <section id="equipe" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
                {content.equipe.title}
              </h2>
              <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-4 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {content.equipe.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {content.equipe.members.map((member, i) => {
              const photo = member.photoKey ? PHOTO_MAP[member.photoKey] : null;
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="text-center group">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto rounded-full bg-muted mb-6 overflow-hidden flex items-center justify-center ring-4 ring-accent/20">
                      {photo ? (
                        <img src={photo} alt={member.name} loading="lazy" className="w-full h-full object-cover" />
                      ) : (
                        <GraduationCap className="h-20 w-20 text-muted-foreground/40" />
                      )}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground uppercase tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Grupos de Estudo */}
      <section id="grupos" className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
                {content.grupos.title}
              </h2>
              <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-4 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {content.grupos.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyGroups.length === 0 ? (
              <p className="text-muted-foreground text-sm col-span-full text-center">Em breve.</p>
            ) : (
              studyGroups.map((group, i) => (
                <ScrollReveal key={group.id} delay={i * 100}>
                  <Card className="p-6 bg-background border-border hover:border-primary/30 transition-colors group h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2 uppercase tracking-wide">
                      {group.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                      {group.description}
                    </p>
                  </Card>
                </ScrollReveal>
              ))
            )}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-normal text-base px-8 uppercase tracking-wider"
                asChild
              >
                <Link to="/grupos-de-estudo">
                  {content.grupos.btnLabel}
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
                {content.producao.title}
              </h2>
              <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-4 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {content.producao.description}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPublications.length === 0 ? (
              <p className="text-muted-foreground text-sm col-span-full text-center">Em breve.</p>
            ) : (
              latestPublications.map((pub, i) => {
                const firstAuthor = pub.authors?.[0] ?? "";
                const initials = firstAuthor
                  .split(" ")
                  .map((n) => n[0])
                  .filter(Boolean)
                  .slice(0, 2)
                  .join("")
                  .toUpperCase();
                return (
                  <ScrollReveal key={pub.id} delay={(i % 3) * 100}>
                    <Card className="p-6 bg-background border-border hover:border-primary/30 transition-colors h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {pub.type}
                        </span>
                        <span className="text-muted-foreground text-xs">{pub.year}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-4 leading-snug line-clamp-3">
                        {pub.title}
                      </h3>
                      {firstAuthor && (
                        <div className="flex items-center gap-3 mt-auto">
                          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                            <span className="text-white text-xs font-semibold">{initials || "?"}</span>
                          </div>
                          <div className="text-sm min-w-0">
                            <AuthorList authors={pub.authors} max={2} />
                          </div>
                        </div>
                      )}
                    </Card>
                  </ScrollReveal>
                );
              })
            )}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-normal text-base px-8 uppercase tracking-wider"
                asChild
              >
                <Link to="/producao">
                  {content.producao.btnLabel}
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
                {content.blog.title}
              </h2>
              <div className="w-12 h-1 bg-accent mx-auto mt-3 mb-4 rounded-full" />
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {content.blog.description}
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
                  {content.blog.btnLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Rádio MIGRA */}
      <section id="radio" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="flex items-center gap-5 mb-6">
                <div className="w-24 h-24 rounded-xl bg-white shadow-lg flex items-center justify-center p-3 shrink-0">
                  <img src={radioMigraLogo} alt="Rádio Migra" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Podcast
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide mt-1">
                    Rádio MIGRA
                  </h2>
                </div>
              </div>
              <div className="w-12 h-1 bg-accent mb-6 rounded-full" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Conversas, entrevistas e reflexões sobre migrações, mobilidades e comunicação. 
                Ouça nossos episódios e acompanhe os debates mais recentes.
              </p>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-normal text-base px-8 uppercase tracking-wider"
                asChild
              >
                <Link to="/radio">
                  <Headphones className="mr-2 h-4 w-4" />
                  Ouvir episódios
                </Link>
              </Button>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="space-y-3">
                {latestEpisodes.length === 0 ? (
                  <p className="text-muted-foreground text-sm">Em breve novos episódios.</p>
                ) : (
                  latestEpisodes.map((ep: any) => (
                    <SpotifyEpisodeRow
                      key={ep.id}
                      episodeNumber={ep.episode_number}
                      fallbackTitle={ep.title}
                      fallbackDescription={ep.description}
                      dateLabel={ep.date_label}
                      durationLabel={ep.duration_label}
                      spotifyUrl={ep.spotify_url}
                    />
                  ))
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA / Contato — somente emails */}
      <section id="contato" className="py-20 md:py-28 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <Mail className="h-10 w-10 text-accent mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">
              {content.cta.title}
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              {content.cta.description}
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
