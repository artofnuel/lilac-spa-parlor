import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionHeading 
              subtitle="About Us" 
              title="Luxury Spa & Wellness Experience"
            />
            
            <p className="text-neutral-700 mb-6">
              Founded in 2010, Serenity Spa was created with a vision to provide a sanctuary where guests can escape the stresses of everyday life and immerse themselves in tranquility.
            </p>
            
            <p className="text-neutral-700 mb-6">
              Our expert therapists are trained in a wide range of massage techniques and spa treatments, ensuring each client receives personalized care tailored to their specific needs and preferences.
            </p>
            
            <div className="grid grid-cols-2 gap-6 my-8">
              <div>
                <h4 className="text-2xl font-display text-lilac-600 mb-2">15+</h4>
                <p className="text-neutral-600">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-display text-lilac-600 mb-2">20+</h4>
                <p className="text-neutral-600">Expert Therapists</p>
              </div>
              <div>
                <h4 className="text-2xl font-display text-lilac-600 mb-2">10k+</h4>
                <p className="text-neutral-600">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-2xl font-display text-lilac-600 mb-2">30+</h4>
                <p className="text-neutral-600">Spa Treatments</p>
              </div>
            </div>
            
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="rounded-md overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Spa atmosphere" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-md overflow-hidden shadow-xl hidden lg:block">
              <img 
                src="https://images.pexels.com/photos/374148/pexels-photo-374148.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Massage stones" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About