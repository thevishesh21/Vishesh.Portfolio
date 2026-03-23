'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileText, ChevronRight } from 'lucide-react'
import { navLinks, personalInfo } from '@/data'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3'
            : 'py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
              isScrolled
                ? 'glass-strong shadow-2xl'
                : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#home')
              }}
              className="group relative flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#0a0a0b]">
                  <span className="font-display text-lg font-bold text-gradient">
                    {personalInfo.initials}
                  </span>
                </div>
              </div>
              <span className="hidden font-display text-lg font-semibold text-white/90 sm:block">
                {personalInfo.name.split(' ')[0]}
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-cyan-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Resume Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Resume Button */}
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group relative hidden overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 p-[1px] sm:flex"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2 rounded-xl bg-[#0a0a0b] px-4 py-2 text-sm font-medium text-white transition-all duration-300 group-hover:bg-transparent">
                  <FileText className="h-4 w-4" />
                  <span>Resume</span>
                </span>
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-[#0a0a0b]/95 backdrop-blur-xl"
            >
              <div className="flex flex-col p-6">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-gradient">
                    {personalInfo.name}
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                      className={`group flex items-center justify-between rounded-xl px-4 py-3 transition-all ${
                        activeSection === link.href.replace('#', '')
                          ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400'
                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="font-medium">{link.name}</span>
                      <ChevronRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </motion.a>
                  ))}
                </div>

                {/* Resume Button */}
                <motion.a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-4 font-medium text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText className="h-5 w-5" />
                  <span>Download Resume</span>
                </motion.a>

                {/* Social Links */}
                <div className="mt-auto pt-8">
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                    Connect
                  </p>
                  <p className="text-sm text-white/60">
                    {personalInfo.email}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
