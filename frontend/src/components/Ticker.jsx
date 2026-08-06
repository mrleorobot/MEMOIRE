import Marquee from "react-fast-marquee";

const WORDS = [
  "Sillage",
  "Feito à Mão em Grasse",
  "Maceração de 6 Meses",
  "Matéria-Prima Rara",
  "Edição Limitada",
  "Olfato como Memória",
];

export const Ticker = () => (
  <section className="py-10 border-y border-hairline bg-cream" data-testid="marquee">
    <Marquee speed={38} gradient={false} autoFill>
      {WORDS.map((w, i) => (
        <div key={i} className="flex items-center">
          <span className="font-serif italic text-3xl md:text-5xl px-8 md:px-12 text-graphite/85">
            {w}
          </span>
          <span className="text-graphite/30 text-2xl">✦</span>
        </div>
      ))}
    </Marquee>
  </section>
);
