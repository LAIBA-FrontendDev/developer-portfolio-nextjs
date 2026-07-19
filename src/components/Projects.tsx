"use client";

export default function Projects() {
  const headingText = "Projects".split("");
  
  const projectList = [
    {
      title: "Cafe Website",
      videoSrc: "/videos/FEB-CAFE.mp4",
      liveLink:  "   https://february-red.vercel.app/   "
    },
    {
      title: "E-Commerce Website",
      videoSrc: "/videos/23-C.mp4",
      liveLink: " https://23-c-mi6t.vercel.app/   "
    }
  ];

  return (
    <section 
      id="projects" 
      className="w-full min-h-screen bg-gradient-to-r from-black via-zinc-950 to-blue-950 flex flex-col justify-center items-center px-6 md:px-16 py-24 select-none"
    >
      {/* 🚀 TOP-MIDDLE CENTRED HEADING */}
      <div className="text-center mb-2">
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

      {/* 📜 DYNAMIC HOVER SUB-LINE */}
      <p className="text-blue-200/60 text-sm sm:text-base font-light tracking-wide mb-12 transition-all duration-300 hover:scale-105 hover:text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] cursor-default">
        These real-world web applications were completely engineered and live deployed by me.
      </p>

      {/* 💻 VERTICAL CARDS IN MIDDLE CONTAINER */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center px-4">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="w-full bg-black/60 border-2 border-blue-500 rounded-2xl overflow-hidden p-4 flex flex-col gap-5 transition-all duration-300 ease-out hover:scale-105 hover:shadow-neon-cyan group"
          >
            {/* 🎞️ AUTOPLAY LOOP SCREENRECORDING VIDEO */}
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
              <video 
                src={project.videoSrc}
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* 🏷️ PROJECT DETAILS */}
            <div className="flex flex-col gap-4 text-center">
              <h3 className="text-xl font-extrabold text-white tracking-wide transition-colors duration-200 group-hover:text-cyan-400">
                {project.title}
              </h3>
              
              {/* 🔘 PREMIUM VIEW LIVE BUTTON */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl border border-transparent transition-all duration-300 hover:scale-[1.03] hover:bg-transparent hover:border-cyan-400 hover:text-cyan-400 text-sm tracking-wider uppercase shadow-neon-blue"
              >
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

