# NMJ Shades - Premium Shade & Structure Solutions Website

A stunning, modern, and fully responsive company portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion for NMJ Shades (Nabilah Mohammed Jameel Ali Bati Est.) - a leading shade and structure solutions provider in Saudi Arabia.

## 🌟 Features

- **Modern Design**: Bold industrial aesthetic with elegant animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for professional page transitions and interactions
- **Performance Optimized**: Built with Next.js 14 for fast loading times
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessible**: Following web accessibility best practices

## 🎨 Design Highlights

- Custom color palette reflecting the brand (Navy, Gold, Sand, Cream)
- Typography featuring Bebas Neue, Oswald, and Outfit fonts
- Geometric patterns and steel-inspired backgrounds
- Animated preloader with company branding
- Smooth scroll animations and hover effects
- Interactive project gallery with filtering
- Professional contact form

## 📦 Sections Included

1. **Hero** - Stunning full-screen hero with parallax effect
2. **Stats** - Animated counters showcasing company achievements
3. **About** - Company information, mission, vision, and goals
4. **Services** - Comprehensive service offerings with hover effects
5. **Projects** - Filterable portfolio gallery
6. **Clients** - Client logos and testimonials
7. **Contact** - Contact form and company information
8. **Footer** - Complete footer with links and social media

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Extract the zip file
2. Navigate to the project directory:
   ```bash
   cd nmj-shades-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Fonts**: Google Fonts (Bebas Neue, Oswald, Outfit)
- **Icons**: Custom SVG icons

## 📁 Project Structure

```
nmj-shades-website/
├── app/
│   ├── globals.css      # Global styles and Tailwind
│   ├── layout.js        # Root layout with metadata
│   └── page.js          # Main page component
├── components/
│   ├── About.js         # About section
│   ├── Clients.js       # Clients & testimonials
│   ├── Contact.js       # Contact form section
│   ├── Footer.js        # Footer component
│   ├── Hero.js          # Hero section
│   ├── Navbar.js        # Navigation bar
│   ├── Preloader.js     # Loading animation
│   ├── Projects.js      # Projects gallery
│   ├── Services.js      # Services section
│   └── Stats.js         # Statistics section
├── public/              # Static assets
├── tailwind.config.js   # Tailwind configuration
├── next.config.js       # Next.js configuration
└── package.json         # Dependencies
```

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  'nmj-navy': '#1a2744',
  'nmj-blue': '#2d4a7c',
  'nmj-gold': '#c9a961',
  'nmj-sand': '#e8dcc4',
  'nmj-cream': '#f5f1e8',
}
```

### Content
Update the content in each component file located in the `components/` directory.

### Images
Replace placeholder images with your actual project photos in the respective component files.

## 📞 Company Information

**NMJ Shades**
- Address: Street 14, AlAdamah Tent Market, Dammam, KSA
- Phone: +966 55 307 7471
- Email: abdulhameed@nmjshades.com
- Website: www.nmjshades.com

## 📄 License

This project is created for NMJ Shades. All rights reserved.

---

Built with ❤️ for NMJ Shades
