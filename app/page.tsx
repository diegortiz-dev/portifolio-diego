import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main aria-label="Página principal do portfólio de Diego Ortiz">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
