"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ParticleBackground from "@/components/particle-background"
import { MessageCircle } from "lucide-react";
import Head from "next/head"; // Importa o Head


export default function HomePage() {


  return (
    <>
      <Head>
        <title>Carlos Alves | Dev</title>
        <meta name="description" content="Desenvolvedor Full Stack especializado em soluções escaláveis e inovadoras." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <ParticleBackground />
          <div className="container relative z-10 px-4 flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20">
                <Image src="/carlos.jpg" alt="Carlos Henrique Alves" width={160} height={160} className="object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-background text-foreground p-1 shadow-md">
                <ThemeToggle />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Carlos Henrique Alves</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">Desenvolvedor Fullstack Inovador</p>
            <p className="max-w-2xl text-lg mb-8">
              Transformando ideias complexas em soluções escaláveis e de alto desempenho
            </p>
            <div className="flex gap-4">
              <Button asChild variant="default">
                <Link href="https://www.linkedin.com/in/carlos-alves-5548b81b7" target="_blank">
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/AlvesBlock" target="_blank">
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="#contact">Contato</Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#about" className="text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="max-w-3xl mx-auto text-justify">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Sobre Mim</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                Sou um Desenvolvedor Full Stack apaixonado por tecnologia, sempre em busca de inovação e soluções escaláveis de alto desempenho.
                Com ampla experiência em Laravel (PHP), Angular, Vue.js, React, Flutter e Python, atuo no desenvolvimento de aplicações robustas
                que entregam eficiência e excelência aos usuários.
              </p>
              <p className="text-lg mb-6">
                Minha expertise abrange a integração de sistemas complexos, arquitetura escalável e otimização de processos para ambientes de alta
                carga. Tenho profundo conhecimento em Google Cloud Platform (GCP) e na orquestração de serviços distribuídos, garantindo alto
                desempenho e confiabilidade para grandes operações.
              </p>
              <p className="text-lg">
                Meu foco é criar aplicações web e mobile sólidas, com backends preparados para lidar com grandes volumes de dados.
                Busco sempre as melhores práticas e tecnologias mais eficientes para transformar desafios em soluções inteligentes e escaláveis.
              </p>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Principais Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Sentinela"
                description="Sistema de monitoramento por câmera em tempo real (Startup)."
                technologies={["Laravel", "Angular", "GCP", "MySQL"]}
                imageUrl="/sentinela.PNG?height=300&width=500"
              />
              <ProjectCard
                title="Mapa 2.0 e GM Mobile 2.0"
                description="Aplicativo para segurança pública com recursos de geolocalização e alertas em tempo real."
                technologies={["Flutter", "Angular", "Laravel", "Google Maps API", "SQL Server"]}
                imageUrl="/mapa2.PNG?height=300&width=500"
              />

              <ProjectCard
                title="Diversas aplicações em React e Flutter"
                description="Aplicativos com integraões com API's."
                technologies={["Flutter", "Firebase", "Node.js", "WebSockets"]}
                imageUrl="/aplicativos.PNG?height=300&width=500"
              />


            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-muted/30">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Habilidades e Tecnologias</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

                <SkillBadge name="Angular" icon="code" />
                <SkillBadge name="React" icon="code" />
                <SkillBadge name="Vuejs" icon="file-code" />
                <SkillBadge name="Flutter" icon="smartphone" />
                <SkillBadge name="PHP Laravel" icon="php" />
                <SkillBadge name="Python" icon="server" />
                <SkillBadge name="MySQL" icon="database" />
                <SkillBadge name="Firebase" icon="flame" />
                <SkillBadge name="APIs REST" icon="webhook" />
                <SkillBadge name="GCP" icon="cloud" />
                <SkillBadge name="Docker" icon="container" />
                <SkillBadge name="Git" icon="git-branch" />

              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contato</h2>
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Fale Comigo</CardTitle>
                  <CardDescription>Envie uma mensagem pelo WhatsApp e vamos conversar!</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Button asChild variant="default" className="w-full text-lg">
                    <Link href="https://wa.me/5521988653270?text=Olá%20Carlos,%20quero%20saber%20mais%20sobre%20seus%20serviços!" target="_blank">
                      <MessageCircle className="w-6 h-6" /> Fale no WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <div className="mt-8 flex justify-center space-x-4">
                <Link
                  href="https://github.com/AlvesBlock"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/carlos-alves-5548b81b7"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                <Link
                  href="mailto:carlos.alves.ti@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 border-t flex justify-center">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Carlos Henrique Alves. Todos os direitos reservados.
            </p>
            <div className="mt-4 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}

