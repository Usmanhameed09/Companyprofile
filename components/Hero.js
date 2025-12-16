'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Link from 'next/link'

// Project images from NMJ portfolio
const projectImages = [
  '/api/placeholder/600/400?text=Aramco+Project',
  '/api/placeholder/600/400?text=BISAK+School',
  '/api/placeholder/600/400?text=Naval+Base',
]

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-[#d4a853]/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-60 -left-60 w-[800px] h-[800px] rounded-full border border-[#d4a853]/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-[10%] w-20 h-20 border-2 border-[#d4a853]/20"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-[15%] w-16 h-16 border border-[#d4a853]/30 rotate-45"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-[20%] w-4 h-4 bg-[#d4a853]/40"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[25%] w-32 h-32 rounded-full border border-[#d4a853]/10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-20 max-w-7xl mx-auto px-6 w-full"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-[#d4a853] animate-pulse" />
              <span className="px-4 py-2 glass text-[#d4a853] font-heading text-xs uppercase tracking-[0.3em]">
                Established 2014 • Dammam, KSA
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                className="text-display text-white"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 3, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                PREMIUM
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h1
                className="text-display gradient-text"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 3.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                SHADE
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                className="text-display text-white"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: 3.2, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                SOLUTIONS
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              className="max-w-xl mx-auto lg:mx-0 text-[#f0e6d3]/70 text-body-lg mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.6 }}
            >
              Transforming spaces across Saudi Arabia with world-class car parking shades, 
              playground covers, and industrial structures. Engineering excellence since 2014.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.7, duration: 0.6 }}
            >
              <Link href="#projects" className="btn-premium">
                <span>Explore Projects</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="#contact" className="btn-outline">
                <span>Get Free Quote</span>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="flex justify-center lg:justify-start gap-12 mt-12 pt-12 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.6 }}
            >
              {[
                { value: '10+', label: 'Years' },
                { value: '500+', label: 'Projects' },
                { value: '50+', label: 'Clients' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-display text-[#d4a853]">{stat.value}</div>
                  <div className="text-xs font-heading uppercase tracking-widest text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Featured Image */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.3, duration: 0.8 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-[#d4a853]/20" />
              <div className="absolute -inset-8 border border-[#d4a853]/10" />
              
              {/* Corner accents */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#d4a853]" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#d4a853]" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#d4a853]" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#d4a853]" />

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#152238]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  style={{
                    backgroundImage: `url('/images/img1.jpeg')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 bg-[#d4a853]" />
                    <span className="text-[#d4a853] font-heading text-xs uppercase tracking-widest">Featured Project</span>
                  </div>
                  <h3 className="text-white font-heading text-xl">Aramco Facility, Ras Tanura</h3>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -right-6 -bottom-6 bg-[#d4a853] text-[#0a1628] p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-center">
                  <div className="text-3xl font-display">A+</div>
                  <div className="text-xs font-heading uppercase tracking-wider">Quality</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-3 cursor-pointer group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[#f0e6d3]/40 text-xs font-heading uppercase tracking-[0.3em] group-hover:text-[#d4a853] transition-colors">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-[#d4a853]/30 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-[#d4a853] rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#faf8f5] to-transparent z-30 pointer-events-none" />

      {/* Side Decorations */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-20">
        {['01', '02', '03'].map((num, i) => (
          <motion.div
            key={num}
            className={`w-10 h-10 flex items-center justify-center border ${i === 0 ? 'border-[#d4a853] text-[#d4a853]' : 'border-white/20 text-white/30'} text-xs font-heading`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 4 + i * 0.1 }}
          >
            {num}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
