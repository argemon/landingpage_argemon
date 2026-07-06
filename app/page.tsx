"use client";

import { Hero } from "@/components/hero";
import { AboutShort } from "@/components/about-short";
import { Experience } from "@/components/experience";
import { Authority } from "@/components/authority";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { About } from "@/components/about";
// import { Referral } from "@/components/referral"; // Removido da página principal (não faz sentido para recrutadores). Código preservado.
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/*
        =====================================================
        ESTRUTURA ORIGINAL (preservada para fácil restauração)
        =====================================================

      <Hero />
      <Authority />
      <Projects />
      <Stack />
      <About />
      <Referral />
      <Contact />
      <Footer />
      */}

      {/*
        =====================================================
        NOVA ESTRUTURA (foco recrutadores / gestores técnicos)
        Hero → Sobre (curto) → Experiência → Projetos →
        Tecnologias → Resultados → Sobre completo → Contato
        =====================================================
      */}
      <Hero />
      <AboutShort />
      <Experience />
      <Projects />
      <Stack />
      <Authority />
      <About />
      {/* <Referral /> Seção de indicações removida da página principal (apenas comentada, não apagada) */}
      <Contact />
      <Footer />
    </main>
  );
}
