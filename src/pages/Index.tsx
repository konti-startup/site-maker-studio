import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import StatCard from "@/components/StatCard";
import { TreePine, Users, Droplets } from "lucide-react";

import heroHome from "@/assets/hero-home.jpg";
import agriculture from "@/assets/agriculture.jpg";
import entrepreneurship from "@/assets/entrepreneurship.jpg";
import fishing from "@/assets/fishing.jpg";

const Index = () => {
  const projects = [
    {
      image: agriculture,
      category: "Agricultura",
      categoryColor: "green" as const,
      title: "Agricultura Familiar",
      date: "24 de Março 2024",
      description: "Conheça um pouco mais sobre o Programa Caramuri Agrícola Sustentável na Comunidade São Francisco do Caramuri.",
    },
    {
      image: entrepreneurship,
      category: "Empreendedorismo",
      categoryColor: "orange" as const,
      title: "Inclusão produtiva",
      date: "24 de Março 2024",
      description: "Veja o que é o empreendedorismo rural na Comunidade por meio do Programa Caramuri + Capacitado.",
    },
    {
      image: fishing,
      category: "Lazer",
      categoryColor: "blue" as const,
      title: "Pesca Esportiva",
      date: "24 de Março 2024",
      description: "A Pesca Esportiva Comunitária em São Francisco do Caramuri ganhou destaque em 2019, fazendo parte das atividades da economia criativa e do turismo de base rural.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />

      {/* Hero Section */}
      <HeroSection
        image={heroHome}
        title="Comunidade São Francisco do Caramuri"
        subtitle="Conecte-se com Caramuri e viva um momento único! Curta a pesca esportiva, viva a experiência do turismo rural, aproveite o lazer em meio à natureza e saboreie o melhor abacaxi e pitaya regional."
        showButton
        buttonText="Saber Mais"
      />

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-4">
            <span className="lowercase">projeto</span>S DA COMUNIDADE
          </h2>
          <p className="section-subtitle mb-12">
            Conheça as iniciativas que estão transformando nossa comunidade.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard
              icon={<TreePine className="w-12 h-12" />}
              value="6 Mil"
              label="Hectares Preservados"
            />
            <StatCard
              icon={<Users className="w-12 h-12" />}
              value="300"
              label="Pessoas Beneficiadas"
            />
            <StatCard
              icon={<Droplets className="w-12 h-12" />}
              value="80%"
              label="Redução do Desmatamento"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
