"use client";

import { Terminal, ArrowDown, Download } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();
  const h = t.hero;
  const hv = t.heroV2;

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-20 lg:px-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/*
        =====================================================
        HERO ORIGINAL (preservado para fácil restauração)
        =====================================================

      <div className="relative max-w-5xl mx-auto w-full">
        <div className="mb-8 flex items-center gap-3 text-muted-foreground font-mono text-sm">
          <Terminal className="w-4 h-4 text-accent" />
          <span className="text-accent">~/edson-argemon</span>
          <span className="text-border">|</span>
          <span>{h.role}</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-balance">
          {h.headline1}
          <span className="text-accent">.</span>
          <br />
          <span className="text-muted-foreground">{h.headline2}</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          {h.subheadline}
        </p>

        <div className="flex flex-wrap gap-6 md:gap-10 mb-12 font-mono text-sm">
          <div className="flex items-center gap-2">
            <span className="text-accent">7</span>
            <span className="text-muted-foreground">{h.stats.years}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">3</span>
            <span className="text-muted-foreground">{h.stats.leadership}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">140k+</span>
            <span className="text-muted-foreground">{h.stats.users}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#projetos" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors glow-accent">
            {h.cta.projects}
            <ArrowDown className="w-4 h-4" />
          </a>
          <a href="#contato" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-muted transition-colors">
            {h.cta.contact}
          </a>
        </div>
      </div>
      */}

      {/*
        =====================================================
        NOVO HERO (foco: Especialista Backend .NET / recrutadores)
        =====================================================
      */}
      <div className="relative max-w-5xl mx-auto w-full">
        {/* Terminal header */}
        <div className="mb-8 flex items-center gap-3 text-muted-foreground font-mono text-sm">
          <Terminal className="w-4 h-4 text-accent" />
          <span className="text-accent">~/edson-argemon</span>
          <span className="text-border">|</span>
          <span>{hv.role}</span>
        </div>

        {/* Nome */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-3 text-balance">
          {hv.name}
          <span className="text-accent">.</span>
        </h1>

        {/* Cargo + especialidade */}
        <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
          {hv.role}
        </p>
        <p className="text-lg md:text-xl text-accent font-medium mb-6">
          {hv.specialty}
        </p>

        {/* Tags de especialidade */}
        <div className="flex flex-wrap gap-2 mb-6">
          {hv.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-card border border-border rounded-md font-mono text-sm text-foreground/90 hover:border-accent/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          {hv.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#experiencia"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors glow-accent"
          >
            {hv.ctaExperience}
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-muted transition-colors"
          >
            {hv.ctaContact}
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=19509EDXrr8cP_DuLJwKJVbXndJ1yzB1E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-muted transition-colors"
          >
            <Download className="w-4 h-4" />
            {h.cta.download}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
}
