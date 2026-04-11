import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

import heroSunset from "@/assets/hero-sunset.jpg";

/** Adicione arquivos em `public/certificados/` e inclua uma entrada por certificado. */
const certificates: { title: string; description?: string; href: string }[] = [
  // Ex.: { title: "Nome do certificado", description: "Ano ou órgão emissor", href: "/certificados/arquivo.pdf" },
];

const Certificados = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />

      <HeroSection
        image={heroSunset}
        title="Certificados"
        subtitle="Documentos e reconhecimentos do Caramuri"
      />

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-3 sm:mb-4 text-center">Certificados e documentos</h2>
          <p className="section-subtitle mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
            Certificados e reconhecimentos oficiais da Fundação Caramuri.
          </p>

          {certificates.length === 0 ? (
            <div className="text-center py-12 rounded-2xl border border-dashed border-muted-foreground/30 bg-muted/30">
              <Award className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg">Em breve os certificados serão publicados aqui.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {certificates.map((item) => (
                <Card key={item.href} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-2">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    {item.description ? <CardDescription>{item.description}</CardDescription> : null}
                  </CardHeader>
                  <CardContent>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
                    >
                      Ver documento
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certificados;
