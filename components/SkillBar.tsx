"use client";

import { useEffect, useRef, useState } from "react";

export default function SkillBar({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTimeout(() => setWidth(level), 200);
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="h-px bg-zinc-700 mt-3 overflow-hidden">
      <div
        className="h-full bg-lime-400 transition-all duration-1000"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
