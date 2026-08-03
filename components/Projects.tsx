import { IconArrowUpRight } from "@tabler/icons-react";
import FadeIn from "./FadeIn";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-24 border-t border-zinc-800">
      <FadeIn>
        <div className="flex items-baseline gap-4 mb-12">
          <span className="text-xs text-lime-400 tracking-widest font-mono">03</span>
          <h2
            className="font-syne font-extrabold tracking-tight text-zinc-100"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Projects
          </h2>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-px bg-zinc-800 border border-zinc-800 rounded-lg overflow-hidden">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.num} delay={i * 60}>
            <div className="bg-zinc-900 hover:bg-zinc-800 transition-colors group grid grid-cols-[56px_1fr_auto] gap-4 md:gap-6 p-5 md:p-6 items-center">
              {/* Number */}
              <span className="font-syne font-extrabold text-3xl text-zinc-800 group-hover:text-lime-400 transition-colors leading-none">
                {project.num}
              </span>

              {/* Info */}
              <div>
                <h3 className="font-syne font-bold text-zinc-100 text-lg mb-1">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed mb-2 font-mono">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 border border-zinc-700 text-zinc-500 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-zinc-700 group-hover:border-lime-400 text-zinc-500 group-hover:text-lime-400 flex items-center justify-center transition-all rounded flex-shrink-0"
                aria-label={`View ${project.title}`}
              >
                <IconArrowUpRight size={18} />
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
