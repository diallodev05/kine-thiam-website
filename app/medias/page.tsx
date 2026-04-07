import Image from "next/image";
import type { Metadata } from "next";
import { galleryImages, mediaVideos, pressMentions } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Médias",
  description: "Vidéos, presse et galerie — Fatou Kiné Thiam.",
};

export default function MediaPage() {
  return (
    <>
      <Section className="pb-12 pt-4 md:pt-6">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
            Médias
          </p>
          <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Images & voix
          </h1>
          <p className="mt-6 max-w-2xl text-foreground/55">
            Entretiens, plateaux télévisés et moments capturés — la littérature
            hors des pages.
          </p>
        </FadeIn>
      </Section>

      <Section className="border-t border-border/30 bg-muted">
        <FadeIn>
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">
            Vidéos
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {mediaVideos.map((v) => (
              <article
                key={v.id}
                className="group overflow-hidden rounded-sm border border-border bg-background"
              >
                <div className="relative aspect-video">
                  <Image
                    src={v.thumb}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-sm bg-black/50 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/80">
                    {v.duration}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/40">
                    {v.source}
                  </p>
                  <h3 className="mt-2 font-serif text-lg text-foreground">
                    {v.title}
                  </h3>
                  <button
                    type="button"
                    className="mt-4 text-xs uppercase tracking-[0.2em] text-gold hover:text-foreground"
                  >
                    Voir (démo)
                  </button>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section className="border-t border-border/30">
        <FadeIn>
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">
            Presse
          </h2>
          <ul className="mt-10 space-y-6">
            {pressMentions.map((p) => (
              <li
                key={p.id}
                className="flex flex-col gap-2 border-b border-border/30 pb-6 last:border-0 md:flex-row md:items-baseline md:justify-between"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold/70">
                    {p.outlet}
                  </p>
                  <a
                    href={p.url}
                    className="mt-1 block font-serif text-lg text-foreground hover:text-gold"
                  >
                    {p.title}
                  </a>
                </div>
                <time className="text-sm text-foreground/40">{p.date}</time>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Section>

      <Section className="border-t border-border/30 pb-24 md:pb-32">
        <FadeIn>
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">
            Galerie
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border"
              >
                <Image
                  src={src}
                  alt={`Galerie ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
