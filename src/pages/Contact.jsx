import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import PageTransition from "../components/ui/PageTransition";
import SectionHeading from "../components/ui/SectionHeading";
import useStore from "../store/useStore";

const Contact = () => {
  // Update document title
  useEffect(() => {
    document.title = "Contact Us - Serenity Spa";
  }, []);

  const { formData, updateFormData, resetForm } = useStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      resetForm();

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

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
            Contact Us
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
            We're here to answer your questions and help you book your next spa
            experience
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionHeading
                subtitle="Get in Touch"
                title="Contact Information"
              />

              <div className="space-y-8 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-lilac-100 rounded-md flex items-center justify-center text-lilac-600">
                    <FiMapPin size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Address</h3>
                    <p className="text-neutral-600">
                      123 Tranquility Lane
                      <br />
                      Serenity Hills, CA 94123
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-lilac-100 rounded-md flex items-center justify-center text-lilac-600">
                    <FiPhone size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-neutral-600">
                      <a
                        href="tel:+11234567890"
                        className="hover:text-lilac-600 transition-colors"
                      >
                        (123) 456-7890
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-lilac-100 rounded-md flex items-center justify-center text-lilac-600">
                    <FiMail size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-neutral-600">
                      <a
                        href="mailto:info@serenityspa.com"
                        className="hover:text-lilac-600 transition-colors"
                      >
                        info@serenityspa.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-lilac-100 rounded-md flex items-center justify-center text-lilac-600">
                    <FiClock size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium mb-1">Hours</h3>
                    <p className="text-neutral-600">
                      Monday - Friday: 9:00 AM - 8:00 PM
                      <br />
                      Saturday - Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 h-64 bg-neutral-100 rounded-md relative overflow-hidden">
                <iframe
                  title="Serenity Spa Location"
                  src="https://www.google.com/maps?q=123+Tranquility+Lane,+Serenity+Hills,+CA+94123&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute bottom-3 left-3 bg-white px-4 py-2 rounded-md shadow text-sm">
                  <p className="font-medium">
                    123 Tranquility Lane, Serenity Hills, CA 94123
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <SectionHeading subtitle="Send a Message" title="Get in Touch" />

              <div className="bg-neutral-50 p-8 rounded-md shadow-md mt-8">
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                    <p className="text-neutral-600">
                      Thank you for contacting us. We'll get back to you as soon
                      as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-700 mb-1"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-lilac-500 focus:border-transparent"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-700 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-lilac-500 focus:border-transparent"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-lilac-500 focus:border-transparent"
                        placeholder="(123) 456-7890"
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-lilac-500 focus:border-transparent"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className={`w-full btn btn-primary ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <SectionHeading
            subtitle="Common Questions"
            title="Frequently Asked Questions"
            center={true}
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-medium mb-2">
                Do I need to make an appointment?
              </h3>
              <p className="text-neutral-600">
                Yes, appointments are required to ensure we can provide you with
                the best possible service. We recommend booking at least 1-2
                weeks in advance, especially for weekend appointments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-medium mb-2">
                What should I wear during my treatment?
              </h3>
              <p className="text-neutral-600">
                We provide robes and slippers for your comfort. During
                treatments, you'll be professionally draped to ensure your
                privacy and comfort at all times.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-medium mb-2">
                How early should I arrive for my appointment?
              </h3>
              <p className="text-neutral-600">
                We recommend arriving 15-20 minutes before your scheduled
                appointment time to complete any necessary paperwork and begin
                your relaxation experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-lg font-medium mb-2">
                What is your cancellation policy?
              </h3>
              <p className="text-neutral-600">
                We require 24-hour notice for cancellations or rescheduling.
                Cancellations with less than 24-hour notice may be subject to a
                cancellation fee of 50% of the service price.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
