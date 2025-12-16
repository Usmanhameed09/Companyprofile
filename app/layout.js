import './globals.css'

export const metadata = {
  title: 'NMJ Shades | Premium Shade & Structure Solutions in KSA',
  description: 'Nabilah Mohammed Jameel Ali Bati Est. - Over 10 years of delivering reliable shade and structure solutions. Car parking shades, playground shades, PEB warehouses, and more.',
  keywords: 'car parking shades, playground shades, warehouse solutions, steel structures, Saudi Arabia, Dammam, KSA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-body bg-nmj-cream text-nmj-navy antialiased">
        {children}
      </body>
    </html>
  )
}
