import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Regular Client',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: 'Absolutely amazing experience! The deep tissue massage was exactly what I needed after months of tension. The staff was professional and attentive from the moment I walked in.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'First-time Visitor',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: 'I visited for my anniversary and we had the couples massage. The ambiance was perfect - calming music, aromatic scents, and skilled therapists. Will definitely return!',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Monthly Member',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: 'As a monthly member, I can confidently say that the consistency and quality of service is outstanding. The hot stone therapy is my favorite treatment - pure bliss every time.',
    rating: 5
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Business Executive',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120',
    quote: 'My schedule is always packed, but I make time for their stress-relief massage. It has significantly improved my well-being and helps me maintain focus during busy weeks.',
    rating: 4
  }
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const testimonialCount = testimonials.length

  // Autoplay functionality
  useEffect(() => {
    let timer
    if (autoplay) {
      timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonialCount)
      }, 5000)
    }
    return () => clearInterval(timer)
  }, [autoplay, testimonialCount])

  // Pause autoplay when user interacts
  const handleInteraction = () => {
    setAutoplay(false)
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000)
  }

  const next = () => {
    handleInteraction()
    setCurrent((prev) => (prev + 1) % testimonialCount)
  }

  const prev = () => {
    handleInteraction()
    setCurrent((prev) => (prev - 1 + testimonialCount) % testimonialCount)
  }

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={`text-${index < rating ? 'yellow-500' : 'neutral-300'}`}>★</span>
    ))
  }

  return (
    <section className="section bg-lilac-900 text-white py-20">
      <div className="container">
        <SectionHeading 
          subtitle="Client Testimonials" 
          title="What Our Clients Say" 
          center={true}
          light={true}
        />
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              initial={false}
              animate={{ x: `${-current * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-md p-8 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-lilac-300">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="mb-4">{renderStars(testimonial.rating)}</div>
                    <blockquote className="text-lg italic mb-6 text-neutral-100">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="font-medium text-lilac-200">{testimonial.name}</div>
                    <div className="text-sm text-neutral-300">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-12 h-12 rounded-full bg-lilac-600/80 text-white flex items-center justify-center focus:outline-none hover:bg-lilac-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-12 h-12 rounded-full bg-lilac-600/80 text-white flex items-center justify-center focus:outline-none hover:bg-lilac-700 transition-colors"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </button>
          
          {/* Dots Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handleInteraction()
                  setCurrent(index)
                }}
                className={`w-3 h-3 rounded-full ${
                  current === index ? 'bg-lilac-300' : 'bg-lilac-600/50'
                } transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials