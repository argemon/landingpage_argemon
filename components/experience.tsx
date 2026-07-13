"use client";

import { Building2, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Experience() {
  const { t } = useI18n();
  const e = t.experience;

  return (
    <section id="experiencia" className="px-6 py-24 lg:px-20 border-t border-border">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent mb-2">{e.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {e.title}
            <span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">{e.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border md:left-5" />

          <div className="space-y-10">
            {e.items.map((item, index) => (
              <article key={index} className="relative pl-12 md:pl-16">
                {/* Node */}
                <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-card border border-accent/50 md:w-10 md:h-10">
                  <Building2 className="w-4 h-4 text-accent md:w-5 md:h-5" />
                </div>

                {/*
                  =====================================================
                  CARD DE EXPERIÊNCIA ORIGINAL (preservado / comentado)
                  =====================================================

                <div className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors">
                  <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-4 mb-3">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold">{item.company}</h3>
                      <p className="text-accent text-sm font-medium mt-0.5">{item.role}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap mt-1">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">{item.description}</p>
                  <div className="mb-4">
                    <h4 className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">{e.techLabel}</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-muted text-xs font-mono rounded border border-border">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">{e.resultsLabel}</h4>
                    <ul className="space-y-1">
                      {item.results.map((result, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                          <ArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                */}

                {/*
                  =====================================================
                  NOVO CARD (hierarquia: Empresa → Cargo → Descrição →
                  Resultados → Tecnologias como apoio)
                  =====================================================
                */}
                <div className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors">
                  {/* Empresa (maior destaque) + período */}
                  <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-4 mb-1">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-balance">
                      {item.company}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap mt-1">
                      {item.period}
                    </span>
                  </div>

                  {/* Cargo */}
                  <p className="text-accent text-sm md:text-base font-semibold mb-1">{item.role}</p>

                  {/* Cliente (destaque discreto) */}
                  {item.client && (
                    <p className="font-mono text-xs text-muted-foreground mb-3">
                      <span className="uppercase tracking-wider">{e.clientLabel}:</span>{" "}
                      <span className="text-foreground/70">{item.client}</span>
                    </p>
                  )}

                  {/* Descrição */}
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Resultados (impacto em primeiro plano) */}
                  <ul className="space-y-1.5 mb-5">
                    {item.results.map((result, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tecnologias (apoio discreto, no rodapé) */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono text-muted-foreground border border-border rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
