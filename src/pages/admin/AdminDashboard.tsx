import { Card } from "@/components/ui/card";
import { Video, FileText, Home, BookOpen, Info, Users, Radio } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  { title: "Início", desc: "Editar conteúdo da página inicial", icon: Home, url: "/admin/inicio", color: "bg-secondary/10 text-secondary" },
  { title: "Sobre", desc: "História, coordenação e pessoas", icon: Info, url: "/admin/sobre", color: "bg-primary/10 text-primary" },
  { title: "Grupos de Estudo", desc: "Gerenciar grupos ativos", icon: Users, url: "/admin/grupos", color: "bg-accent/10 text-accent" },
  { title: "Produção", desc: "Repositório de publicações", icon: BookOpen, url: "/admin/producao", color: "bg-primary/10 text-primary" },
  { title: "Blog", desc: "Criar e editar artigos", icon: FileText, url: "/admin/blog", color: "bg-accent/10 text-accent" },
  { title: "Videografia", desc: "Gerenciar vídeos do YouTube", icon: Video, url: "/admin/videografia", color: "bg-primary/10 text-primary" },
  { title: "Rádio MIGRA", desc: "Episódios do podcast", icon: Radio, url: "/admin/radio", color: "bg-secondary/10 text-secondary" },
];

const AdminDashboard = () => (
  <div>
    <h1 className="font-heading text-2xl font-bold text-foreground uppercase tracking-wide mb-6">
      Dashboard
    </h1>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sections.map((s) => (
        <Link key={s.title} to={s.url}>
          <Card className="p-6 hover:border-primary/30 transition-colors cursor-pointer group">
            <div className={`w-12 h-12 rounded-lg ${s.color} flex items-center justify-center mb-4`}>
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-lg font-semibold uppercase tracking-wide group-hover:text-primary transition-colors">
              {s.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
          </Card>
        </Link>
      ))}
    </div>
  </div>
);

export default AdminDashboard;
