import { Reveal } from "./Reveal";
import { CHAPTERS, IMAGES } from "../data";

export const Manifesto = () => (
  <section id="manifesto" className="py-24 md:py-36 border-t border-hairline">
    <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Sticky image */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.24em] text-graphite/55">
                Manifesto
              </span>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-[0.95] tracking-tight">
                O que fazemos, <br />
                <span className="italic text-ash">e por quê.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 overflow-hidden rounded-2xl aspect-[4/5] group">
              <img
                src={IMAGES.ingredients}
                alt="Matérias-primas aromáticas sobre linho"
                className="h-full w-full object-cover transition-transform duration-[time:2.2s] ease-out group-hover:scale-105"
              />
            </Reveal>
          </div>
        </div>

        {/* Numbered chapters */}
        <div className="lg:col-span-6 lg:col-start-7 flex flex-col">
          {CHAPTERS.map((c, i) => (
            <Reveal
              key={c.num}
              delay={i * 0.08}
              className={`py-12 ${i !== 0 ? "border-t border-hairline" : ""}`}
            >
              <div className="flex items-start gap-8 md:gap-12">
                <span className="font-serif text-5xl md:text-7xl leading-none text-graphite/15 select-none">
                  {c.num}
                </span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl leading-snug tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-base md:text-lg font-light leading-relaxed text-graphite/70">
                    {c.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
