import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";

import heroSunset from "@/assets/hero-sunset.jpg";

const Noticias = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />

      {/* Hero Section */}
      <HeroSection
        image={heroSunset}
        title="Notícias"
      />

      {/* News Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Em breve, novas notícias serão publicadas aqui.
            </p>
            <p className="text-muted-foreground mt-2">
              Fique atualizado com as últimas novidades da comunidade Caramuri.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Noticias;
