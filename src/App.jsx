import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import About from './components/sections/About'
import Barbers from './components/sections/Barbers'
import CTA from './components/sections/CTA'
import Gallery from './components/sections/Gallery'
import Hero from './components/sections/Hero'
import Location from './components/sections/Location'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import WhatsAppFloat from './components/ui/WhatsAppFloat'
import { useScrollAnimation } from './hooks/useScrollAnimation'

export default function App() {
  useScrollAnimation()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Barbers />
        <Testimonials />
        <Location />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
