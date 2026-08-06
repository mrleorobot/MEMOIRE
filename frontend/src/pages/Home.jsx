import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Collection } from "@/components/Collection";
import { Manifesto } from "@/components/Manifesto";
import { Atelier } from "@/components/Atelier";

export default function Home() {
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
