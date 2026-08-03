import { PERSONAL } from "@/lib/data";

export default function Terminal() {
  return (
    <div className="bg-zinc-950 border border-zinc-700 rounded-lg overflow-hidden font-mono text-sm">
      {/* Title bar */}
      <div className="bg-zinc-800 px-4 py-2 flex gap-2 items-center border-b border-zinc-700">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-zinc-500">terminal</span>
      </div>

      {/* Body */}
      <div className="p-5 space-y-1 text-sm leading-relaxed">
        <div className="text-zinc-300">
          <span className="text-lime-400">$ </span>
          <span className="text-zinc-100">cat about.json</span>
        </div>

        <div className="ml-4 text-zinc-400">{"{"}</div>
        <div className="ml-8">
          <span className="text-rose-400">&quot;name&quot;</span>
          <span className="text-zinc-400">: </span>
          <span className="text-lime-400">&quot;{PERSONAL.name}&quot;</span>
          <span className="text-zinc-400">,</span>
        </div>
        <div className="ml-8">
          <span className="text-rose-400">&quot;role&quot;</span>
          <span className="text-zinc-400">: </span>
          <span className="text-lime-400">&quot;{PERSONAL.role}&quot;</span>
          <span className="text-zinc-400">,</span>
        </div>
        <div className="ml-8">
          <span className="text-rose-400">&quot;location&quot;</span>
          <span className="text-zinc-400">: </span>
          <span className="text-lime-400">&quot;{PERSONAL.location}&quot;</span>
          <span className="text-zinc-400">,</span>
        </div>
        <div className="ml-8">
          <span className="text-rose-400">&quot;status&quot;</span>
          <span className="text-zinc-400">: </span>
          <span className="text-lime-400">&quot;open_to_work&quot;</span>
        </div>
        <div className="ml-4 text-zinc-400">{"}"}</div>

        <div className="text-zinc-300 pt-1">
          <span className="text-lime-400">$ </span>
          <span className="inline-block w-2 h-4 bg-lime-400 animate-blink align-text-bottom" />
        </div>
      </div>
    </div>
  );
}
