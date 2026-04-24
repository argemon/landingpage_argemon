import { Mail, Linkedin, Phone, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="px-6 py-24 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-accent mb-2">// CONTATO</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos conversar<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Interessado em trabalhar junto ou tem um projeto em mente? Entre em
            contato direto.
          </p>
        </div>

        {/* Contact options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:edson_argemon@hotmail.com"
            className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-accent" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">Email</p>
                <p className="text-sm">edson_argemon@hotmail.com</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </a>

          <a
            href="https://linkedin.com/in/edson-argemon"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <Linkedin className="w-5 h-5 text-accent" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">LinkedIn</p>
                <p className="text-sm">in/edson-argemon</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </a>

          <a
            href="tel:+5567992221520"
            className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-accent" />
              <div>
                <p className="font-mono text-xs text-muted-foreground">Telefone</p>
                <p className="text-sm">(67) 99222-1520</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </a>
        </div>

        {/* Terminal CTA */}
        <div className="code-block">
          <div className="flex items-center gap-2 mb-4 text-muted-foreground">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs font-mono">terminal</span>
          </div>
          <div className="space-y-2 text-sm">
            <p className="terminal-line">whoami</p>
            <p className="text-foreground">Edson Argemon - Engenheiro de Software</p>
            <p className="terminal-line">cat disponibilidade.txt</p>
            <p className="text-foreground">
              Disponível para projetos, consultoria e oportunidades.
            </p>
            <p className="terminal-line">
              <span className="animate-pulse">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
