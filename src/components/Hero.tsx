"use client";
import { useState } from "react";

export default function Hero() {
  const [showStars, setShowStars] = useState(false);
  const nameText = "Laiba Israil".split("");

  return (
    <section 
      id="home" 
      className="relative w-full h-screen bg-black flex flex-col justify-center items-center px-6 overflow-hidden select-none pt-24"
    >
      {/* 🌌 SHINY BLUE STARS BACKGROUND EFFECT */}
      <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${showStars ? "opacity-100" : "opacity-0"}`}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400 rounded-full animate-pulse-slow"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* 🧿 BACKGROUND NEON GLOW ORB */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* CONTENT SYSTEM */}
      <div className="text-center z-10 max-w-4xl flex flex-col items-center gap-6">
        
        {/* WELCOME BADGE */}
        <div className="px-4 py-1.5 bg-blue-950/40 border border-blue-500/30 rounded-full text-xs sm:text-sm text-cyan-400 font-medium tracking-wide shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          ✨ Available for Freelance & Remote Work
        </div>

        {/* INTERACTIVE HEADING (Triggers Stars & Letter Hover) */}
        <h1 
          onMouseEnter={() => setShowStars(true)}
          onMouseLeave={() => setShowStars(false)}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-blue-600 tracking-tight leading-[1.15] cursor-pointer"
        >
          Hi, I am <br />
          {nameText.map((char, index) => (
            <span
              key={index}
              className="text-white transition-all duration-200 hover:text-cyan-400 hover:text-[4.5rem] md:hover:text-[5.5rem] inline-block drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* SLIDING DESCRIPTION PANEL */}
        <p className="text-blue-200/70 text-sm sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed mt-2 p-4 rounded-2xl transition-all duration-500 hover:translate-y-[-5px] hover:scale-105 hover:text-white hover:shadow-neon-blue bg-black/20 border border-transparent hover:border-blue-500/20">
          A <span className="text-white font-semibold">17-Year-Old Self-Taught</span> Frontend Developer building high-quality production web applications. Crafting responsive client layouts with advanced pixel perfection.
        </p>

        {/* CALL TO ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105 hover:bg-blue-500 hover:shadow-neon-cyan text-center"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-semibold rounded-xl border border-blue-500/40 transition-all duration-300 hover:scale-105 hover:bg-blue-950/30 hover:border-cyan-400 text-center"
          >
            Contact Me
          </a>
        </div>

      </div>

      {/* 🚀 RIGHT SIDE VIRTUAL POSITIONED ART (3D CARTOON AVATAR) */}
      <div className="hidden lg:block absolute right-12 bottom-12 w-80 h-80 pointer-events-auto group cursor-pointer">
        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-full blur-3xl transition-all duration-500" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/cartoon-avatar.png" 
          alt="Laiba Avatar" 
          className="w-full h-full object-contain animate-float transition-all duration-300 group-hover:[animation-duration:2s]"
        />
      </div>

    </section>
  );
}

