import {
  IconBrandReact,
  IconServer,
  IconDatabase,
  IconCloud,
} from "@tabler/icons-react";
import FadeIn from "./FadeIn";
import SkillBar from "./SkillBar";
import { SKILLS } from "@/lib/data";

// Map icon string → Tabler component
const ICON_MAP: Record<string, React.ReactNode> = {
  "brand-react": <IconBrandReact size={24} className="text-zinc-500 group-hover:text-lime-400 transition-colors" />,
  server:        <IconServer size={24} className="text-zinc-500 group-hover:text-lime-400 transition-colors" />,
  database:      <IconDatabase size={24} className="text-zinc-500 group-hover:text-lime-400 transition-colors" />,
  cloud:         <IconCloud size={24} className="text-zinc-500 group-hover:text-lime-400 transition-colors" />,
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-24 border-t border-zinc-800">
      <FadeIn>
        <div className="flex items-baseline gap-4 mb-12">
          <span className="text-xs text-lime-400 tracking-widest font-mono">02</span>
          <h2
            className="font-syne font-extrabold tracking-tight text-zinc-100"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Skills
          </h2>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800 rounded-lg overflow-hidden">
        {SKILLS.map((skill, i) => (
          <FadeIn key={skill.name} delay={i * 80}>
            <div className="bg-zinc-900 p-6 hover:bg-zinc-800 transition-colors group h-full">
              {ICON_MAP[skill.icon]}

              <div className="font-syne font-bold text-zinc-100 mt-3 mb-1">
                {skill.name}
              </div>

              <SkillBar level={skill.level} />

              <div className="flex flex-wrap gap-1 mt-3">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 border border-zinc-700 text-zinc-500 rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
