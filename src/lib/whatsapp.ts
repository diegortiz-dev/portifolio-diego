// Geração de mensagens estruturadas pro WhatsApp

import { SITE_CONFIG } from "@/constants"

export interface WhatsAppPayload {
  name?: string
  email?: string
  projectType?: string
  description?: string
  timeline?: string
  budget?: string
}

const PHONE = SITE_CONFIG.whatsapp.replace("https://wa.me/", "")

// Mensagem completa quando vem do formulário
export function buildContactMessage(payload: WhatsAppPayload): string {
  const lines: string[] = []

  lines.push("Olá Diego! Vim pelo seu portfólio 👋")
  lines.push("")

  if (payload.name) lines.push(`*Nome:* ${payload.name}`)
  if (payload.email) lines.push(`*Email:* ${payload.email}`)
  if (payload.projectType) lines.push(`*Tipo de projeto:* ${payload.projectType}`)
  if (payload.timeline) lines.push(`*Prazo desejado:* ${payload.timeline}`)
  if (payload.budget) lines.push(`*Orçamento aproximado:* ${payload.budget}`)

  if (payload.description) {
    lines.push("")
    lines.push("*Sobre o projeto:*")
    lines.push(payload.description)
  }

  return lines.join("\n")
}

// Mensagem padrão pré-preenchida quando o usuário só clica num botão de WhatsApp
export function buildQuickMessage(projectType?: string): string {
  const lines: string[] = [
    "Olá Diego! Vim pelo seu portfólio 👋",
    "",
    "Gostaria de conversar sobre um projeto:",
    "",
    `*Tipo:* ${projectType ?? "_(ex: API, landing page, site institucional)_"}`,
    "*Descrição:* _(breve resumo)_",
    "*Prazo desejado:* _(ex: 2 semanas)_",
    "",
    "Aguardo seu retorno!",
  ]
  return lines.join("\n")
}

// Helpers que geram a URL pronta
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
}

export function quickWhatsAppUrl(projectType?: string): string {
  return buildWhatsAppUrl(buildQuickMessage(projectType))
}
