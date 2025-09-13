"use client"

import { useEffect, useState } from "react"

export function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const hideCursor = () => setIsVisible(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseleave", hideCursor)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseleave", hideCursor)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 transition-transform duration-100 ease-out"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    >
      <div className="w-full h-full bg-green-500 rounded-full opacity-20 animate-pulse" />
    </div>
  )
}
