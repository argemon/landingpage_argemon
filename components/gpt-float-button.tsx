"use client";

import { useI18n } from "@/lib/i18n";
import { Bot } from "lucide-react";

const GPT_URL =
  "https://chatgpt.com/g/g-6a26d95074f48191a26959cda6276df6-edson-argemon-meu-eu-virtual";

export function GptFloatButton() {
  const { t } = useI18n();

  return (
    <a
      href={GPT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.gpt.ariaLabel}
      title={t.gpt.tooltip}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full bg-accent px-4 py-4 text-accent-foreground shadow-lg transition-all hover:gap-2.5 hover:pr-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <Bot className="h-6 w-6" aria-hidden="true" />
        <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-foreground opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-foreground" />
        </span>
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium opacity-0 transition-all duration-300 group-hover:max-w-[220px] group-hover:opacity-100">
        {t.gpt.label}
      </span>
    </a>
  );
}
