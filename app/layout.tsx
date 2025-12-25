import "./globals.css"
import Header from "@/components/Header"
import { Inter, JetBrains_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata = {
  title: "Diego Ortiz | Desenvolvedor",
  description:
    "Portfolio de Diego Ortiz - Desenvolvedor especializado em criar experiências digitais modernas e impactantes.",
  keywords: ["desenvolvedor", "full stack", "react", "nextjs", "portfolio"],
  authors: [{ name: "Diego Ortiz" }],
  openGraph: {
    title: "Diego Ortiz | Desenvolvedor",
    description: "Criando experiências digitais modernas e impactantes",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}
