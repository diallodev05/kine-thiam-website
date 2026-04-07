import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { BlogGrid } from "@/components/blog/BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description: "Lettres, réflexions et poèmes — Fatou Kiné Thiam.",
};

export default function BlogPage() {
  return (
    <Section className="pb-24 md:pb-32">
      <div className="mb-14">
        <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
          Blog
        </p>
        <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
          Lettres & textes
        </h1>
        <p className="mt-6 max-w-xl text-foreground/55">
          Pensées, poèmes et fragments — une chambre d’écho pour celles qui
          lisent avec le cœur.
        </p>
      </div>
      <BlogGrid />
    </Section>
  );
}
