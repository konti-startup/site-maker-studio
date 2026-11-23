import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import ProgramCard from "@/components/ProgramCard";
import {
  BookOpen,
  Leaf,
  Users,
  Wifi,
  Palette,
  GraduationCap,
  Activity,
  Recycle,
  HeartPulse,
} from "lucide-react";
import { HERO_PAGE_IMAGE } from "@/lib/hero-image";

const NOSSOS_PROJETOS = "/nossos-projetos";

const AreasAtuacao = () => {
  const programs = [
    {
      image: `${NOSSOS_PROJETOS}/caramuriagricola-BXyuvKmF.jpeg`,
      icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-primary",
      title: "Programa Caramuri Agrícola",
      description:
        "Apoio à agricultura familiar com práticas sustentáveis, geração de renda e respeito à cultura e ao meio ambiente amazônico.",
    },
    {
      image: `${NOSSOS_PROJETOS}/caramuricidadania-Zr9J-rPi.jpeg`,
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-blue-500",
      title: "Programa Caramuri Cidadania",
      description:
        "Fortalecimento dos direitos, da participação e do vínculo comunitário no território.",
    },
    {
      image: `${NOSSOS_PROJETOS}/capacitado.jpg`,
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-blue-500",
      title: "Programa Caramuri + Capacitado",
      description:
        "Promove capacitação técnica e profissional para geração de renda e autonomia comunitária.",
    },
    {
      image: `${NOSSOS_PROJETOS}/caramuriconectado-yGFScetD.jpeg`,
      icon: <Wifi className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-accent",
      title: "Programa Caramuri Conectado",
      description:
        "Inclusão digital e acesso à informação para aproximar a comunidade de oportunidades.",
    },
    {
      image: `${NOSSOS_PROJETOS}/caramuricultura-CiSt0aB-.jpeg`,
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-primary",
      title: "Programa Caramuri Cultura",
      description:
        "Valorização das expressões culturais, saberes locais e identidade do Caramuri.",
    },
    {
      image: `${NOSSOS_PROJETOS}/caramurieduca-CuMkGz0Q.jpeg`,
      icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-accent",
      title: "Programa Caramuri Educa",
      description:
        "Educação e formação contínua para crianças, jovens e adultos no território.",
    },
    {
      image: `${NOSSOS_PROJETOS}/caramuriesporte-CR86g195.jpeg`,
      icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-blue-500",
      title: "Programa Caramuri Esporte",
      description:
        "Esporte, lazer e saúde integrados à vida comunitária e ao turismo responsável.",
    },
    {
      image: `${NOSSOS_PROJETOS}/caramurirecicla-DIsnSsQ8.jpeg`,
      icon: <Recycle className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-primary",
      title: "Programa Caramuri Recicla",
      description:
        "Redução de resíduos, conscientização ambiental e práticas de economia circular.",
    },
    {
      image: `${NOSSOS_PROJETOS}/caramurisaude-CH6VLrJQ.jpeg`,
      icon: <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-red-500",
      title: "Programa Caramuri Saúde",
      description:
        "Cuidado com o bem-estar físico e mental das famílias e da comunidade.",
    },
    {
      image: `${NOSSOS_PROJETOS}/caramurisustentavel-BmJYnA-G.jpeg`,
      icon: <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconColor: "text-primary",
      title: "Programa Caramuri Sustentável",
      description:
        "Integração de conservação, turismo rural e uso responsável dos recursos naturais.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />

      <HeroSection image={HERO_PAGE_IMAGE} title="Nossos programas" />

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={program.title + index} {...program} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreasAtuacao;
