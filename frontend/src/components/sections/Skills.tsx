'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, BookOpen, Rocket, Users } from 'lucide-react'
import { services, certifications } from '@/data'

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

const iconMap: { [key: string]: React.ReactNode } = {
  code: <Rocket className="h-6 w-6" aria-hidden="true" />,
  cloud: <BookOpen className="h-6 w-6" aria-hidden="true" />,
  chart: <Users className="h-6 w-6" aria-hidden="true" />,
  cpu: <Award className="h-6 w-6" aria-hidden="true" />,
}

const colorClasses: Record<string, { iconBg: string; iconText: string; accentLine: string; hoverGradient: string }> = {
  '#3b82f6': {
    iconBg: 'bg-blue-500/20',
    iconText: 'text-blue-500',
    accentLine: 'bg-blue-500',
    hoverGradient: 'skills-hover-blue',
  },
  '#FF9900': {
    iconBg: 'bg-orange-500/20',
    iconText: 'text-orange-500',
    accentLine: 'bg-orange-500',
    hoverGradient: 'skills-hover-orange',
  },
  '#8b5cf6': {
    iconBg: 'bg-purple-500/20',
    iconText: 'text-purple-500',
    accentLine: 'bg-purple-500',
    hoverGradient: 'skills-hover-purple',
  },
  '#10b981': {
    iconBg: 'bg-emerald-500/20',
    iconText: 'text-emerald-500',
    accentLine: 'bg-emerald-500',
    hoverGradient: 'skills-hover-emerald',
  },
}

const stats = [
  { label: 'Projects Completed', value: '10+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Years Learning', value: '3+' },
  { label: 'Certifications', value: '5+' },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="skills"
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
              Expertise
            </span>
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Skills &
              <span className="text-gradient"> Capabilities</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
              Combining technical expertise with creative problem-solving to deliver
              exceptional digital solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mb-20 grid grid-cols-2 gap-6 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.span
                  className="block font-display text-4xl font-bold text-gradient lg:text-5xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {stat.value}
                </motion.span>
                <span className="mt-2 block text-sm text-white/50">{stat.label}</span>

                {/* Hover glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={itemVariants}
            className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service, index) => {
              const colors = colorClasses[service.color] || {
                iconBg: 'bg-cyan-500/20',
                iconText: 'text-cyan-500',
                accentLine: 'bg-cyan-500',
                hoverGradient: 'skills-hover-cyan',
              }
              return (
                <motion.div
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Icon */}
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${colors.iconBg} ${colors.iconText}`}>
                    {iconMap[service.icon] || <Rocket className="h-6 w-6" aria-hidden="true" />}
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {service.description}
                  </p>

                  {/* Hover accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 w-full origin-left ${colors.accentLine}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100 ${colors.hoverGradient}`} />
                </motion.div>
              )
            })}
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-8 text-center font-display text-2xl font-semibold text-white">
              Certifications & Achievements
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.id}
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-cyan-500/20 hover:bg-white/[0.04]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  whileHover={{ y: -5 }}
                  aria-label={`View ${cert.title} certificate`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                      <Award className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                    </div>
                    <span className="text-xs text-white/40">{cert.date}</span>
                  </div>
                  <h4 className="mb-2 font-display text-lg font-semibold text-white">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-white/50">
                    {cert.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5">
                      <svg
                        className="h-4 w-4 text-cyan-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-purple-500/5 blur-[120px]" />
      </div>
    </section>
  )
}
