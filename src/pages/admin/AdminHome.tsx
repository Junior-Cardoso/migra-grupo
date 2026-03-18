import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Save, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

interface ButtonField {
  label: string;
  link: string;
  nofollow: boolean;
}

interface CounterField {
  value: string;
  label: string;
}

interface TeamMember {
  name: string;
  role: string;
}

interface Publication {
  type: string;
  title: string;
  author: string;
  year: string;
}

const AdminHome = () => {
  // Hero
  const [heroSubtitle, setHeroSubtitle] = useState("Universidade Federal de Pernambuco");
  const [heroTitle, setHeroTitle] = useState("MIGRA");
  const [heroDesc, setHeroDesc] = useState(
    "Grupo de Pesquisa e Extensão em Migrações, Mobilidades e Gestão Contemporânea de Populações — UFPE."
  );
  const [heroBtn1, setHeroBtn1] = useState<ButtonField>({
    label: "Conheça o grupo",
    link: "#sobre",
    nofollow: false,
  });
  const [heroBtn2, setHeroBtn2] = useState<ButtonField>({
    label: "Contato",
    link: "#contato",
    nofollow: false,
  });

  // Sobre
  const [sobreTitle, setSobreTitle] = useState("Sobre o MIGRA");
  const [sobreP1, setSobreP1] = useState(
    "O MIGRA é um grupo de pesquisa e extensão vinculado à Universidade Federal de Pernambuco, dedicado ao estudo das migrações, mobilidades e gestão contemporânea de populações. Nosso trabalho combina rigor acadêmico com impacto social."
  );
  const [sobreP2, setSobreP2] = useState(
    "Atuamos na produção de conhecimento, formação de pesquisadores e apoio à comunidade migrante, contribuindo para políticas públicas mais justas e inclusivas."
  );
  const [counters, setCounters] = useState<CounterField[]>([
    { value: "15+", label: "Pesquisadores" },
    { value: "50+", label: "Publicações" },
    { value: "8", label: "Anos de atuação" },
  ]);

  // Areas
  const [areasTitle, setAreasTitle] = useState("Áreas de Atuação");
  const [areasDesc, setAreasDesc] = useState(
    "Conheça as linhas de pesquisa que orientam nossos estudos e publicações."
  );
  const [areas, setAreas] = useState([
    { title: "Migrações Internacionais", desc: "Estudo dos fluxos migratórios contemporâneos e seus impactos sociais, econômicos e culturais." },
    { title: "Direito dos Refugiados", desc: "Análise das normativas internacionais e nacionais de proteção a refugiados e solicitantes de refúgio." },
    { title: "Comunicação e Migração", desc: "Estudos sobre narrativas midiáticas, representação e comunicação intercultural no contexto migratório." },
    { title: "Políticas Migratórias", desc: "Avaliação de políticas públicas de acolhimento e integração de migrantes no Brasil." },
    { title: "Geografia das Migrações", desc: "Análise espacial dos fluxos migratórios, territorialidades e dinâmicas socioespaciais." },
    { title: "Fronteiras e Mobilidade", desc: "Análise das dinâmicas fronteiriças e seus efeitos na mobilidade humana contemporânea." },
  ]);
  const [areasBtn, setAreasBtn] = useState<ButtonField>({
    label: "Saiba mais sobre nossas pesquisas",
    link: "#pesquisa",
    nofollow: false,
  });

  // Equipe
  const [equipeTitle, setEquipeTitle] = useState("Nossa Equipe");
  const [equipeDesc, setEquipeDesc] = useState(
    "Pesquisadores dedicados ao estudo das migrações, mobilidades e gestão de populações."
  );
  const [members, setMembers] = useState<TeamMember[]>([
    { name: "Prof. Dr. Coordenador", role: "Coordenador" },
    { name: "Pesquisador(a) 1", role: "Doutorando(a)" },
    { name: "Pesquisador(a) 2", role: "Mestrando(a)" },
    { name: "Pesquisador(a) 3", role: "Graduando(a)" },
  ]);
  const [equipeBtn, setEquipeBtn] = useState<ButtonField>({
    label: "Conheça toda a equipe",
    link: "#equipe",
    nofollow: false,
  });

  // Acervo
  const [acervoTitle, setAcervoTitle] = useState("Acervo Digital");
  const [acervoDesc, setAcervoDesc] = useState(
    "Publicações recentes do nosso grupo de pesquisa."
  );
  const [publications, setPublications] = useState<Publication[]>([
    { type: "Artigo", title: "Migrações venezuelanas no Nordeste brasileiro: desafios e perspectivas", author: "Ana Beatriz Souza", year: "2024" },
    { type: "Capítulo", title: "Apatridia e proteção internacional: uma análise do caso brasileiro", author: "Carlos Drummond", year: "2024" },
    { type: "Working Paper", title: "Políticas públicas de acolhimento: estudo comparado Brasil-Portugal", author: "Elena Ferreira", year: "2023" },
    { type: "Artigo", title: "Direito ao refúgio e a crise humanitária na fronteira norte", author: "Gabriel Henrique", year: "2023" },
    { type: "Dissertação", title: "Integração local de refugiados sírios em Recife", author: "Isabela Jardim", year: "2023" },
    { type: "Artigo", title: "Mobilidade humana e direitos fundamentais no Mercosul", author: "Karen Lima", year: "2022" },
  ]);
  const [acervoBtn, setAcervoBtn] = useState<ButtonField>({
    label: "Ver todo o acervo",
    link: "/acervo",
    nofollow: false,
  });

  // Blog section
  const [blogTitle, setBlogTitle] = useState("Nosso Blog");
  const [blogDesc, setBlogDesc] = useState(
    "Acompanhe nossas publicações, novidades e reflexões sobre migração."
  );
  const [blogBtn, setBlogBtn] = useState<ButtonField>({
    label: "Ver todos os posts",
    link: "/blog",
    nofollow: false,
  });

  // CTA
  const [ctaTitle, setCtaTitle] = useState("Participe do MIGRA");
  const [ctaDesc, setCtaDesc] = useState(
    "Tem interesse em estudar migrações, mobilidades e gestão contemporânea de populações? Entre em contato e faça parte do nosso grupo de pesquisa e extensão."
  );
  const [ctaBtn1, setCtaBtn1] = useState<ButtonField>({
    label: "Entre em contato",
    link: "#contato",
    nofollow: false,
  });
  const [ctaBtn2, setCtaBtn2] = useState<ButtonField>({
    label: "Leia nosso blog",
    link: "/blog",
    nofollow: false,
  });

  const handleSave = () => {
    toast.success("Configurações salvas localmente! (conexão com backend em breve)");
  };

  const CharInput = ({
    value,
    onChange,
    maxLen,
    label,
    multiline = false,
    rows = 2,
  }: {
    value: string;
    onChange: (v: string) => void;
    maxLen: number;
    label: string;
    multiline?: boolean;
    rows?: number;
  }) => (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <Label className="text-xs">{label}</Label>
        <span
          className={`text-[10px] ${
            value.length > maxLen ? "text-destructive" : "text-muted-foreground"
          }`}
        >
          {value.length}/{maxLen}
        </span>
      </div>
      {multiline ? (
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, maxLen))}
          rows={rows}
          className="text-sm"
        />
      ) : (
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, maxLen))}
          className="text-sm"
        />
      )}
    </div>
  );

  const ButtonEditor = ({
    value,
    onChange,
    labelMax = 25,
  }: {
    value: ButtonField;
    onChange: (v: ButtonField) => void;
    labelMax?: number;
  }) => (
    <div className="space-y-2 p-3 bg-muted/50 rounded-md">
      <div className="flex justify-between items-center">
        <Label className="text-xs">Label do botão</Label>
        <span
          className={`text-[10px] ${
            value.label.length > labelMax ? "text-destructive" : "text-muted-foreground"
          }`}
        >
          {value.label.length}/{labelMax}
        </span>
      </div>
      <Input
        value={value.label}
        onChange={(e) => onChange({ ...value, label: e.target.value.slice(0, labelMax) })}
        className="text-sm"
      />
      <div className="space-y-1">
        <Label className="text-xs">Link</Label>
        <Input
          value={value.link}
          onChange={(e) => onChange({ ...value, link: e.target.value })}
          placeholder="/rota ou https://..."
          className="text-sm font-mono"
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          checked={value.nofollow}
          onCheckedChange={(v) => onChange({ ...value, nofollow: !!v })}
        />
        <Label className="text-xs">nofollow</Label>
      </div>
    </div>
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-2xl font-bold text-foreground uppercase tracking-wide">
          Editar Home
        </h1>
        <Button onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          Salvar Tudo
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["hero"]} className="space-y-4">
        {/* HERO */}
        <AccordionItem value="hero">
          <Card>
            <AccordionTrigger className="px-4 py-3">
              <div className="flex items-center gap-2">
                <Badge>Hero</Badge>
                <span className="text-sm font-medium">Seção principal</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 space-y-4">
              <CharInput value={heroSubtitle} onChange={setHeroSubtitle} maxLen={60} label="Subtítulo" />
              <CharInput value={heroTitle} onChange={setHeroTitle} maxLen={10} label="Título" />
              <CharInput value={heroDesc} onChange={setHeroDesc} maxLen={150} label="Descrição" multiline />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium mb-2">Botão 1</p>
                  <ButtonEditor value={heroBtn1} onChange={setHeroBtn1} labelMax={25} />
                </div>
                <div>
                  <p className="text-xs font-medium mb-2">Botão 2</p>
                  <ButtonEditor value={heroBtn2} onChange={setHeroBtn2} labelMax={15} />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs">Imagem de fundo</Label>
                <div className="flex items-center gap-4">
                  <div className="w-32 h-20 bg-secondary rounded overflow-hidden flex items-center justify-center">
                    <ImageIcon className="h-6 w-6 text-white/40" />
                  </div>
                  <Button variant="outline" size="sm" type="button">
                    Trocar imagem
                  </Button>
                </div>
                <p className="text-[10px] text-muted-foreground">
                  A imagem será ajustada automaticamente ao layout. Apenas a substituição é permitida.
                </p>
              </div>
            </AccordionContent>
          </Card>
        </AccordionItem>

        {/* SOBRE */}
        <AccordionItem value="sobre">
          <Card>
            <AccordionTrigger className="px-4 py-3">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Sobre</Badge>
                <span className="text-sm font-medium">Sobre o MIGRA</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 space-y-4">
              <CharInput value={sobreTitle} onChange={setSobreTitle} maxLen={20} label="Título" />
              <CharInput value={sobreP1} onChange={setSobreP1} maxLen={250} label="Parágrafo 1" multiline rows={3} />
              <CharInput value={sobreP2} onChange={setSobreP2} maxLen={200} label="Parágrafo 2" multiline rows={3} />

              <div>
                <Label className="text-xs mb-2 block">Contadores</Label>
                <div className="grid grid-cols-3 gap-3">
                  {counters.map((c, i) => (
                    <div key={i} className="space-y-1">
                      <Input
                        value={c.value}
                        onChange={(e) => {
                          const updated = [...counters];
                          updated[i] = { ...c, value: e.target.value.slice(0, 10) };
                          setCounters(updated);
                        }}
                        placeholder="Valor"
                        className="text-sm"
                      />
                      <Input
                        value={c.label}
                        onChange={(e) => {
                          const updated = [...counters];
                          updated[i] = { ...c, label: e.target.value.slice(0, 20) };
                          setCounters(updated);
                        }}
                        placeholder="Label"
                        className="text-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </Card>
        </AccordionItem>

        {/* ÁREAS */}
        <AccordionItem value="areas">
          <Card>
            <AccordionTrigger className="px-4 py-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Áreas</Badge>
                <span className="text-sm font-medium">Áreas de Atuação</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 space-y-4">
              <CharInput value={areasTitle} onChange={setAreasTitle} maxLen={30} label="Título" />
              <CharInput value={areasDesc} onChange={setAreasDesc} maxLen={100} label="Descrição" multiline />

              <div className="space-y-3">
                {areas.map((area, i) => (
                  <div key={i} className="p-3 bg-muted/50 rounded-md space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-xs">Card {i + 1}</Label>
                      <span className="text-[10px] text-muted-foreground">
                        {area.title.length}/30 | {area.desc.length}/120
                      </span>
                    </div>
                    <Input
                      value={area.title}
                      onChange={(e) => {
                        const updated = [...areas];
                        updated[i] = { ...area, title: e.target.value.slice(0, 30) };
                        setAreas(updated);
                      }}
                      placeholder="Título"
                      className="text-sm"
                    />
                    <Textarea
                      value={area.desc}
                      onChange={(e) => {
                        const updated = [...areas];
                        updated[i] = { ...area, desc: e.target.value.slice(0, 120) };
                        setAreas(updated);
                      }}
                      placeholder="Descrição"
                      rows={2}
                      className="text-sm"
                    />
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xs font-medium mb-2">Botão da seção</p>
                <ButtonEditor value={areasBtn} onChange={setAreasBtn} labelMax={40} />
              </div>
            </AccordionContent>
          </Card>
        </AccordionItem>

        {/* EQUIPE */}
        <AccordionItem value="equipe">
          <Card>
            <AccordionTrigger className="px-4 py-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Equipe</Badge>
                <span className="text-sm font-medium">Nossa Equipe</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 space-y-4">
              <CharInput value={equipeTitle} onChange={setEquipeTitle} maxLen={20} label="Título" />
              <CharInput value={equipeDesc} onChange={setEquipeDesc} maxLen={100} label="Descrição" multiline />

              <div className="grid sm:grid-cols-2 gap-3">
                {members.map((m, i) => (
                  <div key={i} className="p-3 bg-muted/50 rounded-md space-y-2">
                    <Label className="text-xs">Membro {i + 1}</Label>
                    <Input
                      value={m.name}
                      onChange={(e) => {
                        const updated = [...members];
                        updated[i] = { ...m, name: e.target.value.slice(0, 30) };
                        setMembers(updated);
                      }}
                      placeholder="Nome"
                      className="text-sm"
                    />
                    <Input
                      value={m.role}
                      onChange={(e) => {
                        const updated = [...members];
                        updated[i] = { ...m, role: e.target.value.slice(0, 20) };
                        setMembers(updated);
                      }}
                      placeholder="Cargo"
                      className="text-sm"
                    />
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xs font-medium mb-2">Botão da seção</p>
                <ButtonEditor value={equipeBtn} onChange={setEquipeBtn} />
              </div>
            </AccordionContent>
          </Card>
        </AccordionItem>

        {/* ACERVO */}
        <AccordionItem value="acervo">
          <Card>
            <AccordionTrigger className="px-4 py-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Acervo</Badge>
                <span className="text-sm font-medium">Acervo Digital</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 space-y-4">
              <CharInput value={acervoTitle} onChange={setAcervoTitle} maxLen={20} label="Título" />
              <CharInput value={acervoDesc} onChange={setAcervoDesc} maxLen={100} label="Descrição" multiline />

              <div className="space-y-3">
                {publications.map((pub, i) => (
                  <div key={i} className="p-3 bg-muted/50 rounded-md grid grid-cols-4 gap-2">
                    <Input
                      value={pub.type}
                      onChange={(e) => {
                        const updated = [...publications];
                        updated[i] = { ...pub, type: e.target.value.slice(0, 15) };
                        setPublications(updated);
                      }}
                      placeholder="Tipo"
                      className="text-sm"
                    />
                    <Input
                      value={pub.title}
                      onChange={(e) => {
                        const updated = [...publications];
                        updated[i] = { ...pub, title: e.target.value.slice(0, 80) };
                        setPublications(updated);
                      }}
                      placeholder="Título"
                      className="text-sm col-span-2"
                    />
                    <div className="grid grid-cols-2 gap-1">
                      <Input
                        value={pub.author}
                        onChange={(e) => {
                          const updated = [...publications];
                          updated[i] = { ...pub, author: e.target.value.slice(0, 30) };
                          setPublications(updated);
                        }}
                        placeholder="Autor"
                        className="text-sm"
                      />
                      <Input
                        value={pub.year}
                        onChange={(e) => {
                          const updated = [...publications];
                          updated[i] = { ...pub, year: e.target.value.slice(0, 4) };
                          setPublications(updated);
                        }}
                        placeholder="Ano"
                        className="text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xs font-medium mb-2">Botão da seção</p>
                <ButtonEditor value={acervoBtn} onChange={setAcervoBtn} />
              </div>
            </AccordionContent>
          </Card>
        </AccordionItem>

        {/* BLOG */}
        <AccordionItem value="blog">
          <Card>
            <AccordionTrigger className="px-4 py-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">Blog</Badge>
                <span className="text-sm font-medium">Seção Blog</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 space-y-4">
              <CharInput value={blogTitle} onChange={setBlogTitle} maxLen={20} label="Título" />
              <CharInput value={blogDesc} onChange={setBlogDesc} maxLen={100} label="Descrição" multiline />
              <div>
                <p className="text-xs font-medium mb-2">Botão da seção</p>
                <ButtonEditor value={blogBtn} onChange={setBlogBtn} />
              </div>
            </AccordionContent>
          </Card>
        </AccordionItem>

        {/* CTA */}
        <AccordionItem value="cta">
          <Card>
            <AccordionTrigger className="px-4 py-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">CTA</Badge>
                <span className="text-sm font-medium">Contato / CTA</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 space-y-4">
              <CharInput value={ctaTitle} onChange={setCtaTitle} maxLen={30} label="Título" />
              <CharInput value={ctaDesc} onChange={setCtaDesc} maxLen={200} label="Descrição" multiline rows={3} />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium mb-2">Botão 1</p>
                  <ButtonEditor value={ctaBtn1} onChange={setCtaBtn1} />
                </div>
                <div>
                  <p className="text-xs font-medium mb-2">Botão 2</p>
                  <ButtonEditor value={ctaBtn2} onChange={setCtaBtn2} />
                </div>
              </div>
            </AccordionContent>
          </Card>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AdminHome;
