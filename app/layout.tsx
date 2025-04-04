import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Carlos Alves | Dev",
  description:
    "Desenvolvedor Fullstack especializado em Laravel, Angular, Vuejs, React, Flutter e Slim PHP. Criando soluções escaláveis e de alto desempenho.",
  keywords:
    "desenvolvedor fullstack, laravel, angular, flutter, php, javascript, gcp, mysql, firebase, apis rest, docker",    
    icons: {
      icon: "/favicon.png", // Caminho correto do favicon
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'