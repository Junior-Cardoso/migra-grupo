import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/novaia-logo.png";
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  
  const navLinks = [
    { name: "Método MVO", href: "#metodo" },
    { name: "Simbiose", href: "#simbiose" },
    { name: "Encontros", href: "#encontros" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between h-16 px-6 mx-auto max-w-[1080px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="NOVAIA Club" className="h-7 w-auto" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-nav-link hover:text-nav-link-hover transition-colors text-[15px] font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="sm" asChild>
              <a href="/consultor-ia">
                Consultor IA
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-nav-link hover:text-nav-link-hover transition-colors text-lg font-medium py-2"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button variant="default" className="w-full mt-2" asChild>
                    <a
                      href="/consultor-ia"
                      onClick={() => setOpen(false)}
                    >
                      Consultor IA
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
