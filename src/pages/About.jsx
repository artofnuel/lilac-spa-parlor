import { useEffect } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/ui/PageTransition'
import SectionHeading from '../components/ui/SectionHeading'

const About = () => {
  // Update document title
  useEffect(() => {
    document.title = 'About Us - Serenity Spa'
  }, [])

  const teamMembers = [
    {
      id: 1,
      name: 'Emma Thompson',
      role: 'Founder & Lead Therapist',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'With over 15 years of experience in massage therapy and holistic healing, Emma founded Serenity Spa with a vision to create a haven of peace and rejuvenation.'
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Master Massage Therapist',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Specializing in deep tissue and sports massage, David combines Eastern and Western techniques to create personalized treatments that address specific concerns.'
    },
    {
      id: 3,
      name: 'Sophia Rodriguez',
      role: 'Aromatherapist & Esthetician',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Sophia\'s expertise in aromatherapy and skincare has made her facials and body treatments among our most requested services.'
    },
    {
      id: 4,
      name: 'Michael Johnson',
      role: 'Wellness Coach',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'As our wellness coach, Michael helps clients develop personalized plans that extend the benefits of their spa treatments into everyday life.'
    }
  ]

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Spa atmosphere" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="container relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Serenity Spa
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
            Our story, our mission, and the dedicated team behind our exceptional spa experience
          </motion.p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                subtitle="Our Story" 
                title="A Decade of Wellness Excellence"
              />
              
              <p className="text-neutral-700 mb-6">
                Founded in 2010 by Emma Thompson, Serenity Spa began as a small studio with a big vision: to create a sanctuary where clients could escape the chaos of everyday life and reconnect with themselves.
              </p>
              
              <p className="text-neutral-700 mb-6">
                Over the years, we've grown into a premier wellness destination, but our core values remain unchanged. We believe in the transformative power of touch, the healing properties of natural ingredients, and the importance of creating a space where tranquility reigns supreme.
              </p>
              
              <p className="text-neutral-700">
                Each member of our team is carefully selected not just for their technical skills, but for their genuine passion for wellness and dedication to providing an exceptional experience for every client who walks through our doors.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Spa interior" 
                className="rounded-md shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lilac-100 rounded-md -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Philosophy Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <SectionHeading 
            subtitle="Our Philosophy" 
            title="The Serenity Spa Approach" 
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="bg-white p-8 rounded-md shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-lilac-700">Holistic Wellness</h3>
              <p className="text-neutral-700">
                We believe in treating the whole person—mind, body, and spirit. Our treatments are designed to promote overall wellbeing, not just address surface-level concerns.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-md shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-lilac-700">Personalized Care</h3>
              <p className="text-neutral-700">
                No two bodies are the same, and neither are our treatments. We take the time to understand your unique needs and tailor our services accordingly.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-md shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-lilac-700">Quality & Excellence</h3>
              <p className="text-neutral-700">
                We use only premium products and continually invest in training to ensure our team remains at the forefront of wellness innovations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading 
            subtitle="Our Team" 
            title="Meet Our Experts" 
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                className="bg-white rounded-md shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-lilac-600 text-sm mb-4">{member.role}</p>
                  <p className="text-neutral-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default About