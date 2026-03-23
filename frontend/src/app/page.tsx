'use client'

import dynamic from 'next/dynamic'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Certifications } from '@/components/sections/Certifications'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'
import { MouseGlow } from '@/components/effects/MouseGlow'

// Lazy load heavy 3D components
const ParticleField = dynamic(
  () => import('@/components/three/ParticleField').then(mod => mod.ParticleField),
  { ssr: false }
)

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <ParticleField />
      </div>

      {/* Mouse Glow Effect */}
      <MouseGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
