import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "investimentos-dashboard",
    title: "Investimentos Balance",
    description:
      "Dashboard para gerenciar portfólio de investimentos com rebalanceamento automático, visualização de alocação e acompanhamento de performance.",
    longDescription:
      "Aplicação completa pra investidor pessoa física acompanhar a alocação do portfólio. Calcula automaticamente quanto aportar em cada ativo pra manter os percentuais ideais, exibe gráficos de distribuição e histórico de performance.",
    highlights: ["Rebalanceamento automático", "Gráficos interativos", "UX simples"],
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/portfolio-balance-dashboard.git",
    featured: true,
    image: "/projects/investimentos-dashboard.png",
    year: "2025",
  },
  {
    id: "focus-flow",
    title: "Focus Flow",
    description:
      "Landing page para o FocusFlow — aplicativo de produtividade baseado na técnica Pomodoro. Foco em conversão e clareza.",
    longDescription:
      "Landing page mobile-first com micro-interações, animações suaves e copy direcionado pra conversão. Otimizada pra performance e acessibilidade, com SEO básico bem trabalhado.",
    highlights: ["Mobile-first", "Animações suaves", "Otimizado para conversão"],
    techs: ["React", "Next.js", "Tailwind CSS"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/focusflow-landing.git",
    featured: true,
    image: "/projects/focus-flow.png",
    year: "2025",
  },
  {
    id: "task-manager",
    title: "Task Manager API",
    description:
      "API RESTful para gerenciamento de tarefas com autenticação JWT, validação de dados e documentação.",
    longDescription:
      "Backend robusto pra um app de tarefas: autenticação via JWT, CRUD completo, validação de input, persistência em MySQL e estrutura preparada pra escalar. Foco em boas práticas de design de API.",
    highlights: ["Auth com JWT", "Validação rigorosa", "MySQL"],
    techs: ["Node.js", "Express", "MySQL", "JWT"],
    category: "backend",
    github: "https://github.com/diegortiz-dev/task-manager-api",
    featured: false,
    year: "2025",
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description:
      "Aplicação de previsão do tempo com geolocalização, gráficos interativos e integração com API externa.",
    longDescription:
      "Dashboard climático com geolocalização automática, gráficos de temperatura e umidade, e busca por cidade. Integra com API externa pra dados em tempo real.",
    highlights: ["Geolocalização", "API externa", "Gráficos em tempo real"],
    techs: ["React", "TypeScript", "Tailwind CSS", "API REST"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/Weather-Dashboard.git",
    featured: false,
    year: "2024",
  },
  {
    id: "aurora-coffee",
    title: "Aurora Coffee",
    description:
      "Landing page elegante para cafeteria fictícia. Foco em estética imersiva, micro-interações e mobile.",
    longDescription:
      "Projeto experimental pra explorar design imersivo e CSS puro. Sem frameworks JS — só HTML, CSS e vanilla JS, com foco em performance e animações finas.",
    highlights: ["CSS puro", "Animações finas", "Zero dependências"],
    techs: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/coffe-page",
    featured: false,
    year: "2024",
  },
  {
    id: "portfolio-v1",
    title: "Portfolio v1",
    description:
      "Primeira versão deste portfólio. Iteração inicial focada em apresentar projetos e habilidades.",
    longDescription:
      "Versão anterior deste site. Mantida pública como histórico — mostra a evolução de design e código até a versão atual.",
    highlights: ["Histórico", "CSS Modules", "Next.js 15"],
    techs: ["React", "Next.js", "TypeScript", "CSS Modules"],
    category: "frontend",
    github: "https://github.com/diegortiz-dev/portifolio-diego",
    featured: false,
    year: "2024",
  },
]

export const projectCategories = [
  { id: "all", label: "Todos" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
] as const

export type ProjectCategory = (typeof projectCategories)[number]["id"]
