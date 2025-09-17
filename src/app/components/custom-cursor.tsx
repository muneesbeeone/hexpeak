"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<HTMLDivElement[]>([])
  const mousePosition = useRef({ x: 0, y: 0 })
  const trailPositions = useRef(Array(5).fill({ x: 0, y: 0 }))

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Create trail elements
    const trails = Array.from({ length: 5 }, (_, i) => {
      const trail = document.createElement("div")
      trail.className = "custom-cursor-trail"
      trail.style.position = "fixed"
      trail.style.width = "8px"
      trail.style.height = "8px"
      trail.style.borderRadius = "50%"
      trail.style.background = "oklch(0.75 0 0)"
      trail.style.pointerEvents = "none"
      trail.style.zIndex = "9998"
      trail.style.opacity = String(0.6 - i * 0.1)
      trail.style.transform = `scale(${1 - i * 0.15})`
      document.body.appendChild(trail)
      return trail
    })
    trailRefs.current = trails

    // Animate trails using requestAnimationFrame
    const animate = () => {
      trailPositions.current = [
        mousePosition.current,
        ...trailPositions.current.slice(0, -1),
      ]

      trails.forEach((trail, i) => {
        const pos = trailPositions.current[i]
        trail.style.left = `${pos.x - 4}px`
        trail.style.top = `${pos.y - 4}px`
      })

      requestAnimationFrame(animate)
    }
    animate()

    const updateCursor = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = `${e.clientX - 10}px`
      cursor.style.top = `${e.clientY - 10}px`
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target
      if (!(target instanceof HTMLElement)) return

      if (target.matches("button, a, [role='button']")) {
        cursor.classList.add("cursor-pulse")
        cursor.style.width = "50px"
        cursor.style.height = "50px"
        cursor.style.borderRadius = "50%"
        cursor.style.background =
          "radial-gradient(circle, transparent 40%, oklch(0.75 0 0) 41%, oklch(0.75 0 0) 43%, transparent 44%)"
      } else if (target.matches("h1, h2, h3, h4, h5, h6, p, span")) {
        cursor.style.width = "60px"
        cursor.style.height = "8px"
        cursor.style.borderRadius = "4px"
        cursor.style.background = "oklch(0.75 0 0)"
      }
    }

    const handleMouseLeave = () => {
      cursor.classList.remove("cursor-pulse")
      cursor.style.width = "20px"
      cursor.style.height = "20px"
      cursor.style.borderRadius = "50%"
      cursor.style.background =
        "radial-gradient(circle, oklch(0.75 0 0) 0%, transparent 70%)"
    }

    const handleClick = () => {
      cursor.style.transform = "scale(0.8)"
      setTimeout(() => {
        cursor.style.transform = "scale(1)"
      }, 150)
    }

    // Hide cursor when leaving window
    const handleMouseLeaveWindow = () => {
      cursor.style.opacity = "0"
      trails.forEach((trail) => (trail.style.opacity = "0"))
    }

    const handleMouseEnterWindow = () => {
      cursor.style.opacity = "1"
      trails.forEach(
        (trail, i) => (trail.style.opacity = String(0.6 - i * 0.1))
      )
    }

    // Event listeners
    document.addEventListener("mousemove", updateCursor)
    document.addEventListener("mouseenter", handleMouseEnter, true)
    document.addEventListener("mouseleave", handleMouseLeave, true)
    document.addEventListener("click", handleClick)
    document.addEventListener("mouseleave", handleMouseLeaveWindow)
    document.addEventListener("mouseenter", handleMouseEnterWindow)

    return () => {
      document.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mouseenter", handleMouseEnter, true)
      document.removeEventListener("mouseleave", handleMouseLeave, true)
      document.removeEventListener("click", handleClick)
      document.removeEventListener("mouseleave", handleMouseLeaveWindow)
      document.removeEventListener("mouseenter", handleMouseEnterWindow)

      trails.forEach((trail) => trail.remove())
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
        background: "radial-gradient(circle, oklch(0.75 0 0) 0%, transparent 70%)",
      }}
    />
  )
}
