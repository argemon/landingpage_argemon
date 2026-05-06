import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Edson Argemon | Engenheiro de Software",
  description:
    "Engenheiro de Software com 5 anos de experiência em sistemas críticos, arquitetura distribuída e automação. Especialista em .NET, C#, React e infraestrutura cloud.",
  keywords: [
    "engenheiro de software",
    "desenvolvedor",
    ".NET",
    "C#",
    "React",
    "Angular",
    "AWS",
    "Azure",
    "sistemas críticos",
  ],
  authors: [{ name: "Edson Argemon" }],
  openGraph: {
    title: "Edson Argemon | Engenheiro de Software",
    description:
      "Engenheiro de Software especializado em sistemas críticos e alta performance",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="min-h-screen antialiased">
        <I18nProvider>
          <LanguageSwitcher />
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
