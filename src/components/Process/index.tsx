"use client"

import { useIntersectionObserver } from "@/hooks"
import { ChatIcon, FileTextIcon, ServerIcon, RocketIcon } from "@/components/Icons"
import styles from "./Process.module.css"

interface Step {
  icon: typeof ChatIcon
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: ChatIcon,
    number: "01",
    title: "Conversa",
    description:
      "Entendo seu problema, contexto e objetivo. Pergunto o que precisa ser perguntado antes de propor solução.",
  },
  {
    icon: FileTextIcon,
    number: "02",
    title: "Proposta",
    description:
      "Mando escopo, prazo e valor por escrito. Sem letra miúda — você sabe exatamente o que está contratando.",
  },
  {
    icon: ServerIcon,
    number: "03",
    title: "Desenvolvimento",
    description:
      "Codifico com entregas parciais pra você acompanhar. Ajustes ao longo do caminho, sem surpresa no fim.",
  },
  {
    icon: RocketIcon,
    number: "04",
    title: "Entrega",
    description:
      "Publico, documento e dou suporte de pós-entrega. Você fica com o código, a documentação e meu canal aberto.",
  },
]

export default function Process() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="process"
      ref={ref}
      className={`${styles.process} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.badge}>Processo</span>
          <h2 className={styles.title}>
            Como eu <span className={styles.titleAccent}>trabalho</span>
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Um fluxo simples e transparente do primeiro contato até a entrega final.
          </p>
        </header>

        <div className={styles.steps}>
          <div className={styles.connector} aria-hidden="true" />

          {steps.map((step, idx) => (
            <article
              key={step.number}
              className={styles.step}
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className={styles.stepIcon}>
                <step.icon size={22} />
              </div>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
