import SectionTitle from "./SectionTitle.jsx";
import { Mail, MapPin, Phone } from "lucide-react";

const card = "rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow p-6";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <SectionTitle>Contact</SectionTitle>

      <div className="mt-6 grid md:grid-cols-[1.2fr,1fr] gap-6">
        <form action="https://formspree.io/f/your-endpoint" method="POST" className={card + " space-y-4"}>
          <div>
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <input id="name" name="name" className="w-full rounded-xl border border-black/10 px-3 py-2 focus:ring-2 focus:ring-black/20" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input id="email" name="email" type="email" className="w-full rounded-xl border border-black/10 px-3 py-2 focus:ring-2 focus:ring-black/20" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-1">Message</label>
            <textarea id="message" name="message" rows={5} className="w-full rounded-xl border border-black/10 px-3 py-2 focus:ring-2 focus:ring-black/20" placeholder="Let’s build something…" />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black bg-black text-white hover:translate-y-[-1px] active:translate-y-[0px] transition-transform"
          >
            Send
          </button>
        </form>

        <div className="space-y-4">
          <a href="mailto:akandzhialan@gmail.com" className={card + " flex items-center gap-3"}>
            <Mail className="w-5 h-5" /> akandzhialan@gmail.com
          </a>
          <a href="tel:+359879062717" className={card + " flex items-center gap-3"}>
            <Phone className="w-5 h-5" /> +359 879 062 717
          </a>
          <div className={card + " flex items-center gap-3"}>
            <MapPin className="w-5 h-5" /> Sofia, Bulgaria
          </div>
        </div>
      </div>
    </section>
  );
}
