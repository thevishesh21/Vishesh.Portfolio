'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleCloud() {
  const ref = useRef<THREE.Points>(null)

  // Generate particles
  const particles = useMemo(() => {
    const count = 3000
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 3 + Math.random() * 7

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }

    return positions
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.02
      ref.current.rotation.y -= delta * 0.03
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00e5e5"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  )
}

function FloatingOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null)
  const orb2Ref = useRef<THREE.Mesh>(null)
  const orb3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (orb1Ref.current) {
      orb1Ref.current.position.y = Math.sin(time * 0.5) * 0.5
      orb1Ref.current.position.x = Math.cos(time * 0.3) * 0.3 - 3
    }

    if (orb2Ref.current) {
      orb2Ref.current.position.y = Math.sin(time * 0.4 + 1) * 0.6
      orb2Ref.current.position.x = Math.cos(time * 0.2 + 1) * 0.4 + 3
    }

    if (orb3Ref.current) {
      orb3Ref.current.position.y = Math.sin(time * 0.6 + 2) * 0.4
      orb3Ref.current.position.z = Math.cos(time * 0.4) * 0.5
    }
  })

  return (
    <>
      {/* Primary Cyan Orb */}
      <mesh ref={orb1Ref} position={[-3, 0, -2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#00e5e5" transparent opacity={0.1} />
      </mesh>

      {/* Secondary Purple Orb */}
      <mesh ref={orb2Ref} position={[3, 1, -3]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.08} />
      </mesh>

      {/* Tertiary Mixed Orb */}
      <mesh ref={orb3Ref} position={[0, -2, -1]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.1} />
      </mesh>
    </>
  )
}

function InnerScene() {
  return (
    <>
      <ParticleCloud />
      <FloatingOrbs />
      <ambientLight intensity={0.5} />
    </>
  )
}

export function ParticleField() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        className="bg-transparent"
        gl={{ alpha: true, antialias: true }}
      >
        <InnerScene />
      </Canvas>

      {/* Gradient Overlays for depth */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial gradient from center */}
        <div className="particle-radial-gradient absolute inset-0" />
        {/* Top fade */}
        <div className="particle-top-fade absolute left-0 right-0 top-0 h-48" />
        {/* Bottom fade */}
        <div className="particle-bottom-fade absolute bottom-0 left-0 right-0 h-48" />
        {/* Subtle color overlays */}
        <div className="particle-purple-overlay absolute left-0 top-0 h-full w-full opacity-30" />
        <div className="particle-cyan-overlay absolute right-0 top-0 h-full w-full opacity-30" />
      </div>
    </div>
  )
}
