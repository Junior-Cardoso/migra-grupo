import { Link } from "react-router-dom";

const MigraFooter = () => {
  return (
    <footer className="py-12 bg-foreground text-white/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="font-heading text-xl font-bold tracking-wider text-white">
              MIGRA
            </Link>
            <p className="text-sm mt-3 leading-relaxed">
              Grupo de Estudos sobre Migrações Internacionais, Refúgio e Apatridia – UFPE
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Links
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/#sobre" className="hover:text-primary transition-colors">Sobre</Link>
              <Link to="/#pesquisa" className="hover:text-primary transition-colors">Pesquisa</Link>
              <Link to="/#publicacoes" className="hover:text-primary transition-colors">Publicações</Link>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <Link to="/#contato" className="hover:text-primary transition-colors">Contato</Link>
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
  );
};

export default MigraFooter;
