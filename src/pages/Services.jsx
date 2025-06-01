import { useEffect } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/ui/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'
import { Link } from 'react-router-dom'

const Services = () => {
  // Update document title
  useEffect(() => {
    document.title = 'Our Services - Serenity Spa'
  }, [])

  const categories = [
    {
      id: 'massage',
      name: 'Massage Therapy',
      description: 'Relieve tension, improve circulation, and promote relaxation with our expert massage services.',
      services: [
        {
          id: 1,
          name: 'Swedish Massage',
          description: 'A gentle, relaxing massage that uses long strokes, kneading, and circular movements to ease tension.',
          duration: '60 / 90 min',
          price: '$85 / $120'
        },
        {
          id: 2,
          name: 'Deep Tissue Massage',
          description: 'Targets the deeper layers of muscle and connective tissue to release chronic patterns of tension.',
          duration: '60 / 90 min',
          price: '$95 / $135'
        },
        {
          id: 3,
          name: 'Hot Stone Massage',
          description: 'Smooth, heated stones are placed on specific points on the body to warm and loosen tight muscles.',
          duration: '75 min',
          price: '$110'
        },
        {
          id: 4,
          name: 'Aromatherapy Massage',
          description: 'Combines the therapeutic benefits of massage with the healing properties of essential oils.',
          duration: '60 / 90 min',
          price: '$90 / $130'
        }
      ]
    },
    {
      id: 'facial',
      name: 'Facial Treatments',
      description: 'Rejuvenate your skin with our customized facial treatments using premium skincare products.',
      services: [
        {
          id: 5,
          name: 'Classic Facial',
          description: 'A purifying treatment that includes cleansing, exfoliation, extraction, and hydration.',
          duration: '60 min',
          price: '$80'
        },
        {
          id: 6,
          name: 'Anti-Aging Facial',
          description: 'Targets fine lines and wrinkles with specialized products to restore youthful radiance.',
          duration: '75 min',
          price: '$110'
        },
        {
          id: 7,
          name: 'Hydrating Facial',
          description: 'Intensely moisturizes dry, dehydrated skin for a plump, glowing complexion.',
          duration: '60 min',
          price: '$90'
        }
      ]
    },
    {
      id: 'body',
      name: 'Body Treatments',
      description: 'Pamper your body from head to toe with our luxurious and rejuvenating body treatments.',
      services: [
        {
          id: 8,
          name: 'Body Scrub',
          description: 'Exfoliates and polishes the skin, removing dead cells to reveal softer, smoother skin.',
          duration: '45 min',
          price: '$75'
        },
        {
          id: 9,
          name: 'Detoxifying Body Wrap',
          description: 'Eliminates toxins and reduces water retention while nourishing the skin.',
          duration: '60 min',
          price: '$95'
        },
        {
          id: 10,
          name: 'Mud Therapy',
          description: 'Uses mineral-rich mud to draw out impurities and replenish essential minerals.',
          duration: '60 min',
          price: '$90'
        }
      ]
    },
    {
      id: 'packages',
      name: 'Spa Packages',
      description: 'Indulge in our carefully curated spa packages for the ultimate relaxation experience.',
      services: [
        {
          id: 11,
          name: 'Serenity Signature',
          description: 'Our signature package includes a Swedish massage, classic facial, and aromatherapy session.',
          duration: '2.5 hours',
          price: '$225'
        },
        {
          id: 12,
          name: 'Couples Retreat',
          description: 'Share the spa experience with a loved one. Includes side-by-side massages and refreshments.',
          duration: '90 min',
          price: '$240 (for two)'
        },
        {
          id: 13,
          name: 'Total Rejuvenation',
          description: 'A full day of pampering with massage, facial, body scrub, wrap, and a light spa lunch.',
          duration: '5 hours',
          price: '$400'
        }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3865555/pexels-photo-3865555.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Spa treatments" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="container relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.div 
            className="h-1 w-20 bg-lilac-400 mx-auto my-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg"
          >
            Discover our range of luxurious treatments designed to relax, rejuvenate, and restore balance to your body and mind
          </motion.p>
        </div>
      </section>
      
      {/* Services Categories */}
      {categories.map((category, index) => (
        <section 
          key={category.id}
          id={category.id}
          className={`section ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
        >
          <div className="container">
            <SectionHeading 
              subtitle={`Category ${index + 1}`}
              title={category.name} 
            />
            <p className="text-neutral-700 max-w-3xl mb-12">{category.description}</p>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {category.services.map((service) => (
                <motion.div 
                  key={service.id}
                  className="bg-white rounded-md shadow-md overflow-hidden flex flex-col h-full"
                  variants={itemVariants}
                >
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium">{service.name}</h3>
                      <div className="text-lilac-600 font-medium">{service.price}</div>
                    </div>
                    <p className="text-neutral-600 mb-4">{service.description}</p>
                    <div className="mt-auto flex justify-between items-center pt-4 border-t border-neutral-100">
                      <span className="text-sm text-neutral-500">Duration: {service.duration}</span>
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
          </div>
        </section>
      ))}
      
      {/* Call to Action */}
      <section className="section bg-lilac-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">Ready to Experience Serenity?</h2>
          <p className="text-lilac-100 max-w-2xl mx-auto mb-8">
            Our expert therapists are ready to provide you with a personalized treatment that meets your unique needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking" className="btn bg-white text-lilac-800 hover:bg-neutral-100">
              Book an Appointment
            </Link>
            <Link to="/contact" className="btn border border-white text-white hover:bg-lilac-700">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Services