"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const headingText = "Contact Me".split("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("✨ Message Sent Successfully! Laiba will get back to you soon.", {
          style: { background: "#050505", color: "#fff", border: "1px solid #2563eb" },
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="w-full min-h-screen bg-black flex flex-col justify-center items-center px-6 md:px-12 py-24 select-none relative"
    >
      {/* 🚀 TOP-MIDDLE CENTRED HEADING */}
      <div className="text-center mb-16 z-10">
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

      {/* NEON AMBIENT BACKGROUND GLOW ORB */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* MEGA INPUT & SOCIAL CARD CONTAINER */}
      <div className="w-full max-w-5xl bg-zinc-950/40 backdrop-blur-xl border-2 border-blue-500/20 p-8 md:p-12 rounded-3xl z-10 grid grid-cols-1 md:grid-cols-2 gap-12 shadow-[0_0_50px_rgba(37,99,235,0.05)]">
        
        {/* 📥 LEFT SIDE: THE DATABASE FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-blue-300 pl-1">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-3 bg-black text-white rounded-xl border border-blue-500/20 focus:border-blue-500 focus:scale-[1.01] focus:shadow-neon-blue outline-none transition-all duration-300"
              placeholder="Your Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-blue-300 pl-1">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="px-4 py-3 bg-black text-white rounded-xl border border-blue-500/20 focus:border-blue-500 focus:scale-[1.01] focus:shadow-neon-blue outline-none transition-all duration-300"
              placeholder="yourname@email.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-blue-300 pl-1">Message</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="px-4 py-3 bg-black text-white rounded-xl border border-blue-500/20 focus:border-blue-500 focus:scale-[1.01] focus:shadow-neon-blue outline-none transition-all duration-300 resize-none"
              placeholder="Type your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl border border-transparent transition-all duration-300 hover:scale-105 hover:bg-transparent hover:border-cyan-400 hover:text-cyan-400 text-sm tracking-wider uppercase shadow-neon-blue disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Sending..." : "Submit Message"}
          </button>
        </form>

        {/* 🌐 RIGHT SIDE: PREMIUM SOCIAL GRID */}
        <div className="flex flex-col justify-center gap-8 md:pl-6 border-t md:border-t-0 md:border-l border-blue-500/10 pt-8 md:pt-0">
          <div>
            <h3 className="text-2xl font-black text-white tracking-wide mb-2">Let's Build Something Great</h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              Click on any platform handle below to directly explore my engineering matrix code bases or contact me for remote contract services.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* GitHub Card Link */}
            <a 
              href="https://github.com" 
              target="_blank" 
              className="flex items-center gap-4 p-4 bg-black/50 border border-blue-500/20 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-neon-blue hover:border-blue-400 group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-lg text-white font-bold group-hover:text-cyan-400">GH</div>
              <div>
                <p className="text-white font-bold text-sm">GitHub Profile</p>
                <p className="text-xs text-zinc-500">Explore open source matrices</p>
              </div>
            </a>

            {/* Email Card Link */}
            <a 
              href="mailto:your-email@example.com" 
              className="flex items-center gap-4 p-4 bg-black/50 border border-blue-500/20 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-neon-blue hover:border-blue-400 group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-lg text-white font-bold group-hover:text-cyan-400">✉</div>
              <div>
                <p className="text-white font-bold text-sm">Direct Mailbox</p>
                <p className="text-xs text-zinc-500">your-email@example.com</p>
              </div>
            </a>

            {/* Vercel Live Card Link */}
            <a 
              href="https://vercel.com" 
              target="_blank" 
              className="flex items-center gap-4 p-4 bg-black/50 border border-blue-500/20 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-neon-blue hover:border-blue-400 group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 rounded-lg text-white font-bold group-hover:text-cyan-400">▲</div>
              <div>
                <p className="text-white font-bold text-sm">Vercel Dashboard</p>
                <p className="text-xs text-zinc-500">Check live system parameters</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

