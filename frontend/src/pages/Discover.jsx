import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw, ShoppingBag } from "lucide-react";
import { getProduct } from "../data";
import { useBag } from "../context/BagContext";

const EASE = [0.22, 1, 0.36, 1];

const QUESTIONS = [
  {
    q: "Qual momento do dia é o seu?",
    options: [
      { label: "A manhã luminosa", score: { "neroli-blanc": 2, "rosa-cinza": 1 } },
      { label: "A tarde serena", score: { "rosa-cinza": 2, "vetiver-sombrio": 1 } },
      { label: "A noite profunda", score: { "oud-celestial": 2, "ambar-nocturno": 2 } },
    ],
  },
  {
    q: "Que paisagem te seduz?",
    options: [
      { label: "Um jardim em flor", score: { "rosa-cinza": 2, "neroli-blanc": 1 } },
      { label: "Uma floresta úmida", score: { "vetiver-sombrio": 2 } },
      { label: "Um templo de incenso", score: { "oud-celestial": 2, "ambar-nocturno": 1 } },
    ],
  },
  {
    q: "Como deseja ser lembrado(a)?",
    options: [
      { label: "Fresco e luminoso", score: { "neroli-blanc": 2 } },
      { label: "Elegante e discreto", score: { "rosa-cinza": 2, "vetiver-sombrio": 1 } },
      { label: "Intenso e inesquecível", score: { "oud-celestial": 2, "ambar-nocturno": 1 } },
    ],
  },
];

const computeResult = (answers) => {
  const totals = {};
  answers.forEach((opt) => {
    Object.entries(opt.score).forEach(([id, pts]) => {
      totals[id] = (totals[id] || 0) + pts;
    });
  });
  const best = Object.entries(totals).sort((a, b) => b[1] - a[1])[0];
  return getProduct(best ? best[0] : "rosa-cinza");
};

export default function Discover() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const { addItem, setOpen } = useBag();

  const finished = step >= QUESTIONS.length;
  const result = finished ? computeResult(answers) : null;

  const choose = (opt) => {
    setAnswers((prev) => [...prev, opt]);
    setStep((s) => s + 1);
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
  };

  const addResult = () => {
    addItem(result, 1);
    setOpen(true);
  };

  return (
    <section className="min-h-screen pt-32 md:pt-40 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.24em] text-graphite/50">
            Descoberta de Aroma
          </span>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            Encontre a sua <span className="italic text-ash">memória</span>
          </h1>
        </div>

        {/* Progress */}
        {!finished && (
          <div className="flex gap-2 mb-14 max-w-sm mx-auto" data-testid="quiz-progress">
            {QUESTIONS.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 flex-1 transition-colors duration-500 ${
                  i <= step ? "bg-graphite" : "bg-hairline"
                }`}
              />
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: EASE }}
              data-testid={`quiz-step-${step}`}
            >
              <p className="text-center text-xs uppercase tracking-[0.2em] text-graphite/40 mb-6">
                Pergunta {step + 1} de {QUESTIONS.length}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-center leading-tight tracking-tight mb-12">
                {QUESTIONS[step].q}
              </h2>
              <div className="space-y-4">
                {QUESTIONS[step].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => choose(opt)}
                    data-testid={`quiz-option-${step}-${i}`}
                    className="group w-full flex items-center justify-between border border-graphite px-7 py-6 text-left hover:bg-graphite hover:text-cream transition-colors duration-500"
                  >
                    <span className="font-serif text-xl md:text-2xl">{opt.label}</span>
                    <ArrowRight
                      size={20}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              data-testid="quiz-result"
              className="text-center"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-graphite/40 mb-4">
                A sua fragrância é
              </p>
              <div className="overflow-hidden rounded-2xl aspect-[4/3] max-w-xl mx-auto mb-8">
                <img
                  src={result.img}
                  alt={result.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 data-testid="quiz-result-name" className="font-serif text-4xl md:text-5xl tracking-tight">
                {result.name}
              </h2>
              <p className="mt-3 font-serif italic text-xl text-ash">{result.tagline}</p>
              <p className="mt-5 max-w-lg mx-auto text-base font-light leading-relaxed text-graphite/70">
                {result.story}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={addResult}
                  data-testid="quiz-add-bag"
                  className="inline-flex items-center justify-center gap-3 border border-graphite bg-graphite text-cream px-8 h-14 text-xs uppercase tracking-[0.22em] hover:bg-transparent hover:text-graphite transition-colors duration-500"
                >
                  <ShoppingBag size={16} /> Adicionar à sacola
                </button>
                <Link
                  to={`/produto/${result.id}`}
                  data-testid="quiz-view-product"
                  className="inline-flex items-center justify-center gap-3 border border-graphite px-8 h-14 text-xs uppercase tracking-[0.22em] hover:bg-graphite hover:text-cream transition-colors duration-500"
                >
                  Ver perfume <ArrowRight size={16} />
                </Link>
              </div>

              <button
                onClick={restart}
                data-testid="quiz-restart"
                className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-graphite/50 hover:text-graphite transition-colors"
              >
                <RotateCcw size={14} /> Refazer o teste
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
