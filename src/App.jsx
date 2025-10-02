import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './components/Header.jsx'
import SocialRail from './components/SocialRail.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* top progress bar */}
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 origin-left bg-black/80 z-50" />
      <Header />
      <SocialRail />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
