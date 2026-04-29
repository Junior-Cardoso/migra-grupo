import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import migraLogoWhite from "@/assets/migra-logo-white.png";

const academicLinks = [
  { label: "Lattes", url: "http://lattes.cnpq.br/" },
  { label: "Google Scholar", url: "https://scholar.google.com/" },
  { label: "ResearchGate", url: "https://www.researchgate.net/" },
  { label: "ORCID", url: "https://orcid.org/" },
];

const MigraFooter = () => {
  return (
    <footer className="py-12 bg-foreground text-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block">
              <img src={migraLogoWhite} alt="MIGRA" className="h-12 w-auto" />
            </Link>
            <p className="text-sm mt-3 leading-relaxed">
              Grupo de Pesquisa e Extensão em Migrações, Mobilidades e Gestão Contemporânea de Populações – UFPE
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Links
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/sobre" className="hover:text-primary transition-colors">Sobre</Link>
              <Link to="/producao" className="hover:text-primary transition-colors">Produção</Link>
              <Link to="/grupos-de-estudo" className="hover:text-primary transition-colors">Grupos de Estudo</Link>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <Link to="/videografia" className="hover:text-primary transition-colors">Videografia</Link>
              <Link to="/radio" className="hover:text-primary transition-colors">Rádio MIGRA</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Plataformas Acadêmicas
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              {academicLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  {link.label}
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:migra@ufpe.br" className="hover:text-primary transition-colors">migra@ufpe.br</a>
              <a href="mailto:migra.extensao@ufpe.br" className="hover:text-primary transition-colors">migra.extensao@ufpe.br</a>
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
  );
};

export default MigraFooter;
