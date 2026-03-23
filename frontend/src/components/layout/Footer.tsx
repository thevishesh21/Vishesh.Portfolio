'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { personalInfo, navLinks, socials } from '@/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#030303] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
              className="inline-flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#030303]">
                  <span className="font-display text-xl font-bold text-gradient">
                    {personalInfo.initials}
                  </span>
                </div>
              </div>
              <div>
                <span className="block font-display text-lg font-semibold text-white">
                  {personalInfo.name}
                </span>
                <span className="text-sm text-white/40">
                  {personalInfo.title}
                </span>
              </div>
            </motion.a>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/50">
              Building innovative digital experiences with modern technologies.
              Open for collaborations and new opportunities.
            </p>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-white/40 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon === 'github' && (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}
                  {social.icon === 'linkedin' && (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {social.icon === 'twitter' && (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {social.icon === 'instagram' && (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white/70">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-cyan-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white/70">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-white/40 transition-colors hover:text-cyan-400"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <span className="text-sm text-white/40">
                  {personalInfo.location}
                </span>
              </li>
              <li className="pt-2">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-4 py-2 text-sm font-medium text-cyan-400 transition-all hover:from-cyan-500/20 hover:to-purple-500/20"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="flex items-center gap-1 text-sm text-white/30">
            <span>© {currentYear} {personalInfo.name}. Crafted with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>and lots of</span>
            <span className="text-gradient font-semibold">code</span>
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <span>Built with Next.js, Tailwind CSS & Framer Motion</span>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      </div>

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-t from-cyan-500/5 to-transparent blur-[80px]" />
      </div>
    </footer>
  )
}
