/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nmj-navy': '#0a1628',
        'nmj-navy-light': '#152238',
        'nmj-blue': '#1e3a5f',
        'nmj-gold': '#d4a853',
        'nmj-gold-light': '#e8c47d',
        'nmj-sand': '#f0e6d3',
        'nmj-cream': '#faf8f5',
      },
      fontFamily: {
        'display': ['Bebas Neue', 'Impact', 'sans-serif'],
        'heading': ['Oswald', 'sans-serif'],
        'body': ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'shine': 'shine 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(1deg)' },
          '75%': { transform: 'translateY(10px) rotate(-1deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shine: {
          '0%, 100%': { transform: 'translateX(-100%) rotate(30deg)' },
          '50%': { transform: 'translateX(100%) rotate(30deg)' },
        },
      },
    },
  },
  plugins: [],
}
