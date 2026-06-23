export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  highlights?: string[]
  techs: string[]
  category: "frontend" | "backend" | "fullstack"
  github: string
  demo?: string
  image?: string
  /** CSS object-position pra ajustar o crop da screenshot (ex: "top left", "center 30%"). Default: "top center". */
  imagePosition?: string
  featured?: boolean
  year?: string
}
