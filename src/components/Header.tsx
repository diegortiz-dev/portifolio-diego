import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-zinc-900/80 backdrop-blur border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-bold text-white">
          Diego.dev
        </span>

        <ul className="flex gap-6 text-sm text-zinc-300">
          <li>
            <Link href="#projects" className="hover:text-white transition">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-white transition">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-white transition">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
