import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import ValueCard from "@/components/ValueCard";
import TeamMember from "@/components/TeamMember";
import { TreePine, Users, Heart } from "lucide-react";

const QUEM_SOMOS_IMG = "/quem-somos";
const D = "/diretoria";

const QuemSomos = () => {
  const values = [
    {
      icon: <TreePine className="w-12 h-12 sm:w-16 sm:h-16" />,
      iconColor: "text-primary",
      title: "Sustentabilidade",
      description: "Promovemos práticas que garantem o futuro das próximas gerações e da floresta.",
    },
    {
      icon: <Users className="w-12 h-12 sm:w-16 sm:h-16" />,
      iconColor: "text-blue-500",
      title: "Comunidade",
      description: "Valorizamos e fortalecemos as comunidades locais em todas as nossas iniciativas.",
    },
    {
      icon: <Heart className="w-12 h-12 sm:w-16 sm:h-16" />,
      iconColor: "text-red-500",
      title: "Compromisso",
      description: "Dedicação total à preservação da Amazônia e ao bem-estar de seus habitantes.",
    },
  ];

  const teamMembers = {
    president: { name: "Daniel Leandro", role: "Diretor Presidente" },
    vicePresidents: [
      { name: "Maria Nascimento", role: "Vice Diretora Presidente" },
      { name: "Francilene Souza", role: "1ª Secretária" },
      { name: "Marta Lima", role: "2ª Secretária" },
    ],
    treasurers: [
      { name: "Adelaide de Andrade", role: "1ª Tesoureira" },
      { name: "Orlenisse Silva", role: "2ª Tesoureira" },
    ],
    council: [
      { name: "Maria Fernanda", role: "1ª Conselheira" },
      { name: "Lucelia Cruz", role: "2ª Conselheira" },
      { name: "Naize Souza", role: "1ª Suplente" },
      { name: "Leticy Nascimento", role: "2ª Suplente" },
    ],
  };

  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />

      {/* Hero Section */}
      <HeroSection
        image={`${QUEM_SOMOS_IMG}/hero.jpg`}
        title="Caramuri Sustentável"
      />

      {/* Nossa História */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Nossa História</h2>
              <div className="text-muted-foreground space-y-3 sm:space-y-4 leading-relaxed text-sm sm:text-base">
                <p>
                  A Associação Comunitaria agrícola São Francisco do Caramuri (ACASFC) nasceu em 04 de outubro 1995, com um propósito claro e urgente: proteger a sociobiodiversidade amazônica, promovendo soluções inovadoras, sustentáveis e centradas nas pessoas.
                </p>
                <p>
                  Nosso trabalho vai além da conservação ambiental — buscamos fortalecer o tecido social e cultural da floresta, respeitando os saberes ancestrais enquanto abrimos caminhos para o futuro.
                </p>
                <p>
                  O nome CARAMURI carrega em si a essência da nossa missão. A palavra de origem indígena significa (Fruta que alimenta homens e animais da floresta), simbolizando a confluência da relação homem e natureza.
                </p>
                <p>
                  Desde a nossa fundação, trabalhamos lado a lado com comunidades locais, lideranças e empreendedores sociais para construir um modelo de organização justa, inclusiva e sustentável.
                </p>
              </div>
            </div>
            <div>
              <img
                src={`${QUEM_SOMOS_IMG}/comunidade.jpg`}
                alt="Comunidade Caramuri"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8 sm:mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Organograma */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8 sm:mb-12">Organograma</h2>
          
          {/* President */}
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <TeamMember
              image={`${D}/presidente.jpg`}
              name={teamMembers.president.name}
              role={teamMembers.president.role}
              size="large"
            />
            <div className="w-px h-6 sm:h-8 bg-border mt-3 sm:mt-4" />
          </div>

          {/* Vice Presidents and Secretaries */}
          <div className="flex justify-center gap-4 sm:gap-8 md:gap-16 flex-wrap mb-6 sm:mb-8">
            {teamMembers.vicePresidents.map((member, index) => (
              <TeamMember
                key={index}
                image={`${D}/vice-${index + 1}.jpg`}
                name={member.name}
                role={member.role}
                size="medium"
              />
            ))}
          </div>

          {/* Treasurers */}
          <div className="flex justify-center gap-4 sm:gap-8 md:gap-16 flex-wrap mb-6 sm:mb-8">
            {teamMembers.treasurers.map((member, index) => (
              <TeamMember
                key={index}
                image={`${D}/tesoureira-${index + 1}.jpg`}
                name={member.name}
                role={member.role}
                size="medium"
              />
            ))}
          </div>

          {/* Council */}
          <div className="flex justify-center gap-3 sm:gap-6 md:gap-12 flex-wrap">
            {teamMembers.council.map((member, index) => (
              <TeamMember
                key={index}
                image={`${D}/${index < 2 ? "conselheira" : "suplente"}-${(index % 2) + 1}.jpg`}
                name={member.name}
                role={member.role}
                size="small"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
