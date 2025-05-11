
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WomensShoes from "./pages/WomensShoes";
import MensShoes from "./pages/MensShoes";
import KidsShoes from "./pages/KidsShoes";
import SummerStyles from "./pages/SummerStyles";
import FormalWear from "./pages/FormalWear";
import Essentials from "./pages/Essentials";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import WomensAllShoes from "./pages/WomensAllShoes";
import MensAllShoes from "./pages/MensAllShoes";
import KidsAllShoes from "./pages/KidsAllShoes";
import FormalAllShoes from "./pages/FormalAllShoes";
import EssentialsAllProducts from "./pages/EssentialsAllProducts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/womens" element={<WomensShoes />} />
          <Route path="/womens/all" element={<WomensAllShoes />} />
          <Route path="/mens" element={<MensShoes />} />
          <Route path="/mens/all" element={<MensAllShoes />} />
          <Route path="/kids" element={<KidsShoes />} />
          <Route path="/kids/all" element={<KidsAllShoes />} />
          <Route path="/summer" element={<SummerStyles />} />
          <Route path="/formal" element={<FormalWear />} />
          <Route path="/formal/all" element={<FormalAllShoes />} />
          <Route path="/essentials" element={<Essentials />} />
          <Route path="/essentials/all" element={<EssentialsAllProducts />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
