import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechMarquee, BigMarquee } from "@/components/Marquee";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full selection:bg-neon-cyan selection:text-black">
      <Background />
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <TechMarquee />
        <Projects />
        <BigMarquee />
        <About />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
