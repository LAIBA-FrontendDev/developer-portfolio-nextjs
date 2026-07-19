"use client";

export default function Journey() {
  const headingText = "My Journey".split("");

  return (
    <section 
      id="journey" 
      className="w-full min-h-screen bg-black relative flex flex-col justify-center items-center px-6 md:px-12 py-24 select-none overflow-hidden"
    >
      {/* 🌌 AMBIENT GLOW ORBS */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 🚀 TOP-MIDDLE CENTRED HEADING */}
      <div className="text-center mb-16">
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

      {/* PARALLEL TIMELINE CONTAINER */}
      <div className="relative w-full max-w-5xl flex flex-col gap-12 items-center">
        
        {/* 🪩 CENTRAL TRACK LINE (Visible on Desktop only for center partition) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-950 shadow-[0_0_15px_rgba(59,130,246,0.7)]" />

        {/* 📦 ROW 1: Chapter 1 & 2 Aamne-Saamne */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full relative">
          {/* Central Dot Node Desktop Indicator */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 border-cyan-400 rounded-full z-10 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          
          {/* Left Card */}
          <div className="bg-zinc-950/80 backdrop-blur-md border border-blue-500/20 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-neon-blue group cursor-pointer md:text-right">
            <h3 className="text-lg font-black text-blue-400 group-hover:text-cyan-300 transition-colors duration-200 tracking-wide mb-2">
              The Unexpected Spark
            </h3>
            <p className="text-zinc-400 group-hover:text-zinc-200 text-sm sm:text-base leading-relaxed font-light">
              Attended a random tech session in 9th grade. Friends left confused, but curiosity planted its seed.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-zinc-950/80 backdrop-blur-md border border-blue-500/20 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-neon-blue group cursor-pointer text-left">
            <h3 className="text-lg font-black text-blue-400 group-hover:text-cyan-300 transition-colors duration-200 tracking-wide mb-2">
              Left Alone, But Refused to Quit
            </h3>
            <p className="text-zinc-400 group-hover:text-zinc-200 text-sm sm:text-base leading-relaxed font-light">
              The team cancelled the course for being the only student. Turned to YouTube & Google—started self-learning from absolute zero.
            </p>
          </div>
        </div>

        {/* 📦 ROW 2: Chapter 3 & 4 Aamne-Saamne */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full relative">
          {/* Central Dot Node Desktop Indicator */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 border-cyan-400 rounded-full z-10 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

          {/* Left Card */}
          <div className="bg-zinc-950/80 backdrop-blur-md border border-blue-500/20 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-neon-blue group cursor-pointer md:text-right">
            <h3 className="text-lg font-black text-blue-400 group-hover:text-cyan-300 transition-colors duration-200 tracking-wide mb-2">
              The Pause & Board Pressures
            </h3>
            <p className="text-zinc-400 group-hover:text-zinc-200 text-sm sm:text-base leading-relaxed font-light">
              Paused due to 10th-grade board exams. It was frustrating and lonely, but deep inside, I knew I wasn't done.
            </p>
          </div>

          {/* Right Card */}
          <div className="bg-zinc-950/80 backdrop-blur-md border border-blue-500/20 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-neon-blue group cursor-pointer text-left">
            <h3 className="text-lg font-black text-blue-400 group-hover:text-cyan-300 transition-colors duration-200 tracking-wide mb-2">
              The Triumphant Return
            </h3>
            <p className="text-zinc-400 group-hover:text-zinc-200 text-sm sm:text-base leading-relaxed font-light">
              Mastered Next.js, TypeScript & MongoDB. Built high-quality production apps, polished portfolio, and proved ultimate resilience.
            </p>
          </div>
        </div>

        {/* 👑 ROW 3: Final Goal Statement (Centered Wide Layout at bottom) */}
        <div className="w-full relative flex justify-center mt-4">
          <div className="w-full md:max-w-2xl bg-gradient-to-r from-blue-950/30 via-zinc-950 to-blue-950/30 backdrop-blur-md border-2 border-blue-500/30 p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan group cursor-pointer text-center">
            <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors duration-200 tracking-wide mb-3">
              The Ultimate Vision Ahead
            </h3>
            <p className="text-blue-100/80 group-hover:text-white text-sm sm:text-base leading-relaxed font-light">
              Pursuing International Relations in the future, but using Frontend Development right now as my ultimate backbone for independent living and freedom.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}




