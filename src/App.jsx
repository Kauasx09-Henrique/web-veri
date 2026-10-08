import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import CallToAction from './pages/CallToAction'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default App