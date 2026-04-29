"use client";

import { Layers, Server, Layout, Cloud, Database, Brain } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const categoryIcons = [Layers, Server, Layout, Cloud, Database, Brain];

export function Stack() {
  const { t } = useI18n();
  const s = t.stack;

  return (
    <section className="px-6 py-24 lg:px-20 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent mb-2">{s.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {s.title}<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">{s.subtitle}</p>
        </div>

        {/* Stack grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {s.categories.map((category, index) => {
            const Icon = categoryIcons[index];
            return (
              <div
                key={index}
                className="p-6 bg-background border border-border rounded-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                  <h3 className="font-bold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground font-mono flex items-center gap-2"
                    >
                      <span className="text-accent">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
