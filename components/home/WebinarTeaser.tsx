import Link from "next/link";
import { featuredWebinar } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function WebinarTeaser() {
  const w = featuredWebinar;

  return (
    <Section className="border-t border-border/30 bg-gradient-to-b from-transparent via-gold/[0.03] to-transparent">
      <FadeIn>
        <div className="relative overflow-hidden rounded-sm border border-border bg-card p-8 md:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
                Prochain atelier
              </p>
              <h2 className="mt-3 font-serif text-2xl text-foreground md:text-3xl">
                {w.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/65">
                {w.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/50">
                <li>{formatDate(w.date)}</li>
                <li>
                  {w.time} · {w.location}
                </li>
                <li className="text-gold/90">{w.price}</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <Button href="/webinaires">Réserver ma place</Button>
              <Link
                href="/webinaires"
                className="text-center text-xs uppercase tracking-[0.2em] text-foreground/45 hover:text-gold lg:text-right"
              >
                Voir tous les événements
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
