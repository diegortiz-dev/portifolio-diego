import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Diego<span className={styles.logoDot}>.</span>Ortiz
        </Link>

        <ul className={styles.navList}>
          <li>
            <Link href="#projects" className={styles.navLink}>
              Projetos
            </Link>
          </li>
          <li>
            <Link href="#about" className={styles.navLink}>
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#contact" className={styles.navLink}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
