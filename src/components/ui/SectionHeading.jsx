import { motion } from 'framer-motion'

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const lineVariants = {
  hidden: { width: 0 },
  visible: { 
    width: "60px",
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3
    }
  }
}

const SectionHeading = ({ title, subtitle, center = false, light = false }) => {
  return (
    <motion.div 
      className={`mb-12 ${center ? 'text-center' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {subtitle && (
        <motion.p 
          className={`uppercase tracking-wider text-sm mb-2 ${light ? 'text-lilac-300' : 'text-lilac-600'}`}
          variants={headingVariants}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2 
        className={light ? 'text-white' : 'text-neutral-900'}
        variants={headingVariants}
      >
        {title}
      </motion.h2>
      <motion.div 
        className={`h-1 bg-lilac-600 rounded mt-4 ${center ? 'mx-auto' : ''}`}
        variants={lineVariants}
      />
    </motion.div>
  )
}

export default SectionHeading