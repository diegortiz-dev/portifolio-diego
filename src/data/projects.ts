import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "focus-flow",
    title: "Focus Flow",
    description: "Landing page moderna e responsiva para o FocusFlow - aplicativo de produtividade com técnica Pomodoro.",
    techs: ["React", "Next.js", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/focusflow-landing.git",
    featured: true,
    image: "/projects/focus-flow.png",
    longDescription:
      "Uma landing page moderna e responsiva para o aplicativo FocusFlow, com foco em design minimalista, micro-interações e otimização para dispositivos móveis. Projeto focado em performance e acessibilidade.",
  },
  {
    id: "investimentos-dashboard",
    title: "Investimentos Balance",
    description: "Dashboard moderno e simples de utilizar para gerenciamento de portfólio de investimentos com rebalanceamento automático.",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/portfolio-balance-dashboard.git",
    featured: true,
    image: "/projects/investimentos-dashboard.png",
    longDescription:
      "Um dashboard completo para gerenciamento de portfólio de investimentos, com funcionalidades de rebalanceamento automático, visualização de alocação e acompanhamento de performance.",
  },
  {
    id: "aurora-coffee",
    title: "Aurora Coffee",
    description:
      "Landing page moderna para cafeteria com design elegante, animações suaves e experiência imersiva. Projeto focado em performance e acessibilidade.",
    longDescription:
      "Uma experiência digital completa para uma cafeteria fictícia, com foco em design minimalista, micro-interações e otimização para dispositivos móveis.",
    techs: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/coffe-page",
    featured: false,
  },
  {
    id: "portfolio-v1",
    title: "Portfolio v1",
    description:
      "Primeira versão do meu portfólio pessoal, desenvolvido com foco em apresentar meus projetos e habilidades de forma profissional.",
    techs: ["React", "Next.js", "TypeScript", "CSS Modules"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/portifolio-diego",
    featured: false,
  },
  {
    id: "task-manager",
    title: "Task Manager API",
    description:
      "API RESTful para gerenciamento de tarefas com autenticação JWT, validação de dados e documentação completa.",
    techs: ["Node.js", "Express", "MySQL", "JWT"],
    category: "backend",
    github: "https://github.com/diegortiz-dev/task-manager-api",
    featured: false,
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description:
      "Aplicação de previsão do tempo com geolocalização, gráficos interativos e integração com API externa.",
    techs: ["React", "TypeScript", "Tailwind CSS", "API REST"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/Weather-Dashboard.git",
    featured: false,
  },
]

export const projectCategories = [
  { id: "all", label: "Todos" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
] as const

export type ProjectCategory = (typeof projectCategories)[number]["id"]
