import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { WebinarList } from "@/components/webinaires/WebinarList";

export const metadata: Metadata = {
  title: "Webinaires & ateliers",
  description: "Ateliers d’écriture et rencontres — Fatou Kiné Thiam.",
};

export default function WebinarsPage() {
  return (
    <Section className="pb-24 md:pb-32">
      <div className="mb-14">
        <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
          Rencontres
        </p>
        <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
          Webinaires & ateliers
        </h1>
        <p className="mt-6 max-w-2xl text-foreground/55">
          Des cadres intimes pour écrire, relire et dialoguer — en ligne ou à
          Dakar.
        </p>
      </div>
      <WebinarList />
    </Section>
  );
}
