"use client";

import { CheckCircle2, Clock, Users, Database, Zap, Server } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const icons = [Users, Clock, Zap, Database, Server, CheckCircle2];

export function Authority() {
  const { t } = useI18n();
  const a = t.authority;

  return (
    <section className="px-6 py-24 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent mb-2">{a.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {a.title}<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">{a.subtitle}</p>
        </div>

        {/* Achievement grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {a.achievements.map((achievement, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  <div className="text-right">
                    <span className="text-2xl md:text-3xl font-bold text-accent">
                      {achievement.metric}
                    </span>
                    <span className="block text-xs text-muted-foreground font-mono">
                      {achievement.label}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-foreground mb-2">{achievement.description}</p>
                <p className="text-xs text-muted-foreground font-mono">
                  → {achievement.highlight}
                </p>
              </div>
            );
          })}
        </div>

        {/* Production log */}
        <div className="mt-12 code-block">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs font-mono">{a.log.filename}</span>
          </div>
          <div className="space-y-1 text-xs md:text-sm">
            {a.log.lines.map((line, i) => (
              <p key={i} className="log-line">
                <span className="log-timestamp">{line.time}</span>{" "}
                <span className={line.type === "SUCCESS" ? "log-success" : "log-info"}>
                  [{line.type}]
                </span>{" "}
                {line.msg}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
