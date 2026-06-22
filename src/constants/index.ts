// Constantes centralizadas do projeto

export const SITE_CONFIG = {
  name: "Diego Ortiz",
  role: "Desenvolvedor Backend & Full Stack",
  shortBio:
    "Desenvolvedor focado em arquitetura backend, APIs e sistemas escaláveis. Também construo landing pages e sites institucionais como freelancer.",
  email: "ortizdtz@gmail.com",
  github: "https://github.com/diegortiz-dev",
  whatsapp: "https://wa.me/5535910188806",
  location: "Brasil",
  available: true,
  title: "Diego Ortiz — Desenvolvedor Backend & Full Stack",
  description:
    "Diego Ortiz — Desenvolvedor focado em arquitetura backend, design de APIs e sistemas escaláveis. Construindo produtos digitais com código limpo e propósito.",
} as const

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#about", label: "Sobre" },
  { href: "#stack", label: "Stack" },
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
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "JWT", category: "backend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
] as const

export const HERO_ROLES = [
  "APIs robustas.",
  "Backends escaláveis.",
  "Interfaces que convertem.",
  "Código com propósito.",
] as const

export const STATS = [
  { value: "2+", label: "Anos programando" },
  { value: "10+", label: "Projetos publicados" },
  { value: "100%", label: "Foco em qualidade" },
  { value: "24h", label: "Tempo médio de resposta" },
] as const

export const TIMELINE = [
  {
    year: "2023",
    title: "Primeira linha de código",
    description:
      "Comecei a estudar programação aos 17 anos, mergulhando em lógica, HTML e CSS pra entender como a web funciona por baixo.",
  },
  {
    year: "2024",
    title: "Imersão em backend",
    description:
      "Descobri o lado backend e me apaixonei pela arquitetura. Aprofundei em Node.js, Python, MySQL e design de APIs RESTful.",
  },
  {
    year: "2024",
    title: "Análise e Desenvolvimento de Sistemas",
    description:
      "Iniciei o curso superior de ADS com foco em Engenharia de Software e arquitetura de sistemas backend escaláveis.",
  },
  {
    year: "2025",
    title: "Freelances e produtos reais",
    description:
      "Comecei a entregar landing pages, sites institucionais e APIs pra clientes, unindo backend sólido com frontend bem acabado.",
  },
] as const

export type NavLink = (typeof NAV_LINKS)[number]
export type SocialLink = (typeof SOCIAL_LINKS)[number]
export type TechItem = (typeof TECH_STACK)[number]
