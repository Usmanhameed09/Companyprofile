'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const footerLinks = {
  services: [
    { name: 'Car Parking Shades', href: '#services' },
    { name: 'Playground Shades', href: '#services' },
    { name: 'PEB Warehouses', href: '#services' },
    { name: 'Warehouse Curtains', href: '#services' },
    { name: 'Steel Structures', href: '#services' },
    { name: 'Tarpaulin', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Projects', href: '#projects' },
    { name: 'Our Clients', href: '#clients' },
    { name: 'Contact Us', href: '#contact' },
  ],
  coverage: [
    'Dammam',
    'Khobar',
    'Jubail',
    'Qatif',
    'Al Ahsa',
    'Riyadh',
    'All Over KSA',
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-nmj-navy text-white overflow-hidden">
      {/* Top Accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-nmj-gold to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="footerGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#c9a961" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="#home" className="inline-block mb-6">
                <span className="text-4xl font-display text-nmj-gold">NMJ</span>
                <span className="block text-sm font-heading uppercase tracking-[0.2em] text-nmj-sand/60 mt-1">
                  Shades & Structures
                </span>
              </Link>
              
              <p className="text-nmj-sand/60 leading-relaxed mb-6 max-w-sm">
                Nabilah Mohammed Jameel Ali Bati Est. delivering premium shade and 
                structure solutions across Saudi Arabia since 2014.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-nmj-sand/70">
                  <svg className="w-4 h-4 text-nmj-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+966553077471" className="hover:text-nmj-gold transition-colors">
                    +966 55 307 7471
                  </a>
                </div>
                <div className="flex items-center gap-3 text-nmj-sand/70">
                  <svg className="w-4 h-4 text-nmj-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:abdulhameed@nmjshades.com" className="hover:text-nmj-gold transition-colors">
                    abdulhameed@nmjshades.com
                  </a>
                </div>
                <div className="flex items-start gap-3 text-nmj-sand/70">
                  <svg className="w-4 h-4 text-nmj-gold mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>Street 14, AlAdamah Tent Market, Dammam, KSA</span>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="font-heading text-sm uppercase tracking-widest text-nmj-gold mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-nmj-sand/60 hover:text-nmj-gold transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-heading text-sm uppercase tracking-widest text-nmj-gold mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-nmj-sand/60 hover:text-nmj-gold transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage Column */}
            <div>
              <h4 className="font-heading text-sm uppercase tracking-widest text-nmj-gold mb-6">
                Service Areas
              </h4>
              <ul className="space-y-3">
                {footerLinks.coverage.map((area) => (
                  <li key={area} className="text-nmj-sand/60 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 bg-nmj-gold/50 rounded-full" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-nmj-gold/10">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-nmj-sand/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} NMJ Shades. All rights reserved. 
              <span className="hidden md:inline"> | </span>
              <br className="md:hidden" />
              Nabilah Mohammed Jameel Ali Bati Est.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {['Facebook', 'Instagram', 'LinkedIn', 'WhatsApp'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 border border-nmj-gold/20 flex items-center justify-center text-nmj-sand/40 hover:text-nmj-gold hover:border-nmj-gold transition-all"
                  title={social}
                >
                  <span className="text-xs font-heading">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.a
        href="#home"
        className="fixed bottom-8 right-8 w-12 h-12 bg-nmj-gold text-nmj-navy flex items-center justify-center shadow-lg hover:bg-nmj-navy hover:text-nmj-gold border-2 border-nmj-gold transition-all z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.a>
    </footer>
  )
}
