"use client"

import { useState } from "react"
import styles from "./About.module.css"

const codeContent = `export const diego = {
  name: "Diego Ortiz",
  age: 18,
  role: "Desenvolvedor",

  contact: {
    email: "ortizdtz@gmail.com",
    github: "github.com/diegortiz-dev"
  },

  skills: {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", 
      "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Python", "MySQL"],
    tools: ["Git", "GitHub"]
  },

goals: [
  "Desenvolver interfaces focadas em usabilidade e performance.",
  "Criar produtos digitais com código limpo e escalável.",
  "Unir design e engenharia para soluções eficientes.",
  "Construir experiências pensadas para o usuário final."
]
}`

// Highlighted code for display
const highlightedCode = `<span class="keyword">export const</span> <span class="variable">diego</span> <span class="operator">=</span> {
  <span class="property">name</span>: <span class="string">"Diego Ortiz"</span>,
  <span class="property">age</span>: <span class="number">18</span>,
  <span class="property">role</span>: <span class="string">"Desenvolvedor"</span>,

  <span class="property">contact</span>: {
    <span class="property">email</span>: <span class="string">"ortizdtz@gmail.com"</span>,
    <span class="property">github</span>: <span class="string">"github.com/diegortiz-dev"</span>
  },

  <span class="property">skills</span>: {
    <span class="property">frontend</span>: [<span class="string">"React"</span>, <span class="string">"Next.js"</span>,
      <span class="string">"TypeScript"</span>, <span class="string">"JavaScript"</span>, <span class="string">"HTML5"</span>,
      <span class="string">"CSS3"</span>, <span class="string">"Tailwind CSS"</span>],
    <span class="property">backend</span>: [<span class="string">"Node.js"</span>, <span class="string">"Python"</span>, <span class="string">"MySQL"</span>],
    <span class="property">tools</span>: [<span class="string">"Git"</span>, <span class="string">"GitHub"</span>]
  },

  <span class="property">goals</span>: [
    <span class="string">"Desenvolver interfaces focadas em usabilidade e performance."</span>,
    <span class="string">"Criar produtos digitais com código limpo e escalável."</span>,
    <span class="string">"Unir design e engenharia para soluções eficientes."</span>,
    <span class="string">"Construir experiências pensadas para o usuário final."</span>
  ]
}`

export default function About() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(codeContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Code Block */}
        <div className={styles.codeWrapper}>
          <div className={styles.codeHeader}>
            <div className={styles.codeTabs}>
              <span className={styles.codeTabActive}>TypeScript</span>
              <span className={styles.codeTab}>About.ts</span>
            </div>
            <button
              className={styles.copyButton}
              onClick={handleCopy}
              aria-label="Copiar código"
            >
              {copied ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
          </div>
          <pre className={styles.codeBlock}>
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
        </div>

        {/* Text Content */}
        <div className={styles.content}>
          <span className={styles.badge}>Desenvolvedor</span>
          
          <h2 className={styles.title}>
            Transformando ideias em<br />
            experiências digitais
          </h2>

          <div className={styles.description}>
            <p>
              Meu nome é <span className={styles.highlight}>Diego</span>, tenho 18 anos e estudo{" "}
              <span className={styles.highlightAccent}>desenvolvimento de software</span>.
            </p>

            <p>
              Estou construindo minha base técnica por meio de projetos práticos, 
              explorando diferentes tecnologias e áreas da programação, sempre com 
              atenção à organização, clareza e boas práticas.
            </p>

            <p>
              Ao longo desse processo, tive contato com linguagens, frameworks e 
              ferramentas como{" "}
              <span className={styles.tech}>JavaScript</span>,{" "}
              <span className={styles.tech}>TypeScript</span>,{" "}
              <span className={styles.tech}>React</span>,{" "}
              <span className={styles.tech}>Next.js</span>,{" "}
              <span className={styles.tech}>HTML</span>,{" "}
              <span className={styles.tech}>CSS</span>,{" "}
              <span className={styles.tech}>Tailwind</span>,{" "}
              <span className={styles.tech}>Node.js</span>,{" "}
              <span className={styles.tech}>Python</span> e{" "}
              <span className={styles.tech}>MySQL</span>, utilizando esses recursos 
              para compreender melhor tanto a parte lógica quanto a estrutural das aplicações.
            </p>

            <p className={styles.muted}>
              Encaro tecnologia como um processo contínuo de aprendizado e responsabilidade. 
              Mais do que seguir um único caminho ou rótulo, busco entender problemas, 
              tomar decisões conscientes e evoluir a cada projeto, mantendo abertas as 
              possibilidades dentro do desenvolvimento de software.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
