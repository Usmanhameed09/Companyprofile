'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      let startTime
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setDisplayValue(Math.floor(progress * value))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  )
}

const stats = [
  { value: 12, suffix: '+', label: 'Years Experience', icon: '🏗️' },
  { value: 300, suffix: '+', label: 'Projects Completed', icon: '✓' },
  { value: 50, suffix: '+', label: 'Major Clients', icon: '🤝' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
]

export default function Stats() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 bg-nmj-navy overflow-hidden" ref={containerRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="statsPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#c9a961"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#statsPattern)" />
        </svg>
      </div>

      {/* Diagonal Accents */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-nmj-gold via-transparent to-nmj-gold" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-nmj-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Number */}
              <div className="relative mb-4">
                <motion.div 
                  className="text-5xl md:text-6xl lg:text-7xl font-display text-nmj-gold"
                  whileHover={{ scale: 1.05 }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                
                {/* Decorative Line */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-nmj-gold/50"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '60%' } : {}}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                />
              </div>

              {/* Label */}
              <p className="font-heading text-sm md:text-base uppercase tracking-widest text-nmj-sand/80">
                {stat.label}
              </p>

              {/* Hover Effect */}
              <motion.div
                className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-full border border-nmj-gold/30 flex items-center justify-center text-2xl">
                  {stat.icon}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border border-nmj-gold/10 rotate-45"
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 border border-nmj-gold/10"
        animate={{ rotate: [0, -45, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
      />
    </section>
  )
}
