import SectionTitle from "./SectionTitle.jsx";

const chip = "text-sm px-3 py-1.5 rounded-lg border border-black/10 bg-black/[0.04]";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <SectionTitle>About Me</SectionTitle>
      <p className="mt-2 text-black/70 max-w-3xl">
        Here you’ll find more about me, what I do, and my current skills across programming and technology.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {/* Left: text */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Get to know me!</h3>
          <div className="space-y-4 text-black/80 leading-relaxed">
            <p>
              I’m a <span className="font-semibold">Developer & Designer</span> focused on building engaging games,
              clean websites, and useful software. I enjoy turning ideas into polished, responsive experiences.
            </p>
            <p>
              I share a passion for esports and game development, and I’m constantly learning new tools and workflows to
              ship faster and better.
            </p>
            <p>
              I’m open to opportunities where I can contribute, learn, and grow. If you’ve got a good fit,{" "}
              <a className="underline" href="#contact">let’s talk</a>.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-black bg-black text-white hover:translate-y-[-1px] transition-transform"
          >
            Contact
          </a>
        </div>

        {/* Right: skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">My Skills</h3>

          <div className="space-y-5">
            <div>
              <p className="font-medium mb-2">Programming</p>
              <div className="flex flex-wrap gap-2">
                {["C++","C#","Python","HTML/CSS/JavaScript","Unity/Unreal"].map(s => <span key={s} className={chip}>{s}</span>)}
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">Game Development & Design</p>
              <div className="flex flex-wrap gap-2">
                {["gameplay mechanics","level design","prototyping","testing"].map(s => <span key={s} className={chip}>{s}</span>)}
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">Web & Design Tools</p>
              <div className="flex flex-wrap gap-2">
                {["Figma","Canva","DaVinci Resolve","Final Cut Pro"].map(s => <span key={s} className={chip}>{s}</span>)}
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">Systems</p>
              <div className="flex flex-wrap gap-2">
                {["Windows","macOS","PC Hardware"].map(s => <span key={s} className={chip}>{s}</span>)}
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">Esports Management</p>
              <div className="flex flex-wrap gap-2">
                {["tournament organization","esports ecosystems","analytics"].map(s => <span key={s} className={chip}>{s}</span>)}
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">Networking & Cybersecurity</p>
              <div className="flex flex-wrap gap-2">
                {["foundational knowledge from studies"].map(s => <span key={s} className={chip}>{s}</span>)}
              </div>
            </div>

            <div>
              <p className="font-medium mb-2">Soft Skills</p>
              <div className="flex flex-wrap gap-2">
                {["Adaptability & Problem-Solving","Communication & Organization","Teamwork & Collaboration"].map(s => <span key={s} className={chip}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
