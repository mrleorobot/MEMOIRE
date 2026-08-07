import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Plus, Minus } from "lucide-react";
import { getProduct, PRODUCTS } from "../data";
import { Reveal } from "../components/Reveal";
import { useBag } from "../context/BagContext";

const EASE = [0.22, 1, 0.36, 1];

const NoteBlock = ({ label, items }) => (
  <div className="border-t border-hairline pt-5">
    <p className="text-xs uppercase tracking-[0.2em] text-graphite/45 mb-3">{label}</p>
    <ul className="space-y-1.5">
      {items.map((n) => (
        <li key={n} className="font-serif text-lg md:text-xl text-graphite/90">
          {n}
        </li>
      ))}
    </ul>
  </div>
);

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProduct(id);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, setOpen } = useBag();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
        <p className="font-serif text-4xl">Fragrância não encontrada.</p>
        <Link
          to="/"
          data-testid="notfound-home"
          className="border border-graphite px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-graphite hover:text-cream transition-colors duration-500"
        >
          Voltar à coleção
        </Link>
      </div>
    );
  }

  const others = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  const addToBag = () => {
    addItem(product, qty);
    setAdded(true);
    setOpen(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <article className="pt-28 md:pt-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <button
          onClick={() => navigate("/#colecao")}
          data-testid="back-to-collection"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-graphite/60 hover:text-graphite transition-colors duration-300 mb-10"
        >
          <ArrowLeft size={15} className="transition-transform duration-500 group-hover:-translate-x-1" />
          A Coleção
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-2xl bg-white/40 aspect-[4/5] lg:sticky lg:top-28">
              <img
                src={product.img}
                alt={product.name}
                data-testid="product-hero-image"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Info */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.24em] text-graphite/50">
                {product.index} — {product.family}
              </span>
              <h1
                data-testid="product-title"
                className="mt-4 font-serif text-5xl md:text-6xl leading-[0.95] tracking-tight"
              >
                {product.name}
              </h1>
              <p className="mt-4 font-serif italic text-xl md:text-2xl text-ash">
                {product.tagline}
              </p>
              <p className="mt-8 text-base md:text-lg font-light leading-relaxed text-graphite/70">
                {product.story}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 flex items-baseline gap-6">
              <span data-testid="product-price" className="font-serif text-3xl">
                {product.price}
              </span>
              <span className="text-sm text-graphite/50 uppercase tracking-[0.16em]">
                {product.volume} · {product.concentration}
              </span>
            </Reveal>

            {/* Quantity + buy */}
            <Reveal delay={0.15} className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-graphite">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  data-testid="qty-decrease"
                  className="h-14 w-14 flex items-center justify-center hover:bg-graphite hover:text-cream transition-colors duration-300"
                  aria-label="Diminuir"
                >
                  <Minus size={16} />
                </button>
                <span data-testid="qty-value" className="w-12 text-center font-serif text-xl">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  data-testid="qty-increase"
                  className="h-14 w-14 flex items-center justify-center hover:bg-graphite hover:text-cream transition-colors duration-300"
                  aria-label="Aumentar"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={addToBag}
                data-testid="add-to-bag"
                className="group flex-1 flex items-center justify-center gap-3 border border-graphite px-8 h-14 text-xs uppercase tracking-[0.22em] hover:bg-graphite hover:text-cream transition-colors duration-500"
              >
                {added ? <Check size={16} /> : null}
                {added ? "Adicionado" : "Adicionar à sacola"}
              </button>
            </Reveal>

            {/* Pyramid */}
            <Reveal delay={0.2} className="mt-14">
              <p className="text-xs uppercase tracking-[0.24em] text-graphite/50 mb-6">
                Pirâmide Olfativa
              </p>
              <div className="space-y-6">
                <NoteBlock label="Notas de Topo" items={product.pyramid.topo} />
                <NoteBlock label="Notas de Coração" items={product.pyramid.coracao} />
                <NoteBlock label="Notas de Fundo" items={product.pyramid.fundo} />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Related */}
        <section className="mt-28 md:mt-40 border-t border-hairline pt-16">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-12">
            Outras memórias
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {others.map((p) => (
              <Link
                key={p.id}
                to={`/produto/${p.id}`}
                data-testid={`related-${p.id}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl aspect-[3/4] bg-white/40">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-[time:2.2s] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-serif text-2xl">{p.name}</h3>
                  <ArrowUpRight
                    size={18}
                    className="text-graphite/50 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <p className="mt-1 text-sm text-graphite/55 font-light">{p.notes}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
