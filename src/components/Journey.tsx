"use client";

export default function Journey() {
  const headingText = "My Journey".split("");

  const milestones = [
    {
      title: "The Unexpected Spark",
      desc: "Attended a random tech session in 9th grade. Friends left confused, but curiosity planted its seed.",
      side: "left"
    },
    {
      title: "Left Alone, But Refused to Quit",
      desc: "The team cancelled the course for being the only student. Turned to YouTube & Google—started self-learning from absolute zero.",
      side: "right"
    },
    {
      title: "The Pause & The Lightning Hit",
      desc: "Paused due to 10th-grade board exams. Came back stronger after a random clip reminded me: 'Don't forget why you started.'",
      side: "left"
    },
    {
      title: "The Triumphant Return",
      desc: "Mastered Next.js, TypeScript & MongoDB. Built high-quality production apps and proved resilience.",
      side: "right"
    },
    {
      title: "The Path to Freedom",
      desc: "Pursuing International Relations in the future, but using Frontend Development right now as my ultimate backbone for independent living.",
      side: "left"
    }
  ];

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

      {/* TIMELINE CONTAINER */}
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        
        {/* 🪩 CENTRAL NEON GLOW TRACK LINE */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-950 shadow-[0_0_15px_rgba(59,130,246,0.7)]" />

        {/* MILESTONE GENERATOR */}
        <div className="w-full flex flex-col gap-12">
          {milestones.map((m, idx) => (
            <div 
              key={idx} 
              className={`flex w-full items-center justify-between relative ${
                m.side === "left" ? "flex-row md:justify-start" : "flex-row-reverse md:justify-end"
              }`}
            >
              {/* Central node track dot connector */}
              <div className="absolute left-[50%] -translate-x-[50%] w-4 h-4 bg-black border-2 border-cyan-400 rounded-full z-10 transition-all duration-300 group-hover:bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

              {/* Box Element */}
              <div className="w-[85%] md:w-[45%] bg-zinc-950/80 backdrop-blur-md border border-blue-500/20 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-neon-blue group cursor-pointer">
                <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors duration-200 tracking-wide mb-2">
                  {m.title}
                </h3>
                <p className="text-zinc-400 group-hover:text-zinc-200 text-sm sm:text-base leading-relaxed font-light">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

