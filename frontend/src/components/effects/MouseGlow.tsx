'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Primary glow - follows mouse */}
      <motion.div
        className="pointer-events-none fixed z-50 hidden lg:block"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(0, 229, 229, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Secondary glow - slower follow */}
      <motion.div
        className="pointer-events-none fixed z-40 hidden lg:block"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 100,
          mass: 1,
        }}
        style={{
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
    </>
  )
}
