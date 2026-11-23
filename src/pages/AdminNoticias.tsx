import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { HERO_PAGE_IMAGE } from "@/lib/hero-image";
import { useAuth } from "@/contexts/AuthContext";
import { createNewsRequest, uploadNewsImage } from "@/lib/api";
import { toast } from "sonner";

const AdminNoticias = () => {
  const navigate = useNavigate();
  const { token, isAuthenticated } = useAuth();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Caramuri");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [pending, setPending] = useState(false);

  const handleImageSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setPending(true);
    try {
      const uploadedUrl = await uploadNewsImage(file, token);
      setImage(uploadedUrl);
      toast.success("Imagem enviada com sucesso.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao enviar imagem.");
    } finally {
      setPending(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !category.trim() || !content.trim() || !image.trim()) {
      toast.error("Preencha título, categoria, texto e imagem.");
      return;
    }

    setPending(true);
    try {
      await createNewsRequest({ title: title.trim(), category: category.trim(), content: content.trim(), image: image.trim() }, token);
      toast.success("Notícia criada com sucesso.");
      navigate("/noticias");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro ao criar notícia.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />
      <HeroSection image={HERO_PAGE_IMAGE} title="Nova notícia" subtitle="Publique uma matéria no site" />

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border bg-card p-5 shadow-sm sm:p-8">
            <div className="space-y-2">
              <Label htmlFor="news-title">Título</Label>
              <Input id="news-title" value={title} onChange={(e) => setTitle(e.target.value)} disabled={pending} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="news-category">Categoria</Label>
              <Input id="news-category" value={category} onChange={(e) => setCategory(e.target.value)} disabled={pending} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="news-image">Imagem da notícia</Label>
              <Input
                id="news-image"
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageSelect}
                disabled={pending}
              />
              <p className="text-xs text-muted-foreground">Você pode escolher uma imagem do celular ou do computador.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="news-image-url">Ou use uma URL</Label>
              <Input
                id="news-image-url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                disabled={pending}
                placeholder="https://..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="news-content">Texto</Label>
              <Textarea id="news-content" value={content} onChange={(e) => setContent(e.target.value)} disabled={pending} rows={10} />
            </div>

            <Button type="submit" className="w-full rounded-full" disabled={pending}>
              {pending ? "Publicando..." : "Publicar notícia"}
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminNoticias;
