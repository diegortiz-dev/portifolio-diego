import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "focus-flow",
    title: "Focus Flow",
    description:
      "Landing page moderna e responsiva para o FocusFlow — aplicativo de produtividade com técnica Pomodoro.",
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
    description:
      "Dashboard moderno e simples para gerenciamento de portfólio de investimentos com rebalanceamento automático.",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/portfolio-balance-dashboard.git",
    featured: true,
    image: "/projects/investimentos-dashboard.png",
    longDescription:
      "Um dashboard completo para gerenciamento de portfólio de investimentos, com funcionalidades de rebalanceamento automático, visualização de alocação e acompanhamento de performance.",
  },
  {
    id: "gapdev",
    title: "GapDev",
    description:
      "Plataforma com IA que analisa vagas, identifica skills exigidas e gera planos de estudo personalizados para o desenvolvedor evoluir.",
    techs: [
      "Python",
      "FastAPI",
      "FastMCP",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Hugging Face",
    ],
    category: "fullstack",
    github: "https://github.com/dev-mateus/gapdev",
    demo: "https://gapdev.vercel.app",
    featured: false,
    longDescription:
      "Plataforma de desenvolvimento de carreira movida a IA. Analisa descrições de vagas, compara com o conjunto de habilidades atual do desenvolvedor e identifica lacunas de conhecimento. A partir disso, gera planos de estudo personalizados para acelerar o crescimento profissional. Backend em Python com FastAPI e FastMCP, integração com modelos da Hugging Face para processar vagas e gerar recomendações inteligentes, e persistência em PostgreSQL. Frontend em React, TypeScript e Tailwind CSS.",
  },
  {
    id: "desabandone-focinhos",
    title: "Desabandone Focinhos",
    description:
      "Sistema de gestão para ONGs de bem-estar animal — cadastro de animais, busca de pets perdidos e fluxo de adoção.",
    techs: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    category: "fullstack",
    github: "https://github.com/rodrigo749/desabandonefocinhos",
    featured: false,
    longDescription:
      "Plataforma web para apoiar ONGs de bem-estar animal na gestão de adoções e resgates. Implementa cadastro de animais, busca de pets perdidos e gerenciamento de processos de adoção. Frontend em React e Tailwind CSS, com Next.js para arquitetura da aplicação e rotas de API. Foco em experiência intuitiva e acessível para ONGs, voluntários e potenciais adotantes.",
  },
  {
    id: "pi-game",
    title: "PI Game",
    description:
      "Jogo mobile de memorização dos dígitos de Pi, com modo Desafio (60s) e modo Prática com dicas opcionais.",
    techs: ["React Native"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/pi-game",
    featured: false,
    longDescription:
      "Jogo mobile focado em memorizar e treinar os dígitos do número Pi. Inclui modo Desafio (60 segundos para acertar o máximo de dígitos sem errar) e modo Prática (tentativas ilimitadas com dicas opcionais). Mecânicas de jogo, lógica de pontuação e interações construídas com React Native.",
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
  {
    id: "aurora-coffee",
    title: "Aurora Coffee",
    description:
      "Landing page elegante para cafeteria, com design minimalista, animações suaves e foco em performance.",
    longDescription:
      "Uma experiência digital completa para uma cafeteria fictícia, com foco em design minimalista, micro-interações e otimização para dispositivos móveis.",
    techs: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/coffe-page",
    featured: false,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Pessoal",
    description:
      "Site de portfólio totalmente responsivo, construído com foco em performance, acessibilidade e design limpo.",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/portifolio-diego",
    featured: false,
    longDescription:
      "Este próprio site. Construído com Next.js, TypeScript e Tailwind CSS, apresenta projetos, habilidades e canais de contato em uma interface moderna. Foco em performance, acessibilidade, responsividade e design limpo.",
  },
]

export const projectCategories = [
  { id: "all", label: "Todos" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
] as const

export type ProjectCategory = (typeof projectCategories)[number]["id"]
