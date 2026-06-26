"use client";

import { useI18n } from "@/lib/i18n";

// Estilos por nível de domínio: o primeiro grupo (Especialista) chama muito mais atenção.
const tierStyles = [
  {
    card: "bg-background border-accent/40 ring-1 ring-accent/20",
    badge: "bg-accent text-accent-foreground",
    chip: "bg-accent/10 border-accent/40 text-foreground",
  },
  {
    card: "bg-background border-border",
    badge: "bg-muted text-foreground border border-border",
    chip: "bg-muted border-border text-foreground/90",
  },
  {
    card: "bg-background border-border",
    badge: "bg-muted text-muted-foreground border border-border",
    chip: "bg-muted border-border text-muted-foreground",
  },
];

export function Stack() {
  const { t } = useI18n();
  const s = t.stack;
  const tt = t.techTiers;

  return (
    <section id="tecnologias" className="px-6 py-24 lg:px-20 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto">
        {/*
          =====================================================
          STACK ORIGINAL (preservado para fácil restauração)
          =====================================================

        <div className="mb-16">
          <p className="font-mono text-sm text-accent mb-2">{s.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {s.title}<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">{s.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.categories.map((category, index) => (
            <div key={index} className="p-6 bg-background border border-border rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground font-mono flex items-center gap-2">
                    <span className="text-accent">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        */}

        {/*
          =====================================================
          NOVAS TECNOLOGIAS (agrupadas por nível de domínio)
          =====================================================
        */}
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent mb-2">{tt.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {tt.title}
            <span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">{tt.subtitle}</p>
        </div>

        {/* Tiers */}
        <div className="space-y-6">
          {tt.tiers.map((tier, index) => {
            const style = tierStyles[index] ?? tierStyles[tierStyles.length - 1];
            const isPrimary = index === 0;
            return (
              <div
                key={index}
                className={`rounded-lg border p-6 transition-colors ${style.card}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-flex items-center rounded-md px-3 py-1 font-mono text-xs uppercase tracking-wider ${style.badge}`}
                  >
                    {tier.level}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tier.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-md border font-mono ${style.chip} ${
                        isPrimary
                          ? "px-4 py-2 text-sm md:text-base font-medium"
                          : "px-3 py-1.5 text-sm"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
