export function Footer() {
  return (
    <footer className="px-6 py-8 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-muted-foreground">
          <span className="text-accent">&gt;</span> edson-argemon
          <span className="text-border mx-2">|</span>
          {new Date().getFullYear()}
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a
            href="#projetos"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projetos
          </a>
          <a
            href="#sobre"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contato
          </a>
        </nav>
      </div>
    </footer>
  );
}
