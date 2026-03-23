'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Cloud, BarChart3, Cpu, LucideIcon } from 'lucide-react'
import { services } from '@/data'

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  cloud: Cloud,
  chart: BarChart3,
  cpu: Cpu,
}

const colorClasses: Record<string, { bg: string; text: string; glow: string }> = {
  '#3b82f6': { bg: 'bg-blue-500/10', text: 'text-blue-500', glow: 'bg-blue-500' },
  '#FF9900': { bg: 'bg-orange-500/10', text: 'text-orange-500', glow: 'bg-orange-500' },
  '#8b5cf6': { bg: 'bg-purple-500/10', text: 'text-purple-500', glow: 'bg-purple-500' },
  '#10b981': { bg: 'bg-emerald-500/10', text: 'text-emerald-500', glow: 'bg-emerald-500' },
}

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

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="services"
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
              What I Do
            </span>
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              Delivering high-quality solutions across full-stack development, cloud architecture, and emerging technologies.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Code
              const colors = colorClasses[service.color] || { bg: 'bg-cyan-500/10', text: 'text-cyan-500', glow: 'bg-cyan-500' }
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]"
                  whileHover={{ y: -5 }}
                >
                  {/* Icon */}
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg}`}>
                    <IconComponent className={`h-7 w-7 ${colors.text}`} aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {service.description}
                  </p>

                  {/* Hover Glow */}
                  <div
                    className={`pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20 ${colors.glow}`}
                  />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-purple-500/5 blur-[100px]" />
      </div>
    </section>
  )
}
