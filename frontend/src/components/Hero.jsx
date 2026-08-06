import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { RevealLines } from "./Reveal";
import { IMAGES } from "../data";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section id="top" ref={ref} className="relative pt-32 md:pt-40">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-graphite/60 mb-8"
        >
          <span data-testid="hero-eyebrow">Maison de Parfum — Grasse</span>
          <span className="hidden sm:block">Est. MCMXCII</span>
        </motion.div>

        {/* Giant title */}
        <h1 className="font-serif font-normal text-center leading-[0.86] tracking-tight text-[16vw] sm:text-[15vw] lg:text-[13vw]">
          <RevealLines lines={["A memória"]} delay={0.3} />
          <span className="block overflow-hidden">
            <motion.span
              className="block italic text-ash"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            >
              tem perfume
            </motion.span>
          </span>
        </h1>
      </div>

      {/* 80vh parallax image */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
        className="mx-auto max-w-[1600px] px-6 lg:px-12 mt-12 md:mt-16"
      >
        <div className="relative h-[80vh] w-full overflow-hidden rounded-2xl">
          <motion.img
            src={IMAGES.hero}
            alt="Frasco de perfume Mémoire sob luz dramática"
            style={{ y, scale }}
            className="absolute inset-0 h-[115%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/40 via-transparent to-transparent" />

          <div className="absolute bottom-0 inset-x-0 p-8 md:p-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="max-w-md text-cream/90 text-base md:text-lg font-light leading-relaxed">
              Uma casa de perfumaria dedicada à arte da lembrança. Sete
              composições. Nenhum compromisso.
            </p>
            <a
              href="#colecao"
              data-testid="hero-cta"
              className="group inline-flex items-center gap-3 self-start md:self-auto border border-cream text-cream px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-cream hover:text-graphite transition-colors duration-500"
            >
              Explorar a coleção
              <ArrowDownRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
