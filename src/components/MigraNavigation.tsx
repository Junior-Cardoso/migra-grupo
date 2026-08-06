import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface SubLink {
  name: string;
  href: string;
  highlight?: boolean;
}

interface NavItem {
  name: string;
  href?: string;
  isRoute?: boolean;
  children?: SubLink[];
}

const MigraNavigation = () => {
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = [
    { name: "Sobre", href: "/sobre", isRoute: true },
    { name: "Grupos de Estudo", href: "/grupos-de-estudo", isRoute: true },
    {
      name: "Produção",
      children: [
        { name: "MIGRA", href: "/producao", highlight: true },
        { name: "Profª Carolina Leite", href: "/producao/carolina" },
        { name: "Profª Sofia Zanforline", href: "/producao/sofia" },
      ],
    },
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
            <span translate="no" className="font-heading text-2xl font-bold text-foreground tracking-wider uppercase">MIGRA</span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <button className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium flex items-center gap-1 outline-none">
                        <span translate={item.name.includes("MIGRA") ? "no" : undefined}>{item.name}</span>
                        <ChevronDown className="h-3.5 w-3.5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                      {item.children.map((sub, idx) => (
                        <div key={sub.href}>
                          {sub.highlight && idx === 0 ? (
                            <>
                              <DropdownMenuItem asChild className="py-3">
                                <Link to={sub.href} className="w-full font-heading text-base font-bold uppercase tracking-wide text-foreground">
                                  <span translate={sub.name.includes("MIGRA") ? "no" : undefined}>{sub.name}</span>
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                            </>
                          ) : (
                            <DropdownMenuItem asChild>
                              <Link to={sub.href} className="w-full text-sm">
                                <span translate={sub.name.includes("MIGRA") ? "no" : undefined}>{sub.name}</span>
                              </Link>
                            </DropdownMenuItem>
                          )}
                        </div>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href!}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  <span translate={item.name.includes("MIGRA") ? "no" : undefined}>{item.name}</span>
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href!}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  <span translate={item.name.includes("MIGRA") ? "no" : undefined}>{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Abrir menu" className="text-foreground">
                  <Menu className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <div className="flex flex-col gap-2 mt-8">
                  <span translate="no" className="font-heading text-2xl font-bold text-foreground tracking-wider uppercase mb-4">MIGRA</span>
                  {navItems.map((item) => {
                    if (item.children) {
                      return (
                        <div key={item.name} className="border-b border-border py-2">
                          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1.5 px-1">
                            <span translate={item.name.includes("MIGRA") ? "no" : undefined}>{item.name}</span>
                          </p>
                          {item.children.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              onClick={() => setOpen(false)}
                              className={`block transition-colors py-2 px-1 ${
                                sub.highlight
                                  ? "font-heading text-base font-bold uppercase tracking-wide text-foreground hover:text-primary"
                                  : "text-sm text-muted-foreground hover:text-primary"
                              }`}
                            >
                              <span translate={sub.name.includes("MIGRA") ? "no" : undefined}>{sub.name}</span>
                            </Link>
                          ))}
                        </div>
                      );
                    }
                    return item.isRoute ? (
                      <Link
                        key={item.name}
                        to={item.href!}
                        onClick={() => setOpen(false)}
                        className="text-muted-foreground hover:text-primary transition-colors text-base font-medium py-3 border-b border-border"
                      >
                        <span translate={item.name.includes("MIGRA") ? "no" : undefined}>{item.name}</span>
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href!}
                        onClick={() => setOpen(false)}
                        className="text-muted-foreground hover:text-primary transition-colors text-base font-medium py-3 border-b border-border"
                      >
                        <span translate={item.name.includes("MIGRA") ? "no" : undefined}>{item.name}</span>
                      </a>
                    );
                  })}
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
