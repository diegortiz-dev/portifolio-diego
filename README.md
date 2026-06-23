# Diego Ortiz — Portfolio

Portfolio pessoal — desenvolvedor backend & full stack.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## Stack

- **Next.js 16** — App Router e Server Components
- **TypeScript** — tipagem forte
- **CSS Modules + Tailwind 4** — estilização
- **Space Grotesk + Inter + JetBrains Mono** — tipografia

## Features

- Background aurora animado com gradiente violet → blue
- Tipografia display com gradient text animado
- Marquee infinito da tech stack
- Bento grid de projetos em destaque com efeito 3D tilt
- Timeline de trajetória profissional
- Stats e indicadores de disponibilidade
- Formulário de contato com integração WhatsApp
- Totalmente responsivo, com bottom nav mobile
- Respeita `prefers-reduced-motion`

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |
| `npm run lint` | Linter |

## Estrutura

```
app/                  # rotas e layout (App Router)
src/
├── components/       # componentes reutilizáveis
│   ├── Hero/         # seção principal com aurora + marquee
│   ├── About/        # apresentação + timeline + stats
│   ├── Stack/        # categorias de tecnologias
│   ├── Projects/     # bento grid + tilt cards
│   ├── Contact/      # formulário e canais
│   ├── Aurora/       # background animado reutilizável
│   ├── Marquee/      # esteira horizontal infinita
│   ├── TiltCard/     # efeito 3D no hover
│   └── ...
├── constants/        # config do site e dados
├── data/             # dados de projetos
├── hooks/            # hooks customizados
└── types/            # tipos TS
```

## Contato

- Email: ortizdtz@gmail.com
- GitHub: [@diegortiz-dev](https://github.com/diegortiz-dev)
- WhatsApp: [+55 35 91018-8806](https://wa.me/5535910188806)
