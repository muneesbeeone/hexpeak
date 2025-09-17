"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Float, Environment } from "@react-three/drei"
import { useRef, useEffect, useState, memo } from "react"
import type * as THREE from "three"

// Animated floating sphere
const AnimatedSphere = memo(function AnimatedSphere({ mouse }: { mouse: [number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1

      // Add mouse influence
      meshRef.current.rotation.x += mouse[1] * 0.5
      meshRef.current.rotation.y += mouse[0] * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[2, 100, 100]} scale={0.8}>
        <MeshDistortMaterial
          color="#3b82f6"
          distort={0.5}
          speed={3}
          roughness={0}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  )
})

// Optional particle field for depth effect
const ParticleField = memo(function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 80
  const positions = useRef(new Float32Array(particleCount * 3))

  for (let i = 0; i < particleCount; i++) {
    positions.current[i * 3] = (Math.random() - 0.5) * 10
    positions.current[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions.current[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions.current, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#3b82f6" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
})

export function InteractiveSphere() {
  const [mounted, setMounted] = useState(false)
  const [dpr, setDpr] = useState(1)
  const [mouse, setMouse] = useState<[number, number]>([0, 0])

  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio, 1.5))
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      setMouse([x, y])
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full h-96 md:h-[500px] relative cursor-grab">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={dpr} style={{ background: "transparent" }}>
        <Environment preset="night" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <AnimatedSphere mouse={mouse} />
        <ParticleField />
      </Canvas>
    </div>
  )
}
