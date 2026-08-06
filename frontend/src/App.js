import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { useLenis } from "@/hooks/useLenis";
import { BagProvider } from "@/context/BagContext";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BagDrawer } from "@/components/BagDrawer";
import { Preloader } from "@/components/Preloader";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import Discover from "@/pages/Discover";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        const l = window.__lenis;
        if (l && el) l.scrollTo(el, { offset: -80, duration: 1.6 });
        else if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 140);
      return () => clearTimeout(t);
    }
    const l = window.__lenis;
    if (l) l.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function App() {
  useLenis();
  return (
    <BagProvider>
      <div className="App grain min-h-screen bg-cream text-graphite">
        <Preloader />
        <BrowserRouter>
          <ScrollManager />
          <Nav />
          <BagDrawer />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produto/:id" element={<ProductDetail />} />
              <Route path="/descoberta" element={<Discover />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1A1A1A",
              color: "#F9F8F6",
              border: "none",
              borderRadius: "0",
              fontFamily: "Inter, sans-serif",
            },
          }}
        />
      </div>
    </BagProvider>
  );
}

export default App;
