import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useBag, formatBRL } from "../context/BagContext";

const EASE = [0.22, 1, 0.36, 1];

export const BagDrawer = () => {
  const { items, open, setOpen, updateQty, removeItem, subtotal, count, clear } = useBag();

  const checkout = () => {
    toast.success("Pedido registrado", {
      description: `${count} item(s) — ${formatBRL(subtotal)}. Nosso concierge entrará em contato.`,
    });
    clear();
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setOpen(false)}
            data-testid="bag-overlay"
            className="fixed inset-0 z-[70] bg-graphite/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: EASE }}
            data-testid="bag-drawer"
            className="fixed top-0 right-0 z-[80] h-full w-full max-w-md bg-cream grain flex flex-col"
          >
            <div className="flex items-center justify-between px-6 md:px-8 h-20 border-b border-hairline">
              <span className="text-xs uppercase tracking-[0.22em]">
                Sua Sacola ({count})
              </span>
              <button
                onClick={() => setOpen(false)}
                data-testid="bag-close"
                className="h-10 w-10 flex items-center justify-center hover:opacity-60 transition-opacity"
                aria-label="Fechar sacola"
              >
                <X size={22} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-6 px-8 text-center">
                <ShoppingBag size={32} className="text-graphite/30" strokeWidth={1} />
                <p className="font-serif text-2xl">Sua sacola está vazia.</p>
                <Link
                  to="/#colecao"
                  onClick={() => setOpen(false)}
                  data-testid="bag-empty-cta"
                  className="border border-graphite px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-graphite hover:text-cream transition-colors duration-500"
                >
                  Explorar a coleção
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 space-y-6">
                  {items.map((i) => (
                    <div
                      key={i.id}
                      data-testid={`bag-item-${i.id}`}
                      className="flex gap-4 border-b border-hairline pb-6"
                    >
                      <Link to={`/produto/${i.id}`} onClick={() => setOpen(false)} className="shrink-0">
                        <img
                          src={i.img}
                          alt={i.name}
                          className="h-24 w-20 object-cover rounded-lg bg-white/40"
                        />
                      </Link>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between gap-2">
                          <h3 className="font-serif text-xl leading-tight">{i.name}</h3>
                          <button
                            onClick={() => removeItem(i.id)}
                            data-testid={`bag-remove-${i.id}`}
                            className="text-graphite/40 hover:text-graphite transition-colors"
                            aria-label="Remover"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        <p className="text-xs text-graphite/50 uppercase tracking-[0.14em] mt-1">
                          {i.volume}
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-3">
                          <div className="flex items-center border border-hairline">
                            <button
                              onClick={() => updateQty(i.id, i.qty - 1)}
                              data-testid={`bag-dec-${i.id}`}
                              className="h-9 w-9 flex items-center justify-center hover:bg-graphite hover:text-cream transition-colors"
                              aria-label="Diminuir"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-9 text-center text-sm">{i.qty}</span>
                            <button
                              onClick={() => updateQty(i.id, i.qty + 1)}
                              data-testid={`bag-inc-${i.id}`}
                              className="h-9 w-9 flex items-center justify-center hover:bg-graphite hover:text-cream transition-colors"
                              aria-label="Aumentar"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <span className="font-serif text-lg">
                            {formatBRL(i.priceValue * i.qty)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 md:px-8 py-6 border-t border-hairline">
                  <div className="flex items-baseline justify-between mb-5">
                    <span className="text-xs uppercase tracking-[0.2em] text-graphite/60">
                      Subtotal
                    </span>
                    <span data-testid="bag-subtotal" className="font-serif text-2xl">
                      {formatBRL(subtotal)}
                    </span>
                  </div>
                  <button
                    onClick={checkout}
                    data-testid="bag-checkout"
                    className="w-full h-14 border border-graphite bg-graphite text-cream text-xs uppercase tracking-[0.22em] hover:bg-transparent hover:text-graphite transition-colors duration-500"
                  >
                    Finalizar pedido
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
