import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { Code2, ExternalLink, Clock } from "lucide-react";

const card = "rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow p-6";
const thumb = "aspect-video w-full rounded-xl bg-black/[0.04] border border-black/10 mb-4 grid place-items-center";

function TechBadge({ label }) {
  return (
    <span className="inline-flex items-center justify-center h-7 px-2 rounded-full border border-black/20 text-xs">
      {label}
    </span>
  );
}

function Screenshot({ src, alt }) {
  return (
    <div className={thumb}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover rounded-[10px]" />
      ) : (
        <span className="text-sm text-black/60">Screenshot</span>
      )}
    </div>
  );
}

export default function Projects() {
  const featured = [
    {
      title: "RogueDefense",
      blurb: "A roguelike tower defense experiment. Gameplay systems, waves, and upgrades.",
      repo: "https://github.com/AlanAkandzhi/RogueDefense",
      tech: ["C#"],
      img: import.meta.env.BASE_URL + "projects/roguedefense.png",
    },
    {
      title: "Arena Clash",
      blurb: "Fast-paced arena combat prototype with character control and combat loops.",
      repo: "https://github.com/AlanAkandzhi/Arena_Clash",
      tech: ["C++"],
      img: import.meta.env.BASE_URL + "projects/arenaclash.png",
    },
    {
      title: "CRUD App",
      blurb: "Simple full-stack CRUD demo—clean structure and readable code.",
      repo: "https://github.com/AlanAkandzhi/C.R.U.D-APP",
      tech: ["HTML", "CSS", "JavaScript", "Python"],
      img: import.meta.env.BASE_URL + "projects/crud.png",
    },
  ];

  const upcoming = [
    { title: "Unity/Unreal Project", blurb: "Next gameplay prototype exploring advanced mechanics." },
    { title: "Cybersecurity Project", blurb: "Hands-on security project from my studies." },
    { title: "Algorithm / AI Translator", blurb: "Experimenting with algorithms and simple NLP translation." },
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <SectionTitle icon={Code2}>Featured Projects</SectionTitle>
      <p className="mt-3 text-black/70 max-w-prose">
        A few highlights. More on GitHub—ask me about the details or tech choices behind each one.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i + 1) * 0.05 }}
            className={card}
          >
            <Screenshot src={p.img} alt={`${p.title} screenshot`} />
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-black/70 mt-1">{p.blurb}</p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              {p.tech.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>

            <div className="mt-4 text-sm">
              <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4">
                Repo <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      <h3 className="mt-12 font-semibold text-lg flex items-center gap-2">
        <Clock className="w-5 h-5" /> Upcoming
      </h3>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcoming.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i + 1) * 0.05 }}
            className={card}
          >
            <div className={thumb}><span className="text-xs text-black/50">Coming soon</span></div>
            <h4 className="font-semibold">{p.title}</h4>
            <p className="text-sm text-black/70 mt-1">{p.blurb}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
