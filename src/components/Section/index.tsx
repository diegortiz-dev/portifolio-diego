"use client"

import { ReactNode, forwardRef } from "react"
import { useIntersectionObserver } from "@/hooks"
import styles from "./Section.module.css"

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  variant?: "primary" | "secondary"
  fullHeight?: boolean
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className = "", children, variant = "primary", fullHeight = false }, ref) => {
    const [observerRef, isVisible] = useIntersectionObserver<HTMLElement>({
      threshold: 0.1,
      triggerOnce: true,
    })

    // Usa ref fornecida ou ref interna do observer
    const sectionRef = ref || observerRef

    return (
      <section
        id={id}
        ref={sectionRef}
        className={`
          ${styles.section}
          ${styles[variant]}
          ${fullHeight ? styles.fullHeight : ""}
          ${isVisible ? styles.visible : ""}
          ${className}
        `}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = "Section"

export default Section
