'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Send, MapPin, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { personalInfo, socials } from '@/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://api.vishesh-dev.me/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-cyan-400">
              Contact
            </span>
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Work
              <span className="text-gradient"> Together</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
              Have a project in mind or just want to connect? I&apos;d love to hear from you.
              Let&apos;s create something amazing together.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8 lg:col-span-2">
              {/* Info Cards */}
              <div className="space-y-4">
                <div className="gradient-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                      <Mail className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-white/50">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-lg font-medium text-white transition-colors hover:text-cyan-400"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="gradient-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                      <MapPin className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-white/50">Location</p>
                      <p className="text-lg font-medium text-white">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="mb-4 text-sm font-medium text-white/50">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon === 'github' && (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      )}
                      {social.icon === 'linkedin' && (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      )}
                      {social.icon === 'twitter' && (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      )}
                      {social.icon === 'instagram' && (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="gradient-border p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder-transparent outline-none transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="Name"
                    />
                    <label
                      className={`absolute left-4 top-4 text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-cyan-400 ${
                        formData.name ? '-top-6 text-sm text-cyan-400' : ''
                      }`}
                    >
                      Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder-transparent outline-none transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="Email"
                    />
                    <label
                      className={`absolute left-4 top-4 text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-cyan-400 ${
                        formData.email ? '-top-6 text-sm text-cyan-400' : ''
                      }`}
                    >
                      Email
                    </label>
                  </div>

                  {/* Subject */}
                  <div className="relative md:col-span-2">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder-transparent outline-none transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="Subject"
                    />
                    <label
                      className={`absolute left-4 top-4 text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-cyan-400 ${
                        formData.subject ? '-top-6 text-sm text-cyan-400' : ''
                      }`}
                    >
                      Subject
                    </label>
                  </div>

                  {/* Message */}
                  <div className="relative md:col-span-2">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="peer w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder-transparent outline-none transition-all focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                      placeholder="Message"
                    />
                    <label
                      className={`absolute left-4 top-4 text-white/50 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-cyan-400 ${
                        formData.message ? '-top-6 text-sm text-cyan-400' : ''
                      }`}
                    >
                      Message
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group relative mt-8 w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 p-[2px] disabled:opacity-70"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="flex items-center justify-center gap-2 rounded-xl bg-[#0a0a0b] px-8 py-4 font-semibold text-white transition-all group-hover:bg-transparent">
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Status Messages */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 flex items-center gap-2 rounded-xl bg-green-500/10 px-4 py-3 text-green-400"
                    >
                      <CheckCircle className="h-5 w-5" />
                      Message sent successfully! I&apos;ll get back to you soon.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-red-400"
                    >
                      <AlertCircle className="h-5 w-5" />
                      Failed to send message. Please try again or email me directly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-[120px]" />
      </div>
    </section>
  )
}
