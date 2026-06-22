"use client"

import { useRef, ReactNode, MouseEvent } from "react"
import styles from "./TiltCard.module.css"

interface TiltCardProps {
  children: ReactNode
  intensity?: number
  className?: string
}

export default function TiltCard({ children, intensity = 10, className = "" }: TiltCardProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current
    const inner = innerRef.current
    if (!wrapper || !inner) return

    const rect = wrapper.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -intensity
    const rotateY = ((x - centerX) / centerX) * intensity

    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`

    const mx = (x / rect.width) * 100
    const my = (y / rect.height) * 100
    wrapper.style.setProperty("--mx", `${mx}%`)
    wrapper.style.setProperty("--my", `${my}%`)
  }

  const handleMouseLeave = () => {
    if (innerRef.current) {
      innerRef.current.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)"
    }
  }

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={innerRef} className={styles.inner}>
        {children}
      </div>
      <div className={styles.glare} />
    </div>
  )
}
