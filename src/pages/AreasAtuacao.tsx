import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import ProgramCard from "@/components/ProgramCard";
import { BookOpen, Leaf, Heart, TreePine, Fish, Users } from "lucide-react";

const NOSSOS_PROJETOS = "/nossos-projetos";

const AreasAtuacao = () => {
  const programs = [
    {
      image: `${NOSSOS_PROJETOS}/programa-agricola.jpg`,
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-primary",
      title: "Programa Caramuri Agrícola",
      description: "O Programa Caramuri Agrícola apoia a agricultura familiar com práticas sustentáveis, geração de renda e respeito à cultura e ao meio ambiente amazônico.",
    },
    {
      image: `${NOSSOS_PROJETOS}/programa-sustentavel.jpg`,
      icon: <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-primary",
      title: "Programa Caramuri Sustentável",
      description: "Integra pesca esportiva, turismo rural e conservação ambiental para fortalecer a economia local de forma sustentável.",
    },
    {
      image: `${NOSSOS_PROJETOS}/programa-capacitado.jpg`,
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-accent",
      title: "Programa Caramuri + Capacitado",
      description: "Promove capacitação técnica e profissional para geração de renda e autonomia comunitária.",
    },
    {
      image: `${NOSSOS_PROJETOS}/pesca-esportiva.jpg`,
      icon: <Fish className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-blue-500",
      title: "Pesca Esportiva Comunitária",
      description: "Turismo sustentável através da pesca esportiva, gerando renda e preservando os recursos naturais.",
    },
    {
      image: `${NOSSOS_PROJETOS}/empreendedorismo-rural.jpg`,
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-accent",
      title: "Empreendedorismo Rural",
      description: "Apoio ao empreendedorismo local com foco em produtos regionais e artesanato tradicional.",
    },
    {
      image: `${NOSSOS_PROJETOS}/preservacao-ambiental.jpg`,
      icon: <TreePine className="w-5 h-5 sm:w-6 sm:h-6" />,
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
        image={`${NOSSOS_PROJETOS}/hero.jpg`}
        title="Nossos projetos"
      />

      {/* Programs Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
