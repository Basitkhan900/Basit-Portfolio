
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Skill from './pages/Skill'
import ScrollToTop from './components/ScrollToTop'
function App() {
  

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Skill' element={<Skill/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
