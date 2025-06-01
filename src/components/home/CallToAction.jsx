import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container">
        <div className="bg-white rounded-md shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-display mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to Experience <br />
                <span className="text-lilac-600">Ultimate Relaxation?</span>
              </motion.h2>
              
              <motion.p 
                className="text-neutral-700 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Book your appointment today and take the first step toward a rejuvenated body and mind. Our spa experts are ready to customize treatments just for you.
              </motion.p>
              
              <motion.div 
                className="space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link to="/booking" className="btn btn-primary">
                  Book Now
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Contact Us
                </Link>
              </motion.div>
            </div>
            
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Spa atmosphere" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction