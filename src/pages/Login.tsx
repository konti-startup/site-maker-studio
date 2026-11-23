import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialFloat from "@/components/SocialFloat";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HERO_PAGE_IMAGE } from "@/lib/hero-image";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password) {
      toast.error("Preencha usuário e senha.");
      return;
    }
    setPending(true);
    try {
      await login(username.trim(), password);
      toast.success("Login realizado.");
      navigate("/");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro ao entrar.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <SocialFloat />

      <HeroSection image={HERO_PAGE_IMAGE} title="Login" />

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-md">
          {isAuthenticated ? (
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">Você já está conectado.</p>
              <Button asChild variant="default" className="rounded-full">
                <Link to="/">Ir para a página inicial</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="login-user">E-mail ou usuário</Label>
                <Input
                  id="login-user"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="rounded-xl"
                  disabled={pending}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-pass">Senha</Label>
                <Input
                  id="login-pass"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-xl"
                  disabled={pending}
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-primary hover:bg-forest-dark"
                disabled={pending}
              >
                {pending ? "Entrando…" : "Entrar"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
              
                <span className="font-mono text-foreground/80">caramuri.pythonanywhere.com</span>
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
