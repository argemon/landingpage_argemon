import { Layers, Server, Layout, Cloud, Database, Brain } from "lucide-react";

const stackCategories = [
  {
    icon: Layers,
    title: "Arquitetura",
    items: [
      "Clean Architecture",
      "Sistemas Distribuídos",
      "Microsserviços",
      "REST APIs",
      "Event-Driven",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    items: [
      ".NET Core (Avançado)",
      "C# (Avançado)",
      "ASP.NET",
      "Node.js",
      "Java",
      "PHP",
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5/CSS3",
      "Bootstrap",
    ],
  },
  {
    icon: Cloud,
    title: "Infraestrutura",
    items: [
      "AWS (EC2, RDS, S3, ECS)",
      "Azure Cloud",
      "Docker",
      "RabbitMQ",
      "Git/GitHub",
    ],
  },
  {
    icon: Database,
    title: "Banco de Dados",
    items: [
      "SQL Server",
      "PL/SQL (Avançado)",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "DynamoDB",
    ],
  },
  {
    icon: Brain,
    title: "IA & Automação",
    items: [
      "Integração de IA em sistemas",
      "Automação inteligente",
      "Web Scraping",
      "Processamento de dados",
      "Pipelines automatizados",
    ],
  },
];

export function Stack() {
  return (
    <section className="px-6 py-24 lg:px-20 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent mb-2">// STACK</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Domínio técnico<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Engenharia ponta a ponta. Da arquitetura ao deploy em produção.
          </p>
        </div>

        {/* Stack grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-background border border-border rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-5 h-5 text-accent" />
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
          ))}
        </div>

        {/* Architecture diagram simulation */}
        <div className="mt-12 p-6 bg-background border border-border rounded-lg">
          <p className="font-mono text-xs text-muted-foreground mb-4">
            // exemplo de arquitetura - sistema SEFAZ
          </p>
          <div className="overflow-x-auto">
            <pre className="text-xs md:text-sm font-mono text-muted-foreground">
{`┌────────────────┐      ┌────────────────┐      ┌────────────────┐
│    Frontend    │─────▶│    REST API    │─────▶│    Service     │
│     React      │      │   .NET Core    │      │     Layer      │
└────────────────┘      └────────────────┘      └───────┬────────┘
                                                        │
                  ┌─────────────────────────────────────┴─────────────────────────────────────┐
                  │                                                                           │
                  ▼                                                                           ▼
┌────────────────┐      ┌────────────────┐      ┌────────────────┐
│    RabbitMQ    │─────▶│     Worker     │─────▶│   SQL Server   │
│     Queue      │      │    Service     │      │    Database    │
└───────┬────────┘      └────────────────┘      └────────────────┘
        │
        ▼
┌────────────────┐
│  Web Scraper   │
│    Service     │
└────────────────┘`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
