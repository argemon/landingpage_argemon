import { ExternalLink, GitBranch, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Sistema de Folha de Pagamento",
    client: "Secretaria de Administração - SAD/MS",
    context:
      "Sistema crítico que processa a folha de pagamento de mais de 140 mil funcionários públicos do estado, com cálculos complexos de impostos e benefícios.",
    problem:
      "Processamento manual consumia 160+ horas/mês e apresentava alta taxa de erros em cálculos fiscais sensíveis.",
    solution:
      "Desenvolvi procedures e pacotes PL/SQL otimizados, implementei funções de auditoria e automatizei validações no sistema ASP.NET Web Forms.",
    stack: ["C#", "ASP.NET", "PL/SQL", "SQL Server", "Oracle"],
    results: [
      "20% menos tempo de processamento",
      "60% menos erros",
      "160h/mês automatizadas",
      "100% conformidade com Receita Federal",
    ],
  },
  {
    id: "02",
    title: "Plataforma de Análise de Preços",
    client: "SEFAZ/MS",
    context:
      "Sistema de gestão e análise de preços para medição de índices econômicos estaduais, processando milhões de registros de notas fiscais.",
    problem:
      "Coleta manual de dados levava 4+ horas diárias e não garantia atualização consistente das informações.",
    solution:
      "Arquitetei solução distribuída com web scraping automatizado, filas de mensagens e APIs REST, seguindo ciclo completo de desenvolvimento.",
    stack: [".NET Core", "C#", "React", "Docker", "RabbitMQ", "AWS ECS", "SQL Server"],
    results: [
      "10M+ registros processados",
      "4h → 5min de processamento",
      "70% menos trabalho manual",
      "100+ usuários simultâneos",
    ],
  },
  {
    id: "03",
    title: "Sistema de Gestão de Solicitações",
    client: "Secretaria de Administração - SAD/MS",
    context:
      "Sistema de distribuição automatizada de demandas internas com relatórios de performance e rastreamento completo.",
    problem:
      "Solicitações se perdiam, não havia métricas de atendimento e a produtividade da equipe era difícil de medir.",
    solution:
      "Desenvolvi sistema completo em C# com frontend Angular, incluindo algoritmo de distribuição e dashboard de performance com score.",
    stack: ["C#", "Angular", "TypeScript", "SQL Server", "REST API"],
    results: [
      "40 solicitações/mês automatizadas",
      "100% rastreabilidade",
      "80% mais produtividade",
      "99% uptime",
    ],
  },
];

export function Projects() {
  return (
    <section id="projetos" className="px-6 py-24 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent mb-2">// PROJETOS</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sistemas em produção<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Cada projeto representa um problema real resolvido com engenharia de
            software de verdade.
          </p>
        </div>

        {/* Projects list */}
        <div className="space-y-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
            >
              {/* Project header */}
              <div className="p-6 md:p-8 bg-card border-b border-border">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="font-mono text-accent text-sm">
                      #{project.id}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold mt-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {project.client}
                    </p>
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
                      Problema
                    </h4>
                    <p className="text-sm text-foreground/80">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                      Solução
                    </h4>
                    <p className="text-sm text-foreground/80">{project.solution}</p>
                  </div>
                </div>

                {/* Stack & Results */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                      Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
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
                      Resultados
                    </h4>
                    <ul className="space-y-1">
                      {project.results.map((result, i) => (
                        <li
                          key={i}
                          className="text-sm flex items-center gap-2"
                        >
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
