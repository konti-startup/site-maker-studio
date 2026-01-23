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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-4">Nosso Compromisso com a Transparência</h2>
          <p className="section-subtitle mb-12">
            Acreditamos que a transparência é fundamental para construir confiança e demonstrar nosso impacto.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="transparency-stat">
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="transparency-value mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-4">Governança e Compliance</h2>
          <p className="section-subtitle mb-12">
            Nossa estrutura de governança garante que todos os recursos sejam utilizados de forma eficiente e ética.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Resource Distribution */}
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <PieChart className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Distribuição de Recursos</h3>
              </div>
              <div className="space-y-4">
                {distribution.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-foreground">{item.label}</span>
                    <span className="font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Governance Structure */}
            <div className="bg-card rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">Estrutura de Governança</h3>
              </div>
              <div className="space-y-4">
                {governance.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item}</span>
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
