"use client";

import { useState } from "react";
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp } from "@tabler/icons-react";
import FadeIn from "./FadeIn";
import { PERSONAL } from "@/lib/data";
import { label } from "framer-motion/client";

const SOCIAL_LINKS = [
  { icon: <IconMail size={16} />, label: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
  { icon: <IconBrandLinkedin size={16} />, label: "linkedin.com/in/OasisBen", href: PERSONAL.linkedin },
  { icon: <IconBrandGithub size={16} />, label: "github.com/OasisBen", href: PERSONAL.github },
  { icon: <IconBrandWhatsapp size={16} />, label: "https://wa.me/9053770090", href: PERSONAL.whatsapp },
];

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
  
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
  
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
  
    setLoading(false);
  
    if (res.ok) {
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 3000);
    } else {
      alert("Something went wrong. Try again.");
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {(
        [
          ["Name", "name", "text", "Jane Smith"],
          ["Email", "email", "email", "jane@example.com"],
        ] as const
      ).map(([label, name, type, placeholder]) => (
        <div key={name}>
          <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-1.5 font-mono">
            {label}
          </label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            required
            className="w-full bg-zinc-900 border border-zinc-700 text-zinc-100 font-mono text-sm px-4 py-3 rounded focus:outline-none focus:border-lime-400 transition-colors placeholder-zinc-600"
          />
        </div>
      ))}

      <div>
        <label className="block text-xs tracking-widest uppercase text-zinc-500 mb-1.5 font-mono">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me about your project..."
          required
          className="w-full bg-zinc-900 border border-zinc-700 text-zinc-100 font-mono text-sm px-4 py-3 rounded focus:outline-none focus:border-lime-400 transition-colors placeholder-zinc-600 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading || sent}
        className={`font-mono text-xs tracking-widest uppercase px-6 py-3 rounded transition-all duration-300 border ${
          sent
            ? "bg-green-500 text-black border-green-500"
            : loading
            ? "bg-zinc-800 text-zinc-500 border-zinc-700 cursor-wait"
            : "bg-lime-400 text-black border-lime-400 hover:bg-black hover:text-lime-400"
        }`}
      >
        {sent ? "Message Sent ✓" : loading ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 py-24 border-t border-zinc-800">
      <FadeIn>
        <div className="flex items-baseline gap-4 mb-12">
          <span className="text-xs text-lime-400 tracking-widest font-mono">04</span>
          <h2
            className="font-syne font-extrabold tracking-tight text-zinc-100"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Contact
          </h2>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-[1fr_1.5fr] gap-14">
        <FadeIn delay={100}>
          <h3 className="font-syne font-bold text-2xl leading-tight mb-3 text-zinc-100">
            Let&apos;s build something great together.
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-mono">
            Open to freelance projects, full-time roles, and collaborations. I
            usually reply within 24 hours.
          </p>
          <div className="space-y-3">
            {SOCIAL_LINKS.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-500 hover:text-lime-400 transition-colors text-sm group font-mono"
              >
                <span className="w-8 h-8 border border-zinc-700 group-hover:border-lime-400 flex items-center justify-center rounded transition-colors">
                  {icon}
                </span>
                {label}
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
