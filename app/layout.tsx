import "./globals.css"
import Header from "@/components/Header"

export const metadata = {
  title: "Diego.dev | Portfolio",
  description: "Portfolio de Diego - Desenvolvedor Front-end",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
