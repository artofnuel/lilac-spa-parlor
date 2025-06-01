import { useEffect } from 'react'
import PageTransition from '../components/ui/PageTransition'
import Hero from '../components/home/Hero'
import FeaturedServices from '../components/home/FeaturedServices'
import About from '../components/home/About'
import Testimonials from '../components/home/Testimonials'
import CallToAction from '../components/home/CallToAction'

const Home = () => {
  // Update document title
  useEffect(() => {
    document.title = 'Serenity Spa - Relax, Rejuvenate, Rediscover'
  }, [])

  return (
    <PageTransition>
      <Hero />
      <FeaturedServices />
      <About />
      <Testimonials />
      <CallToAction />
    </PageTransition>
  )
}

export default Home