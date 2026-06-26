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
  title: "Edson Argemon | Senior Software Engineer · Especialista Backend .NET",
  description:
    "Senior Software Engineer especialista em Backend .NET. Arquitetura de software, APIs, microsserviços e AWS em sistemas críticos usados por milhares de usuários. Experiência Full Stack com React e Angular.",
  keywords: [
    "senior software engineer",
    "especialista backend .NET",
    "engenheiro de software",
    "arquitetura de software",
    "microsserviços",
    "APIs",
    ".NET",
    "C#",
    "ASP.NET",
    "SQL Server",
    "AWS",
    "React",
    "Angular",
    "sistemas críticos",
  ],
  authors: [{ name: "Edson Argemon" }],
  metadataBase: new URL("https://edsonargemon.vercel.app"),
  openGraph: {
    title: "Edson Argemon | Senior Software Engineer · Especialista Backend .NET",
    description:
      "Senior Software Engineer especialista em Backend .NET — arquitetura, APIs, microsserviços e AWS em sistemas críticos.",
    type: "website",
    locale: "pt_BR",
    url: "https://edsonargemon.vercel.app",
    siteName: "Edson Argemon",
    images: [
      {
        url: "https://edsonargemon.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Edson Argemon - Senior Software Engineer, Especialista Backend .NET",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edson Argemon | Senior Software Engineer · Especialista Backend .NET",
    description:
      "Senior Software Engineer especialista em Backend .NET — arquitetura, APIs, microsserviços e AWS.",
    images: ["https://edsonargemon.vercel.app/og-image.png"],
  },
};

// Structured Data (Schema.org Person) para melhor SEO e rich results
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Edson Argemon",
  jobTitle: "Senior Software Engineer",
  description:
    "Senior Software Engineer especialista em Backend .NET, com experiência em arquitetura de software, APIs, microsserviços e AWS.",
  url: "https://edsonargemon.vercel.app",
  email: "mailto:edson_argemon@hotmail.com",
  sameAs: ["https://linkedin.com/in/edson-argemon"],
  knowsAbout: [
    ".NET",
    "C#",
    "ASP.NET",
    "Arquitetura de Software",
    "Microsserviços",
    "APIs REST",
    "SQL Server",
    "AWS",
    "React",
    "Angular",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
