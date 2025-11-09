import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects/Projects'
import AllProjectsPage from './components/Projects/AllProjectsPage'
import Contact from './components/Contact'
import Tech from './components/Tech'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Tech />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/projects" element={<AllProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App