'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredClient, setHoveredClient] = useState(null)

  // ============================================
  // EDIT THIS SECTION TO ADD CLIENT LOGOS
  // ============================================
  const clients = [
    {
      id: 1,
      name: "Al Shalwi Group",
      logo: "/images/shalwi.png",
      category: "Construction",
    },
    {
      id: 2,
      name: "ISG",
      logo: "/images/isgggg.png",
      category: "Educational",
    },
    {
      id: 3,
      name: "Saudi Railways",
      logo: "/images/sr.png",
      category: "Real Estate",
    },
    {
      id: 4,
      name: "BroadCO",
      logo: "/images/broad.png",
      category: "Construction",
    },
    {
      id: 5,
      name: "Saudi Transformer CO",
      logo: "/images/stc logo.png",
      category: "Industrial",
    },
    {
      id: 6,
      name: "Almarai CO",
      logo: "/images/Almarailogo.PNG",
      category: "Food & Beverage",
    },
    {
      id: 7,
      name: "SAPCO III",
      logo: "/images/sp.png",
      category: "Energy",
    },
    {
      id: 8,
      name: "Tamimi Group",
      logo: "/images/tamami.PNG",
      category: "Construction",
    },
    {
      id: 9,
      name: "Wescosa",
      logo: "/images/wesco.png",
      category: "Energy",
    },
    {
      id: 10,
      name: "Al Raheed Foods",
      logo: "/images/arf.png",
      category: "Food & Beverage",
    },
    {
      id: 11,
      name: "Al Tadheeb Company",
      logo: "/images/tadheeb.png",
      category: "Education",
    },
    {
      id: 12,
      name: "Yousaf Bin Ahmad Kanoo Co.",
      logo: "/images/kanoo.PNG",
      category: "Logistics",
    },
  ]
  // ============================================

  // Stats for impact
  const stats = [
    { number: "50+", label: "Trusted Partners" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "15+", label: "Industries Served" },
  ]

  return (
    <section 
      ref={ref}
      id="clients" 
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Dark Navy Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-nmj-navy via-nmj-navy-light to-nmj-navy" />
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Gold Circle */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-nmj-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-nmj-gold/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(212, 168, 83, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 168, 83, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 border border-nmj-gold/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-24 h-24 border border-nmj-gold/10 rotate-45"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 border border-nmj-gold/30 bg-nmj-gold/5 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 bg-nmj-gold rounded-full animate-pulse" />
            <span className="font-heading text-nmj-gold text-sm tracking-[0.25em] uppercase">
              Trusted Partners
            </span>
            <span className="w-2 h-2 bg-nmj-gold rounded-full animate-pulse" />
          </motion.div>

          {/* Main Heading */}
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            COMPANIES THAT
            <br />
            <span className="text-gradient-gold">TRUST US</span>
          </h2>

          {/* Subheading */}
          <p className="text-nmj-sand/60 max-w-2xl mx-auto text-lg">
            We are honored to partner with industry leaders across Saudi Arabia, 
            delivering excellence and innovation in every project.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-nmj-gold" />
            <svg className="w-6 h-6 text-nmj-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 18.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
            </svg>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-nmj-gold" />
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className="block font-display text-3xl md:text-5xl text-nmj-gold mb-1">
                {stat.number}
              </span>
              <span className="text-nmj-sand/50 text-xs md:text-sm uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Client Logos - Main Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Glow Effect Behind Grid */}
          <div className="absolute inset-0 bg-gradient-to-b from-nmj-gold/5 via-transparent to-nmj-gold/5 blur-xl" />
          
          {/* Logos Grid */}
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onMouseEnter={() => setHoveredClient(client.id)}
                onMouseLeave={() => setHoveredClient(null)}
                className="group relative"
              >
                <div className={`
                  relative bg-white/5 backdrop-blur-sm border border-white/10 
                  p-6 md:p-8 transition-all duration-500 overflow-hidden
                  ${hoveredClient === client.id ? 'bg-white/10 border-nmj-gold/50 scale-105 shadow-2xl shadow-nmj-gold/20' : 'hover:bg-white/10'}
                `}>
                  {/* Animated Border on Hover */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  `}>
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-nmj-gold to-transparent animate-shimmer" />
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-nmj-gold to-transparent animate-shimmer" />
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-nmj-gold/0 group-hover:border-nmj-gold transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-nmj-gold/0 group-hover:border-nmj-gold transition-all duration-300" />

                  {/* Logo Container - LARGER */}
                  <div className="relative aspect-[16/10] flex items-center justify-center mb-4">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className={`
                        object-contain p-2 transition-all duration-500
                        ${hoveredClient === client.id ? 'scale-110 brightness-110' : 'brightness-90 group-hover:brightness-100'}
                      `}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>

                  {/* Client Info */}
                  <div className="text-center relative z-10">
                    <h4 className={`
                      font-heading text-sm md:text-base font-medium transition-colors duration-300 truncate
                      ${hoveredClient === client.id ? 'text-nmj-gold' : 'text-white/80 group-hover:text-white'}
                    `}>
                      {client.name}
                    </h4>
                    <p className="text-nmj-sand/40 text-xs mt-1 uppercase tracking-wider">
                      {client.category}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-t from-nmj-gold/10 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                  `} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marquee Animation - Continuous Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 overflow-hidden"
        >
          <div className="relative">
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-nmj-navy to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-nmj-navy to-transparent z-10" />
            
            {/* Scrolling Text */}
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center mx-8">
                  {clients.map((client, index) => (
                    <span key={`${i}-${index}`} className="flex items-center mx-8">
                      <span className="w-2 h-2 bg-nmj-gold/50 rounded-full mr-4" />
                      <span className="text-nmj-sand/30 font-heading text-lg uppercase tracking-widest">
                        {client.name}
                      </span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block relative">
            {/* Decorative Elements */}
            <div className="absolute -inset-4 border border-nmj-gold/20 -z-10" />
            <div className="absolute -inset-8 border border-nmj-gold/10 -z-10" />
            
            <div className="bg-nmj-navy-light p-8 md:p-12">
              <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                READY TO JOIN OUR <span className="text-nmj-gold">SUCCESS STORIES?</span>
              </h3>
              <p className="text-nmj-sand/60 mb-6 max-w-md mx-auto">
                Partner with us and experience the premium quality that leading companies trust.
              </p>
              <a href="#contact" className="btn-premium">
                Become a Partner
                <svg className="w-4 h-4 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}