import { Terminal, ArrowDown, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-20 lg:px-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Terminal header */}
        <div className="mb-8 flex items-center gap-3 text-muted-foreground font-mono text-sm">
          <Terminal className="w-4 h-4 text-accent" />
          <span className="text-accent">~/edson-argemon</span>
          <span className="text-border">|</span>
          <span>engenheiro de software</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-balance">
          Resolvo problemas complexos de TI
          <span className="text-accent">.</span>
          <br />
          <span className="text-muted-foreground">
            Do hardware ao software em produção.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          Engenharia de software com foco em{" "}
          <span className="text-foreground">sistemas críticos</span>,{" "}
          <span className="text-foreground">performance</span> e{" "}
          <span className="text-foreground">automação inteligente</span>.
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap gap-6 md:gap-10 mb-12 font-mono text-sm">
          <div className="flex items-center gap-2">
            <span className="text-accent">5</span>
            <span className="text-muted-foreground">anos de experiência</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">3</span>
            <span className="text-muted-foreground">anos de liderança</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">140k+</span>
            <span className="text-muted-foreground">usuários impactados</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors glow-accent"
          >
            Ver projetos
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-muted transition-colors"
          >
            Falar comigo
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=19509EDXrr8cP_DuLJwKJVbXndJ1yzB1E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-muted transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  );
}
