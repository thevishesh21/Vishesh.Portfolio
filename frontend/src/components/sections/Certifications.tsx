'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, ExternalLink, Calendar } from 'lucide-react'
import { certifications } from '@/data'

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

export function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="certifications"
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
              Achievements
            </span>
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              My <span className="text-gradient">Certifications</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              Continuous learning and professional development through recognized certifications.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/[0.05]"
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                  <Award className="h-7 w-7 text-cyan-400" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="mb-3 font-display text-xl font-semibold text-white">
                  {cert.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-white/60">
                  {cert.description}
                </p>

                {/* Date */}
                <div className="mb-4 flex items-center gap-2 text-sm text-white/40">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>{cert.date}</span>
                </div>

                {/* View Certificate Link */}
                {cert.certificateUrl && cert.certificateUrl !== '#' && (
                  <motion.a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                    whileHover={{ x: 3 }}
                    aria-label={`View ${cert.title} certificate`}
                  >
                    View Certificate
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </motion.a>
                )}

                {/* Hover Glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-500/10 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[100px]" />
      </div>
    </section>
  )
}
