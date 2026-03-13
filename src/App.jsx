import Hero from './components/Hero'
import Intro from './components/Intro'
import Principles from './components/Principles'
import Buildings from './components/Buildings'
import Legacy from './components/Legacy'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Intro />
      <Principles />
      <Buildings />
      <Legacy />
      <Footer />
    </div>
  )
}
