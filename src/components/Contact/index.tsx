"use client"

import { useState, FormEvent } from "react"
import { useIntersectionObserver } from "@/hooks"
import { SOCIAL_LINKS, SITE_CONFIG } from "@/constants"
import {
  GithubIcon,
  WhatsAppIcon,
  EmailIcon,
  SendIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/Icons"
import { buildContactMessage, buildWhatsAppUrl, quickWhatsAppUrl } from "@/lib/whatsapp"
import styles from "./Contact.module.css"

interface FormData {
  name: string
  email: string
  projectType: string
  timeline: string
  budget: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const initialFormData: FormData = {
  name: "",
  email: "",
  projectType: "",
  timeline: "",
  budget: "",
  message: "",
}

const projectTypes = [
  "Backend / API",
  "Landing page",
  "Site institucional",
  "Sistema web full stack",
  "Outro",
]

const budgetRanges = [
  "Até R$ 1.000",
  "R$ 1.000 - R$ 3.000",
  "R$ 3.000 - R$ 7.000",
  "Acima de R$ 7.000",
  "Vamos conversar",
]

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.1 })

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Conte um pouco mais (mínimo 10 caracteres)"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const message = buildContactMessage({
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        description: formData.message,
        timeline: formData.timeline,
        budget: formData.budget,
      })

      window.open(buildWhatsAppUrl(message), "_blank")

      setSubmitStatus("success")
      setFormData(initialFormData)
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <GithubIcon size={20} />
      case "whatsapp":
        return <WhatsAppIcon size={20} />
      case "email":
        return <EmailIcon size={20} />
      default:
        return null
    }
  }

  return (
    <section
      id="contact"
      className={`${styles.contact} ${isVisible ? styles.visible : ""}`}
      ref={ref}
    >
      <div className={styles.container}>
        {/* Lado Esquerdo - Informações */}
        <div className={styles.info}>
          <span className={styles.badge}>{"// contato"}</span>
          <h2 className={styles.title}>
            Bora construir
            <br />
            <span className={styles.titleAccent}>algo juntos?</span>
          </h2>
          <div className={styles.divider} />
          <p className={styles.description}>
            Conta o que você precisa, eu retorno com escopo e orçamento.
            Sem rodeios, sem proposta padronizada — cada projeto recebe
            atenção real.
          </p>

          <div className={styles.infoCards}>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className={styles.infoCard}
            >
              <div className={styles.infoIcon}>
                <EmailIcon size={18} />
              </div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>{SITE_CONFIG.email}</span>
              </div>
            </a>

            <a
              href={quickWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoCard}
            >
              <div className={styles.infoIcon}>
                <WhatsAppIcon size={18} />
              </div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>WhatsApp</span>
                <span className={styles.infoValue}>{SITE_CONFIG.whatsappRaw}</span>
              </div>
            </a>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <MapPinIcon size={18} />
              </div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Localização</span>
                <span className={styles.infoValue}>{SITE_CONFIG.location}</span>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <ClockIcon size={18} />
              </div>
              <div className={styles.infoText}>
                <span className={styles.infoLabel}>Tempo de resposta</span>
                <span className={styles.infoValue}>{SITE_CONFIG.responseTime}</span>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={link.name}
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Lado Direito - Formulário */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Nome <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                placeholder="Seu nome"
                disabled={isSubmitting}
              />
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                placeholder="seu@email.com"
                disabled={isSubmitting}
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="projectType" className={styles.label}>
                Tipo de projeto
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={styles.input}
                disabled={isSubmitting}
              >
                <option value="">Selecione</option>
                {projectTypes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="budget" className={styles.label}>
                Orçamento estimado
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={styles.input}
                disabled={isSubmitting}
              >
                <option value="">Selecione</option>
                {budgetRanges.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="timeline" className={styles.label}>
              Prazo desejado
            </label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={styles.input}
              placeholder="Ex: 2 semanas, 1 mês, sem pressa"
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Sobre o projeto <span className={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
              placeholder="Descreva brevemente o que você precisa, objetivo, referências..."
              rows={5}
              disabled={isSubmitting}
            />
            {errors.message && (
              <span className={styles.errorText}>{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className={styles.spinner} />
                Abrindo WhatsApp...
              </>
            ) : (
              <>
                Enviar pelo WhatsApp
                <SendIcon size={18} />
              </>
            )}
          </button>

          <p className={styles.submitNote}>
            O formulário gera uma mensagem estruturada e abre o WhatsApp pra você finalizar o envio.
          </p>

          {submitStatus === "success" && (
            <p className={styles.successMessage}>
              ✓ Mensagem pronta no WhatsApp! É só apertar enviar.
            </p>
          )}

          {submitStatus === "error" && (
            <p className={styles.errorMessage}>
              ✗ Ocorreu um erro ao abrir o WhatsApp. Tente novamente.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
