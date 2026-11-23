import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroCarousel from "@/components/HeroCarousel";
import ProjectCard from "@/components/ProjectCard";
import StatCard from "@/components/StatCard";
import { TreePine, Users, Droplets } from "lucide-react";

const CARROSEL = "/carrosel";
const PROJETOS_IMG = "/3%20imagens";

const HERO_SLIDE_TITLE = "Comunidade São Francisco do Caramuri";
const HERO_SLIDE_SUBTITLE =
  "Conecte-se com Caramuri e viva um momento único! Curta a pesca esportiva, viva a experiência do turismo rural, aproveite o lazer em meio à natureza e saboreie o melhor abacaxi e pitaya regional.";

const DETALHE_AGRICULTURA_FAMILIAR =
  "A agricultura familiar em São Francisco do Caramuri é a principal base econômica da comunidade e tem transformado a vida dos moradores com o apoio da Associação Comunitária Agrícola São Francisco do Caramuri (ACASFC). Através da organização social, da captação de recursos e da iniciativa coletiva os agricultores melhoraram o cultivo do abacaxi, cupuaçu, mandioca, maracujá, melancia e maxixi com a inserção de novas culturas como a pitaya, banana e hortaliças, seguido da produção de leite, queijo coalho e manteiga artesanal de nata. Ampliaram o acesso a projetos e políticas públicas e fortaleceram a geração de renda local. A ACASFC tem sido essencial para promover capacitações, adquirir equipamentos e incentivar práticas sustentáveis, valorizando o protagonismo dos comunitários, garantindo melhores condições de vida no campo e promovendo a sustentabilidade local.";

const DETALHE_INCLUSAO_PRODUTIVA =
  "O Programa Caramuri + Capacitado, promovido pela Associação Comunitária Agrícola São Francisco do Caramuri (ACASFC), tem sido fundamental na transformação da vida dos moradores da comunidade. Por meio de capacitações em técnicas de manejo sustentável, tratos culturais e empreendedorismo, os agricultores familiares aprimoraram suas habilidades, aumentando a produtividade e a renda local. Além disso, o projeto possibilitou a aquisição de materiais e equipamentos, bem como a implantação do Centro de Capacitação da Agricultura Familiar, fortalecendo as ações da ACASFC. Essas ações contribuíram para o desenvolvimento sustentável e a inclusão social na região.";

const DETALHE_PESCA_ESPORTIVA =
  "A pesca esportiva comunitária em São Francisco do Caramuri ganhou destaque com o Torneio de 2019, promovido pela Associação Comunitária Agrícola São Francisco do Caramuri (ACASFC). Esse evento não apenas atraiu pescadores e turistas, mas também impulsionou a economia local ao integrar atividades como agricultura familiar, pecuária e extrativismo. Durante o torneio, os visitantes puderam adquirir produtos locais, como frutas, hortaliças e artesanato, gerando renda para os moradores. Além disso, a iniciativa fortaleceu o turismo de base comunitária, promovendo o desenvolvimento sustentável e valorizando a cultura local.";

const Index = () => {
  const heroSlides = [
    `${CARROSEL}/abacaxi.jpeg`,
    `${CARROSEL}/pescadores.jpeg`,
    `${CARROSEL}/pitaya.jpeg`,
    `${CARROSEL}/vacas.jpeg`,
  ].map((image) => ({
    image,
    title: HERO_SLIDE_TITLE,
    subtitle: HERO_SLIDE_SUBTITLE,
  }));

  const projects = [
    {
      image: `${PROJETOS_IMG}/agricultura.jpg`,
      category: "Agricultura",
      categoryColor: "green" as const,
      title: "Agricultura Familiar",
      date: "24 de Março 2024",
      description: "Conheça um pouco mais sobre o Programa Caramuri Agrícola Sustentável na Comunidade São Francisco do Caramuri.",
      detail: DETALHE_AGRICULTURA_FAMILIAR,
    },
    {
      image: `${PROJETOS_IMG}/empreendedorismo.jpg`,
      category: "Empreendedorismo",
      categoryColor: "orange" as const,
      title: "Inclusão produtiva",
      date: "24 de Março 2024",
      description: "Veja o que é o empreendedorismo rural na Comunidade por meio do Programa Caramuri + Capacitado.",
      detail: DETALHE_INCLUSAO_PRODUTIVA,
    },
    {
      image: `${PROJETOS_IMG}/pesca.jpg`,
      category: "Lazer",
      categoryColor: "blue" as const,
      title: "Pesca Esportiva",
      date: "24 de Março 2024",
      description: "A Pesca Esportiva Comunitária em São Francisco do Caramuri ganhou destaque em 2019, fazendo parte das atividades da economia criativa.",
      detail: DETALHE_PESCA_ESPORTIVA,
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
              value="6 mil"
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
