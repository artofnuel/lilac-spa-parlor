import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/ui/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'

const Gallery = () => {
  // Update document title
  useEffect(() => {
    document.title = 'Gallery - Serenity Spa'
  }, [])

  const [activeCategory, setActiveCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'spa', name: 'Spa Interior' },
    { id: 'treatments', name: 'Treatments' },
    { id: 'products', name: 'Products' }
  ]
  
  const galleryItems = [
    {
      id: 1,
      category: 'spa',
      image: 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=800',
      title: 'Relaxation Area'
    },
    {
      id: 2,
      category: 'treatments',
      image: 'https://images.pexels.com/photos/3865560/pexels-photo-3865560.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Massage Therapy'
    },
    {
      id: 3,
      category: 'products',
      image: 'https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Essential Oils'
    },
    {
      id: 4,
      category: 'spa',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Treatment Room'
    },
    {
      id: 5,
      category: 'treatments',
      image: 'https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Hot Stone Therapy'
    },
    {
      id: 6,
      category: 'products',
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Aromatherapy Collection'
    },
    {
      id: 7,
      category: 'spa',
      image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Reception Area'
    },
    {
      id: 8,
      category: 'treatments',
      image: 'https://images.pexels.com/photos/3865555/pexels-photo-3865555.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Facial Treatment'
    },
    {
      id: 9,
      category: 'products',
      image: 'https://images.pexels.com/photos/374148/pexels-photo-374148.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Natural Skincare'
    }
  ]
  
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Spa interior" 
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
            Our Gallery
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
            Explore our serene spa environment, luxurious treatments, and premium products
          </motion.p>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading 
            subtitle="Visual Tour" 
            title="Experience Serenity Spa" 
            center={true}
          />
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-md transition-colors ${
                  activeCategory === category.id
                    ? 'bg-lilac-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="rounded-md overflow-hidden shadow-md"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative group h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-4 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-medium text-lg">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Gallery