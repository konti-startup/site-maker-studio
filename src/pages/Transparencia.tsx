import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import { PieChart, Shield, Check } from "lucide-react";

import heroSunset from "@/assets/hero-sunset.jpg";

const Transparencia = () => {
  const stats = [
    { label: "Recursos Investidos", value: "R$ 300 mil", description: "Total investido em projetos em 2024" },
    { label: "Comunidades Atendidas", value: "28", description: "Número de comunidades beneficiadas" },
    { label: "Voluntários Ativos", value: "80", description: "Pessoas envolvidas em nossos projetos" },
    { label: "Taxa de Sucesso", value: "92%", description: "Projetos concluídos com sucesso" },
  ];

  const distribution = [
    { label: "Projetos e projetos", value: "70%" },
    { label: "Custos Operacionais", value: "20%" },
    { label: "Reserva Técnica", value: "10%" },
  ];

  const governance = [
    "Conselho Diretor",
    "Conselho Fiscal",
    "Comitê de Ética",
    "Auditoria Externa Independente",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />

      {/* Hero Section */}
      <HeroSection
        image={heroSunset}
        title="Transparência"
      />

      {/* Commitment Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-3 sm:mb-4">Nosso Compromisso com a Transparência</h2>
          <p className="section-subtitle mb-8 sm:mb-12">
            Acreditamos que a transparência é fundamental para construir confiança e demonstrar nosso impacto.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="transparency-stat">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="transparency-value mb-1 sm:mb-2">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-3 sm:mb-4">Governança e Compliance</h2>
          <p className="section-subtitle mb-8 sm:mb-12">
            Nossa estrutura de governança garante que todos os recursos sejam utilizados de forma eficiente e ética.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Resource Distribution */}
            <div className="bg-card rounded-2xl p-5 sm:p-8 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <PieChart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground">Distribuição de Recursos</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {distribution.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-foreground text-sm sm:text-base">{item.label}</span>
                    <span className="font-semibold text-foreground text-sm sm:text-base">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Governance Structure */}
            <div className="bg-card rounded-2xl p-5 sm:p-8 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 rounded-full bg-orange-light flex items-center justify-center">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground">Estrutura de Governança</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {governance.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transparencia;
