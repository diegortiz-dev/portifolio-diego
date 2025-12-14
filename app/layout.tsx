import "./globals.css"
import Header from "@/components/Header"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Diego Ortiz | Desenvolvedor",
  description: "Portfolio de Diego - Desenvolvedor",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-zinc-950 text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
