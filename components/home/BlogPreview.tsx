import Link from "next/link";
import { posts } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

const latest = posts.slice(0, 3);

export function BlogPreview() {
  return (
    <Section className="border-t border-border/30">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
            Journal
          </p>
          <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
            Derniers textes
          </h2>
        </div>
        <Link
          href="/blog"
          className="text-xs uppercase tracking-[0.25em] text-gold transition-colors hover:text-foreground"
        >
          Voir tout le blog →
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {latest.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.08}>
            <Card>
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                {post.category}
              </p>
              <h3 className="mt-4 font-serif text-xl text-foreground">
                {post.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/55">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-foreground"
              >
                Lire la suite
              </Link>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
