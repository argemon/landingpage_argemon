"use client";

import { GraduationCap, Award, Users, Code2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const highlightIcons = [Code2, Users, GraduationCap, Award];

export function About() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <section id="sobre" className="px-6 py-24 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent mb-2">{a.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {a.title}<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">{a.bio1}</p>
            <p className="text-muted-foreground leading-relaxed">{a.bio2}</p>

            {/* Quote */}
            <blockquote className="border-l-2 border-accent pl-4 py-2 my-8">
              <p className="text-foreground/80 italic">&quot;{a.quote}&quot;</p>
            </blockquote>

            {/* Languages */}
            <div className="flex gap-6 font-mono text-sm">
              <div>
                <span className="text-muted-foreground">{a.languages.label1}</span>{" "}
                <span className="text-foreground">{a.languages.val1}</span>
              </div>
              <div>
                <span className="text-muted-foreground">{a.languages.label2}</span>{" "}
                <span className="text-foreground">{a.languages.val2}</span>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {a.highlights.map((highlight, index) => {
                const Icon = highlightIcons[index];
                return (
                  <div key={index} className="p-4 bg-card border border-border rounded-lg">
                    <Icon className="w-5 h-5 text-accent mb-2" />
                    <h3 className="font-bold text-lg">{highlight.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{highlight.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Certifications */}
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                {a.certsLabel}
              </h3>
              <ul className="space-y-2">
                {a.certs.map((cert, i) => (
                  <li key={i} className="text-sm flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                {a.educationLabel}
              </h3>
              <p className="text-sm font-medium">{a.educationTitle}</p>
              <p className="text-xs text-muted-foreground">{a.educationInstitution}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
