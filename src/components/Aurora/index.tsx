import styles from "./Aurora.module.css"

interface AuroraProps {
  subtle?: boolean
}

export default function Aurora({ subtle = false }: AuroraProps) {
  return <div className={`${styles.aurora} ${subtle ? styles.subtle : ""}`} aria-hidden="true" />
}
