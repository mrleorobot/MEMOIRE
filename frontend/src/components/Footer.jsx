import { useState } from "react";
import { ArrowRight, Instagram, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <footer className="bg-graphite text-cream grain relative">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-24 md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.24em] text-cream/50 mb-8">
            Assine o Diário Olfativo
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[0.92] tracking-tight max-w-4xl">
            Receba nossas edições limitadas antes de qualquer pessoa.
          </h2>

          <form
            onSubmit={submit}
            data-testid="newsletter-form"
            className="mt-12 max-w-xl flex items-center border-b border-cream/40 focus-within:border-cream transition-colors duration-300"
          >
            <Mail size={18} className="text-cream/50 shrink-0" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="newsletter-input"
              placeholder="seu@email.com"
              className="flex-1 bg-transparent px-4 py-4 text-lg placeholder:text-cream/40 focus:outline-none"
            />
            <button
              type="submit"
              data-testid="newsletter-submit"
              className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/80 hover:text-cream transition-colors duration-300"
            >
              {sent ? "Inscrito ✦" : "Assinar"}
              <ArrowRight
                size={16}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </button>
          </form>
        </Reveal>

        <div className="mt-24 pt-10 border-t border-cream/15 grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          <div className="col-span-2 md:col-span-1">
            <span className="font-serif text-3xl">MÉMOIRE</span>
            <p className="mt-4 text-cream/50 font-light leading-relaxed max-w-xs">
              Maison de Parfum. Composto e engarrafado em Grasse, França.
            </p>
          </div>
          <div>
            <p className="text-cream/40 uppercase tracking-[0.18em] text-xs mb-4">Casa</p>
            <ul className="space-y-2.5 text-cream/70">
              <li><a href="#colecao" className="hover:text-cream transition-colors duration-300">Coleção</a></li>
              <li><a href="#manifesto" className="hover:text-cream transition-colors duration-300">Manifesto</a></li>
              <li><a href="#atelie" className="hover:text-cream transition-colors duration-300">Ateliê</a></li>
            </ul>
          </div>
          <div>
            <p className="text-cream/40 uppercase tracking-[0.18em] text-xs mb-4">Contato</p>
            <ul className="space-y-2.5 text-cream/70">
              <li><a href="#" className="hover:text-cream transition-colors duration-300">Boutiques</a></li>
              <li><a href="#" className="hover:text-cream transition-colors duration-300">Concierge</a></li>
              <li><a href="#" className="hover:text-cream transition-colors duration-300">Imprensa</a></li>
            </ul>
          </div>
          <div>
            <p className="text-cream/40 uppercase tracking-[0.18em] text-xs mb-4">Seguir</p>
            <a
              href="#"
              data-testid="footer-instagram"
              className="inline-flex items-center gap-2 text-cream/70 hover:text-cream transition-colors duration-300"
            >
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/40 uppercase tracking-[0.16em]">
          <span>© MMXXVI Mémoire Parfums</span>
          <span>Feito com rigor em Grasse</span>
        </div>
      </div>
    </footer>
  );
};
