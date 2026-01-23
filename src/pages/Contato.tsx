import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

import heroSunset from "@/assets/hero-sunset.jpg";

const Contato = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />

      {/* Hero Section */}
      <HeroSection
        image={heroSunset}
        title="Contato"
      />

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Entre em Contato</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-foreground mb-2">Nome Completo</label>
                  <input
                    type="text"
                    className="contact-input"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="contact-input"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Assunto</label>
                  <input
                    type="text"
                    className="contact-input"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-sm text-foreground mb-2">Mensagem</label>
                  <textarea
                    className="contact-input min-h-[120px] resize-y"
                    placeholder=""
                  />
                </div>
                <Button className="bg-primary hover:bg-forest-dark px-8">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Informações de Contato</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-foreground">contato@camuri.org</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="text-foreground">+55 (92) 99285-1723</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-foreground">São Francisco do Caramuri, Manaus - AM</span>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <span className="text-foreground">Segunda a Sexta: 9h às 18h</span>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Localização</h3>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <p className="text-muted-foreground">Mapa em breve</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
