import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import AreasAtuacao from "./pages/AreasAtuacao";
import Noticias from "./pages/Noticias";
import Contato from "./pages/Contato";
import Transparencia from "./pages/Transparencia";
import Certificados from "./pages/Certificados";
import Videos from "./pages/Videos";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AdminNoticias from "./pages/AdminNoticias";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/areas-atuacao" element={<AreasAtuacao />} />
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/admin/noticias" element={<AdminNoticias />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/certificados" element={<Certificados />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/login" element={<Login />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
