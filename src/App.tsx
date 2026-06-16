import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MigraHome from "./pages/MigraHome";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Producao from "./pages/Producao";
import ProducaoSofia from "./pages/ProducaoSofia";
import ProducaoCarolina from "./pages/ProducaoCarolina";
import Sobre from "./pages/Sobre";
import GruposDeEstudo from "./pages/GruposDeEstudo";
import RadioMigra from "./pages/RadioMigra";
import Videografia from "./pages/Videografia";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminVideografia from "./pages/admin/AdminVideografia";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminBlogEditor from "./pages/admin/AdminBlogEditor";
import AdminInicio from "./pages/admin/AdminInicio";
import AdminProducao from "./pages/admin/AdminProducao";
import AdminSobre from "./pages/admin/AdminSobre";
import AdminGrupos from "./pages/admin/AdminGrupos";
import AdminRadio from "./pages/admin/AdminRadio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MigraHome />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/producao" element={<Producao />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/grupos-de-estudo" element={<GruposDeEstudo />} />
          <Route path="/radio" element={<RadioMigra />} />
          <Route path="/videografia" element={<Videografia />} />
          
          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="videografia" element={<AdminVideografia />} />
            <Route path="blog" element={<AdminBlog />} />
            <Route path="blog/novo" element={<AdminBlogEditor />} />
            <Route path="blog/editar/:slug" element={<AdminBlogEditor />} />
            <Route path="inicio" element={<AdminInicio />} />
            <Route path="home" element={<AdminInicio />} />
            <Route path="sobre" element={<AdminSobre />} />
            <Route path="grupos" element={<AdminGrupos />} />
            <Route path="radio" element={<AdminRadio />} />
            <Route path="producao" element={<AdminProducao />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
