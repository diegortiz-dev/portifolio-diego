"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { projects, projectCategories, ProjectCategory } from "@/data/projects"
import { useIntersectionObserver } from "@/hooks"
import { GithubIcon, ExternalLinkIcon, FolderIcon } from "@/components/Icons"
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
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.15 })

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <section
      id="projects"
      ref={ref}
      className={`${styles.projects} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>
            Meus <span className={styles.gradientText}>Projetos</span>
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Uma seleção do que já construí. Código aberto, decisões intencionais
            e foco no que importa para o usuário final.
          </p>
        </header>

        <nav className={styles.filters} aria-label="Filtrar projetos">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`${styles.filterButton} ${
                activeCategory === cat.id ? styles.filterButtonActive : ""
              }`}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        <div className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={styles.card}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className={styles.imageWrapper}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Screenshot do ${project.title}`}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <FolderIcon size={36} />
                  </div>
                )}
                <div className={styles.overlay}>
                  <div className={styles.overlayActions}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.overlayButton}
                      aria-label={`Ver código do ${project.title} no GitHub`}
                    >
                      <GithubIcon size={20} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.overlayButton}
                        aria-label={`Ver demo do ${project.title}`}
                      >
                        <ExternalLinkIcon size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.content}>
                <span className={styles.category}>{categoryLabel(project.category)}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.techList}>
                  {project.techs.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Se algo aqui chamou sua atenção, vamos conversar sobre o seu projeto.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById("contact")
              if (el) el.scrollIntoView({ behavior: "smooth" })
            }}
            className={styles.ctaButton}
          >
            Iniciar um projeto
          </button>
        </div>
      </div>
    </section>
  )
}
