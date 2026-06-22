import Hero from "@/components/Hero"
import About from "@/components/About"
import Stack from "@/components/Stack"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main aria-label="Página principal do portfólio de Diego Ortiz">
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </main>
  )
}
