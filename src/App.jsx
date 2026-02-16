import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <ServicesStrip />
            <About />
            <Tech />
            <Experience />
            <Projects />
            <Contact />
            <ScrollToTop />
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App