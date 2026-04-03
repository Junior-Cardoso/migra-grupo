import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MigraNavigation = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Sobre", href: "/sobre", isRoute: true },
    { name: "Grupos de Estudo", href: "/grupos-de-estudo", isRoute: true },
    { name: "Produção", href: "/producao", isRoute: true },
    { name: "Blog", href: "/blog", isRoute: true },
    { name: "Videografia", href: "/videografia", isRoute: true },
    { name: "Rádio MIGRA", href: "/radio", isRoute: true },
    { name: "Contato", href: "/#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="flex items-center justify-between h-16 px-6 mx-auto max-w-6xl">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold tracking-wider text-secondary">
              MIGRA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <div className="flex flex-col gap-2 mt-8">
                  <span className="font-heading text-xl font-bold tracking-wider text-secondary mb-4">
                    MIGRA
                  </span>
                  {navLinks.map((link) =>
                    link.isRoute ? (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setOpen(false)}
                        className="text-muted-foreground hover:text-primary transition-colors text-base font-medium py-3 border-b border-border"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-muted-foreground hover:text-primary transition-colors text-base font-medium py-3 border-b border-border"
                      >
                        {link.name}
                      </a>
                    )
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MigraNavigation;
