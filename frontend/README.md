# Vishesh Pal - Portfolio

A premium, world-class portfolio built with modern web technologies.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Three.js
- **Language**: TypeScript

## Features

- Dark futuristic UI with glassmorphism effects
- Interactive 3D particle background
- Mouse-following glow effects
- Smooth scroll-based animations
- 3D tilt effect on project cards
- Fully responsive design
- Premium contact form
- Resume download functionality

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
frontend/
├── public/
│   ├── resume.pdf          # Your resume (add this)
│   ├── favicon.ico         # Site favicon
│   └── projects/           # Project images
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles & design system
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/
│   │   ├── effects/        # Visual effects (MouseGlow)
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, About, Projects, Skills, Contact
│   │   └── three/          # 3D components (ParticleField)
│   └── data/
│       └── index.ts        # All portfolio data
└── package.json
```

## Customization

### Update Your Information

Edit `src/data/index.ts` to update:
- Personal information
- Social links
- Skills
- Projects
- Certifications
- Services

### Add Your Resume

Place your resume PDF at `public/resume.pdf`

### Add Project Images

Place project images in `public/projects/` and update the paths in `src/data/index.ts`

## Design System

The portfolio uses a comprehensive design system defined in `src/app/globals.css`:

### Colors
- Primary: Deep dark (#030303)
- Accent: Cyan (#00e5e5) + Purple (#8b5cf6)
- Gradients for CTAs and highlights

### Typography
- Display: Space Grotesk
- Body: Plus Jakarta Sans
- Mono: JetBrains Mono

### Effects
- Glassmorphism cards
- Soft glow effects
- Gradient borders
- Noise texture overlay

## Performance

- Lazy-loaded 3D components
- Optimized animations (60fps)
- Reduced motion support
- Mobile-optimized (lighter 3D on mobile)

## License

MIT License - Feel free to use this as a template for your own portfolio!

---

Crafted with passion by Vishesh Pal
