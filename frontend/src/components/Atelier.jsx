import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { IMAGES } from "../data";

export const Atelier = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="atelie" ref={ref} className="py-24 md:py-36 border-t border-hairline">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.24em] text-graphite/55">
                O Ateliê
              </span>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.92] tracking-tight max-w-xl">
                Composto à mão, <span className="italic text-ash">gota a gota.</span>
              </h2>
              <p className="mt-8 max-w-lg text-base md:text-lg font-light leading-relaxed text-graphite/70">
                No coração de Grasse, nosso perfumista trabalha em pequenos
                lotes numa bancada de mármore centenária. Sem máquinas de
                dosagem, sem atalhos — apenas o nariz, a pipeta e o tempo.
              </p>
              <a
                href="#colecao"
                data-testid="atelier-cta"
                className="group mt-10 inline-flex items-center gap-3 border border-graphite px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-graphite hover:text-cream transition-colors duration-500"
              >
                Conheça o processo
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal className="overflow-hidden rounded-2xl aspect-[4/3]">
              <motion.img
                src={IMAGES.atelier}
                alt="Perfumista organizando frascos no ateliê"
                style={{ y }}
                className="h-[120%] w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
