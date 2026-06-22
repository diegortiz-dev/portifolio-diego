"use client"

import { useIntersectionObserver } from "@/hooks"
import styles from "./Stack.module.css"

interface StackCategory {
  title: string
  description: string
  emoji: string
  items: { name: string; description: string }[]
}

const stackData: StackCategory[] = [
  {
    title: "Backend",
    description: "Onde minha praia mora.",
    emoji: "{ }",
    items: [
      { name: "Node.js", description: "Runtime principal pra APIs e serviços." },
      { name: "Python", description: "Scripts, automações e prototipagem rápida." },
      { name: "MySQL", description: "Persistência relacional e modelagem de dados." },
      { name: "REST APIs", description: "Design de contratos claros e versionáveis." },
      { name: "JWT / Auth", description: "Autenticação stateless segura." },
    ],
  },
  {
    title: "Frontend",
    description: "Quando o projeto pede UI sólida.",
    emoji: "</>",
    items: [
      { name: "TypeScript", description: "Tipagem forte como padrão." },
      { name: "React", description: "Componentização e estado." },
      { name: "Next.js", description: "SSR, SSG e roteamento de produção." },
      { name: "Tailwind CSS", description: "Estilização rápida e consistente." },
    ],
  },
  {
    title: "Ferramentas",
    description: "O que mantém o fluxo limpo.",
    emoji: "[ ]",
    items: [
      { name: "Git & GitHub", description: "Controle de versão e colaboração." },
      { name: "VS Code", description: "Editor diário, configurado." },
      { name: "Postman / Insomnia", description: "Teste e documentação de APIs." },
    ],
  },
]

export default function Stack() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="stack"
      ref={ref}
      className={`${styles.stack} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.badge}>{"// stack"}</span>
          <h2 className={styles.title}>
            Ferramentas que eu <span className={styles.titleAccent}>realmente</span> uso.
          </h2>
          <p className={styles.subtitle}>
            Sem barrinha de proficiência inflada — só uma lista honesta do que
            já entrego em projetos reais.
          </p>
        </header>

        <div className={styles.grid}>
          {stackData.map((cat, idx) => (
            <article
              key={cat.title}
              className={styles.card}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardEmoji}>{cat.emoji}</span>
                <div>
                  <h3 className={styles.cardTitle}>{cat.title}</h3>
                  <p className={styles.cardDescription}>{cat.description}</p>
                </div>
              </div>
              <ul className={styles.itemList}>
                {cat.items.map((item) => (
                  <li key={item.name} className={styles.item}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemDesc}>{item.description}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
