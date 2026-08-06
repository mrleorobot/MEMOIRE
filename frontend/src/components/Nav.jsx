import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useBag } from "../context/BagContext";

const SECTIONS = [
  { label: "Coleção", id: "colecao" },
  { label: "Manifesto", id: "manifesto" },
  { label: "Ateliê", id: "atelie" },
];

const EASE = [0.22, 1, 0.36, 1];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { count, setOpen: setBagOpen } = useBag();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goToSection = (id) => {
    setOpen(false);
    if (pathname !== "/") {
      sessionStorage.setItem("memoire_scroll", id);
      navigate("/");
      return;
    }
    const scroll = () => {
      const el = document.getElementById(id);
      const l = window.__lenis;
      if (l && el) l.scrollTo(el, { offset: -80, duration: 1.6 });
      else if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    scroll();
  };

  const openBag = () => {
    setOpen(false);
    setBagOpen(true);
  };

  return (
    <>
      <motion.header
        data-testid="main-nav"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "bg-cream/70 backdrop-blur-xl border-b border-black/5"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-[1600px] px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Desktop left */}
          <div className="hidden md:flex items-center gap-8 flex-1">
            {SECTIONS.slice(0, 2).map((l) => (
              <button
                key={l.id}
                onClick={() => goToSection(l.id)}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.22em] text-graphite/70 hover:text-graphite transition-colors duration-300"
              >
                {l.label}
              </button>
            ))}
            <Link
              to="/descoberta"
              data-testid="nav-link-descoberta"
              className="text-xs uppercase tracking-[0.22em] text-graphite/70 hover:text-graphite transition-colors duration-300"
            >
              Descoberta
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            data-testid="mobile-menu-open"
            className="md:hidden flex items-center h-10 w-10 text-graphite flex-1"
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>

          <Link
            to="/"
            data-testid="nav-logo"
            className="font-serif text-2xl md:text-3xl tracking-tight leading-none select-none flex-1 text-center"
          >
            MÉMOIRE
          </Link>

          {/* Right */}
          <div className="flex items-center gap-6 md:gap-8 flex-1 justify-end">
            <button
              onClick={() => goToSection("atelie")}
              data-testid="nav-link-atelie"
              className="hidden md:inline-block text-xs uppercase tracking-[0.22em] text-graphite/70 hover:text-graphite transition-colors duration-300"
            >
              Ateliê
            </button>
            <button
              onClick={openBag}
              data-testid="nav-bag"
              className="relative flex items-center justify-center h-10 w-10 hover:opacity-60 transition-opacity"
              aria-label="Abrir sacola"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {count > 0 && (
                <span
                  data-testid="bag-count"
                  className="absolute -top-0.5 -right-0.5 h-5 min-w-[1.25rem] px-1 rounded-full bg-graphite text-cream text-[0.6rem] font-medium flex items-center justify-center"
                >
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[60] bg-cream md:hidden grain"
            data-testid="mobile-menu"
          >
            <div className="flex items-center justify-between h-20 px-6">
              <span className="font-serif text-2xl">MÉMOIRE</span>
              <button
                onClick={() => setOpen(false)}
                data-testid="mobile-menu-close"
                className="h-10 w-10 flex items-center justify-center"
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="px-6 pt-10 flex flex-col">
              {SECTIONS.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.08 }}
                  onClick={() => goToSection(l.id)}
                  data-testid={`mobile-link-${l.label.toLowerCase()}`}
                  className="block py-6 font-serif text-4xl tracking-tight text-left border-b border-hairline"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 + SECTIONS.length * 0.08 }}
                className="border-b border-hairline"
              >
                <Link
                  to="/descoberta"
                  onClick={() => setOpen(false)}
                  data-testid="mobile-link-descoberta"
                  className="block py-6 font-serif text-4xl tracking-tight"
                >
                  Descoberta
                </Link>
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 + (SECTIONS.length + 1) * 0.08 }}
                onClick={openBag}
                data-testid="mobile-bag"
                className="mt-12 inline-flex items-center gap-3 border border-graphite px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-graphite hover:text-cream transition-colors duration-500 self-start"
              >
                <ShoppingBag size={16} /> Sacola ({count})
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
