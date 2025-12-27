"use client"

import { useState, FormEvent } from "react"
import { useIntersectionObserver } from "@/hooks"
import { SOCIAL_LINKS, SITE_CONFIG } from "@/constants"
import { GithubIcon, WhatsAppIcon, EmailIcon, SendIcon } from "@/components/Icons"
import styles from "./Contact.module.css"

interface FormData {
  name: string
  email: string
  subject: string
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
  subject: "",
  message: "",
}

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
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Limpa erro quando usuário começa a digitar
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
      // Simula envio do formulário
      // Em produção, substitua por uma chamada real à API
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
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
          <span className={styles.badge}>Contato</span>
          <h2 className={styles.title}>
            Vamos trabalhar <br />
            <span className={styles.titleAccent}>juntos?</span>
          </h2>
          <p className={styles.description}>
            Estou sempre aberto a novas oportunidades, projetos interessantes e
            colaborações. Sinta-se à vontade para entrar em contato!
          </p>

          <div className={styles.contactInfo}>
            <a href={`mailto:${SITE_CONFIG.email}`} className={styles.emailLink}>
              <EmailIcon size={20} />
              <span>{SITE_CONFIG.email}</span>
            </a>
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

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={styles.input}
              placeholder="Sobre o que você quer falar?"
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Mensagem <span className={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
              placeholder="Sua mensagem..."
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
                Enviando...
              </>
            ) : (
              <>
                Enviar mensagem
                <SendIcon size={18} />
              </>
            )}
          </button>

          {submitStatus === "success" && (
            <p className={styles.successMessage}>
              ✓ Mensagem enviada com sucesso! Entrarei em contato em breve.
            </p>
          )}

          {submitStatus === "error" && (
            <p className={styles.errorMessage}>
              ✗ Ocorreu um erro ao enviar a mensagem. Tente novamente.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
