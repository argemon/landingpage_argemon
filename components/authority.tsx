import { CheckCircle2, Clock, Users, Database, Zap, Server } from "lucide-react";

const achievements = [
  {
    icon: Users,
    metric: "140.000+",
    label: "funcionários",
    description: "Sistema de folha de pagamento processando dados mensalmente",
    highlight: "100% de precisão nos cálculos fiscais",
  },
  {
    icon: Clock,
    metric: "-20%",
    label: "tempo de processamento",
    description: "Otimização em sistema ASP.NET com C#",
    highlight: "160h/mês economizadas em validações",
  },
  {
    icon: Zap,
    metric: "60%",
    label: "redução de erros",
    description: "Automação de validações de cálculos complexos",
    highlight: "IR, e-Social, INSS, FGTS, férias",
  },
  {
    icon: Database,
    metric: "10M+",
    label: "registros processados",
    description: "Sistema de análise de preços para SEFAZ/MS",
    highlight: "De 4 horas para 5 minutos",
  },
  {
    icon: Server,
    metric: "99%",
    label: "uptime garantido",
    description: "Gestão de infraestrutura crítica em cloud",
    highlight: "AWS + Azure + monitoramento 24/7",
  },
  {
    icon: CheckCircle2,
    metric: "100%",
    label: "solicitações rastreáveis",
    description: "Sistema de gestão de demandas com score",
    highlight: "80% mais produtividade na equipe",
  },
];

export function Authority() {
  return (
    <section className="px-6 py-24 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent mb-2">// PROVA DE AUTORIDADE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Impacto mensurável<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Números reais de sistemas em produção. Cada métrica representa um
            problema complexo resolvido.
          </p>
        </div>

        {/* Achievement grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <achievement.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                <div className="text-right">
                  <span className="text-2xl md:text-3xl font-bold text-accent">
                    {achievement.metric}
                  </span>
                  <span className="block text-xs text-muted-foreground font-mono">
                    {achievement.label}
                  </span>
                </div>
              </div>
              <p className="text-sm text-foreground mb-2">
                {achievement.description}
              </p>
              <p className="text-xs text-muted-foreground font-mono">
                → {achievement.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Code snippet showing real impact */}
        <div className="mt-12 code-block">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs font-mono">production_logs.txt</span>
          </div>
          <div className="space-y-1 text-xs md:text-sm">
            <p className="log-line">
              <span className="log-timestamp">[2024-03-15 08:00:01]</span>{" "}
              <span className="log-success">[SUCCESS]</span> Folha de pagamento
              processada: 142.847 funcionários
            </p>
            <p className="log-line">
              <span className="log-timestamp">[2024-03-15 08:00:02]</span>{" "}
              <span className="log-info">[INFO]</span> Cálculos fiscais: IR,
              INSS, FGTS - 100% validados
            </p>
            <p className="log-line">
              <span className="log-timestamp">[2024-03-15 08:00:03]</span>{" "}
              <span className="log-success">[SUCCESS]</span> Tempo de
              processamento: 3m 42s (meta: 5m)
            </p>
            <p className="log-line">
              <span className="log-timestamp">[2024-03-15 08:00:04]</span>{" "}
              <span className="log-info">[INFO]</span> Relatórios e-Social gerados
              e enviados
            </p>
            <p className="log-line">
              <span className="log-timestamp">[2024-03-15 08:00:05]</span>{" "}
              <span className="log-success">[SUCCESS]</span> Pipeline completo.
              Zero erros críticos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
