"use client";

import { useI18n } from "@/lib/i18n";

const hrefs = ["#projetos", "#sobre", "#contato"];

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="px-6 py-8 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-muted-foreground">
          <span className="text-accent">&gt;</span> edson-argemon
          <span className="text-border mx-2">|</span>
          {new Date().getFullYear()}
        </div>
        <nav className="flex items-center gap-6 text-sm">
          {t.footer.links.map((label, i) => (
            <a
              key={i}
              href={hrefs[i]}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
