import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { useEffect, useState } from "react";

function Typewriter({ text, typeMs = 60, holdMs = 5000, eraseMs = 35, restartDelay = 800 }) {
  const [out, setOut] = useState("");
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    let id;
    if (phase === "typing") {
      if (out.length < text.length) {
        id = setTimeout(() => setOut(text.slice(0, out.length + 1)), typeMs);
      } else {
        id = setTimeout(() => setPhase("holding"), holdMs);
      }
    } else if (phase === "holding") {
      id = setTimeout(() => setPhase("erasing"), 0);
    } else if (phase === "erasing") {
      if (out.length > 0) {
        id = setTimeout(() => setOut(text.slice(0, out.length - 1)), eraseMs);
      } else {
        id = setTimeout(() => setPhase("typing"), restartDelay);
      }
    }
    return () => clearTimeout(id);
  }, [text, typeMs, holdMs, eraseMs, restartDelay, out, phase]);

  return (
    <span className="whitespace-pre-wrap">
      {out}
      <span className="ml-[1px] align-baseline opacity-80 animate-pulse">_</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-black/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="inline-flex items-center gap-3">
              Hey, I’m Alan
              <motion.span
                role="img" aria-label="waving hand"
                className="inline-block origin-[70%_70%]"
                animate={{ rotate: [0, 16, -8, 16, -4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.5 }}
              >
                👋
              </motion.span>
            </span>
          </h1>

          <p className="mt-6 text-2xl md:text-3xl font-semibold">
            <Typewriter text={"I’m a Developer & Designer, crafting games, websites & software."} />
          </p>

          <div className="mt-8">
            <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black bg-black text-white hover:translate-y-[-1px] transition-transform">
              View Projects <ArrowDownRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
