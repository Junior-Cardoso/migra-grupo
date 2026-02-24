import { Badge } from "@/components/ui/badge";
import { Mail, Instagram, Linkedin } from "lucide-react";
import novaiaLogo from "@/assets/novaia-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-[1080px] mx-auto">
          {/* Main Footer Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Column 1 - Logo & Info */}
            <div className="space-y-6">
              <img 
                src={novaiaLogo} 
                alt="NOVAIA Club" 
                className="h-8 w-auto"
              />
              
              <p className="text-foreground/80 text-sm leading-relaxed">
                Impulsione seu negócio com estratégia, cultura e IA prática.
              </p>
              
              {/* Email */}
              <div className="flex items-center gap-2 text-foreground/70 text-sm">
                <Mail className="w-4 h-4" />
                <span>contato@novaiaclub.com.br</span>
              </div>
            </div>

            {/* Column 2 - Navigation Links */}
            <div>
              <h3 className="text-foreground font-semibold mb-4">Navegação</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#metodo" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                    Método MVO
                  </a>
                </li>
                <li>
                  <a href="#simbiose" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                    Programa SIMBIOSE
                  </a>
                </li>
                <li>
                  <a href="#encontros" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                    Encontros
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Copyright */}
              <div className="text-muted-foreground text-sm">
                © 2025 NOVAIA Club
              </div>


              {/* Social Media */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-foreground/70">Siga-nos</span>
                <a 
                  href="https://www.instagram.com/novaia.clubmls/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/novaiaclub/posts/?feedView=all" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
