import { Link } from "react-router-dom";
import { Facebook, Mail, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="footer-title">CARAMURI</h3>
            <p className="text-gray-400 text-sm mb-4">
              Caramuri Sustentável na Amazônia
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
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
          <div>
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
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="footer-title">Receba Notícias</h3>
            <p className="text-gray-400 text-sm mb-4">
              Fique atualizado com as nossas últimas notícias
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Digite seu email"
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-500"
              />
              <Button size="icon" className="bg-accent hover:bg-orange-dark">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 © 2025 Fundação CAMURI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
