'use client'

import { useEffect } from 'react'
import Preloader from '@/components/Preloader'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import ManagerMessage from '@/components/ManagerMessage'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/whatsappbutton'

export default function Home() {
  // Scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    }, observerOptions)

    // Observe all elements with scroll-reveal classes
    const revealElements = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .stagger-children'
    )
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative">
      <Preloader />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <ManagerMessage />
      <Services />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Button - Always visible, scrolls with page */}
      <WhatsAppButton />
    </main>
  )
}