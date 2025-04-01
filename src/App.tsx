
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

// Create a new query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AILayout><Index /></AILayout>} />
          <Route path="/solutions" element={<AILayout><Solutions /></AILayout>} />
          <Route path="/solutions/:solutionId" element={<AILayout><SolutionDetail /></AILayout>} />
          <Route path="/products" element={<AILayout><Products /></AILayout>} />
          <Route path="/products/:productId" element={<AILayout><ProductDetail /></AILayout>} />
          <Route path="/insights" element={<AILayout><Insights /></AILayout>} />
          <Route path="/insights/:articleId" element={<AILayout><ArticleDetail /></AILayout>} />
          <Route path="/about" element={<AILayout><About /></AILayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
