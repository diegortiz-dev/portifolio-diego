import styles from "./Hero.module.css"

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background gradient effects */}
      <div className={styles.background}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
      </div>

      <p className={styles.subtitle}>
        Desenvolvedor
      </p>

      <h1 className={styles.title}>
        <span className={styles.titleGradient}>Diego Ortiz</span>
        <span className={styles.titleSecondary}>
          Criando experiências digitais
        </span>
      </h1>

      <p className={styles.description}>
        Desenvolvedor focado em criar interfaces{" "}
        <span className={styles.highlight}>modernas</span>,{" "}
        <span className={styles.highlight}>performáticas</span> e{" "}
        <span className={styles.highlight}>bem estruturadas</span> usando tecnologias atuais.
      </p>

      <div className={styles.ctaContainer}>
        <a href="#contact" className={styles.ctaSecondary}>
          Entre em contato
        </a>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </section>
  )
}
