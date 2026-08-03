"use client";

import FadeIn from "./FadeIn";
import Terminal from "./Terminal";
import { PERSONAL } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-24 border-t border-zinc-800">
      <FadeIn>
        <div className="flex items-baseline gap-4 mb-12">
          <span className="text-xs text-lime-400 tracking-widest font-mono">01</span>
          <h2
            className="font-syne font-extrabold tracking-tight text-zinc-100"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            About Me
          </h2>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-14 items-start">
        <FadeIn delay={100}>
          <div className="space-y-4 text-sm text-zinc-500 leading-relaxed font-mono">
            {PERSONAL.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block mt-4 font-mono text-xs tracking-widest uppercase px-5 py-2.5 border border-zinc-700 text-zinc-400 hover:border-lime-400 hover:text-lime-400 transition-all rounded"
            >
              Let&apos;s collaborate →
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <Terminal />
        </FadeIn>
      </div>
    </section>
  );
}
