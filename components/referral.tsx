"use client";

import { Gift, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Referral() {
  const { t } = useI18n();
  const r = t.referral;

  return (
    <section id="indicacao" className="px-6 py-24 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-accent mb-2">{r.tag}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {r.title}<span className="text-accent">.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">{r.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* How it works */}
          <div className="p-8 bg-card border border-border rounded-lg">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold">{r.howTitle}</h3>
            </div>
            <div className="space-y-4">
              {r.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent font-mono text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="p-8 bg-gradient-to-br from-accent/10 to-transparent border border-accent/30 rounded-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">{r.benefitsTitle}</h3>
              </div>
              <ul className="space-y-3 mb-8">
                {r.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://wa.me/5567992221520?text=Ol%C3%A1+Edson,+tenho+uma+indica%C3%A7%C3%A3o+para+voc%C3%AA!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors glow-accent"
            >
              {r.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
