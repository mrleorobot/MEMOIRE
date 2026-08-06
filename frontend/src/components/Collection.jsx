import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { PRODUCTS } from "../data";

const Card = ({ p, spanClass, offsetClass = "" }) => (
  <Reveal className={`${spanClass} ${offsetClass}`}>
    <Link to={`/produto/${p.id}`} data-testid={`product-${p.id}`} className="group block">
      <div className={`relative overflow-hidden rounded-2xl bg-white/40 ${p.ratio}`}>
        <img
          src={p.img}
          alt={p.name}
          className="h-full w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] text-cream mix-blend-difference">
          {p.index}
        </span>
        <span className="absolute top-4 right-4 h-9 w-9 rounded-full border border-cream/60 flex items-center justify-center text-cream opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <ArrowUpRight size={15} />
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl md:text-3xl leading-tight">{p.name}</h3>
          <p className="mt-1.5 text-sm text-graphite/55 font-light">{p.notes}</p>
        </div>
        <span className="shrink-0 text-xs uppercase tracking-[0.18em] text-graphite/45 pt-2 hidden sm:block">
          {p.family}
        </span>
      </div>
    </Link>
  </Reveal>
);

export const Collection = () => (
  <section id="colecao" className="py-24 md:py-36">
    <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
      <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
        <div>
          <span className="text-xs uppercase tracking-[0.24em] text-graphite/55">
            A Coleção
          </span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight max-w-2xl">
            Cinco fragrâncias, <span className="italic text-ash">cinco memórias</span>
          </h2>
        </div>
        <p className="max-w-xs text-base font-light text-graphite/65 leading-relaxed">
          Cada frasco é uma cena — uma paisagem olfativa construída para
          ser lembrada muito depois de desaparecer.
        </p>
      </Reveal>

      {/* Asymmetric masonry */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 md:gap-y-24">
        <Card p={PRODUCTS[0]} spanClass="md:col-span-5" />
        <Card p={PRODUCTS[1]} spanClass="md:col-span-7" offsetClass="md:mt-24" />
        <Card p={PRODUCTS[2]} spanClass="md:col-span-4" />
        <Card p={PRODUCTS[3]} spanClass="md:col-span-4 md:mt-16" />
        <Card p={PRODUCTS[4]} spanClass="md:col-span-4" offsetClass="md:mt-32" />
      </div>
    </div>
  </section>
);
