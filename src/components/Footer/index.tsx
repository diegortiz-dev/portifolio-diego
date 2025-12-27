import Link from "next/link"
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS } from "@/constants"
import { GithubIcon, LinkedInIcon, EmailIcon } from "@/components/Icons"
import styles from "./Footer.module.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <GithubIcon size={18} />
      case "linkedin":
        return <LinkedInIcon size={18} />
      case "email":
        return <EmailIcon size={18} />
      default:
        return null
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Seção Superior */}
        <div className={styles.top}>
          {/* Logo */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>
                <span className={styles.logoAccent}>&lt;</span>
                Ortiz
                <span className={styles.logoAccent}>/&gt;</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              Desenvolvendo experiências digitais modernas e impactantes.
            </p>
          </div>

          {/* Navegação */}
          <nav className={styles.nav} aria-label="Footer navigation">
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

          {/* Links Sociais */}
          <div className={styles.social}>
            <h3 className={styles.navTitle}>Social</h3>
            <div className={styles.socialLinks}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className={styles.divider} />

        {/* Seção Inferior */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
