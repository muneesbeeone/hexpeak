"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshTransmissionMaterial } from "@react-three/drei"
import { useRef, useState, useEffect, memo } from "react"
import type * as THREE from "three"

interface FloatingIconProps {
  position: [number, number, number]
  rotation: [number, number, number]
}

const FloatingIcon = memo(function FloatingIcon({ position, rotation }: FloatingIconProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <MeshTransmissionMaterial
          color="#3b82f6"
          thickness={0.5}
          roughness={0.1}
          transmission={0.9}
          ior={1.5}
          chromaticAberration={0.02}
          backside
        />
      </mesh>
    </Float>
  )
})

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)
  const [dpr, setDpr] = useState(1)

  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio, 1.5))
    setMounted(true)
  }, [])

  if (!mounted) return null // prevent SSR errors

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={dpr} style={{ background: "transparent" }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />

        <FloatingIcon position={[-3, 2, 0]} rotation={[0, 0, 0]} />
        <FloatingIcon position={[3, -1, -1]} rotation={[0.5, 0, 0]} />
        <FloatingIcon position={[0, 3, -2]} rotation={[0, 0.5, 0]} />
        <FloatingIcon position={[-2, -2, 1]} rotation={[0.3, 0.3, 0]} />
      </Canvas>
    </div>
  )
}
