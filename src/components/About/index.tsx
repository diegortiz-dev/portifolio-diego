"use client"

import { useState } from "react"
import { useIntersectionObserver } from "@/hooks"
import { CopyIcon, CheckIcon } from "@/components/Icons"
import { STATS, TIMELINE } from "@/constants"
import styles from "./About.module.css"

const codeContent = `export const diego = {
  name: "Diego Ortiz",
  age: 19,
  role: "Backend & Full Stack Developer",
  location: "Brasil",
  status: "Open to freelances",

  education: {
    course: "Análise e Desenvolvimento de Sistemas",
    focus: "Engenharia de Software & Arquitetura Backend"
  },

  focus: [
    "APIs RESTful escaláveis",
    "Arquitetura de sistemas backend",
    "Landing pages & sites institucionais",
    "Código limpo, decisões conscientes"
  ],

  contact: {
    email: "ortizdtz@gmail.com",
    github: "github.com/diegortiz-dev"
  }
}`

const highlightedCode = `<span class="keyword">export const</span> <span class="variable">diego</span> <span class="operator">=</span> {
  <span class="property">name</span>: <span class="string">"Diego Ortiz"</span>,
  <span class="property">age</span>: <span class="number">19</span>,
  <span class="property">role</span>: <span class="string">"Backend &amp; Full Stack Developer"</span>,
  <span class="property">location</span>: <span class="string">"Brasil"</span>,
  <span class="property">status</span>: <span class="string">"Open to freelances"</span>,

  <span class="property">education</span>: {
    <span class="property">course</span>: <span class="string">"Análise e Desenvolvimento de Sistemas"</span>,
    <span class="property">focus</span>: <span class="string">"Engenharia de Software &amp; Arquitetura Backend"</span>
  },

  <span class="property">focus</span>: [
    <span class="string">"APIs RESTful escaláveis"</span>,
    <span class="string">"Arquitetura de sistemas backend"</span>,
    <span class="string">"Landing pages &amp; sites institucionais"</span>,
    <span class="string">"Código limpo, decisões conscientes"</span>
  ],

  <span class="property">contact</span>: {
    <span class="property">email</span>: <span class="string">"ortizdtz@gmail.com"</span>,
    <span class="property">github</span>: <span class="string">"github.com/diegortiz-dev"</span>
  }
}`

export default function About() {
  const [copied, setCopied] = useState(false)
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <section
      id="about"
      className={`${styles.about} ${isVisible ? styles.visible : ""}`}
      ref={ref}
    >
      <div className={styles.container}>
        {/* Bloco esquerdo: código + stats */}
        <div className={styles.leftCol}>
          <div className={styles.codeWrapper}>
            <div className={styles.codeHeader}>
              <div className={styles.windowControls}>
                <span className={styles.windowDot} data-color="red" />
                <span className={styles.windowDot} data-color="yellow" />
                <span className={styles.windowDot} data-color="green" />
              </div>
              <div className={styles.codeTabs}>
                <span className={styles.codeTabActive}>diego.ts</span>
              </div>
              <button
                className={styles.copyButton}
                onClick={handleCopy}
                aria-label={copied ? "Código copiado" : "Copiar código"}
              >
                {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
                <span className={styles.copyText}>{copied ? "Copiado" : "Copiar"}</span>
              </button>
            </div>
            <div className={styles.codeContent}>
              <div className={styles.lineNumbers} aria-hidden="true">
                {Array.from({ length: 26 }, (_, i) => (
                  <span key={i + 1}>{i + 1}</span>
                ))}
              </div>
              <pre className={styles.codeBlock}>
                <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
              </pre>
            </div>
          </div>

          <div className={styles.stats}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bloco direito: texto + timeline */}
        <div className={styles.content}>
          <span className={styles.badge}>{"// sobre mim"}</span>

          <h2 className={styles.title}>
            Engenharia primeiro,
            <br />
            <span className={styles.titleAccent}>código depois.</span>
          </h2>

          <div className={styles.description}>
            <p>
              Sou <span className={styles.highlight}>Diego Ortiz</span>, 19 anos. Estudo{" "}
              <span className={styles.highlightAccent}>
                Análise e Desenvolvimento de Sistemas
              </span>{" "}
              com foco em Engenharia de Software e arquitetura backend.
            </p>

            <p>
              Comecei a programar aos 17 anos por curiosidade e nunca mais parei.
              Hoje trabalho como freelancer construindo{" "}
              <span className={styles.tech}>APIs</span>,{" "}
              <span className={styles.tech}>sistemas backend</span>,{" "}
              <span className={styles.tech}>landing pages</span> e{" "}
              <span className={styles.tech}>sites institucionais</span> pra clientes
              que valorizam código bem feito e entrega no prazo.
            </p>

            <p className={styles.muted}>
              Acredito que software bom começa pelas decisões certas — não pelo framework
              da moda. Minha praia é backend: design de APIs, modelagem de dados, lógica
              de negócio. Mas quando o projeto pede, entrego o frontend completo também.
            </p>
          </div>

          <div className={styles.timeline}>
            <h3 className={styles.timelineTitle}>
              <span className={styles.timelineLine} />
              Trajetória
            </h3>
            <ol className={styles.timelineList}>
              {TIMELINE.map((item) => (
                <li key={`${item.year}-${item.title}`} className={styles.timelineItem}>
                  <span className={styles.timelineYear}>{item.year}</span>
                  <div className={styles.timelineContent}>
                    <h4 className={styles.timelineItemTitle}>{item.title}</h4>
                    <p className={styles.timelineItemDesc}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
