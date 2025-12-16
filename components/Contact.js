'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    value: 'Street 14, AlAdamah Tent Market\nDammam, KSA',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+966 55 307 7471',
    href: 'tel:+966553077471',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'abdulhameed@nmjshades.com',
    href: 'mailto:abdulhameed@nmjshades.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    label: 'Website',
    value: 'www.nmjshades.com',
    href: 'https://www.nmjshades.com',
  },
]

export default function Contact() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormState({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-nmj-cream overflow-hidden" ref={containerRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-50" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 border border-nmj-navy/5 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-nmj-gold" />
            <span className="font-heading text-sm uppercase tracking-[0.3em] text-nmj-gold">
              Get In Touch
            </span>
            <div className="w-12 h-px bg-nmj-gold" />
          </div>
          
          <h2 className="text-headline text-nmj-navy mb-6 section-title section-title-center">
            Start Your <span className="text-nmj-blue">Project</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-nmj-navy/60 text-lg">
            Ready to discuss your shade and structure needs? Contact us today 
            for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div>
              <h3 className="font-heading text-2xl text-nmj-navy mb-6">Contact Information</h3>
              <p className="text-nmj-navy/60 leading-relaxed">
                We look forward to working with you. Reach out to us through any 
                of the following channels or fill out the form.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="group flex items-start gap-4 p-4 bg-white/80 hover:bg-white shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-nmj-navy/5 flex items-center justify-center text-nmj-navy group-hover:bg-nmj-gold group-hover:text-white transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-nmj-navy/50 font-heading uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-nmj-navy hover:text-nmj-gold transition-colors whitespace-pre-line"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-nmj-navy whitespace-pre-line">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

     
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                  >
                    <p className="font-heading text-sm uppercase tracking-wider text-nmj-navy/50 mb-4">
                    Follow Us
                    </p>
                    <div className="flex gap-4">
                    {[
                      { name: 'Facebook', href: 'https://www.facebook.com/NMJshades/' },
                      { name: 'Instagram', href: 'https://www.instagram.com/nmjshades/' },
                      { name: 'WhatsApp', href: 'https://wa.me/966553077471' },
                    ].map((social) => (
                      <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-nmj-navy/20 flex items-center justify-center text-nmj-navy hover:bg-nmj-navy hover:text-white transition-all"
                      title={social.name}
                      >
                      <span className="text-xs font-heading ">{social.name[0]}</span>
                      </a>
                    ))}
                    </div>
                  </motion.div>
                  </motion.div>

                  {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-white shadow-xl p-8 lg:p-10">
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="font-heading text-2xl text-nmj-navy mb-2">Request a Quote</h3>
                <p className="text-nmj-navy/50">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              {/* Form Fields */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-heading uppercase tracking-wider text-nmj-navy/70 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 border border-nmj-navy/20 focus:border-nmj-gold focus:outline-none transition-colors bg-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading uppercase tracking-wider text-nmj-navy/70 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 border border-nmj-navy/20 focus:border-nmj-gold focus:outline-none transition-colors bg-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-heading uppercase tracking-wider text-nmj-navy/70 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-nmj-navy/20 focus:border-nmj-gold focus:outline-none transition-colors bg-transparent"
                    placeholder="+966 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading uppercase tracking-wider text-nmj-navy/70 mb-2">
                    Service Required
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 border border-nmj-navy/20 focus:border-nmj-gold focus:outline-none transition-colors bg-transparent appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="car-parking">Car Parking Shades</option>
                    <option value="playground">Playground Shades</option>
                    <option value="peb-warehouse">PEB Warehouse</option>
                    <option value="curtains">Warehouse Curtains</option>
                    <option value="steel">Steel Structures</option>
                    <option value="tarpaulin">Tarpaulin</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-heading uppercase tracking-wider text-nmj-navy/70 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 border border-nmj-navy/20 focus:border-nmj-gold focus:outline-none transition-colors bg-transparent resize-none"
                  placeholder="Tell us about your project requirements, location, and any specific needs..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-nmj-navy/30 border-t-nmj-navy rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Inquiry
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
