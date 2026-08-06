import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Coleção", to: "/#colecao" },
  { label: "Manifesto", to: "/#manifesto" },
  { label: "Ateliê", to: "/#atelie" },
];

const EASE = [0.22, 1, 0.36, 1];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          <div className="hidden md:flex items-center gap-10 flex-1">
            {LINKS.slice(0, 2).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="text-xs uppercase tracking-[0.22em] text-graphite/70 hover:text-graphite transition-colors duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            data-testid="mobile-menu-open"
            className="md:hidden flex items-center justify-center -ml-1 h-10 w-10 text-graphite flex-1 justify-self-start"
            aria-label="Abrir menu"
          >
            <Menu size={22} className="mr-auto" />
          </button>

          <Link
            to="/"
            data-testid="nav-logo"
            className="font-serif text-2xl md:text-3xl tracking-tight leading-none select-none flex-1 text-center"
          >
            MÉMOIRE
          </Link>

          <div className="hidden md:flex items-center gap-10 flex-1 justify-end">
            <Link
              to="/#atelie"
              data-testid="nav-link-atelie"
              className="text-xs uppercase tracking-[0.22em] text-graphite/70 hover:text-graphite transition-colors duration-300"
            >
              Ateliê
            </Link>
            <Link
              to="/#colecao"
              data-testid="nav-shop"
              className="text-xs uppercase tracking-[0.22em] border border-graphite px-5 py-2.5 hover:bg-graphite hover:text-cream transition-colors duration-500"
            >
              Descobrir
            </Link>
          </div>

          {/* Mobile right spacer to keep logo centered */}
          <div className="md:hidden flex-1" />
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
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.08 }}
                  className="border-b border-hairline"
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-link-${l.label.toLowerCase()}`}
                    className="block py-6 font-serif text-4xl tracking-tight"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 + LINKS.length * 0.08 }}
                className="mt-12"
              >
                <Link
                  to="/#colecao"
                  onClick={() => setOpen(false)}
                  data-testid="mobile-shop"
                  className="inline-block border border-graphite px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-graphite hover:text-cream transition-colors duration-500"
                >
                  Descobrir a coleção
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
