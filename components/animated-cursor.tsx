"use client"

import { useEffect, useState } from "react"

export function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          window.getComputedStyle(target).cursor === "pointer",
      )
    }

    window.addEventListener("mousemove", updateCursor)
    return () => window.removeEventListener("mousemove", updateCursor)
  }, [])

  return (
    <>
      <div
        className="fixed top-0 left-0 w-4 h-4 bg-green-500 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px) scale(${isPointer ? 1.5 : 1})`,
          mixBlendMode: "difference",
        }}
      />
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animated-cursor {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
