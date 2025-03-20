"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";
import ParticleBackground from "@/components/particle-background";
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
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
          <ParticleBackground />
          <div className="relative z-10 w-full max-w-3xl">
            <div className="mb-6 relative">
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 mx-auto">
                <Image src="/carlos.jpg" alt="Carlos Henrique Alves" width={160} height={160} className="object-cover" />
              </div>
              <div className="absolute bottom-2 right-2 bg-background text-foreground p-1 shadow-md">
                <ThemeToggle />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-2">Carlos Henrique Alves</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6">Desenvolvedor Full Stack Inovador</p>
            <p className="max-w-2xl mx-auto text-md sm:text-lg mb-8">
              Transformando ideias complexas em soluções escaláveis e de alto desempenho.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="default">
                <Link href="https://www.linkedin.com/in/carlos-alves-5548b81b7" target="_blank">LinkedIn</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/AlvesBlock" target="_blank">GitHub</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="#contact">Contato</Link>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#about" className="text-muted-foreground">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 bg-muted/30 px-4">
          <div className="max-w-3xl mx-auto text-justify">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">Sobre Mim</h2>
            <p className="text-lg mb-6">
            Sou um Desenvolvedor Full Stack apaixonado por tecnologia, sempre em busca de inovação e soluções escaláveis de alto desempenho. Com ampla experiência em Laravel (PHP), Angular, Vue.js, React, Flutter e Python, atuo no desenvolvimento de aplicações robustas que entregam eficiência e excelência aos usuários.
            </p>
            <p className="text-lg mb-6">
            Minha expertise abrange a integração de sistemas complexos, arquitetura escalável e otimização de processos para ambientes de alta carga. Tenho profundo conhecimento em Google Cloud Platform (GCP) e na orquestração de serviços distribuídos, garantindo alto desempenho e confiabilidade para grandes operações.
            </p>
            <p className="text-lg">
            Meu foco é criar aplicações web e mobile sólidas, com backends preparados para lidar com grandes volumes de dados. Busco sempre as melhores práticas e tecnologias mais eficientes para transformar desafios em soluções inteligentes e escaláveis.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-20 px-4">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">Principais Projetos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
                title="Diversas aplicações em React e Flutter"
                description="Aplicativos com integrações com API's e Micro-SaaS."
                technologies={["Flutter", "Firebase", "Node.js", "WebSockets"]}
                imageUrl="/curriculo.png"
                link="https://curriculo-certo.netlify.app/"
              />
               <ProjectCard
                title="Mapa 2.0 e GM Mobile 2.0"
                description="Aplicativo para segurança pública com geolocalização."
                technologies={["Flutter", "Angular", "Laravel", "SQL Server"]}
                imageUrl="/mapa2.PNG"
              />
              <ProjectCard
                title="Sentinela"
                description="Sistema de monitoramento por câmera em tempo real (Startup)."
                technologies={["Laravel", "Angular", "GCP", "MySQL"]}
                imageUrl="/sentinela.PNG"
              />
                          
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 px-4">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">Contato</h2>
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Fale Comigo</CardTitle>
                  <CardDescription>Envie uma mensagem pelo WhatsApp!</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Button asChild variant="default" className="w-full text-lg">
                    <Link href="https://wa.me/5521988653270?text=Olá%20Carlos,%20quero%20saber%20mais%20sobre%20seus%20serviços!" target="_blank">
                      <MessageCircle className="w-6 h-6" /> WhatsApp
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
  );
}
