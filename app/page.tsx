import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="home">
        <Hero />
        <ProofBar />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-ink/60">
        {site.footer}
      </footer>
    </>
  );
}
