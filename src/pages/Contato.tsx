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
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Entre em Contato</h2>
              <form className="space-y-5 sm:space-y-6">
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
                    className="contact-input min-h-[100px] sm:min-h-[120px] resize-y"
                    placeholder=""
                  />
                </div>
                <Button className="bg-primary hover:bg-forest-dark px-6 sm:px-8 rounded-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Informações de Contato</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">contato@camuri.org</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">+55 (92) 99285-1723</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">São Francisco do Caramuri, Manaus - AM</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">Segunda a Sexta: 9h às 18h</span>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-6 sm:mt-8">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Localização</h3>
                <div className="bg-muted rounded-2xl h-48 sm:h-64 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Mapa em breve</p>
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
