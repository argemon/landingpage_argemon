"use client";

import { useI18n } from "@/lib/i18n";

export function AboutShort() {
  const { t } = useI18n();
  const a = t.aboutShort;

  return (
    <section id="sobre-curto" className="px-6 py-24 lg:px-20 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-sm text-accent mb-2">{a.tag}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {a.title}
          <span className="text-accent">.</span>
        </h2>
        <div className="space-y-5">
          <p className="text-lg text-foreground/90 leading-relaxed">{a.text1}</p>
          <p className="text-muted-foreground leading-relaxed">{a.text2}</p>
        </div>
      </div>
    </section>
  );
}
