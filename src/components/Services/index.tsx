"use client"

import { useIntersectionObserver } from "@/hooks"
import {
  ServerIcon,
  LayoutIcon,
  GlobeIcon,
  LayersIcon,
  ArrowRightIcon,
} from "@/components/Icons"
import { quickWhatsAppUrl } from "@/lib/whatsapp"
import styles from "./Services.module.css"

interface ServiceCard {
  icon: typeof ServerIcon
  title: string
  description: string
  features: string[]
  idealFor: string
  whatsappLabel: string
}

const services: ServiceCard[] = [
  {
    icon: ServerIcon,
    title: "Backend & APIs",
    description:
      "Construo APIs RESTful, integrações com serviços externos e a camada de dados da sua aplicação.",
    features: ["APIs RESTful", "Autenticação JWT", "Modelagem MySQL", "Integrações"],
    idealFor: "SaaS, painéis, integrações entre sistemas.",
    whatsappLabel: "Backend / API",
  },
  {
    icon: LayoutIcon,
    title: "Landing Pages",
    description:
      "Páginas focadas em conversão, mobile-first, com performance e SEO bem trabalhados.",
    features: ["Mobile-first", "Otimizada pra SEO", "Animações suaves", "Integração com forms"],
    idealFor: "Lançamentos, captação de leads, divulgação de produto.",
    whatsappLabel: "Landing page",
  },
  {
    icon: GlobeIcon,
    title: "Sites Institucionais",
    description:
      "Vitrine profissional pra sua marca ou empresa, com várias páginas e identidade visual consistente.",
    features: ["Múltiplas páginas", "Painel de conteúdo", "Responsivo", "Performance"],
    idealFor: "Empresas, escritórios, profissionais liberais.",
    whatsappLabel: "Site institucional",
  },
  {
    icon: LayersIcon,
    title: "Sistemas Web Full Stack",
    description:
      "Aplicações completas sob medida — backend, banco de dados, frontend e deploy.",
    features: ["Arquitetura sob medida", "Frontend reativo", "Banco de dados", "Deploy e suporte"],
    idealFor: "Produtos digitais, ferramentas internas, MVPs.",
    whatsappLabel: "Sistema web",
  },
]

export default function Services() {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })

  return (
    <section
      id="services"
      ref={ref}
      className={`${styles.services} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.badge}>Serviços</span>
          <h2 className={styles.title}>
            Como posso <span className={styles.titleAccent}>te ajudar</span>
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Atendimento freelance pra projetos digitais — do backend ao site no ar.
            Cada serviço pensado pra entregar resultado, não só código.
          </p>
        </header>

        <div className={styles.grid}>
          {services.map((service, idx) => (
            <article
              key={service.title}
              className={styles.card}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={styles.cardIcon}>
                <service.icon size={22} />
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>

              <ul className={styles.featureList}>
                {service.features.map((feat) => (
                  <li key={feat} className={styles.feature}>
                    <span className={styles.featureDot} aria-hidden="true" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className={styles.idealFor}>
                <span className={styles.idealForLabel}>Ideal pra:</span>{" "}
                {service.idealFor}
              </div>

              <a
                href={quickWhatsAppUrl(service.whatsappLabel)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardCta}
              >
                Pedir orçamento <ArrowRightIcon size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
