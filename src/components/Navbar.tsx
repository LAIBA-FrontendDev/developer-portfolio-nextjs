"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "About", "Projects", "Journey", "Contact"];
  const logoText = "PORTFOLIO".split("");

  return (
    <nav className="fixed top-0 left-0 w-full h-24 bg-blue-600/10 backdrop-blur-md border-b border-blue-500/20 flex items-center justify-between px-6 md:px-12 z-50">
      
      {/* 🚀 LEFT SIDE: Per-Letter Animated Logo */}
      <div className="text-2xl font-black text-white tracking-wider cursor-pointer select-none">
        {logoText.map((letter, index) => (
          <span 
            key={index} 
            className="transition-all duration-200 hover:text-cyan-400 hover:text-[1.35rem] inline-block drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          >
            {letter}
          </span>
        ))}
      </div>

      {/* 💻 RIGHT SIDE (DESKTOP): Dynamic Capsule Boxes */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="px-5 py-2.5 bg-black/60 text-white font-medium rounded-xl border border-blue-500/30 transition-all duration-300 ease-out hover:scale-110 hover:shadow-neon-blue hover:border-blue-400 text-sm tracking-wide"
          >
            {link}
          </a>
        ))}
      </div>

      {/* 🍔 HAMBURGER BUTTON (MOBILE ONLY) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex md:hidden flex-col justify-center items-center w-11 h-11 gap-1.5 z-50 bg-black/50 border border-blue-500/40 rounded-xl text-white p-2"
      >
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* 📱 SLIDING MOBILE MENU DRAWER */}
      <div className={`fixed top-0 right-0 h-screen w-[75%] max-w-[300px] bg-black/95 backdrop-blur-xl border-l border-blue-500/40 p-10 flex flex-col justify-center gap-8 transition-transform duration-300 ease-in-out z-40 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="w-full text-center px-5 py-4 bg-zinc-900/80 text-white font-medium rounded-xl border border-blue-500/20 block transition-all active:scale-95 active:shadow-[0_0_20px_rgba(37,99,235,0.6)] active:border-blue-500"
          >
            {link}
          </a>
        ))}
      </div>

    </nav>
  );
}

