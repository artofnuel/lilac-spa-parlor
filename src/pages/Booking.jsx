import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/ui/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'

const Booking = () => {
  useEffect(() => {
    document.title = 'Book an Appointment - Serenity Spa'
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    'Swedish Massage (60 min - $85)',
    'Deep Tissue Massage (60 min - $95)',
    'Hot Stone Massage (75 min - $110)',
    'Aromatherapy Massage (60 min - $90)',
    'Classic Facial (60 min - $80)',
    'Anti-Aging Facial (75 min - $110)',
    'Body Scrub (45 min - $75)',
    'Detoxifying Body Wrap (60 min - $95)'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          message: ''
        })
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  // Get today's date in YYYY-MM-DD format for min date attribute
  const today = new Date().toISOString().split('T')[0]

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920" 
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
            Book an Appointment
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
            Schedule your next spa treatment with our simple booking form
          </motion.p>
        </div>
      </section>
      
      {/* Booking Form Section */}
      <section className="section bg-white">
        <div className="container max-w-3xl">
          <SectionHeading 
            subtitle="Make a Reservation" 
            title="Book Your Treatment"
            center={true}
          />
          
          <div className="mt-12">
            {isSubmitted ? (
              <motion.div 
                className="bg-white p-8 rounded-md shadow-md text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-display font-medium mb-4">Booking Confirmed!</h2>
                <p className="text-neutral-700 mb-4">
                  Your appointment has been successfully scheduled. You will receive a confirmation email shortly.
                </p>
                <p className="text-neutral-600">
                  We look forward to seeing you soon at Serenity Spa!
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-md shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-lilac-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-lilac-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-lilac-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                      Select Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-lilac-500 focus:border-transparent"
                      required
                    >
                      <option value="">Choose a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={today}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-lilac-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-1">
                      Preferred Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-lilac-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Special Requests or Notes (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-lilac-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="mt-8">
                  <button
                    type="submit"
                    className={`w-full btn btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Book Appointment'}
                  </button>
                </div>
                
                <p className="mt-4 text-sm text-neutral-600">
                  * Required fields
                </p>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Booking