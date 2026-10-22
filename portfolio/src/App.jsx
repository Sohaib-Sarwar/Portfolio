import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import './App.css'

/* Scroll-driven section reveal: opens from center with scale + clip */
function SectionReveal({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, scaleY: 0.92, clipPath: 'inset(8% 4% 8% 4%)' }}
        animate={isInView ? { opacity: 1, scaleY: 1, clipPath: 'inset(0% 0% 0% 0%)' } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'center center' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Navbar />
      <Hero />
      <SectionReveal><About /></SectionReveal>
      <SectionReveal><Experience /></SectionReveal>
      <SectionReveal><Projects /></SectionReveal>
      <SectionReveal><Skills /></SectionReveal>
      <SectionReveal><Contact /></SectionReveal>
      <Footer />
    </div>
  )
}

export default App
