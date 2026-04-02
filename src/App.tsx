import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MigraHome from "./pages/MigraHome";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Producao from "./pages/Producao";
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
import AdminHome from "./pages/admin/AdminHome";
import AdminProducao from "./pages/admin/AdminProducao";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
            <Route path="home" element={<AdminHome />} />
            <Route path="producao" element={<AdminProducao />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
