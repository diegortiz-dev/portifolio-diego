"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import { useScrollDirection } from "@/hooks"
import { MenuIcon, CloseIcon, HomeIcon, UserIcon, BriefcaseIcon, PencilIcon } from "@/components/Icons"
import styles from "./Header.module.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("/")
  const { scrollY } = useScrollDirection()

  useEffect(() => {
    setIsScrolled(scrollY > 50)
  }, [scrollY])

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact', 'projects', 'about']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${sectionId}`)
            return
          }
        }
      }
      
      // If no section is active, we're at the top (Home)
      if (window.scrollY < 200) {
        setActiveSection('/')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const smoothScrollTo = useCallback((targetPosition: number) => {
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 1000
    let start: number | null = null

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)
      
      // Easing function - easeInOutCubic
      const easeProgress = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2

      window.scrollTo(0, startPosition + distance * easeProgress)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }, [])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMenu()
    
    // Se for o link Home (/), vai para o topo
    if (href === '/') {
      smoothScrollTo(0)
      return
    }
    
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const headerOffset = 80
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset
      smoothScrollTo(targetPosition)
    }
  }, [closeMenu, smoothScrollTo])

  return (
    <>
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
              <a 
                href={link.href} 
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <a 
            href="#contact" 
            className={styles.ctaButton}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contato
          </a>
        </div>

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
              <a
                href={link.href}
                className={styles.mobileNavLink}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
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

    {/* Navegação Mobile Bottom Bar - Fora do header para evitar problemas de posicionamento no iOS */}
    <nav className={styles.mobileBottomNav} aria-label="Navegação mobile">
      <a
        href="/"
        className={`${styles.mobileBottomLink} ${activeSection === '/' ? styles.active : ''}`}
        onClick={(e) => handleNavClick(e, '/')}
        aria-label="Home"
      >
        <span className={styles.iconWrapper}>
          <HomeIcon size={22} />
        </span>
        <span className={styles.linkLabel}>Home</span>
      </a>
      <a
        href="#about"
        className={`${styles.mobileBottomLink} ${activeSection === '#about' ? styles.active : ''}`}
        onClick={(e) => handleNavClick(e, '#about')}
        aria-label="Sobre"
      >
        <span className={styles.iconWrapper}>
          <UserIcon size={22} />
        </span>
        <span className={styles.linkLabel}>Sobre</span>
      </a>
      <a
        href="#projects"
        className={`${styles.mobileBottomLink} ${activeSection === '#projects' ? styles.active : ''}`}
        onClick={(e) => handleNavClick(e, '#projects')}
        aria-label="Projetos"
      >
        <span className={styles.iconWrapper}>
          <BriefcaseIcon size={22} />
        </span>
        <span className={styles.linkLabel}>Projetos</span>
      </a>
      <a
        href="#contact"
        className={`${styles.mobileBottomLink} ${activeSection === '#contact' ? styles.active : ''}`}
        onClick={(e) => handleNavClick(e, '#contact')}
        aria-label="Contato"
      >
        <span className={styles.iconWrapper}>
          <PencilIcon size={22} />
        </span>
        <span className={styles.linkLabel}>Contato</span>
      </a>
    </nav>
    </>
  )
}
