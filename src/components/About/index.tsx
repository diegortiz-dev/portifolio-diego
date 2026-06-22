"use client"

import { useIntersectionObserver } from "@/hooks"
import { STATS, TECH_STACK } from "@/constants"
import { ServerIcon, CodeBracketsIcon, ApiIcon, LayersIcon } from "@/components/Icons"
import styles from "./About.module.css"

const skills = [
  {
    icon: ServerIcon,
    title: "Backend",
    description:
      "Construção de APIs RESTful, lógica de negócio e modelagem de dados com Node.js, Python e MySQL.",
  },
  {
    icon: ApiIcon,
    title: "Arquitetura",
    description:
      "Design de sistemas com foco em manutenibilidade, código limpo e decisões técnicas conscientes.",
  },
  {
    icon: CodeBracketsIcon,
    title: "Frontend",
    description:
      "Landing pages e sites institucionais com React, Next.js e TypeScript, focados em performance.",
  },
  {
    icon: LayersIcon,
    title: "Freelance",
    description:
      "Entregas pra clientes reais, do levantamento de requisitos à publicação, com prazo e qualidade.",
  },
]

export default function About() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.2 })

  return (
    <section
      id="about"
      ref={ref}
      className={`${styles.about} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>
            Sobre <span className={styles.gradientText}>Diego</span>
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Transformo ideias em sistemas digitais que funcionam — com foco
            em backend sólido, código limpo e arquitetura bem estruturada.
          </p>
        </header>

        <div className={styles.mainGrid}>
          <div className={styles.textContent}>
            <h3 className={styles.contentTitle}>
              Onde a engenharia encontra o produto final.
            </h3>

            <p className={styles.contentParagraph}>
              Sou Diego Ortiz, 19 anos. Estudo{" "}
              <span className={styles.accent}>
                Análise e Desenvolvimento de Sistemas
              </span>{" "}
              com foco em Engenharia de Software e arquitetura backend.
              Comecei a programar aos 17 anos e venho me aprofundando em
              construir aplicações sólidas — do banco de dados ao deploy.
            </p>

            <p className={styles.contentParagraph}>
              Trabalho como freelancer construindo APIs, sistemas backend,
              landing pages e sites institucionais. Acredito que software
              bom começa pelas decisões certas, não pelo framework da moda.
            </p>

            <div className={styles.stats}>
              {STATS.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillsGrid}>
            {skills.map((skill, idx) => (
              <article
                key={skill.title}
                className={styles.skillCard}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={styles.skillIcon}>
                  <skill.icon size={22} />
                </div>
                <h4 className={styles.skillTitle}>{skill.title}</h4>
                <p className={styles.skillDescription}>{skill.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.techSection}>
          <h3 className={styles.techHeading}>Stack de tecnologias</h3>
          <div className={styles.techList}>
            {TECH_STACK.map((tech) => (
              <span key={tech} className={styles.techPill}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
