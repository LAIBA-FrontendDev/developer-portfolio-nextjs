"use client";

export default function About() {
  const headingText = "About Me".split("");
  const skills = [
    "HTML", "CSS", "JS", "Bootstrap", "Tailwind", 
    "React", "Next", "TypeScript", "MongoDB", "GitHub"
  ];

  return (
    <section 
      id="about" 
      className="w-full min-h-screen bg-gradient-to-b from-black to-blue-950 flex flex-col justify-center items-center px-6 md:px-12 py-24 select-none"
    >
      {/* 🚀 TOP-MIDDLE CENTRED HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-black text-blue-600 tracking-tight cursor-pointer">
          {headingText.map((char, index) => (
            <span
              key={index}
              className="text-white transition-all duration-200 hover:text-cyan-400 hover:text-[3.25rem] inline-block drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>

      {/* 📝 BIOGRAPHY HORIZONTAL WIDE CARD */}
      <div className="w-full max-w-4xl bg-black/40 backdrop-blur-md border border-blue-500/20 px-8 py-6 rounded-2xl transition-all duration-500 hover:translate-y-[-5px] hover:scale-[1.02] hover:shadow-neon-blue hover:border-blue-400/50 mb-16">
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed text-center">
          I started my journey from absolute zero without any mentor or physical class environment. Through relentless curiosity, I turned to self-learning, mastering <span className="text-blue-400 font-semibold">Modern Frontend Engineering</span> step by step. I focus on developing clean architectures, pixel-perfect user journeys, and robust database integrity layouts.
        </p>
      </div>

      {/* ⚡ ANIMATED SKILLS GRID BOXES */}
      <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="group px-4 py-4 bg-blue-600 text-white text-center font-bold rounded-xl border border-blue-400/30 cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:shadow-neon-blue hover:border-cyan-400"
          >
            <span className="block transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-300 tracking-wide text-sm sm:text-base">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

