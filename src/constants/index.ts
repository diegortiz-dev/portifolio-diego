// Constantes centralizadas do projeto

export const SITE_CONFIG = {
  name: "Diego Ortiz",
  role: "Desenvolvedor Full Stack",
  email: "ortizdtz@gmail.com",
  github: "https://github.com/diegortiz-dev",
  whatsapp: "https://wa.me/5535910188806",
  whatsappRaw: "(35) 91018-8806",
  location: "Minas Gerais, Brasil",
  responseTime: "Resposta em até 24h",
  title: "Diego Ortiz | Desenvolvedor",
  description:
    "Diego Ortiz - Desenvolvedor freelancer especializado em backend, APIs, landing pages e sites institucionais. Código limpo e entrega no prazo.",
} as const

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#about", label: "Sobre" },
  { href: "#services", label: "Serviços" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
] as const

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/diegortiz-dev",
    icon: "github",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5535910188806",
    icon: "whatsapp",
  },
  {
    name: "Email",
    href: "mailto:ortizdtz@gmail.com",
    icon: "email",
  },
] as const

export const TECH_STACK = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
] as const

export const HERO_ROLES = [
  "APIs robustas.",
  "Landing pages que convertem.",
  "Sites institucionais.",
  "Sistemas escaláveis.",
  "Código limpo.",
] as const

export type NavLink = (typeof NAV_LINKS)[number]
export type SocialLink = (typeof SOCIAL_LINKS)[number]
export type TechItem = (typeof TECH_STACK)[number]
