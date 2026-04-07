import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, posts, site } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { ShareRow } from "@/components/blog/ShareRow";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const base =
    typeof process.env.NEXT_PUBLIC_SITE_URL === "string"
      ? process.env.NEXT_PUBLIC_SITE_URL
      : "";
  const url = `${base}/blog/${post.slug}`;

  return (
    <article>
      <Section className="pb-8 pt-4 md:pt-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
            {post.category}
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-8 text-sm text-foreground/45">
            {site.name} ·{" "}
            {new Date(post.date).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readTime}
          </p>
        </header>
      </Section>

      <Section contained={false} className="py-0 pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          {post.highlight ? (
            <blockquote className="mb-12 border-l-2 border-gold/50 pl-6 font-serif text-xl italic leading-relaxed text-gold md:text-2xl">
              {post.highlight}
            </blockquote>
          ) : null}

          <div className="article-body">
            {post.body.map((para, i) =>
              para === "" ? (
                <div key={i} className="h-4" />
              ) : (
                <p key={i}>{para}</p>
              ),
            )}
          </div>

          <ShareRow
            title={post.title}
            url={url || `https://example.com/blog/${post.slug}`}
          />
        </div>
      </Section>
    </article>
  );
}
