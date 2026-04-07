import Image from "next/image";
import type { Metadata } from "next";
import { book, reviews } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Livre",
  description: `« ${book.title} » — roman de Fatou Kiné Thiam.`,
};

const themes = [
  "Mémoire et transmission",
  "Corps et résilience",
  "Silence et parole",
  "Beauté après l’épreuve",
];

export default function BookPage() {
  return (
    <>
      <section className="border-b border-border/30">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10 lg:py-24">
          <FadeIn>
            <div className="relative mx-auto aspect-[3/4] max-w-md">
              <div className="absolute -inset-3 rounded-sm bg-gold/10 blur-2xl" />
              <div className="relative h-full overflow-hidden rounded-sm border border-border shadow-2xl">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 90vw, 28rem"
                />
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
              {book.subtitle}
            </p>
            <h1 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              {book.title}
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-foreground/70">
              {book.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={book.purchaseUrl}>Acheter le livre</Button>
              <Button href="#extrait" variant="secondary">
                Lire un extrait
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section>
        <FadeIn>
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">
            Synopsis
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-[1.9] text-foreground/75">
            Dans une ville qui respire comme un corps blessé, une femme traverse
            les épines du passé sans se piéger dans la plainte. Entre lettres
            non envoyées et rencontres fugaces, le roman tisse une cartographie
            intime du deuil et de la renaissance. Chaque chapitre avance comme
            une vague : douce, puis plus nette, jusqu’à ce que la vérité trouve
            sa forme.
          </p>
        </FadeIn>
      </Section>

      <Section className="border-t border-border/30 bg-muted">
        <FadeIn>
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">
            Thèmes
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {themes.map((t) => (
              <li
                key={t}
                className="border border-border bg-card px-6 py-5 text-sm text-foreground/80"
              >
                {t}
              </li>
            ))}
          </ul>
        </FadeIn>
      </Section>

      <Section id="extrait" className="border-t border-border/30 scroll-mt-28">
        <FadeIn>
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">
            Extrait
          </h2>
          <blockquote className="mt-10 border-l-2 border-gold/60 pl-8 font-serif text-xl italic leading-relaxed text-gold/95 md:text-2xl">
            {book.excerpt}
          </blockquote>
        </FadeIn>
      </Section>

      <Section className="border-t border-border/30">
        <FadeIn>
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">
            Lectrices & lecteurs
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {reviews.map((r) => (
              <Card key={r.id}>
                <p className="font-serif text-lg leading-relaxed text-foreground/90">
                  « {r.quote} »
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-foreground/45">
                  {r.author} — {r.role}
                </p>
              </Card>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section className="border-t border-border/30 pb-24 md:pb-32">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 rounded-sm border border-gold/25 bg-gold-dim px-8 py-12 md:flex-row md:items-center md:px-14">
            <div>
              <h2 className="font-serif text-2xl text-foreground md:text-3xl">
                Offrir le livre
              </h2>
              <p className="mt-3 max-w-xl text-sm text-foreground/65">
                Librairies partenaires et commande en ligne — faites vivre une
                voix qui mérite d’être partagée.
              </p>
            </div>
            <Button href={book.purchaseUrl}>Commander</Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
