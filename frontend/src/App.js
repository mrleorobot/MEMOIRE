import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { useLenis } from "@/hooks/useLenis";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const scroll = () => {
        const el = document.getElementById(hash.slice(1));
        if (el) {
          const l = window.__lenis;
          if (l) l.scrollTo(el, { offset: -80 });
          else el.scrollIntoView({ behavior: "smooth" });
        }
      };
      const t = setTimeout(scroll, 120);
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
    <div className="App grain min-h-screen bg-cream text-graphite">
      <BrowserRouter>
        <ScrollManager />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
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
  );
}

export default App;
