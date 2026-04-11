import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroCarousel from "@/components/HeroCarousel";
import ProjectCard from "@/components/ProjectCard";
import StatCard from "@/components/StatCard";
import { TreePine, Users, Droplets } from "lucide-react";

const CARROSEL = "/carrosel";
const PROJETOS_IMG = "/3%20imagens";

const Index = () => {
  const heroSlides = [
    {
      image: `${CARROSEL}/slide-1.jpg`,
      title: "Comunidade São Francisco do Caramuri",
      subtitle: "Conecte-se com Caramuri e viva um momento único! Curta a pesca esportiva, viva a experiência do turismo rural, aproveite o lazer em meio à natureza e saboreie o melhor abacaxi e pitaya regional.",
    },
    {
      image: `${CARROSEL}/slide-2.jpg`,
      title: "Preservando a Amazônia",
      subtitle: "Trabalhamos lado a lado com comunidades locais para proteger a sociobiodiversidade amazônica e promover o desenvolvimento sustentável.",
    },
    {
      image: `${CARROSEL}/slide-3.jpg`,
      title: "Turismo Sustentável",
      subtitle: "Descubra as belezas naturais da região através do ecoturismo responsável e viva experiências inesquecíveis.",
    },
  ];

  const projects = [
    {
      image: `${PROJETOS_IMG}/agricultura.jpg`,
      category: "Agricultura",
      categoryColor: "green" as const,
      title: "Agricultura Familiar",
      date: "24 de Março 2024",
      description: "Conheça um pouco mais sobre o Programa Caramuri Agrícola Sustentável na Comunidade São Francisco do Caramuri.",
    },
    {
      image: `${PROJETOS_IMG}/empreendedorismo.jpg`,
      category: "Empreendedorismo",
      categoryColor: "orange" as const,
      title: "Inclusão produtiva",
      date: "24 de Março 2024",
      description: "Veja o que é o empreendedorismo rural na Comunidade por meio do Programa Caramuri + Capacitado.",
    },
    {
      image: `${PROJETOS_IMG}/pesca.jpg`,
      category: "Lazer",
      categoryColor: "blue" as const,
      title: "Pesca Esportiva",
      date: "24 de Março 2024",
      description: "A Pesca Esportiva Comunitária em São Francisco do Caramuri ganhou destaque em 2019, fazendo parte das atividades da economia criativa.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />

      {/* Hero Carousel */}
      <HeroCarousel
        slides={heroSlides}
        showButton
        buttonText="Saber Mais"
      />

      {/* Projects Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-3 sm:mb-4 uppercase tracking-[0.12em] sm:tracking-[0.18em]">
            PROJETOS DA COMUNIDADE
          </h2>
          <p className="section-subtitle mb-8 sm:mb-12">
            Conheça as iniciativas que estão transformando nossa comunidade.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <StatCard
              icon={<TreePine className="w-10 h-10 sm:w-12 sm:h-12" />}
              value="6 Mil"
              label="Hectares Preservados"
            />
            <StatCard
              icon={<Users className="w-10 h-10 sm:w-12 sm:h-12" />}
              value="300"
              label="Pessoas Beneficiadas"
            />
            <StatCard
              icon={<Droplets className="w-10 h-10 sm:w-12 sm:h-12" />}
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
