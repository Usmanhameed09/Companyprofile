'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function ManagerMessage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // ============================================
  // EDIT THIS SECTION TO CUSTOMIZE MANAGER INFO
  // ============================================
  const managerData = {
    name: "Abdulhameed",
    position: "General Manager",
    image: "/images/manager.jpeg", // Replace with actual manager photo path
    signature: "/images/signature.png", // Optional: manager signature image
    message: `
      Welcome to NMJ Shades, where excellence meets innovation in shade and structure solutions.
      
      For over decade, we have been committed to transforming outdoor spaces across Saudi Arabia with our premium shade structures. Our journey began with a simple vision: to provide world-class shading solutions that combine functionality, durability, and aesthetic excellence.
      
      At NMJ Shades, we believe that every project tells a story. Whether it's a grand commercial complex, a serene residential garden, or an expansive industrial facility, we approach each endeavor with the same dedication to quality and attention to detail that has become our hallmark.
      
      Our team of skilled engineers, designers, and craftsmen work tirelessly to ensure that every structure we create not only meets but exceeds our clients' expectations. We take pride in using only the finest materials and the latest technologies to deliver solutions that stand the test of time.
      
      As we continue to grow and evolve, our commitment to our clients remains unwavering. We are not just building structures; we are building relationships, trust, and a legacy of excellence.
      
      Thank you for choosing NMJ Shades. Together, let's create shade solutions that inspire.
    `,
    highlights: [
      { number: "12+", label: "Years of Excellence" },
      { number: "300+", label: "Projects Completed" },
      { number: "100%", label: "Client Satisfaction" },
    ]
  }
  // ============================================

  return (
    <section 
      ref={ref}
      id="manager-message" 
      className="relative py-24 md:py-32 bg-nmj-cream overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-lines pointer-events-none" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-nmj-gold/20 rotate-45 animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-nmj-gold/20 rotate-12 animate-float" />
      <div className="absolute top-1/2 right-20 w-2 h-40 bg-gradient-to-b from-nmj-gold/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-nmj-navy/5 text-nmj-navy font-heading text-sm tracking-[0.2em] uppercase mb-4">
            Leadership
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-nmj-navy mb-4">
            MESSAGE FROM THE <span className="text-gradient-gold">MANAGER</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-nmj-gold" />
            <svg className="w-6 h-6 text-nmj-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 18.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
            </svg>
            <span className="w-12 h-[2px] bg-nmj-gold" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Manager Image & Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="relative group">
              {/* Corner Accents */}
              <div className="corner-accent top-left group-hover:w-20 group-hover:h-20 group-hover:opacity-60 transition-all duration-500" />
              <div className="corner-accent bottom-right group-hover:w-20 group-hover:h-20 group-hover:opacity-60 transition-all duration-500" />
              
              <div className="relative bg-white p-6 shadow-elevated">
                {/* Manager Photo */}
                <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-nmj-navy-light">
                  <Image
                    src={managerData.image}
                    alt={managerData.name}
                    fill
                    className="object-cover"
                  />
                  {/* Uncomment below and add actual image path */}
                  {/* <Image
                    src={managerData.image}
                    alt={managerData.name}
                    fill
                    className="object-cover"
                  /> */}
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-nmj-navy via-transparent to-transparent opacity-60" />
                </div>

                {/* Manager Info */}
                <div className="text-center">
                  <h3 className="font-display text-3xl text-nmj-navy mb-1">
                    {managerData.name}
                  </h3>
                  <p className="font-heading text-nmj-gold tracking-wider text-sm uppercase">
                    {managerData.position}
                  </p>
                  
                  {/* Gold Divider */}
                  <div className="flex items-center justify-center my-6">
                    <span className="w-8 h-[1px] bg-nmj-gold/50" />
                    <span className="w-3 h-3 border border-nmj-gold rotate-45 mx-3" />
                    <span className="w-8 h-[1px] bg-nmj-gold/50" />
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {managerData.highlights.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="text-center p-3 bg-nmj-sand/50"
                      >
                        <span className="block font-display text-2xl text-nmj-gold">
                          {item.number}
                        </span>
                        <span className="text-xs text-nmj-navy/60 uppercase tracking-wider">
                          {item.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="relative">
              {/* Large Quote Mark */}
              <div className="absolute -top-8 -left-4 md:-left-8">
                <svg 
                  className="w-16 h-16 md:w-24 md:h-24 text-nmj-gold/10" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              {/* Message Card */}
              <div className="bg-white p-8 md:p-12 shadow-soft relative">
                {/* Top Gold Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nmj-gold via-nmj-gold-light to-nmj-gold" />
                
                {/* Message Text */}
                <div className="space-y-4 text-nmj-navy/80 leading-relaxed font-body">
                  {managerData.message.trim().split('\n\n').map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className={index === 0 ? "text-lg md:text-xl font-medium text-nmj-navy" : ""}
                    >
                      {paragraph.trim()}
                    </motion.p>
                  ))}
                </div>

                {/* Signature Area */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-10 pt-8 border-t border-nmj-sand"
                >
                  <div className="flex items-end justify-between flex-wrap gap-4">
                    <div>
                      {/* Signature Image Placeholder */}
                      <div className="h-12 mb-3">
                        {/* Replace with actual signature */}
                        <p className="font-display text-3xl text-nmj-navy italic">
                          {managerData.name.split(' ')[0]}
                        </p>
                      </div>
                      <p className="font-heading text-lg text-nmj-navy">
                        {managerData.name}
                      </p>
                      <p className="text-nmj-gold text-sm tracking-wider uppercase">
                        {managerData.position}
                      </p>
                    </div>
                    
                    {/* Company Logo/Seal */}
                    <div className="w-20 h-20 border-2 border-nmj-gold/30 rounded-full flex items-center justify-center">
                      <span className="font-display text-2xl text-nmj-gold">NMJ</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Closing Quote */}
              <div className="absolute -bottom-4 -right-4 md:-right-8 rotate-180">
                <svg 
                  className="w-12 h-12 md:w-16 md:h-16 text-nmj-gold/10" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
