import { Github, Linkedin } from 'lucide-react'

const pill = "group inline-flex items-center justify-center w-12 h-12 rounded-full border border-black/10 bg-white shadow hover:-translate-y-0.5 hover:shadow-md transition-all"

export default function SocialRail() {
  return (
    <nav aria-label="Social links" className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4">
      <a href="https://github.com/AlanAkandzhi" target="_blank" rel="noreferrer" className={pill}>
        <Github className="w-5 h-5" />
        <span className="sr-only">GitHub</span>
      </a>
      <a href="https://www.linkedin.com/in/alan-akandzhi-24487b344/" target="_blank" rel="noreferrer" className={pill}>
        <Linkedin className="w-5 h-5" />
        <span className="sr-only">LinkedIn</span>
      </a>
    </nav>
  )
}
