import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrubVideo from './components/ScrubVideo'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Openings from './components/Openings'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <ScrubVideo />
      <Navbar />
      <Hero />
      <main
        className="relative z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0) 0, rgba(255,255,255,0.78) 40vh, rgba(255,255,255,0.84) 100%)',
        }}
      >
        <Marquee />
        <About />
        <Services />
        <Work />
        <Process />
        <Openings />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
