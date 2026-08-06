import "@/App.css";
import { useLenis } from "@/hooks/useLenis";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Collection } from "@/components/Collection";
import { Manifesto } from "@/components/Manifesto";
import { Atelier } from "@/components/Atelier";
import { Footer } from "@/components/Footer";

function App() {
  useLenis();
  return (
    <div className="App grain min-h-screen bg-cream text-graphite">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Collection />
        <Manifesto />
        <Atelier />
      </main>
      <Footer />
    </div>
  );
}

export default App;
