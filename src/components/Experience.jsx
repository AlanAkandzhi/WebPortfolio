import SectionTitle from "./SectionTitle.jsx";
import { Briefcase } from "lucide-react";

const card = "rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow p-6";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <SectionTitle icon={Briefcase}>Work History</SectionTitle>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <article className={card}>
          <header>
            <h3 className="font-semibold text-lg">Lab Assistant</h3>
            <p className="text-sm text-black/60">University of Agder, Grimstad, Norway — Oct 2022 – Oct 2024</p>
          </header>
          <ul className="mt-3 text-sm list-disc pl-5 space-y-2 text-black/80">
            <li>Maintained and troubleshooted computers and gaming equipment (PlayStation, Xbox, Nintendo, etc.).</li>
            <li>Organized and supervised the lab environment, ensuring smooth daily operations and equipment safety.</li>
            <li>Assisted students and monitored lab usage to provide consistent support.</li>
            <li>Reduced technical downtime by improving maintenance processes.</li>
          </ul>
        </article>

        <article className={card}>
          <header>
            <h3 className="font-semibold text-lg">Intern</h3>
            <p className="text-sm text-black/60">Mercedes-Benz, Sofia, Bulgaria — Feb 2021 – Mar 2021</p>
          </header>
          <ul className="mt-3 text-sm list-disc pl-5 space-y-2 text-black/80">
            <li>Gained exposure to IT in the automotive industry, with focus on embedded systems and connected cars.</li>
            <li>Learned how software supports navigation, infotainment, safety, and autonomous driving features.</li>
            <li>Strengthened understanding of the intersection between IT and automotive innovation.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
