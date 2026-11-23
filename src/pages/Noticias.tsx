import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import { HERO_PAGE_IMAGE } from "@/lib/hero-image";
import { fetchNews, type NewsItem } from "@/lib/api";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarDays } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

function formatNewsDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer text-left h-full flex flex-col">
          <div className="aspect-video w-full overflow-hidden bg-muted shrink-0">
            <img
              src={item.image}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <CardHeader className="pb-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">{item.category}</span>
            <CardTitle className="text-lg sm:text-xl leading-snug line-clamp-2">{item.title}</CardTitle>
            <CardDescription className="flex items-center gap-1.5 text-xs">
              <CalendarDays className="w-3.5 h-3.5 shrink-0" />
              {formatNewsDate(item.date)}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0 flex-1 flex flex-col">
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{item.content}</p>
            <p className="text-xs text-primary font-medium mt-3">Clique para ler na íntegra</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="pr-8">{item.title}</DialogTitle>
        </DialogHeader>
        <p className="text-xs text-muted-foreground mb-2">{formatNewsDate(item.date)} · {item.category}</p>
        <div className="rounded-lg overflow-hidden mb-4 border bg-muted">
          <img src={item.image} alt="" className="w-full max-h-64 object-cover" />
        </div>
        <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{item.content}</p>
      </DialogContent>
    </Dialog>
  );
}

function NewsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="overflow-hidden">
          <Skeleton className="aspect-video w-full rounded-none" />
          <CardHeader>
            <Skeleton className="h-3 w-20 mb-2" />
            <Skeleton className="h-6 w-full mb-2" />
            <Skeleton className="h-4 w-40" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-16 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

const Noticias = () => {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  });

  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />

      <HeroSection image={HERO_PAGE_IMAGE} title="Notícias" />

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-center">
            {isAuthenticated && (
              <Button asChild className="rounded-full">
                <Link to="/admin/noticias">+ Nova notícia</Link>
              </Button>
            )}
          </div>

          {isPending && <NewsGridSkeleton />}

          {isError && (
            <div className="text-center py-12 space-y-4">
              <p className="text-destructive">{error instanceof Error ? error.message : "Erro ao carregar."}</p>
              <Button variant="outline" className="rounded-full" onClick={() => refetch()}>
                Tentar novamente
              </Button>
            </div>
          )}

          {!isPending && !isError && data?.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">Ainda não há notícias publicadas.</p>
            </div>
          )}

          {!isPending && !isError && data && data.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {data.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Noticias;
