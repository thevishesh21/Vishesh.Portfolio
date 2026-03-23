'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, FileText, Sparkles } from 'lucide-react'
import { personalInfo, socials } from '@/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.2, 1],
    },
  },
}

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32"
    >
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2"
      >
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left">
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-8 flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              <span className="text-cyan-400">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">Hi, I&apos;m</span>
              <span className="mt-2 block text-gradient">{personalInfo.name}</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="max-w-2xl text-lg text-white/60 sm:text-xl">
              <span className="text-white/90">{personalInfo.title}</span>
              <span className="mx-3 text-cyan-500/50">•</span>
              <span>{personalInfo.subtitle}</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-xl text-base leading-relaxed text-white/50 lg:text-lg"
          >
            {personalInfo.shortBio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            {/* Primary CTA - View Work */}
            <motion.button
              onClick={scrollToProjects}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 p-[2px] shadow-xl shadow-cyan-500/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="View my work"
            >
              <span className="relative flex items-center gap-2 rounded-2xl bg-[#0a0a0b] px-8 py-4 text-base font-semibold text-white transition-all duration-300 group-hover:bg-transparent">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
                View My Work
              </span>
            </motion.button>

            {/* Secondary CTA - Contact */}
            <motion.button
              onClick={scrollToContact}
              className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Get in touch"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              Get in Touch
            </motion.button>

            {/* Resume Button */}
            {/* <motion.a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group flex items-center gap-2 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 px-8 py-4 text-base font-semibold text-cyan-400 transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/10"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Download Resume"
            >
              <FileText className="h-5 w-5" aria-hidden="true" />
              Resume
            </motion.a> */}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center gap-4 lg:justify-start"
          >
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visit ${social.name}`}
              >
                {social.icon === 'github' && <Github className="h-5 w-5" aria-hidden="true" />}
                {social.icon === 'linkedin' && <Linkedin className="h-5 w-5" aria-hidden="true" />}
                {social.icon === 'twitter' && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
                {social.icon === 'instagram' && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Profile Image */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl" />

            {/* Profile Image */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white/10 sm:h-80 sm:w-80">
              <Image
                src="/IMG.jpeg"
                alt={`${personalInfo.name} profile picture`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/60"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll down to projects"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

        {/* Grid pattern - moved to CSS class */}
        <div className="hero-grid-pattern absolute inset-0" />
      </div>
    </section>
  )
}
