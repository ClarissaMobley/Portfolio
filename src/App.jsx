import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
   <div>
    <Banner />
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Resume />
    <Contact />
   </div>
  )
}

export default App
