"use client"

import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import { useRef, useEffect, useState, memo } from "react"
import * as THREE from "three"

// Floating logo card
const LogoCard = memo(function LogoCard() {
  const meshRef = useRef<THREE.Mesh>(null)
  const texture = useLoader(THREE.TextureLoader, "/logo.png") // keep logo in /public

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={[3, 3, 1]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial
          map={texture}
          transparent
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
    </Float>
  )
})

// Optional particle field
const ParticleField = memo(function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const positions = new Float32Array(150 * 3)

  for (let i = 0; i < 150; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#3b82f6" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
})

export function InteractiveSphere() {
  const [mounted, setMounted] = useState(false)
  const [dpr, setDpr] = useState(1)

  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio, 1.5))
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full h-96 md:h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={dpr} style={{ background: "transparent" }}>
        <Environment preset="night" />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />

        <LogoCard />
        <ParticleField />
      </Canvas>
    </div>
  )
}
