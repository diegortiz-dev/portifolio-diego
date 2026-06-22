"use client"

import Link from "next/link"
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS } from "@/constants"
import { GithubIcon, WhatsAppIcon, EmailIcon, ChevronDownIcon } from "@/components/Icons"
import styles from "./Footer.module.css"

const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "github": return <GithubIcon size={18} />
    case "whatsapp": return <WhatsAppIcon size={18} />
    case "email": return <EmailIcon size={18} />
    default: return null
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>
                <span className={styles.logoAccent}>&lt;</span>
                Ortiz
                <span className={styles.logoAccent}>/&gt;</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              Desenvolvedor backend & full stack. Construindo sistemas digitais
              com foco em arquitetura e código limpo.
            </p>
            <div className={styles.socialIcons}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            <h3 className={styles.navTitle}>Navegação</h3>
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contact}>
            <h3 className={styles.navTitle}>Contato</h3>
            <ul className={styles.contactList}>
              <li>{SITE_CONFIG.email}</li>
              <li>{SITE_CONFIG.whatsappRaw}</li>
              <li>{SITE_CONFIG.location}</li>
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>
          <button
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
          >
            <ChevronDownIcon size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
