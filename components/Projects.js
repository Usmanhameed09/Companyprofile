'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // ============================================
  // EDIT THIS SECTION TO ADD/MODIFY PROJECTS
  // Each project can have multiple images!
  // NOTE: Use "images" (plural) as an array
  // ============================================
  
  const projects = [
    {
      id: 1,
      title: 'Ras Tanura Aramco Facility',
      category: 'Industrial',
      location: 'Ras Tanura, KSA',
      description: 'Large-scale car parking shade installation for Saudi Aramco facility with HDPE Australian fabric',
      features: ['13 Parking Spots', 'HDPE Australian Fabric'],
      images: ['/images/ras.jpeg','/images/ras1.jpeg','/images/ras2.jpeg','/images/ras3.jpeg'],
      year: '2025',
    },
    {
      id: 2,
      title: 'Jaffurah Aramco Facility',
      category: 'Commercial',
      location: 'Jaffurah, KSA',
      description: 'Colorful playground shade structures for British International School Al Khobar',
      features: ['Heavy Steel Structure', 'HDPE Net', 'Foundation Work'],
      images: ['/images/j.jpeg','/images/j1.jpeg','/images/j2.jpeg','/images/j3.jpeg'],
      year: '2025',
    },
    {
      id: 3,
      title: 'Ras AlKhair Plant',
      category: 'Commercial',
      location: 'Ras Al Khair, KSA',
      description: 'Double Side Car Parking Shades for Ras AlKhair Plant',
      features: ['40 Parking Shades', 'HDPE Net'],
      images: ['/images/r.jpeg','/images/r2.jpeg','/images/r3.jpeg'],
      year: '2025',
    },
    {
      id: 4,
      title: 'Saudi Railway Project Riyadh',
      category: 'Government',
      location: 'Riyadh, KSA',
      description: 'Car Parking Shades for Parking Area At Riyadh Railway Station',
      features: ['Heavy Steel Structure', 'HDPE Net'],
      images: ['/images/rail.jpeg'],
      year: '2019',
    },
    {
      id: 5,
      title: 'BISAK School Khobar',
      category: 'Educational',
      location: 'Khobar, KSA',
      description: 'Heavy Structure playground shade For BISAK School Khobar',
      features: ['Heavy Steel Structure', 'HDPE Net', 'Foundation Work'],
      images: ['/images/Bisak.png','/images/b1.jpeg','/images/b2.PNG','/images/b3.jpeg','/images/b4.PNG','/images/b5.PNG'],
      year: '2024',
    },
    {
      id: 6,
      title: 'Jubail Naval Base',
      category: 'Government',
      location: 'Jubail, KSA',
      description: 'Military-grade parking shades for Royal Saudi Naval Forces personnel vehicles',
      features: ['Heavy Duty HDPE Net', 'Cantilever Design', '15 Car Parking'],
      images: ['/images/n4.jpeg','/images/n1.jpeg','/images/n2.jpeg','/images/n3.jpeg'],
      year: '2024',
    },
    {
      id: 7,
      title: 'ISG School Jubail',
      category: 'Educational',
      location: 'Jubail, KSA',
      description: 'Complete playground coverage for International Schools Group with vibrant designs',
      features: ['Multiple Zones', 'Tensile Structure', 'Custom Colors'],
      images: ['/images/isg.jpg','/images/j1.jpg','/images/j2.jpg'],
      year: '2025',
    },
    {
      id: 8,
      title: 'Saudi Transformer Company',
      category: 'Industrial',
      location: 'Dammam, KSA',
      description: 'Employee parking Project for Saudi Transformer Company Car parking shades fabrication & Installation, Automatic gate system,Lighting system,Drainage system',
      features: ['Steel Fabrication & Installation', 'Cantilever Design', '36 Parking Spots', 'Galvanized Steel Structures'],
      images: ['/images/tent.jpeg','/images/stc1.jpeg','/images/stc2.jpeg','/images/stc3.jpeg','/images/stc4.jpeg','/images/stc5.jpeg','/images/stc6.jpeg','/images/stc7.jpeg'],
      year: '2024',
    },
    {
      id: 9,
      title: 'Al Ahsa Aramco Site',
      category: 'Commercial',
      location: 'Al Ahsa, KSA',
      description: 'Remote site shade structure installation for Aramco operations',
      features: ['Desert Climate', 'Quick Install', 'Modular'],
      images: ['/images/ras.jpg','/images/t1.jpg','/images/t2.jpg','/images/t3.jpg','/images/t4.jpg','/images/t5.jpg'],
      year: '2023',
    },
    {
      id: 10,
      title: 'Kerry Logistics Warehouse',
      category: 'Commercial',
      location: 'Khobar, KSA',
      description: 'Industrial PVC curtains for warehouse temperature and dust control',
      features: ['PVC Curtains', 'Climate Control', 'Dust Protection'],
      images: ['/images/cu1.jpeg','/images/c1.jpeg','/images/cu2.jpeg'],
      year: '2023',
    },
    {
      id: 11,
      title: 'International Schools Group Aziziyah',
      category: 'Educational',
      location: 'Aziziyah Dammam, KSA',
      description: 'Car Parking Shades for ISG Aziziyah Dammam',
      features: ['Unique Design', 'HDPE Net', 'Employees Area'],
      images: ['/images/1.jpg','/images/2.jpg','/images/3.jpg'],
      year: '2025',
    },
    {
      id: 12,
      title: 'Kitchen Pooch Shade',
      category: 'Residential',
      location: 'Al Riyas, KSA',
      description: 'Kitchen Pooch Shade for easy access and ventilation',
      features: ['Arch Style', 'PVC 900GSM', 'Kitchen Pooch Area'],
      images: ['/images/Riyas.jpeg','/images/ri1.jpeg','/images/ri2.jpeg','/images/ri3.jpeg','/images/ri4.jpeg'],
      year: '2024',
    },
    {
      id: 13,
      title: 'Welding Barriers',
      category: 'Industrial',
      location: 'WESCOSA Factory Dammam, KSA',
      description: 'Welding Barriers for safe welding operations',
      features: ['Steel Structures', 'PVC 550GSM', 'Welding Area'],
      images: ['/images/wes.jpeg','/images/ba4.jpeg','/images/ba2.jpeg','/images/ba3.jpeg','/images/ba1.jpeg'],
      year: '2024',
    },
    {
      id: 14,
      title: 'Playground Shade',
      category: 'Educational',
      location: 'ISG Dammam, KSA',
      description: 'Playground Shade for ISG Dammam',
      features: ['Playground Shade', 'HDPE Net', 'Steel Fabrication'],
      images: ['/images/isgdammam.jpeg','/images/dam2.jpeg','/images/dam1.jpeg'],
      year: '2024',
    },
    {
      id: 15,
      title: 'Car Parking Shades SLFE',
      category: 'Commercial',
      location: 'SLFE CO Dammam, KSA',
      description: 'Car Parking Shades for SLFE Company Aramco Contractors',
      features: ['Parking Area Shade', 'HDPE Net', 'Steel Fabrication'],
      images: ['/images/slfe.jpg','/images/slfe2.jpeg','/images/slfe4.jpeg','/images/slfe3.jpeg','/images/slf5.jpeg'],
      year: '2025',
    },
    {
      id: 16,
      title: 'Car Parking Shades AMO',
      category: 'Industrial',
      location: 'AMO & Partners Engineering CO, KSA',
      description: 'Tilt design Car Parking Shades for AMO & Partners Engineering CO',
      features: ['Tilt Design Shade', 'HDPE Net', 'Steel Fabrication'],
      images: ['/images/amo.jpg','/images/amo1.jpeg','/images/amo2.jpeg','/images/amo3.jpeg'],
      year: '2025',
    },
        {
      id: 17,
      title: 'Car Parking Shades Uqair',
      category: 'Industrial',
      location: 'Uqair, KSA',
      description: 'Tilt design Car Parking Shades for AMO & Partners Engineering CO',
      features: ['Tilt Design Shade', 'HDPE Net', 'Steel Fabrication'],
      images: ['/images/uq.jpeg','/images/uq2.jpeg','/images/uq3.jpeg','/images/uq4.jpeg'],
      year: '2025',
    }
  ]
  // ============================================

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'Commercial', label: 'Commercial' },
    { id: 'Industrial', label: 'Industrial' },
    { id: 'Residential', label: 'Residential' },
    { id: 'Educational', label: 'Educational' },
    { id: 'Government', label: 'Government' },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return
      if (e.key === 'Escape') closeProjectModal()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject])

  return (
    <>
      <section 
        ref={ref}
        id="projects" 
        className="relative py-24 md:py-32 bg-nmj-navy overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="pattern-grid h-full" />
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-nmj-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-nmj-blue/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 border border-nmj-gold/30 text-nmj-gold font-heading text-sm tracking-[0.2em] uppercase mb-4">
              Our Portfolio
            </span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4">
              FEATURED <span className="text-gradient-gold">PROJECTS</span>
            </h2>
            <p className="text-nmj-sand/60 max-w-2xl mx-auto">
              Explore our collection of premium shade structures and architectural solutions 
              delivered across Saudi Arabia.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 font-heading text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-nmj-gold text-nmj-navy'
                    : 'bg-transparent border border-nmj-gold/30 text-nmj-gold hover:bg-nmj-gold/10'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative bg-nmj-navy-light overflow-hidden">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {/* Project Image - Grid cards use object-cover for consistent sizing */}
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Image Count Badge */}
                      {project.images.length > 1 && (
                        <div className="absolute top-4 right-4 flex items-center gap-2 bg-nmj-navy/80 backdrop-blur-sm px-3 py-1.5 text-white text-sm">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{project.images.length}</span>
                        </div>
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-nmj-navy via-nmj-navy/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      
                      {/* View Project Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="px-6 py-3 bg-nmj-gold text-nmj-navy font-heading text-sm tracking-wider uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          View Project
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      {/* Category & Year */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-nmj-gold text-xs font-heading tracking-wider uppercase">
                          {project.category}
                        </span>
                        <span className="text-nmj-sand/40 text-xs">
                          {project.year}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-display text-2xl text-white mb-2 group-hover:text-nmj-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      {/* Location */}
                      <div className="flex items-center gap-2 text-nmj-sand/60 text-sm">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* Gold Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-nmj-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a href="#contact" className="btn-outline inline-block">
              Start Your Project
              <svg className="w-4 h-4 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          PROJECT DETAIL MODAL WITH IMAGE GALLERY
          ============================================ */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-nmj-navy/95 backdrop-blur-md overflow-y-auto"
            onClick={closeProjectModal}
          >
            <div className="min-h-screen py-8 px-4 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-6xl bg-nmj-navy-light overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 z-30 w-12 h-12 flex items-center justify-center bg-nmj-navy/80 text-white hover:bg-nmj-gold hover:text-nmj-navy transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row">
                  {/* Left Column - Image Gallery */}
                  <div className="w-full lg:w-1/2 bg-black flex-shrink-0">
                    {/* Main Image Container */}
                    <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                      <Image
                        src={selectedProject.images[currentImageIndex]}
                        alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />

                      {/* Navigation Arrows */}
                      {selectedProject.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-nmj-navy/80 text-white hover:bg-nmj-gold hover:text-nmj-navy transition-all duration-300 z-10"
                          >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-nmj-navy/80 text-white hover:bg-nmj-gold hover:text-nmj-navy transition-all duration-300 z-10"
                          >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </>
                      )}

                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-nmj-navy/80 backdrop-blur-sm text-white text-sm z-10">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    </div>

                    {/* Thumbnail Gallery */}
                    {selectedProject.images.length > 1 && (
                      <div className="flex gap-2 p-4 bg-nmj-navy-light overflow-x-auto">
                        {selectedProject.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                            className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden transition-all duration-300 ${
                              currentImageIndex === index 
                                ? 'ring-2 ring-nmj-gold' 
                                : 'opacity-60 hover:opacity-100'
                            }`}
                          >
                            <Image
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Column - Project Details */}
                  <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 overflow-y-auto max-h-[60vh] lg:max-h-[80vh]">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 bg-nmj-gold/10 text-nmj-gold text-xs font-heading tracking-wider uppercase mb-4">
                      {selectedProject.category}
                    </span>

                    {/* Title */}
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-white mb-4">
                      {selectedProject.title}
                    </h2>

                    {/* Location & Year */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-nmj-gold/20">
                      <div className="flex items-center gap-2 text-nmj-sand/80">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-nmj-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm">{selectedProject.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-nmj-sand/80">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-nmj-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm">{selectedProject.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-nmj-sand/70 leading-relaxed mb-6 text-sm md:text-base">
                      {selectedProject.description}
                    </p>

                    {/* Features/Specs */}
                    {selectedProject.features && selectedProject.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-heading text-nmj-gold text-xs md:text-sm tracking-wider uppercase mb-3">
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.features.map((feature, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-nmj-navy text-nmj-sand/80 text-xs md:text-sm border border-nmj-gold/20"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Gold Divider */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="flex-1 h-px bg-nmj-gold/20" />
                      <span className="w-2 h-2 border border-nmj-gold rotate-45" />
                      <span className="flex-1 h-px bg-nmj-gold/20" />
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href="#contact" className="btn-premium text-sm text-center" onClick={closeProjectModal}>
                        Start Similar Project
                      </a>
                      <button
                        onClick={closeProjectModal}
                        className="btn-outline text-sm"
                      >
                        Back to Gallery
                      </button>
                    </div>

                    {/* Keyboard Navigation Hint */}
                    {selectedProject.images.length > 1 && (
                      <p className="mt-4 text-nmj-sand/40 text-xs hidden md:block">
                        Use ← → arrow keys to navigate images • Press ESC to close
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}