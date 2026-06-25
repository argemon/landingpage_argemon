import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";
import { GptFloatButton } from "@/components/gpt-float-button";
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
  metadataBase: new URL("https://edsonargemon.vercel.app"),
  openGraph: {
    title: "Edson Argemon | Engenheiro de Software",
    description:
      "Engenheiro de Software especializado em sistemas críticos e alta performance",
    type: "website",
    locale: "pt_BR",
    url: "https://edsonargemon.vercel.app",
    siteName: "Edson Argemon",
    images: [
      {
        url: "https://edsonargemon.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Edson Argemon - Engenheiro de Software",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edson Argemon | Engenheiro de Software",
    description:
      "Engenheiro de Software especializado em sistemas críticos e alta performance",
    images: ["https://edsonargemon.vercel.app/og-image.png"],
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
      <head>
        <meta property="og:image" content="https://edsonargemon.vercel.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="image" property="og:image" content="https://edsonargemon.vercel.app/og-image.png" />
      </head>
      <body className="min-h-screen antialiased">
        <I18nProvider>
          <LanguageSwitcher />
          {children}
          <GptFloatButton />
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
