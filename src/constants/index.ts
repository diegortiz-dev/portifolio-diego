export const SITE_CONFIG = {
  name: "Diego Ortiz",
  role: "Desenvolvedor Backend & Full Stack",
  shortBio:
    "Desenvolvedor focado em arquitetura backend e APIs, com experiência em landing pages e sites institucionais como freelancer.",
  email: "ortizdtz@gmail.com",
  github: "https://github.com/diegortiz-dev",
  whatsapp: "https://wa.me/5535910188806",
  whatsappRaw: "(35) 91018-8806",
  location: "Minas Gerais, Brasil",
  available: true,
  title: "Diego Ortiz — Desenvolvedor Backend & Full Stack",
  description:
    "Desenvolvedor focado em arquitetura backend, design de APIs e sistemas escaláveis. Construo produtos digitais com código limpo e propósito.",
} as const

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
] as const

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/diegortiz-dev",
    username: "@diegortiz-dev",
    icon: "github",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5535910188806",
    username: "(35) 91018-8806",
    icon: "whatsapp",
  },
  {
    name: "Email",
    href: "mailto:ortizdtz@gmail.com",
    username: "ortizdtz@gmail.com",
    icon: "email",
  },
] as const

export const TECH_STACK = [
  "Node.js",
  "Python",
  "MySQL",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
] as const

export const STATS = [
  { value: "10+", label: "Projetos" },
  { value: "2+", label: "Anos" },
  { value: "100%", label: "Dedicação" },
] as const

export type NavLink = (typeof NAV_LINKS)[number]
export type SocialLink = (typeof SOCIAL_LINKS)[number]
