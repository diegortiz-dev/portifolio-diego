"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import { useScrollDirection } from "@/hooks"
import { MenuIcon, CloseIcon } from "@/components/Icons"
import styles from "./Header.module.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScrollDirection()

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu()
      }
    },
    [closeMenu]
  )

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      onKeyDown={handleKeyDown}
    >
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoText}>
            <span className={styles.logoAccent}>&lt;</span>
            Ortiz
            <span className={styles.logoAccent}>/&gt;</span>
          </span>
        </Link>

        {/* Navegação Desktop */}
        <ul className={styles.navList}>
          {NAV_LINKS.slice(0, -1).map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="#contact" className={styles.ctaButton}>
          Contato
        </Link>

        {/* Botão do Menu Mobile */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Navegação Mobile */}
      <div
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <ul className={styles.mobileNavList}>
          {NAV_LINKS.map((link, index) => (
            <li
              key={link.href}
              className={styles.mobileNavItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link
                href={link.href}
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sobreposição */}
      {isMenuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
