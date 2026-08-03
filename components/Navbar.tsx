"use client";

import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollTo(id: string) {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-4 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
        <span
          className="font-syne font-extrabold text-lime-400 text-lg tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          &lt;DEV/&gt;
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-xs tracking-widest uppercase text-zinc-500 hover:text-lime-400 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-lime-400 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="fixed top-14 left-0 right-0 z-40 bg-zinc-900 border-b border-zinc-800 flex flex-col">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="px-6 py-3 text-xs tracking-widest uppercase text-zinc-400 hover:text-lime-400 text-left border-b border-zinc-800 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
