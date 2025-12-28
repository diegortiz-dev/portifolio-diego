"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { projects, projectCategories, ProjectCategory } from "@/data/projects"
import { useIntersectionObserver } from "@/hooks"
import { GithubIcon, ExternalLinkIcon, FolderIcon } from "@/components/Icons"
import styles from "./Projects.module.css"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects
    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  const featuredProjects = useMemo(() => {
    return projects.filter((project) => project.featured)
  }, [])

  return (
    <section
      id="projects"
      className={`${styles.projects} ${isVisible ? styles.visible : ""}`}
      ref={ref}
    >
      <div className={styles.container}>
        {/* Cabeçalho da Seção */}
        <header className={styles.header}>
          <span className={styles.badge}>Portfólio</span>
          <h2 className={styles.title}>Projetos em Destaque</h2>
          <p className={styles.subtitle}>
            Uma seleção de projetos que demonstram minhas habilidades e
            experiência em desenvolvimento web.
          </p>
        </header>

        {/* Filtros de Categoria */}
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

        {/* Grid de Projetos em Destaque */}
        <div className={styles.featuredGrid}>
          {featuredProjects.slice(0, 2).map((project, index) => (
            <article
              key={project.id}
              className={styles.featuredCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.featuredImageWrapper}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Screenshot do projeto ${project.title}`}
                    fill
                    className={`${styles.featuredImage} ${project.id === 'investimentos-dashboard' ? styles.featuredImageContain : ''}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className={styles.featuredImagePlaceholder}>
                    <FolderIcon size={48} />
                  </div>
                )}
                <div className={styles.featuredOverlay}>
                  <div className={styles.featuredLinks}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.featuredLink}
                      aria-label={`Ver código do ${project.title} no GitHub`}
                    >
                      <GithubIcon size={20} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.featuredLink}
                        aria-label={`Ver demo do ${project.title}`}
                      >
                        <ExternalLinkIcon size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.featuredCategory}>{project.category}</span>
                <h3 className={styles.featuredTitle}>{project.title}</h3>
                <p className={styles.featuredDescription}>{project.description}</p>
                <div className={styles.techList}>
                  {project.techs.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <header className={styles.cardHeader}>
                <FolderIcon size={40} className={styles.folderIcon} />
                <div className={styles.cardLinks}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                    aria-label={`Ver código do ${project.title} no GitHub`}
                  >
                    <GithubIcon size={20} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      aria-label={`Ver demo do ${project.title}`}
                    >
                      <ExternalLinkIcon size={20} />
                    </a>
                  )}
                </div>
              </header>

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

        {/* Chamada para Ação */}
        <div className={styles.cta}>
          <a
            href="https://github.com/diegortiz-dev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Ver mais no GitHub
            <ExternalLinkIcon size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
