export default function Header() {
  const link =
    "px-3 py-1 rounded-full transition-colors duration-200 hover:ring-2 hover:ring-black focus:ring-2 focus:ring-black";

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-wide">
          ALAN AKANDZHI
        </a>
        <ul className="hidden sm:flex items-center gap-2 text-sm">
          {[
            ["#projects", "Projects"],
            ["#experience", "Experience"],
            ["#education", "Education"],
            ["#skills", "Skills"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className={link}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
