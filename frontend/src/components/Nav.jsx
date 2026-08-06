import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Coleção", href: "#colecao" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Ateliê", href: "#atelie" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="main-nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "bg-cream/70 backdrop-blur-xl border-b border-black/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1600px] px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-10 flex-1">
          {LINKS.slice(0, 2).map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.22em] text-graphite/70 hover:text-graphite transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#top"
          data-testid="nav-logo"
          className="font-serif text-2xl md:text-3xl tracking-tight leading-none select-none flex-1 md:text-center"
        >
          MÉMOIRE
        </a>

        <div className="hidden md:flex items-center gap-10 flex-1 justify-end">
          <a
            href="#atelie"
            data-testid="nav-link-atelie"
            className="text-xs uppercase tracking-[0.22em] text-graphite/70 hover:text-graphite transition-colors duration-300"
          >
            Ateliê
          </a>
          <a
            href="#colecao"
            data-testid="nav-shop"
            className="text-xs uppercase tracking-[0.22em] border border-graphite px-5 py-2.5 hover:bg-graphite hover:text-cream transition-colors duration-500"
          >
            Descobrir
          </a>
        </div>
      </nav>
    </motion.header>
  );
};
