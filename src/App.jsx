import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { setLenis } from './utils/scroll'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact'
import Tech from './components/Tech'
import Experience from './components/Experience'
import ScrollToTop from './components/ScrollToTop'

import ServicesStrip from './components/ServicesStrip'
import Scroll3D from './components/Scroll3D'

function App() {
  const [count, setCount] = useState(0)

  // Smooth, eased page scrolling (wheel + programmatic). Lenis honours prefers-reduced-motion by itself.
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, autoRaf: true })
    setLenis(lenis)
    return () => {
      setLenis(null)
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            {/* Dark base so the edges revealed by the 3D section transitions never flash white */}
            <main className="bg-[#0d0d0d] overflow-x-clip">
              <Hero />
              <ServicesStrip />
              <Scroll3D><About /></Scroll3D>
              <Scroll3D><Tech /></Scroll3D>
              <Scroll3D><Experience /></Scroll3D>
              <Scroll3D><Projects /></Scroll3D>
              <Scroll3D><Contact /></Scroll3D>
            </main>
            <ScrollToTop />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App