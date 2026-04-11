import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, TreePine } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/quem-somos", label: "QUEM SOMOS" },
    { path: "/areas-atuacao", label: "ÁREAS DE ATUAÇÃO" },
    { path: "/noticias", label: "NOTÍCIAS" },
    { path: "/contato", label: "CONTATO" },
    { path: "/transparencia", label: "TRANSPARÊNCIA" },
    { path: "/certificados", label: "CERTIFICADOS" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center shadow-md">
              <TreePine className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground">CARAMURI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={isActive(link.path) ? "nav-link-active" : "nav-link"}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden xl:flex items-center gap-2">
            <Button 
              variant="default" 
              size="sm"
              className="bg-primary hover:bg-forest-dark rounded-full px-4 shadow-md hover:shadow-lg transition-all"
            >
              Seja Voluntário
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-4 transition-all"
            >
              Doar
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-full px-4"
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-full hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="xl:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 px-4 rounded-xl transition-colors ${isActive(link.path) ? "nav-link-active bg-secondary" : "nav-link hover:bg-muted"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="default" className="bg-primary hover:bg-forest-dark w-full rounded-full">
                  Seja Voluntário
                </Button>
                <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full rounded-full">
                  Doar
                </Button>
                <Button variant="outline" className="w-full rounded-full">Login</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
