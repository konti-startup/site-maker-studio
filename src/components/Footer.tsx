import { Link } from "react-router-dom";
import { Facebook, Mail, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* About */}
          <div className="text-center sm:text-left">
            <h3 className="footer-title">CARAMURI</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Caramuri Sustentável na Amazônia
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="footer-title">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/quem-somos" className="footer-link">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/areas-atuacao" className="footer-link">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="footer-link">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="text-center sm:text-left">
            <h3 className="footer-title">Conteúdo</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/noticias" className="footer-link">
                  Notícias
                </Link>
              </li>
              <li>
                <Link to="/areas-atuacao" className="footer-link">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link to="/certificados" className="footer-link">
                  Certificados
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="footer-title">Receba Notícias</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Fique atualizado com as nossas últimas notícias
            </p>
            <div className="flex gap-2 max-w-xs mx-auto sm:mx-0">
              <Input
                type="email"
                placeholder="Digite seu email"
                className="bg-transparent border-muted-foreground/30 text-primary-foreground placeholder:text-muted-foreground rounded-full text-sm"
              />
              <Button size="icon" className="bg-accent hover:bg-orange-dark rounded-full shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 pt-6 sm:pt-8">
          <p className="text-center text-muted-foreground text-xs sm:text-sm mb-4">
            Parceiros
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <img
              src="/parceiros/konti.png"
              alt="Logo da Konti"
              className="h-12 sm:h-16 w-auto object-contain bg-white rounded-md p-1"
            />
            <img
              src="/parceiros/ltd.png"
              alt="Logo do LTD"
              className="h-12 sm:h-16 w-auto object-contain bg-white rounded-md p-1"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-muted-foreground/20 pt-6 sm:pt-8 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2026 © 2025 Fundação CAMURI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
