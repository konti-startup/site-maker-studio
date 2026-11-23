import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import DonationDialog from "@/components/DonationDialog";
import { VOLUNTEER_FORM_URL } from "@/lib/donation";

const LOGO_SRC = "/logo/logo.jpeg";
const SELO_1_SRC = "/certificados/selo.jpeg";
const SELO_2_SRC = "/certificados/selo2.jpeg";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const { isAuthenticated, userLabel, logout } = useAuth();

  const openVolunteerForm = () => {
    window.open(VOLUNTEER_FORM_URL, "_blank", "noopener,noreferrer");
    setIsMenuOpen(false);
  };

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
      <DonationDialog open={donateOpen} onOpenChange={setDonateOpen} />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={LOGO_SRC}
              alt=""
              className="h-9 w-9 sm:h-11 sm:w-11 object-contain rounded-lg shadow-sm shrink-0"
            />
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
          <div className="hidden xl:flex items-center gap-3">
            <div className="flex items-center gap-1.5 shrink-0">
              <img
                src={SELO_1_SRC}
                alt=""
                className="h-8 w-8 rounded-full object-cover shadow-sm sm:h-9 sm:w-9"
              />
              <img
                src={SELO_2_SRC}
                alt=""
                className="h-8 w-8 rounded-full object-cover shadow-sm sm:h-9 sm:w-9"
              />
            </div>

            <Button
              variant="default"
              size="sm"
              className="bg-primary hover:bg-forest-dark rounded-full px-4 shadow-md hover:shadow-lg transition-all"
              onClick={openVolunteerForm}
            >
              Seja Voluntário
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-4 transition-all"
              onClick={() => setDonateOpen(true)}
            >
              Doar
            </Button>
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground max-w-[120px] truncate hidden 2xl:inline" title={userLabel ?? ""}>
                  {userLabel}
                </span>
                <Button variant="outline" size="sm" className="rounded-full px-4" onClick={() => logout()}>
                  Sair
                </Button>
              </div>
            ) : (
              <Button variant="outline" size="sm" className="rounded-full px-4" asChild>
                <Link to="/login">Login</Link>
              </Button>
            )}
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
                <Button
                  variant="default"
                  className="bg-primary hover:bg-forest-dark w-full rounded-full"
                  onClick={openVolunteerForm}
                >
                  Seja Voluntário
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground w-full rounded-full"
                  onClick={() => {
                    setDonateOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Doar
                </Button>
                {isAuthenticated ? (
                  <>
                    {userLabel ? (
                      <p className="text-xs text-muted-foreground text-center px-2">{userLabel}</p>
                    ) : null}
                    <Button variant="outline" className="w-full rounded-full" onClick={() => { logout(); setIsMenuOpen(false); }}>
                      Sair
                    </Button>
                  </>
                ) : (
                  <Button variant="outline" className="w-full rounded-full" asChild>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      Login
                    </Link>
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
