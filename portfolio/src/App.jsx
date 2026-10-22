import { motion, MotionConfig } from 'framer-motion'
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

/* Scroll-driven section reveal: a light fade-up (cheap on mobile GPUs) */
function SectionReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  return (
    // Honors the OS "reduce motion" setting for every framer-motion animation
    <MotionConfig reducedMotion="user">
      <div className="app">
        <a href="#main" className="skip-link">Skip to content</a>
        <CustomCursor />
        <Navbar />
        <main id="main">
          <Hero />
          <SectionReveal><About /></SectionReveal>
          <SectionReveal><Experience /></SectionReveal>
          <SectionReveal><Projects /></SectionReveal>
          <SectionReveal><Skills /></SectionReveal>
          <SectionReveal><Contact /></SectionReveal>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
