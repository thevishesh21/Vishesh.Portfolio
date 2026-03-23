'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { projects } from '@/data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0, 0.2, 1],
    },
  },
}

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section
      id="projects"
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
              Portfolio
            </span>
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Featured
              <span className="text-gradient"> Projects</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
              A curated selection of projects showcasing my expertise in web development,
              cloud architecture, and innovative technology solutions.
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={index === 0 ? 'lg:col-span-2' : ''}
              >
                <ProjectCard project={project} featured={index === 0} />
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <motion.div variants={itemVariants} className="mt-16">
              <h3 className="mb-8 text-center font-display text-2xl font-semibold text-white">
                Other Projects
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: typeof projects[0]
  featured?: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`group relative cursor-pointer ${featured ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
      style={{
        perspective: 1200,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-[1px]"
        style={{
          rotateX: featured ? rotateX : 0,
          rotateY: featured ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-[#0f0f12]">
          {/* Project Image Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-50" />

          {/* Animated gradient on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-purple-500/10 to-transparent"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Content */}
          <div className="relative flex h-full flex-col justify-end p-6 lg:p-8">
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Subtitle */}
            <div className="mb-3">
              {project.subtitle && (
                <span className="mb-1 block text-sm text-cyan-400">
                  {project.subtitle}
                </span>
              )}
              <h3
                className={`font-display font-bold text-white ${
                  featured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                }`}
              >
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p
              className={`mb-6 text-white/60 ${
                featured ? 'max-w-xl text-base' : 'line-clamp-2 text-sm'
              }`}
            >
              {project.description}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 text-sm font-medium text-white transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-4 w-4" />
                  Source
                </motion.a>
              )}
            </div>

            {/* Hover Glow Effect */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0"
              animate={{
                opacity: isHovered ? 1 : 0,
              }}
              style={{
                background:
                  'linear-gradient(135deg, rgba(0, 229, 229, 0.1) 0%, transparent 50%, rgba(139, 92, 246, 0.1) 100%)',
              }}
            />
          </div>

          {/* Corner Accent */}
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 group-hover:text-cyan-400">
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>
      </motion.div>

      {/* Card Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl opacity-0 blur-2xl"
        animate={{
          opacity: isHovered ? 0.5 : 0,
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(0, 229, 229, 0.3), rgba(139, 92, 246, 0.3))',
        }}
      />
    </motion.div>
  )
}
