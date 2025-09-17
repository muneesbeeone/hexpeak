"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei"
import { useRef, memo, useEffect, useState } from "react"
import * as THREE from "three"

// Shared sphere geometry
const sharedSphereGeometry = new THREE.SphereGeometry(1, 32, 32)

interface FloatingOrbProps {
  position: [number, number, number]
  color: string
  scale?: number
  mouse?: [number, number] // normalized cursor
}

const FloatingOrb = memo(function FloatingOrb({
  position,
  color,
  scale = 1,
  mouse = [0, 0],
}: FloatingOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Base floating rotation
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2 + mouse[1] * 0.3
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3 + mouse[0] * 0.3

      // Optional subtle position shift
      meshRef.current.position.x = position[0] + mouse[0]
      meshRef.current.position.y = position[1] + mouse[1]
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} geometry={sharedSphereGeometry} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
})

const ParticleField = memo(function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 100
  const positions = useRef(new Float32Array(particleCount * 3))

  for (let i = 0; i < particleCount; i++) {
    positions.current[i * 3] = (Math.random() - 0.5) * 20
    positions.current[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions.current[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions.current, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#3b82f6" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
})

export function ThreeBackground() {
  const [dpr, setDpr] = useState(1)
  const [mounted, setMounted] = useState(false)
  const [mouse, setMouse] = useState<[number, number]>([0, 0])

  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio, 1.5))
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize cursor to range [-0.5, 0.5]
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * -2
      setMouse([x * 0.5, y * 0.5])
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={dpr}
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", (e) => {
            e.preventDefault()
            console.warn("WebGL context lost")
          })
        }}
      >
        <Environment preset="night" background={false} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />

        {/* Floating orbs with mouse interactivity */}
        <FloatingOrb position={[-4, 2, -2]} color="#3b82f6" scale={0.8} mouse={mouse} />
        <FloatingOrb position={[4, -2, -3]} color="#8b5cf6" scale={0.6} mouse={mouse} />
        <FloatingOrb position={[2, 4, -4]} color="#06b6d4" scale={0.7} mouse={mouse} />
        <FloatingOrb position={[-3, -3, -1]} color="#10b981" scale={0.5} mouse={mouse} />

        <ParticleField />
      </Canvas>
    </div>
  )
}
