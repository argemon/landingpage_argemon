import { Hero } from "@/components/hero";
import { Authority } from "@/components/authority";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Authority />
      <Projects />
      <Stack />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
