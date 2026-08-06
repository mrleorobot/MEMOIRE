import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Collection } from "@/components/Collection";
import { Manifesto } from "@/components/Manifesto";
import { Atelier } from "@/components/Atelier";

export default function Home() {
  useEffect(() => {
    const target = sessionStorage.getItem("memoire_scroll");
    if (!target) return;
    sessionStorage.removeItem("memoire_scroll");
    const t = setTimeout(() => {
      const el = document.getElementById(target);
      const l = window.__lenis;
      if (l && el) l.scrollTo(el, { offset: -80, duration: 1.4 });
      else if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 450);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Hero />
      <Ticker />
      <Collection />
      <Manifesto />
      <Atelier />
    </>
  );
}
