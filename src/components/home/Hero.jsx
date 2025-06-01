import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Spa background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            Relax. Rejuvenate. <br />
            <span className="text-lilac-300">Rediscover Yourself.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-neutral-100 max-w-lg"
          >
            Experience luxurious spa treatments in a serene environment designed to nurture your body, mind, and spirit.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link to="/booking" className="btn btn-primary">
              Book Appointment
            </Link>
            <Link to="/services" className="btn bg-white text-neutral-900 hover:bg-neutral-100">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero