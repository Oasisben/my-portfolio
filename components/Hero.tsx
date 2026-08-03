"use client";

import { PERSONAL } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-28 pb-16 relative overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#c8ff00 1px, transparent 1px), linear-gradient(90deg, #c8ff00 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl">
        {/* Status badge */}
        <div className="flex items-center gap-3 mb-6 text-lime-400 text-xs tracking-widest uppercase">
          <span className="w-8 h-px bg-lime-400" />
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse2" />
            Open to opportunities
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-syne font-extrabold leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
        >
          <span className="block text-zinc-100">I Build</span>
          <span
            className="block"
            style={{ WebkitTextStroke: "1px #f0f0f0", color: "transparent" }}
          >
            Things for
          </span>
          <span className="block text-lime-400">the Web.</span>
        </h1>

        <p className="text-zinc-500 text-sm leading-relaxed max-w-md mb-8 font-mono">
          Full-stack engineer obsessed with clean code, fast systems, and
          interfaces that don&apos;t suck. I turn complex problems into elegant,
          scalable solutions.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-mono text-xs tracking-widest uppercase px-6 py-3 bg-lime-400 text-black hover:bg-black hover:text-lime-400 border border-lime-400 transition-all duration-200 rounded"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-zinc-700 text-zinc-300 hover:border-lime-400 hover:text-lime-400 transition-all duration-200 rounded"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 mt-14 pt-8 border-t border-zinc-800">
          {PERSONAL.stats.map(({ value, label }) => (
            <div key={label}>
              <div className="font-syne font-extrabold text-4xl text-lime-400 leading-none">
                {value}
              </div>
              <div className="text-xs tracking-widest uppercase text-zinc-600 mt-1 font-mono">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
