import { GraduationCap, Award, Users, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "5 anos",
    description: "de experiência em desenvolvimento web e ecossistemas .NET, Angular e React",
  },
  {
    icon: Users,
    title: "3 anos",
    description: "de liderança técnica em projetos de sistemas críticos",
  },
  {
    icon: GraduationCap,
    title: "Ensino",
    description: "Professor de programação para +160 alunos em Node.js, PHP, C#, JavaScript",
  },
  {
    icon: Award,
    title: "Pesquisa",
    description: "Iniciação científica na UFMS com foco em inovação tecnológica",
  },
];

const certifications = [
  "Programação .NET: Avançado – IFMG",
  "Design Centrado no Usuário (UX) – PUCRS",
  "Lean Six Sigma Yellow Belt – FM2S",
  "Desenvolvimento Web – IFSP",
  "UX Design – Google",
];

export function About() {
  return (
    <section id="sobre" className="px-6 py-24 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-sm text-accent mb-2">// SOBRE</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Edson Argemon<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Engenheiro de Software com forte atuação em sistemas críticos e de
              alto impacto. Minha experiência vai além do código: entendo o
              problema de negócio, projeto a arquitetura e entrego soluções que
              funcionam em produção.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nos últimos anos, trabalhei com sistemas governamentais processando
              milhões de registros, infraestrutura cloud em AWS e Azure, e
              automação inteligente de processos. Tenho diferencial de atuação na
              área de ensino e pesquisa tecnológica na UFMS.
            </p>

            {/* Quote */}
            <blockquote className="border-l-2 border-accent pl-4 py-2 my-8">
              <p className="text-foreground/80 italic">
                &quot;Não escrevo código só pra funcionar. Escrevo para escalar,
                manter e resolver problemas reais.&quot;
              </p>
            </blockquote>

            {/* Languages */}
            <div className="flex gap-6 font-mono text-sm">
              <div>
                <span className="text-muted-foreground">Espanhol:</span>{" "}
                <span className="text-foreground">Fluente</span>
              </div>
              <div>
                <span className="text-muted-foreground">Inglês:</span>{" "}
                <span className="text-foreground">Avançado</span>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-4 bg-card border border-border rounded-lg"
                >
                  <highlight.icon className="w-5 h-5 text-accent mb-2" />
                  <h3 className="font-bold text-lg">{highlight.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="p-4 bg-card border border-border rounded-lg">
              <h3 className="font-mono text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                Certificações
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert, i) => (
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
                Formação
              </h3>
              <p className="text-sm font-medium">Bacharelado em Engenharia de Software</p>
              <p className="text-xs text-muted-foreground">
                Centro Universitário da Grande Dourados | 2019 – 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
