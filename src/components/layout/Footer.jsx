import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 text-neutral-200">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <Link to="/" className="text-2xl font-display font-semibold text-white">
              Serenity<span className="text-lilac-400">Spa</span>
            </Link>
            <p className="mt-4 text-neutral-400">
              Experience the ultimate in relaxation and rejuvenation with our premium spa services. 
              Your journey to wellness begins here.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://pinterest.com" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                <FaPinterest size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-display mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-display mb-4 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  Swedish Massage
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  Deep Tissue Massage
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  Hot Stone Therapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  Aromatherapy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  Facial Treatments
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  Body Scrubs & Wraps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-xl font-display mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="text-lilac-400 mr-3 mt-1" size={18} />
                <span className="text-neutral-400">
                  123 Tranquility Lane<br />
                  Serenity Hills, CA 94123
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-lilac-400 mr-3" size={18} />
                <a href="tel:+11234567890" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="text-lilac-400 mr-3" size={18} />
                <a href="mailto:info@serenityspa.com" className="text-neutral-400 hover:text-lilac-400 transition-colors">
                  info@serenityspa.com
                </a>
              </li>
              <li className="flex items-start">
                <FiClock className="text-lilac-400 mr-3 mt-1" size={18} />
                <div className="text-neutral-400">
                  <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
                  <p>Sat-Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            © {currentYear} Serenity Spa. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-neutral-500 flex space-x-6">
            <Link to="/privacy" className="hover:text-lilac-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-lilac-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer