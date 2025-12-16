'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Car Parking Shades',
    shortTitle: 'Parking',
    description: 'High-quality shades designed to protect vehicles from harsh sunlight and heat, ideal for residential, commercial, and industrial use.',
    features: ['UV Protection up to 95%', 'Weather Resistant Fabric', 'Custom Sizes Available', 'Multiple Design Options', '10+ Year Lifespan'],
    image: '/images/carpark.jpeg',
    stats: { projects: '80+', satisfaction: '100%' },
  },
  {
    id: 2,
    title: 'Playground Shades',
    shortTitle: 'Playground',
    description: 'Durable and UV-protected shades for school playgrounds, ensuring safety and comfort for children during outdoor activities.',
    features: ['Child-Safe Materials', 'Vibrant Color Options', 'Tensile Structures', 'HDPE Net Available', 'Quick Installation'],
    image: '/images/school.jpeg',
    stats: { projects: '50+', satisfaction: '100%' },
  },
  {
    id: 3,
    title: 'PEB Warehouses',
    shortTitle: 'Warehouses',
    description: 'Pre-engineered steel warehouses built to client specifications—strong, efficient, and suitable for various industrial applications.',
    features: ['Custom Specifications', 'Quick Construction', 'Cost Effective', 'Expandable Design', 'Heavy Load Capacity'],
    image: '/images/Wareouse.png',
    stats: { projects: '10+', satisfaction: '100%' },
  },
  {
    id: 4,
    title: 'Warehouse Curtains',
    shortTitle: 'Curtains',
    description: 'Flexible and weather-resistant curtains used for warehouses and commercial spaces to control dust, sunlight, and airflow.',
    features: ['PVC & Plastic Options', 'Temperature Control', 'Dust Prevention', 'Easy Operation', 'Low Maintenance'],
    image: '/images/curtuin.jpg',
    stats: { projects: '25+', satisfaction: '100%' },
  },
  {
    id: 5,
    title: 'Steel Structures',
    shortTitle: 'Steel',
    description: 'Robust steel-framed sheds and shelters suitable for schools, workshops, and commercial spaces, offering long-term durability.',
    features: ['Galvanized Steel', 'Custom Fabrication', 'Professional Welding', 'Anti-Corrosion Coating', 'Engineering Certified'],
    image: '/images/steel.jpeg',
    stats: { projects: '100+', satisfaction: '100%' },
  },
  {
    id: 6,
    title: 'Tarpaulin Covers',
    shortTitle: 'Tarpaulin',
    description: 'Heavy-duty tarpaulins for vehicle and equipment coverage, offering reliable protection from dust, rain, and extreme weather.',
    features: ['Plastic (100-280 GSM)', 'PVC Material', 'Canvas (140-550 GSM)', 'Waterproof', 'Custom Sizes'],
    image: '/images/tarpaulin.jpeg',
    stats: { projects: '10+ companies', satisfaction: '100%' },
  },
]

const materials = [
  { name: 'PVC Fabric', origin: 'Saudi, Korean', quality: 'Premium' },
  { name: 'HDPE Net', origin: 'Australian, Korean, Al Jazeera', quality: 'High-Grade' },
  { name: 'Plastic Sheet', origin: '100-280 GSM', quality: 'Industrial' },
  { name: 'Canvas', origin: '140-550 GSM', quality: 'Heavy-Duty' },
  { name: 'Shinko Sheet (Currogated Sheet)', origin: '0.2', quality: 'Premium' },
]

export default function Services() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [activeService, setActiveService] = useState(1)

  const currentService = services.find(s => s.id === activeService)

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#0a1628] overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#d4a853]/5 to-transparent" />

      {/* Top Curve */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#faf8f5]" style={{ clipPath: 'ellipse(70% 100% at 50% 0%)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-6 inline-flex">
            What We Offer
          </span>
          
          <h2 className="text-headline text-white mb-6">
            Premium <span className="gradient-text">Services</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-[#f0e6d3]/60 text-body-lg">
            Comprehensive shade and structure solutions tailored to meet the diverse needs of 
            our clients across Saudi Arabia.
          </p>
        </motion.div>

        {/* Service Tabs - Mobile */}
        <div className="lg:hidden mb-8 overflow-x-auto pb-4 -mx-6 px-6">
          <div className="flex gap-2 min-w-max">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-4 py-2 font-heading text-sm uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeService === service.id
                    ? 'bg-[#d4a853] text-[#0a1628]'
                    : 'border border-[#d4a853]/30 text-[#d4a853]'
                }`}
              >
                {service.shortTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left - Service Tabs (Desktop) */}
          <motion.div
            className="hidden lg:block lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-2 sticky top-32">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-4 transition-all duration-300 group relative ${
                    activeService === service.id
                      ? 'bg-[#d4a853]/10 border-l-4 border-[#d4a853]'
                      : 'hover:bg-white/5 border-l-4 border-transparent'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-heading text-sm uppercase tracking-wider ${
                      activeService === service.id ? 'text-[#d4a853]' : 'text-white/70 group-hover:text-white'
                    }`}>
                      {service.title}
                    </span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${
                        activeService === service.id ? 'text-[#d4a853] rotate-0' : 'text-white/30 -rotate-90'
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Center - Service Details */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Service Image */}
                <div className="relative aspect-[4/3] mb-8 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${currentService?.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex gap-8">
                    <div>
                      <div className="text-3xl font-display text-[#d4a853]">{currentService?.stats.projects}</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">Projects</div>
                    </div>
                    <div>
                      <div className="text-3xl font-display text-[#d4a853]">{currentService?.stats.satisfaction}</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">Satisfaction</div>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#d4a853]" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#d4a853]" />
                </div>

                {/* Service Title */}
                <h3 className="text-3xl font-heading text-white mb-4">{currentService?.title}</h3>
                
                {/* Description */}
                <p className="text-[#f0e6d3]/70 leading-relaxed mb-8">
                  {currentService?.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {currentService?.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-[#d4a853]" />
                      <span className="text-white/80">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <a href="#contact" className="btn-outline inline-flex">
                    Get Quote for {currentService?.shortTitle}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right - Materials & Additional Info */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            {/* Materials Card */}
            <div className="bg-[#152238] border border-[#d4a853]/10 p-6 mb-6">
              <h4 className="font-heading text-lg text-[#d4a853] mb-6 uppercase tracking-wider">
                Premium Materials
              </h4>
              <div className="space-y-4">
                {materials.map((material, index) => (
                  <motion.div
                    key={material.name}
                    className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div>
                      <div className="text-white font-medium">{material.name}</div>
                      <div className="text-white/40 text-sm">{material.origin}</div>
                    </div>
                    <span className="px-2 py-1 bg-[#d4a853]/10 text-[#d4a853] text-xs uppercase">
                      {material.quality}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-[#d4a853] to-[#e8c47d] p-6 text-[#0a1628]">
              <h4 className="font-heading text-lg mb-4 uppercase tracking-wider">
                Why Choose NMJ?
              </h4>
              <ul className="space-y-3">
                {['10+ Years Experience', 'Aramco Approved Vendor', 'Quality Guaranteed', 'Free Site Survey', 'Competitive Pricing'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#faf8f5]" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />
    </section>
  )
}
