'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  {
    title: 'Our Mission',
    description: 'To provide best-in-class shade and structure solutions that exceed client expectations.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Our Vision',
    description: 'To become the leading shade maker company in the Kingdom of Saudi Arabia.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Our Goals',
    description: 'To extend our premium services to every part of Saudi Arabia with excellence.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

export default function About() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-nmj-cream overflow-hidden" ref={containerRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-nmj-navy/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-px bg-nmj-gold" />
              <span className="font-heading text-sm uppercase tracking-[0.3em] text-nmj-gold">
                About Us
              </span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-headline text-nmj-navy mb-8 section-title">
              Building Excellence<br />
              <span className="text-nmj-blue">Since 2014</span>
            </h2>

            {/* Description */}
            <div className="space-y-6 text-nmj-navy/70 leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-nmj-navy">Nabilah Mohammed Jameel Ali Bati Est.</span> has 
                been delivering reliable shade and structure solutions for over 10 years across the Kingdom 
                of Saudi Arabia.
              </p>
              <p>
                We specialize in car parking shades, playground shades, pre-engineered warehouses, 
                warehouse curtains, and tarpaulins. Our focus is on quality, durability, and cost-effective 
                designs tailored to your specific needs.
              </p>
              <p>
                From Aramco facilities to international schools, from naval bases to private residences, 
                our structures stand as testaments to our commitment to excellence.
              </p>
            </div>

            {/* Feature Tags */}
            <motion.div 
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              {['Quality Assured', 'Custom Designs', '10+ Years', 'All Over KSA'].map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-nmj-navy/5 border border-nmj-navy/10 text-nmj-navy text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group relative bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-500 card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.15 }}
                whileHover={{ x: 10 }}
              >
                {/* Left Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-nmj-gold transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-nmj-navy/5 rounded-lg flex items-center justify-center text-nmj-navy group-hover:bg-nmj-gold group-hover:text-white transition-all duration-300">
                    {value.icon}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-nmj-navy mb-2">
                      {value.title}
                    </h3>
                    <p className="text-nmj-navy/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-nmj-gold/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              className="relative bg-nmj-navy p-8 text-white overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.85 }}
            >
              <div className="relative z-10">
                <p className="font-heading text-lg mb-4">Ready to start your project?</p>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 text-nmj-gold font-heading uppercase tracking-wider hover:gap-4 transition-all"
                >
                  Get in Touch
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="aboutCta" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#c9a961" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#aboutCta)" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
