import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'

const services = [
  {
    id: 1,
    name: 'Swedish Massage',
    description: 'A gentle, relaxing massage that improves circulation and eases tension.',
    image: 'https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$85',
    duration: '60 min'
  },
  {
    id: 2,
    name: 'Deep Tissue Massage',
    description: 'Targets deeper layers of muscle and connective tissue to release chronic tension.',
    image: 'https://images.pexels.com/photos/3865560/pexels-photo-3865560.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$95',
    duration: '60 min'
  },
  {
    id: 3,
    name: 'Hot Stone Therapy',
    description: 'Heated stones placed on key points of the body to melt away tension.',
    image: 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=800',
    price: '$110',
    duration: '75 min'
  },
  {
    id: 4,
    name: 'Aromatherapy Massage',
    description: 'Essential oils enhance the therapeutic benefits of massage for mind and body.',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
    price: '$90',
    duration: '60 min'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const FeaturedServices = () => {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <SectionHeading 
          subtitle="Our Treatments" 
          title="Featured Services" 
          center={true}
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group rounded-md overflow-hidden shadow-md bg-white"
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-medium">{service.name}</h3>
                  <div className="text-lilac-600 font-medium">{service.price}</div>
                </div>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-500">{service.duration}</span>
                  <Link 
                    to="/booking" 
                    className="text-lilac-600 hover:text-lilac-800 font-medium"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedServices