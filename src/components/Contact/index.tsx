"use client"

import { useState, FormEvent } from "react"
import { useIntersectionObserver } from "@/hooks"
import { SITE_CONFIG } from "@/constants"
import {
  GithubIcon,
  WhatsAppIcon,
  EmailIcon,
  SendIcon,
  MapPinIcon,
} from "@/components/Icons"
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

const contactInfo = [
  {
    icon: EmailIcon,
    title: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    external: false,
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    value: SITE_CONFIG.whatsappRaw,
    href: `${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Olá Diego, vim pelo seu portfólio!")}`,
    external: true,
  },
  {
    icon: MapPinIcon,
    title: "Localização",
    value: SITE_CONFIG.location,
    href: "#",
    external: false,
  },
]

const socials = [
  { icon: GithubIcon, name: "GitHub", username: "@diegortiz-dev", href: SITE_CONFIG.github },
  { icon: WhatsAppIcon, name: "WhatsApp", username: SITE_CONFIG.whatsappRaw, href: SITE_CONFIG.whatsapp },
  { icon: EmailIcon, name: "Email", username: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
]

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({ threshold: 0.15 })

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório"
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
      const message =
        `*Nova mensagem do Portfolio*\n\n` +
        `*Nome:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `${formData.subject ? `*Assunto:* ${formData.subject}\n` : ""}` +
        `*Mensagem:* ${formData.message}`

      const url = `${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`
      window.open(url, "_blank")

      setSubmitStatus("success")
      setFormData(initialFormData)
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`${styles.contact} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>
            Entre em <span className={styles.gradientText}>Contato</span>
          </h2>
          <div className={styles.divider} />
          <p className={styles.subtitle}>
            Pronto pra tirar seu próximo projeto do papel? Vamos conversar sobre
            como posso transformar a ideia em algo funcional.
          </p>
        </header>

        <div className={styles.grid}>
          {/* Formulário */}
          <div className={styles.formCard}>
            <h3 className={styles.cardHeading}>Envie uma mensagem</h3>

            <form onSubmit={handleSubmit} className={styles.form} noValidate>
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
                <label htmlFor="subject" className={styles.label}>Assunto</label>
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
                  placeholder="Conte mais sobre seu projeto..."
                  rows={5}
                  disabled={isSubmitting}
                />
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
              </div>

              <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <SendIcon size={18} />
                    Enviar mensagem
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <p className={styles.successMessage}>
                  Mensagem enviada — finalize o envio no WhatsApp.
                </p>
              )}
              {submitStatus === "error" && (
                <p className={styles.errorMessage}>
                  Algo deu errado. Tente novamente.
                </p>
              )}
            </form>
          </div>

          {/* Info cards */}
          <div className={styles.infoColumn}>
            <div className={styles.infoCard}>
              <h3 className={styles.cardHeading}>Informações de contato</h3>
              <div className={styles.infoList}>
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    target={info.external ? "_blank" : undefined}
                    rel={info.external ? "noopener noreferrer" : undefined}
                    className={styles.infoItem}
                  >
                    <div className={styles.infoIcon}>
                      <info.icon size={20} />
                    </div>
                    <div className={styles.infoContent}>
                      <p className={styles.infoTitle}>{info.title}</p>
                      <p className={styles.infoValue}>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.socialCard}>
              <h3 className={styles.cardHeading}>Redes</h3>
              <div className={styles.socialList}>
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialItem}
                  >
                    <div className={styles.socialIcon}>
                      <s.icon size={18} />
                    </div>
                    <div className={styles.socialMeta}>
                      <span className={styles.socialName}>{s.name}</span>
                      <span className={styles.socialUsername}>{s.username}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
