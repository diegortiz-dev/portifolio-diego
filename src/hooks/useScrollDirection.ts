"use client"

import { useState, useEffect } from "react"

type ScrollDirection = "up" | "down" | null

export function useScrollDirection(threshold = 10): {
  scrollDirection: ScrollDirection
  scrollY: number
} {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      const direction = currentScrollY > lastScrollY ? "down" : "up"

      if (
        Math.abs(currentScrollY - lastScrollY) > threshold &&
        scrollDirection !== direction
      ) {
        setScrollDirection(direction)
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0
    }

    window.addEventListener("scroll", updateScrollDirection, { passive: true })

    return () => window.removeEventListener("scroll", updateScrollDirection)
  }, [scrollDirection, threshold])

  return { scrollDirection, scrollY }
}
