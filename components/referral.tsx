import { Gift, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export function Referral() {
  const benefits = [
    "Você indica uma empresa ou contato interessado",
    "Eu entro em contato e apresento meus serviços",
    "Se fechar contrato, você ganha um salário meu",
  ];

  return (
    <section id="indicacao" className="px-6 py-24 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-accent mb-2">// PROGRAMA DE INDICAÇÃO</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Indique e ganhe<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Conhece alguém que precisa de um engenheiro de software? Indique e seja recompensado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* How it works */}
          <div className="p-8 bg-card border border-border rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold">Como funciona</h3>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent font-mono text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="p-8 bg-gradient-to-br from-accent/10 to-transparent border border-accent/30 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">Benefícios</h3>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Um salário meu por indicação convertida
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Sem limite de indicações
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Processo simples e transparente
                </li>
              </ul>
            </div>
            <a
              href="https://wa.me/5567992221520?text=Ol%C3%A1+Edson,+tenho+uma+indica%C3%A7%C3%A3o+para+voc%C3%AA!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors glow-accent"
            >
              Fazer uma indicação
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
