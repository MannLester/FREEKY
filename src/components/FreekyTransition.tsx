"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FreekyTransitionProps {
  isActive: boolean
  clickPosition: { x: number; y: number } | null
  isHoveringFreeky: boolean
  isDarkMode?: boolean
}

export function FreekyTransition({ isActive, clickPosition, isHoveringFreeky, isDarkMode = false }: FreekyTransitionProps) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHoveringFreeky) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      } else {
        setMousePosition(null)
      }
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isHoveringFreeky])

  return (
    <>
      {/* Hover Preview Effect */}
      <AnimatePresence>
        {mousePosition && isHoveringFreeky && !isActive && (
          <motion.div
            className="fixed pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              left: mousePosition.x,
              top: mousePosition.y,
              width: 1000,
              height: 1000,
              borderRadius: "50%",
              background: isDarkMode 
                ? "radial-gradient(circle, rgba(255,255,255,0.5) 30%, rgba(200,200,255,0.5) 50%, rgba(0,0,0,0) 70%)"
                : "radial-gradient(circle, rgba(236,72,153,0.5) 30%, rgba(147,51,234,0.5) 50%, rgba(0,0,0,0) 70%)",
              transform: "translate(-50%, -50%)",
              mixBlendMode: "overlay"
            }}
          />
        )}
      </AnimatePresence>

      {/* Click Transition Effect */}
      <AnimatePresence>
        {isActive && clickPosition && (
          <motion.div
            className="fixed inset-0 z-40 pointer-events-none"
            initial={{
              clipPath: `circle(0px at ${clickPosition.x}px ${clickPosition.y}px)`,
              background: isDarkMode
                ? "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(200,200,255,0.8) 50%, rgba(130,130,240,0.8) 100%)"
                : "radial-gradient(circle, rgba(236,72,153,0.8) 0%, rgba(147,51,234,0.8) 50%, rgba(79,70,229,0.8) 100%)"
            }}
            animate={{
              clipPath: `circle(2000px at ${clickPosition.x}px ${clickPosition.y}px)`,
              background: "rgba(0,0,0,0)"
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      {/* No longer using the helper element - handling hover state from parent */}
    </>
  )
}
