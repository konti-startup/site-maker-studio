import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import TeamMember from "@/components/TeamMember";
import {
  TreePine,
  Users,
  Heart,
  ShieldCheck,
  Handshake,
  GraduationCap,
  Leaf,
} from "lucide-react";
import { HERO_PAGE_IMAGE } from "@/lib/hero-image";

const QUEM_SOMOS_IMG = "/quem-somos";
const D = "/diretoria";

const QuemSomos = () => {
  const values = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      color: "from-emerald-500 to-green-600",
      title: "Transparência",
      description:
        "Agimos com total transparência em todas as nossas ações e decisões.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      color: "from-sky-500 to-cyan-600",
      title: "Cooperação",
      description:
        "Trabalhamos em conjunto para fortalecer a comunidade e alcançar objetivos comuns.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      color: "from-rose-500 to-pink-600",
      title: "Organização Social",
      description:
        "Valorizamos o associativismo e a união coletiva como base do desenvolvimento.",
    },
    {
      icon: <Leaf className="w-10 h-10" />,
      color: "from-lime-500 to-green-700",
      title: "Sustentabilidade",
      description:
        "Promovemos práticas sustentáveis que garantem o futuro da floresta e das próximas gerações.",
    },
    {
      icon: <Handshake className="w-10 h-10" />,
      color: "from-orange-400 to-amber-600",
      title: "Parcerias",
      description:
        "Construímos conexões estratégicas para ampliar nosso impacto e alcance.",
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      color: "from-violet-500 to-purple-700",
      title: "Capacitação e Oportunidades",
      description:
        "Investimos na formação e no desenvolvimento das pessoas para criar oportunidades.",
    },
  ];

  const teamMembers = {
    president: {
      name: "Daniel Leandro",
      role: "Diretor Presidente",
      image: `${D}/danielpres-Bd-m6WTG.jpeg`,
    },
    vicePresidents: [
      {
        name: "Maria Nascimento",
        role: "Vice Diretora Presidente",
        image: `${D}/marianasc-LWih4HoG.jpeg`,
      },
      {
        name: "Francilene Souza",
        role: "1ª Secretária",
        image: `${D}/francilene-BW77JoWJ.jpeg`,
      },
      {
        name: "Marta Lima",
        role: "2ª Secretária",
        image: `${D}/martalima-D8VJN12n.jpeg`,
      },
    ],
    treasurers: [
      {
        name: "Adelaide de Andrade",
        role: "1ª Tesoureira",
        image: `${D}/adelaide-BBRUaiXB.jpeg`,
      },
      {
        name: "Orlenisse Silva",
        role: "2ª Tesoureira",
        image: `${D}/orlenisse-MJCV_d9h.jpeg`,
      },
    ],
    council: [
      {
        name: "Maria Fernanda",
        role: "1ª Conselheira",
        image: `${D}/mariafernada-D_hVkfBb.jpeg`,
      },
      {
        name: "Lucelia Cruz",
        role: "2ª Conselheira",
        image: `${D}/luceliacruz-CHTn3uis.jpeg`,
      },
      {
        name: "Naize Souza",
        role: "1ª Suplente",
        image: `${D}/naizesouza-Cxry-fmF.jpeg`,
      },
      {
        name: "Leticy Nascimento",
        role: "2ª Suplente",
        image: `${D}/leticy-BceE2ZuY.jpeg`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      <SocialFloat />

      {/* Hero */}
      <HeroSection image={HERO_PAGE_IMAGE} title="Caramuri Sustentável" />

      {/* Nossa História */}
      <section className="relative py-20 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Nossa História
              </span>

              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                Associação Comunitária Agrícola
                <span className="text-primary"> São Francisco do Caramuri</span>
              </h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  A ACASFC nasceu em 04 de outubro de 1995 com um propósito
                  claro: proteger a sociobiodiversidade amazônica e promover
                  desenvolvimento sustentável para as famílias da Comunidade São
                  Francisco do Caramuri.
                </p>

                <p>
                  Nosso trabalho fortalece comunidades locais, incentiva a
                  agricultura sustentável, promove educação, saúde e qualidade
                  de vida, sempre respeitando os saberes ancestrais da floresta.
                </p>

                <p>
                  O nome <strong>CARAMURI</strong>, de origem indígena,
                  representa “Fruta que alimenta homens e animais da floresta”,
                  simbolizando a conexão entre natureza, cultura e futuro.
                </p>

                <p>
                  Seguimos construindo um modelo de organização social baseado
                  no associativismo, inovação e protagonismo comunitário.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-green-500/20 rounded-3xl blur-2xl opacity-60" />

              <img
                src={`${QUEM_SOMOS_IMG}/comunidade.jpg`}
                alt="Comunidade Caramuri"
                className="relative rounded-3xl shadow-2xl w-full object-cover border border-white/10 hover:scale-[1.01] transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Impacto */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Missão */}
            <div className="group bg-white dark:bg-card rounded-3xl p-8 shadow-xl border border-border hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>

              <h3 className="text-3xl font-black text-green-600 mb-4">
                Missão
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Promover o desenvolvimento socioeconômico sustentável da
                Comunidade São Francisco do Caramuri por meio da conservação
                ambiental, da agricultura sustentável e da educação,
                garantindo saúde, qualidade de vida e bem-estar,
                fortalecendo o protagonismo comunitário e o empoderamento
                das mulheres.
              </p>
            </div>

            {/* Visão */}
            <div className="group bg-white dark:bg-card rounded-3xl p-8 shadow-xl border border-border hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>

              <h3 className="text-3xl font-black text-blue-600 mb-4">
                Visão
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Ser referência no Estado do Amazonas como modelo de organização
                social baseada no associativismo, promovendo desenvolvimento
                sustentável, fortalecimento das cadeias produtivas, inovação,
                protagonismo comunitário e melhoria da qualidade de vida.
              </p>
            </div>

            {/* Impacto */}
            <div className="group bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-8 shadow-2xl text-white hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl font-black mb-4">
                Impacto
              </h3>

              <p className="leading-relaxed text-white/90 text-lg">
                ACASFC — A força do associativismo e do desenvolvimento
                sustentável da Comunidade São Francisco do Caramuri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.12),transparent_40%)]" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              Nossos Valores
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              O que move a ACASFC
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.color}`}
                />

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} text-white flex items-center justify-center mb-6 shadow-lg`}
                >
                  {value.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {value.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organograma */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              Diretoria
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Organograma Institucional
            </h2>
          </div>

          {/* Presidente */}
          <div className="flex flex-col items-center mb-10">
            <TeamMember
              image={teamMembers.president.image}
              name={teamMembers.president.name}
              role={teamMembers.president.role}
              size="large"
            />

            <div className="w-1 h-10 bg-primary/40 rounded-full mt-4" />
          </div>

          {/* Vice */}
          <div className="flex justify-center gap-6 md:gap-16 flex-wrap mb-10">
            {teamMembers.vicePresidents.map((member, index) => (
              <TeamMember
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
                size="medium"
              />
            ))}
          </div>

          {/* Tesouraria */}
          <div className="flex justify-center gap-6 md:gap-16 flex-wrap mb-10">
            {teamMembers.treasurers.map((member, index) => (
              <TeamMember
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
                size="medium"
              />
            ))}
          </div>

          {/* Conselho */}
          <div className="flex justify-center gap-4 md:gap-10 flex-wrap">
            {teamMembers.council.map((member, index) => (
              <TeamMember
                key={index}
                image={member.image}
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