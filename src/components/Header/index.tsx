import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>
            <span className={styles.logoAccent}>&lt;</span>
            Ortiz
            <span className={styles.logoAccent}>/&gt;</span>
          </span>
        </Link>

        <ul className={styles.navList}>
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className={styles.navLink}>
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#projects" className={styles.navLink}>
              Projetos
            </Link>
          </li>
          <li>
            <Link href="#skills" className={styles.navLink}>
              Skills
            </Link>
          </li>
        </ul>

        <Link href="#contact" className={styles.ctaButton}>
          Contato
        </Link>
      </nav>
    </header>
  )
}
