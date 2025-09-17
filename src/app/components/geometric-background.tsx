"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Box, Octahedron, Icosahedron } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"

function GeometricShape({
  position,
  shape,
  color,
  scale = 1,
}: {
  position: [number, number, number]
  shape: "box" | "octahedron" | "icosahedron"
  color: string
  scale?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3
    }
  })

  const ShapeComponent = shape === "box" ? Box : shape === "octahedron" ? Octahedron : Icosahedron

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
      <ShapeComponent ref={meshRef} args={[scale]} position={position}>
        <meshStandardMaterial color={color} transparent opacity={0.7} metalness={0.8} roughness={0.2} />
      </ShapeComponent>
    </Float>
  )
}

export function GeometricBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} style={{ background: "transparent" }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />

        <GeometricShape position={[-4, 2, -2]} shape="box" color="#3b82f6" scale={0.8} />
        <GeometricShape position={[4, -1, -3]} shape="octahedron" color="#8b5cf6" scale={0.6} />
        <GeometricShape position={[2, 3, -1]} shape="icosahedron" color="#06b6d4" scale={0.7} />
        <GeometricShape position={[-3, -2, 1]} shape="box" color="#10b981" scale={0.5} />
        <GeometricShape position={[0, 0, -4]} shape="octahedron" color="#f59e0b" scale={0.4} />
      </Canvas>
    </div>
  )
}
