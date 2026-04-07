import Image from "next/image";
import type { Metadata } from "next";
import { site, authorPortrait, timeline } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Parcours, mission et voix littéraire de Fatou Kiné Thiam — Plume d’Or.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative border-b border-border/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10 lg:py-24">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
              À propos
            </p>
            <h1 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              {site.name}
            </h1>
            <p className="mt-6 max-w-lg font-serif text-xl italic leading-relaxed text-foreground/70">
              {site.tagline}
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-sm border border-border">
              <Image
                src={authorPortrait}
                alt={site.name}
                fill
                className="object-cover grayscale-[20%]"
                sizes="(max-width: 1024px) 90vw, 28rem"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Section>
        <FadeIn>
          <div className="prose prose-invert mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl text-foreground md:text-3xl">
              Une voix entre mémoire et présence
            </h2>
            <div className="mt-8 space-y-6 text-base leading-[1.9] text-foreground/75">
              <p>
                Née au Sénégal, j’ai grandi entre les bruits du monde et le
                silence des histoires qu’on ne raconte pas à voix haute. Écrire
                est devenu pour moi un acte de fidélité : aux blessures
                apprivoisées, aux femmes qui tiennent debout sans fanfare, aux
                mots qui refusent d’être décoratifs.
              </p>
              <p>
                Mon travail explore la chair des sentiments — la honte, la
                tendresse, la colère douce — sans spectacle. Je crois qu’une
                phrase juste peut ouvrir une porte qu’on avait fermée depuis
                longtemps.
              </p>
              <p>
                « Autour des épines » est le fruit d’années de nuits blanches et
                de relectures exigeantes. Ce livre ne promet pas le réconfort
                facile : il propose une beauté exigeante, celle qui naît quand
                on accepte de regarder en face.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="border-t border-border/30 bg-muted">
        <FadeIn>
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">
            Mission
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
            Offrir une littérature précise et sensible, accessible sans être
            simpliste ; créer des espaces — livres, ateliers, rencontres — où la
            parole intime devient lien plutôt qu’exposition.
          </p>
        </FadeIn>
      </Section>

      <Section className="border-t border-border/30 pb-24 md:pb-32">
        <FadeIn>
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">
            Fil du temps
          </h2>
          <ol className="mt-12 space-y-10 border-l border-gold/25 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[33px] top-1.5 h-2 w-2 rounded-full bg-gold" />
                <p className="text-xs uppercase tracking-[0.25em] text-gold/80">
                  {t.year}
                </p>
                <p className="mt-2 text-foreground/80">{t.label}</p>
              </li>
            ))}
          </ol>
        </FadeIn>
      </Section>
    </>
  );
}
