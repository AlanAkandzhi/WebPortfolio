export default function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-black/60 flex flex-wrap items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Alan Akandzhi</p>
        <nav className="flex gap-4">
          <a className="underline underline-offset-4" href="#home">Top</a>
          <a className="underline underline-offset-4" href="#projects">Projects</a>
          <a className="underline underline-offset-4" href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
