export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  techs: string[]
  category: "frontend" | "backend" | "fullstack"
  github: string
  demo?: string
  image?: string
  featured?: boolean
}
