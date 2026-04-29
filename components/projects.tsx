"use client";

import { GitBranch, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const projectStacks = [
  ["C#", "ASP.NET", "PL/SQL", "SQL Server", "Oracle"],
  [".NET Core", "C#", "React", "Docker", "RabbitMQ", "AWS ECS", "SQL Server"],
  ["C#", "Angular", "TypeScript", "SQL Server", "REST API"],
];

export function Projects() {
  const { t } = useI18n();
  const p = t.projects;

  return (
    <section id="projetos" className="px-6 py-24 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent mb-2">{p.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {p.title}<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">{p.subtitle}</p>
        </div>

        {/* Projects list */}
        <div className="space-y-12">
          {p.items.map((project, idx) => (
            <article
              key={project.id}
              className="group border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
            >
              {/* Project header */}
              <div className="p-6 md:p-8 bg-card border-b border-border">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="font-mono text-accent text-sm">#{project.id}</span>
                    <h3 className="text-xl md:text-2xl font-bold mt-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{project.client}</p>
                  </div>
                  <GitBranch className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </div>
                <p className="text-foreground/80">{project.context}</p>
              </div>

              {/* Project details */}
              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                {/* Problem & Solution */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                      {p.labels.problem}
                    </h4>
                    <p className="text-sm text-foreground/80">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                      {p.labels.solution}
                    </h4>
                    <p className="text-sm text-foreground/80">{project.solution}</p>
                  </div>
                </div>

                {/* Stack & Results */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                      {p.labels.stack}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projectStacks[idx].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-xs font-mono rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                      {p.labels.results}
                    </h4>
                    <ul className="space-y-1">
                      {project.results.map((result, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                          <ArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
