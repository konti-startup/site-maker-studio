import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import { HERO_PAGE_IMAGE } from "@/lib/hero-image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Youtube } from "lucide-react";

type VideoItem = {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
};

const videos: VideoItem[] = [
  {
    title: "Vídeo 1",
    description: "Descrição do vídeo 1",
    url: "https://www.youtube.com/watch?v=VIDEO_1",
    thumbnail: "https://img.youtube.com/vi/VIDEO_1/hqdefault.jpg",
  },
  {
    title: "Vídeo 2",
    description: "Descrição do vídeo 2",
    url: "https://www.youtube.com/watch?v=VIDEO_2",
    thumbnail: "https://img.youtube.com/vi/VIDEO_2/hqdefault.jpg",
  },
  {
    title: "Vídeo 3",
    description: "Descrição do vídeo 3",
    url: "https://www.youtube.com/watch?v=VIDEO_3",
    thumbnail: "https://img.youtube.com/vi/VIDEO_3/hqdefault.jpg",
  },
  {
    title: "Vídeo 4",
    description: "Descrição do vídeo 4",
    url: "https://www.youtube.com/watch?v=VIDEO_4",
    thumbnail: "https://img.youtube.com/vi/VIDEO_4/hqdefault.jpg",
  },
  {
    title: "Vídeo 5",
    description: "Descrição do vídeo 5",
    url: "https://www.youtube.com/watch?v=VIDEO_5",
    thumbnail: "https://img.youtube.com/vi/VIDEO_5/hqdefault.jpg",
  },
  {
    title: "Vídeo 6",
    description: "Descrição do vídeo 6",
    url: "https://www.youtube.com/watch?v=VIDEO_6",
    thumbnail: "https://img.youtube.com/vi/VIDEO_6/hqdefault.jpg",
  },
  {
    title: "Vídeo 7",
    description: "Descrição do vídeo 7",
    url: "https://www.youtube.com/watch?v=VIDEO_7",
    thumbnail: "https://img.youtube.com/vi/VIDEO_7/hqdefault.jpg",
  },
];

const Videos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />

      <HeroSection
        image={HERO_PAGE_IMAGE}
        title="Vídeos"
        subtitle="Acompanhe os principais vídeos e registros da Fundação Caramuri"
      />

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Youtube className="h-4 w-4" />
              7 vídeos em destaque
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {videos.map((video) => (
              <Card key={video.title} className="group overflow-hidden border border-border/70 bg-card/80 shadow-[0_14px_32px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg backdrop-blur-sm">
                        <Play className="ml-1 h-7 w-7 fill-current" />
                      </div>
                    </div>
                  </div>
                </a>

                <CardHeader className="pb-2 pt-5">
                  <CardTitle className="text-lg leading-snug text-foreground">{video.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">{video.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0 pb-5">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3.5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    Assistir vídeo
                    <Play className="h-4 w-4 fill-current" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Videos;
