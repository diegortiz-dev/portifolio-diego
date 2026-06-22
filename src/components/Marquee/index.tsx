import { ReactNode } from "react"
import styles from "./Marquee.module.css"

interface MarqueeProps {
  children: ReactNode
  reverse?: boolean
}

export default function Marquee({ children, reverse = false }: MarqueeProps) {
  return (
    <div className={`${styles.marquee} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.track} aria-hidden={false}>
        {children}
      </div>
      <div className={styles.track} aria-hidden="true">
        {children}
      </div>
    </div>
  )
}
