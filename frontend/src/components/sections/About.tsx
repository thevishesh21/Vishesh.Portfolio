'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Cloud, Database, Cpu, Zap, Layers } from 'lucide-react'
import { personalInfo, skills } from '@/data'

const techStack = [
  { name: 'React', icon: Code, color: '#61DAFB' },
  { name: 'Next.js', icon: Layers, color: '#ffffff' },
  { name: 'TypeScript', icon: Code, color: '#3178C6' },
  { name: 'Node.js', icon: Zap, color: '#339933' },
  { name: 'Python', icon: Code, color: '#3776AB' },
  { name: 'AWS', icon: Cloud, color: '#FF9900' },
  { name: 'MySQL', icon: Database, color: '#4479A1' },
  { name: 'IoT', icon: Cpu, color: '#00E676' },
]

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

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const frontendSkills = skills.filter(s => s.category === 'frontend')
  const backendSkills = skills.filter(s => s.category === 'backend')
  const toolSkills = skills.filter(s => s.category === 'tools' || s.category === 'other')

  return (
    <section
      id="about"
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
              About Me
            </span>
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Crafting Digital
              <span className="text-gradient"> Experiences</span>
            </h2>
          </motion.div>

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Bio Card */}
              <div className="gradient-border p-8">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-white/80">
                    {personalInfo.bio}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-500" />
                      <span className="text-sm text-white/60">Delhi University</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-purple-500" />
                      <span className="text-sm text-white/60">B.Sc. Electronics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm text-white/60">Full Stack Developer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="mb-6 font-display text-xl font-semibold text-white">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="group flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.05 + 0.5 }}
                      whileHover={{ y: -5 }}
                    >
                      <tech.icon
                        className="h-6 w-6 transition-colors"
                        style={{ color: tech.color }}
                      />
                      <span className="text-xs text-white/50 transition-colors group-hover:text-white/70">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Skill Categories */}
              <div className="space-y-6">
                {/* Frontend */}
                <SkillCategory
                  title="Frontend Development"
                  skills={frontendSkills}
                  color="cyan"
                  isInView={isInView}
                />

                {/* Backend */}
                <SkillCategory
                  title="Backend & Data"
                  skills={backendSkills}
                  color="purple"
                  isInView={isInView}
                />

                {/* Tools */}
                <SkillCategory
                  title="Tools & Technologies"
                  skills={toolSkills}
                  color="emerald"
                  isInView={isInView}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute -left-20 bottom-1/3 h-96 w-96 rounded-full bg-purple-500/5 blur-[100px]" />
      </div>
    </section>
  )
}

function SkillCategory({
  title,
  skills,
  color,
  isInView,
}: {
  title: string
  skills: { name: string; level: number }[]
  color: 'cyan' | 'purple' | 'emerald'
  isInView: boolean
}) {
  const colorMap = {
    cyan: {
      bg: 'bg-cyan-500',
      glow: 'shadow-cyan-500/30',
      text: 'text-cyan-400',
    },
    purple: {
      bg: 'bg-purple-500',
      glow: 'shadow-purple-500/30',
      text: 'text-purple-400',
    },
    emerald: {
      bg: 'bg-emerald-500',
      glow: 'shadow-emerald-500/30',
      text: 'text-emerald-400',
    },
  }

  const colors = colorMap[color]

  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
      <h3 className={`mb-4 font-display text-lg font-semibold ${colors.text}`}>
        {title}
      </h3>
      <div className="space-y-4">
        {skills.slice(0, 4).map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/70">{skill.name}</span>
              <span className="text-xs text-white/40">{skill.level}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
              <motion.div
                className={`h-full rounded-full ${colors.bg} shadow-lg ${colors.glow}`}
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1 + 0.5,
                  ease: [0, 0, 0.2, 1],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
