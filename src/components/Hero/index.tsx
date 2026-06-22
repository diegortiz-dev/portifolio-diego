"use client"

import { SITE_CONFIG } from "@/constants"
import { ChevronDownIcon, GithubIcon, WhatsAppIcon, EmailIcon } from "@/components/Icons"
import styles from "./Hero.module.css"

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background} aria-hidden="true">
        <div className={styles.backgroundGrid} />
        <div className={styles.backgroundGlow} />
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Esquerda - Texto */}
          <div className={styles.left}>
            <div className={styles.tagline}>
              <p>Do backend ao frontend,</p>
              <p>com propósito em cada linha.</p>
            </div>

            <div className={styles.titleBlock}>
              <h1 className={styles.titleMain}>DESENVOLVEDOR</h1>
              <h1 className={styles.titleSub}>
                & <span className={styles.gradientText}>BACK-END</span>.
              </h1>
            </div>

            <p className={styles.description}>
              Construo <span className={styles.descAccent}>APIs robustas e sistemas backend escaláveis</span>,
              com olhar atento à arquitetura e código limpo. Também entrego landing pages
              e sites institucionais como <span className={styles.descAccent}>freelancer</span>.
            </p>

            <div className={styles.socialLinks}>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <GithubIcon size={22} />
              </a>
              <a
                href={SITE_CONFIG.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={22} />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className={styles.socialLink}
                aria-label="Email"
              >
                <EmailIcon size={22} />
              </a>
            </div>
          </div>

          {/* Direita - Card de Identidade */}
          <div className={styles.right}>
            <div className={styles.profileCard}>
              <div className={styles.avatar}>
                <span className={styles.avatarText}>DO</span>
              </div>

              <div className={styles.profileInfo}>
                <h2 className={styles.profileName}>Diego Ortiz</h2>
                <p className={styles.profileRole}>Desenvolvedor</p>
                <p className={styles.profileRoleAccent}>Backend &amp; Full Stack</p>
              </div>

              <div className={styles.profileMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Localização</span>
                  <span className={styles.metaValue}>{SITE_CONFIG.location}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Status</span>
                  <span className={styles.metaValueAvailable}>
                    <span className={styles.statusDot} />
                    Disponível
                  </span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Formação</span>
                  <span className={styles.metaValue}>ADS · Eng. Software</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className={styles.scrollIndicator}
          aria-label="Rolar para baixo"
        >
          <ChevronDownIcon size={28} />
        </button>
      </div>
    </section>
  )
}
