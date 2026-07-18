import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white w-full overflow-hidden">
      {/* 🚀 GLUEING ALL SECTIONS TOGETHER INTO ONE SINGLE MATRIX PAGE */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Journey />
      <Contact />
    </main>
  );
}

