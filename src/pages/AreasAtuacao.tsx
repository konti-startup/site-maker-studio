import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import ProgramCard from "@/components/ProgramCard";
import { BookOpen, Leaf, Heart, TreePine, Fish, Users } from "lucide-react";

import heroSunset from "@/assets/hero-sunset.jpg";
import agriculture from "@/assets/agriculture.jpg";
import sustainable from "@/assets/sustainable.jpg";
import training from "@/assets/training.jpg";
import fishing from "@/assets/fishing.jpg";
import entrepreneurship from "@/assets/entrepreneurship.jpg";
import communityGroup from "@/assets/community-group.jpg";

const AreasAtuacao = () => {
  const programs = [
    {
      image: agriculture,
      icon: <BookOpen className="w-6 h-6" />,
      iconColor: "text-primary",
      title: "Programa Caramuri Agrícola",
      description: "O Programa Caramuri Agrícola apoia a agricultura familiar com práticas sustentáveis, geração de renda e respeito à cultura e ao meio ambiente amazônico.",
    },
    {
      image: sustainable,
      icon: <Leaf className="w-6 h-6" />,
      iconColor: "text-primary",
      title: "Programa Caramuri Sustentável",
      description: "Integra pesca esportiva, turismo rural e conservação ambiental para fortalecer a economia local de forma sustentável.",
    },
    {
      image: training,
      icon: <Heart className="w-6 h-6" />,
      iconColor: "text-accent",
      title: "Programa Caramuri + Capacitado",
      description: "Promove capacitação técnica e profissional para geração de renda e autonomia comunitária.",
    },
    {
      image: fishing,
      icon: <Fish className="w-6 h-6" />,
      iconColor: "text-blue-500",
      title: "Pesca Esportiva Comunitária",
      description: "Turismo sustentável através da pesca esportiva, gerando renda e preservando os recursos naturais.",
    },
    {
      image: entrepreneurship,
      icon: <Users className="w-6 h-6" />,
      iconColor: "text-accent",
      title: "Empreendedorismo Rural",
      description: "Apoio ao empreendedorismo local com foco em produtos regionais e artesanato tradicional.",
    },
    {
      image: communityGroup,
      icon: <TreePine className="w-6 h-6" />,
      iconColor: "text-primary",
      title: "Preservação Ambiental",
      description: "Projetos de reflorestamento e educação ambiental para proteger a biodiversidade amazônica.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />

      {/* Hero Section */}
      <HeroSection
        image={heroSunset}
        title="Nossos projetos"
      />

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreasAtuacao;
