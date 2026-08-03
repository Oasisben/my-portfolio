import { PERSONAL } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 md:px-16 py-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-zinc-600 font-mono">
      <span>
        &lt;{PERSONAL.name} /&gt; · {year}
      </span>
      <span>Built with Next.js &amp; Tailwind CSS</span>
    </footer>
  );
}
