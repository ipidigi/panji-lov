import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Tentang Pages
import TentangIndex from "./pages/tentang/Index";
import VisiMisi from "./pages/tentang/VisiMisi";
import Sejarah from "./pages/tentang/Sejarah";
import Legalitas from "./pages/tentang/Legalitas";
import Komite from "./pages/tentang/Komite";
import BadanUsaha from "./pages/tentang/BadanUsaha";
import LingkarStudi from "./pages/tentang/LingkarStudi";
import Afiliasi from "./pages/tentang/Afiliasi";
import Kontak from "./pages/tentang/Kontak";

// Other Pages
import PsikoanalisisIndex from "./pages/psikoanalisis/Index";
import Anggota from "./pages/Anggota";
import Jadwal from "./pages/Jadwal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Tentang Routes */}
          <Route path="/tentang" element={<TentangIndex />} />
          <Route path="/tentang/visi-misi" element={<VisiMisi />} />
          <Route path="/tentang/sejarah" element={<Sejarah />} />
          <Route path="/tentang/legalitas" element={<Legalitas />} />
          <Route path="/tentang/komite" element={<Komite />} />
          <Route path="/tentang/badan-usaha" element={<BadanUsaha />} />
          <Route path="/tentang/lingkar-studi" element={<LingkarStudi />} />
          <Route path="/tentang/afiliasi" element={<Afiliasi />} />
          <Route path="/tentang/kontak" element={<Kontak />} />
          
          {/* Psikoanalisis */}
          <Route path="/psikoanalisis" element={<PsikoanalisisIndex />} />
          
          {/* Other */}
          <Route path="/anggota" element={<Anggota />} />
          <Route path="/jadwal" element={<Jadwal />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
