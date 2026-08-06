import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

export const Preloader = ({ onDone }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const l = window.__lenis;
    if (l) l.stop();
    const t = setTimeout(() => setShow(false), 2100);
    return () => clearTimeout(t);
  }, []);

  const finish = () => {
    document.body.style.overflow = "";
    const l = window.__lenis;
    if (l) {
      l.scrollTo(0, { immediate: true });
      l.start();
    }
    onDone?.();
  };

  const letters = "MÉMOIRE".split("");

  return (
    <AnimatePresence onExitComplete={finish}>
      {show && (
        <motion.div
          data-testid="preloader"
          className="fixed inset-0 z-[100] bg-graphite flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div className="text-center px-6">
            <div className="overflow-hidden mb-6">
              <motion.p
                initial={{ y: "120%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="text-[0.65rem] uppercase tracking-[0.4em] text-cream/50"
              >
                Maison de Parfum — Grasse
              </motion.p>
            </div>
            <h1 className="font-serif text-cream text-6xl md:text-8xl tracking-tight flex justify-center overflow-hidden">
              {letters.map((ch, i) => (
                <span key={i} className="overflow-hidden inline-block">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.3 + i * 0.06,
                    }}
                  >
                    {ch}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.5 }}
              className="mt-8 h-px w-56 md:w-72 bg-cream/30 origin-left mx-auto"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
