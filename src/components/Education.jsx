import SectionTitle from "./SectionTitle.jsx";
import { GraduationCap } from "lucide-react";

const card =
  "rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow p-6";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <SectionTitle icon={GraduationCap}>Education</SectionTitle>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <article className={card}>
          <div className="flex items-start gap-4">
            <img
              src="/logos/uia.png"
              alt="University of Agder"
              className="h-12 w-12 object-contain rounded-xl border border-black/10 bg-white p-1"
            />
            <div>
              <h3 className="font-semibold text-lg">B.Sc. Academic Esports</h3>
              <p className="text-sm text-black/60">University of Agder, Campus Grimstad</p>
              <p className="text-sm text-black/60">August 2022 – June 2025</p>
              <p className="text-sm mt-2 text-black/80">
                Focus: Esports management, game development & design (Main: C#, Unity), tournament organization.
              </p>
            </div>
          </div>
        </article>

        <article className={card}>
          <div className="flex items-start gap-4">
            <img
              src="/logos/vfu.png"
              alt="Varna Free University"
              className="h-12 w-12 object-contain rounded-xl border border-black/10 bg-white p-1"
            />
            <div>
              <h3 className="font-semibold text-lg">B.Sc. Informatics & Computer Science</h3>
              <p className="text-sm text-black/60">Varna Free University</p>
              <p className="text-sm text-black/60">October 2023 – Current</p>
              <p className="text-sm mt-2 text-black/80">
                Focus: Software development (Main: C++, Python, HTML/CSS/JS), networking, cybersecurity, web development.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
