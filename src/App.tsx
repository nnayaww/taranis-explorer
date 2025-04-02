
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Insights from "./pages/Insights";
import ArticleDetail from "./pages/ArticleDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AILayout from "./components/layout/AILayout";
import Layout from "./components/layout/Layout";

// Create a new query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><AILayout><Index /></AILayout></Layout>} />
          <Route path="/solutions" element={<Layout><AILayout><Solutions /></AILayout></Layout>} />
          <Route path="/solutions/:solutionId" element={<Layout><AILayout><SolutionDetail /></AILayout></Layout>} />
          <Route path="/products" element={<Layout><AILayout><Products /></AILayout></Layout>} />
          <Route path="/products/:productId" element={<Layout><AILayout><ProductDetail /></AILayout></Layout>} />
          <Route path="/insights" element={<Layout><AILayout><Insights /></AILayout></Layout>} />
          <Route path="/insights/:articleId" element={<Layout><AILayout><ArticleDetail /></AILayout></Layout>} />
          <Route path="/about" element={<Layout><AILayout><About /></AILayout></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
