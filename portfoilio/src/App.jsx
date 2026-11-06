import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skill from './pages/Skill'
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-body)] text-[var(--text-primary)] transition-colors duration-300">
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Skill' element={<Skill/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
