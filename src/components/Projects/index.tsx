"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { projects, projectCategories, ProjectCategory } from "@/data/projects"
import { useIntersectionObserver } from "@/hooks"
import { GithubIcon, ExternalLinkIcon, FolderIcon, ArrowRightIcon } from "@/components/Icons"
import TiltCard from "@/components/TiltCard"
import styles from "./Projects.module.css"

const categoryLabel = (cat: string) => {
  switch (cat) {
    case "frontend": return "Frontend"
    case "backend": return "Backend"
    case "fullstack": return "Full Stack"
    default: return cat
  }
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })

  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured),
    []
  )

  const otherProjects = useMemo(() => {
    const others = projects.filter((p) => !p.featured)
    if (activeCategory === "all") return others
    return others.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <section
      id="projects"
      className={`${styles.projects} ${isVisible ? styles.visible : ""}`}
      ref={ref}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.badge}>Portfólio</span>
          <h2 className={styles.title}>
            Projetos em <span className={styles.titleAccent}>Destaque</span>
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Uma seleção curada — código aberto, problemas reais, decisões intencionais.
          </p>
        </header>

        {/* Bento grid de destaques */}
        <div className={styles.bentoGrid}>
          {featuredProjects.slice(0, 2).map((project, idx) => (
            <TiltCard
              key={project.id}
              intensity={6}
              className={`${styles.bentoCard} ${idx === 0 ? styles.bentoLarge : ""}`}
            >
              <article className={styles.bentoInner}>
                <div className={styles.bentoImageWrapper}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Screenshot do projeto ${project.title}`}
                      fill
                      className={styles.bentoImage}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className={styles.bentoImagePlaceholder}>
                      <FolderIcon size={48} />
                    </div>
                  )}
                  <div className={styles.bentoImageGradient} aria-hidden="true" />
                </div>

                <div className={styles.bentoContent}>
                  <div className={styles.bentoMeta}>
                    <span className={styles.bentoCategory}>{categoryLabel(project.category)}</span>
                    {project.year && <span className={styles.bentoYear}>{project.year}</span>}
                  </div>
                  <h3 className={styles.bentoTitle}>{project.title}</h3>
                  <p className={styles.bentoDescription}>{project.description}</p>

                  {project.highlights && (
                    <ul className={styles.highlights}>
                      {project.highlights.map((h) => (
                        <li key={h} className={styles.highlight}>
                          <span className={styles.highlightDot} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className={styles.bentoFooter}>
                    <div className={styles.techList}>
                      {project.techs.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className={styles.bentoLinks}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.bentoLink}
                        aria-label={`Ver código do ${project.title} no GitHub`}
                      >
                        <GithubIcon size={18} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.bentoLink}
                          aria-label={`Ver demo do ${project.title}`}
                        >
                          <ExternalLinkIcon size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>

        {/* Filtros */}
        <nav className={styles.filters} aria-label="Filtrar projetos por categoria">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`${styles.filterButton} ${
                activeCategory === category.id ? styles.filterButtonActive : ""
              }`}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </nav>

        {/* Grid normal */}
        <div className={styles.projectsGrid}>
          {otherProjects.map((project, index) => (
            <article
              key={project.id}
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <header className={styles.cardHeader}>
                <div className={styles.folderWrapper}>
                  <FolderIcon size={22} className={styles.folderIcon} />
                </div>
                <div className={styles.cardLinks}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={`Ver código do ${project.title} no GitHub`}
                  >
                    <GithubIcon size={18} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      aria-label={`Ver demo do ${project.title}`}
                    >
                      <ExternalLinkIcon size={18} />
                    </a>
                  )}
                </div>
              </header>

              <span className={`${styles.cardCategory} ${styles[`cat_${project.category}`] ?? ""}`}>
                {project.category === "frontend"
                  ? "Frontend"
                  : project.category === "backend"
                  ? "Backend"
                  : "Full Stack"}
              </span>

              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>

              <footer className={styles.cardFooter}>
                {project.techs.map((tech) => (
                  <span key={tech} className={styles.cardTech}>
                    {tech}
                  </span>
                ))}
              </footer>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="https://github.com/diegortiz-dev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            <span>Ver tudo no GitHub</span>
            <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
