import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ExternalLink, FileText, ImageIcon } from "lucide-react";
import { HERO_PAGE_IMAGE } from "@/lib/hero-image";

type CertificateItem = {
  title: string;
  description: string;
  file: string;
  type: "pdf" | "image";
};

const certificates: CertificateItem[] = [
  {
    title: "I Fórum C.T Norte",
    description: "Certificados — Fórum",
    file: "forum-ct-norte.pdf",
    type: "pdf",
  },
  {
    title: "Ambev VOA 2025",
    description: "Certificado — programa VOA",
    file: "ambev-voa-2025.pdf",
    type: "pdf",
  },
  {
    title: "Apresentação EXPOAGRO 2024",
    description: "Certificado de apresentação",
    file: "expoagro-2024.pdf",
    type: "pdf",
  },
  {
    title: "Instituto NW",
    description: "Certificado de participação",
    file: "instituto-nw-participacao.pdf",
    type: "pdf",
  },
  {
    title: "Lei de Incentivo ao Esporte",
    description: "Certificado do curso",
    file: "lei-incentivo-esporte.pdf",
    type: "pdf",
  },
  {
    title: "Curso PNH SEMSA",
    description: "Certificado — SEMSA",
    file: "curso-pnh-semsa.pdf",
    type: "pdf",
  },
  {
    title: "Introdução ao Pitch",
    description: "Certificado do curso",
    file: "introducao-pitch.pdf",
    type: "pdf",
  },
  {
    title: "Captação Inteligente",
    description: "Certificado do curso",
    file: "captacao-inteligente.pdf",
    type: "pdf",
  },
  {
    title: "Reunião de Rede 2025",
    description: "Certificado e participação em reunião institucional",
    file: "DANIEL LEANDRO DA SILVA  - Reunião de Rede_26-11-2025.pdf",
    type: "pdf",
  },
  {
    title: "Prêmio Artigo 19",
    description: "Reconhecimento em narrativa fotográfica da vida ribeirinha",
    file: "PRÊMIO Artigo 19 - Luz da Floresta - Narativas Fotográficas da Vida Ribeirinha de São Francisco do Caramuri.pdf",
    type: "pdf",
  },
  {
    title: "Portfolio Caramuri Agropecuário",
    description: "Certificação como tecnologia social pela Fundação Banco do Brasil",
    file: "Portfolio Sistema Caramuri Agropecuário certificado como tecnologia social pela Fundação Banco do Brasil.pdf",
    type: "pdf",
  },
  {
    title: "Certificado em foto",
    description: "Registro visual do certificado da instituição",
    file: "WhatsApp Image 2026-10-20 at 09.53.40.jpeg",
    type: "image",
  },
  {
    title: "Certificado em foto",
    description: "Registro visual do certificado da instituição",
    file: "WhatsApp Image 2026-10-20 at 09.53.41.jpeg",
    type: "image",
  },
  {
    title: "Certificado em foto",
    description: "Registro visual do certificado da instituição",
    file: "WhatsApp Image 2026-10-20 at 09.53.41 (1).jpeg",
    type: "image",
  },
  {
    title: "Certificado em foto",
    description: "Registro visual do certificado da instituição",
    file: "WhatsApp Image 2026-10-20 at 09.53.41 (2).jpeg",
    type: "image",
  },
];

const toPublicPath = (file: string) => `/certificados/${encodeURI(file)}`;

const Certificados = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />

      <HeroSection
        image={HERO_PAGE_IMAGE}
        title="Certificados"
        subtitle="Documentos e reconhecimentos do Caramuri"
      />

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8 rounded-[2rem] border border-border/80 bg-gradient-to-br from-primary/5 via-background to-secondary/10 p-5 sm:p-7 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary/80">Reconhecimento</p>
                <h2 className="section-title mb-2 text-left">Certificados e documentos</h2>
                <p className="section-subtitle max-w-2xl text-left">
                  Certificados, prêmios e reconhecimentos oficiais da Fundação Caramuri.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { label: "Documentos", value: certificates.length.toString() },
                  { label: "Prêmios", value: "3" },
                  { label: "Fotos", value: "4" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border/80 bg-background/80 px-3 py-3 text-center shadow-sm">
                    <div className="text-lg font-bold text-primary sm:text-xl">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {certificates.length === 0 ? (
            <div className="text-center py-12 rounded-2xl border border-dashed border-muted-foreground/30 bg-muted/30">
              <Award className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg">Em breve os certificados serão publicados aqui.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
              {certificates.map((item) => (
                <Card
                  key={item.file}
                  className="group overflow-hidden border border-border/70 bg-card/80 shadow-[0_14px_32px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
                >
                  <div className="relative overflow-hidden border-b border-border/80 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
                    {item.type === "image" ? (
                      <img
                        src={toPublicPath(item.file)}
                        alt={item.title}
                        className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-60 items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
                        <div className="flex flex-col items-center gap-3 rounded-2xl border border-primary/15 bg-background/70 px-6 py-5 text-primary shadow-sm">
                          <FileText className="h-12 w-12" />
                          <span className="text-xs font-semibold uppercase tracking-[0.28em]">PDF</span>
                        </div>
                      </div>
                    )}

                    <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-background/70 bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur-sm">
                      {item.type === "image" ? <ImageIcon className="h-3 w-3" /> : <FileText className="h-3 w-3" />}
                      {item.type === "image" ? "Foto" : "PDF"}
                    </span>
                  </div>

                  <CardHeader className="pb-2 pt-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary ring-4 ring-primary/5">
                      <Award className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg leading-snug text-foreground">{item.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">{item.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 pb-5">
                    <a
                      href={toPublicPath(item.file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3.5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {item.type === "image" ? "Ver foto" : "Ver documento"}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certificados;
