import Image from "next/image";
import { book } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function FeaturedBook() {
  return (
    <Section id="livre" className="border-t border-border/30 bg-muted">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
            Roman
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            {book.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/70">
            {book.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/livre#extrait">Lire un extrait</Button>
            <Button href={book.purchaseUrl} variant="secondary">
              Acheter maintenant
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md">
            <div className="absolute -inset-4 rounded-sm bg-gradient-to-br from-gold/20 via-transparent to-transparent blur-2xl" />
            <div className="relative h-full overflow-hidden rounded-sm border border-border shadow-2xl">
              <Image
                src={book.coverImage}
                alt={`Couverture — ${book.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 28rem"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
