"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogCategory } from "@/lib/data";
import { posts } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const categories: (BlogCategory | "Tous")[] = [
  "Tous",
  "Lettres",
  "Réflexions",
  "Poèmes",
];

export function BlogGrid() {
  const [cat, setCat] = useState<BlogCategory | "Tous">("Tous");

  const filtered = useMemo(() => {
    if (cat === "Tous") return posts;
    return posts.filter((p) => p.category === cat);
  }, [cat]);

  return (
    <>
      <div className="mb-12 flex flex-wrap gap-3">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={cn(
              "rounded-sm border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors",
              cat === c
                ? "border-gold bg-gold-dim text-gold"
                : "border-border/40 text-foreground/55 hover:border-gold/40 hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Card key={post.slug}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
              {post.category}
            </p>
            <h2 className="mt-4 font-serif text-xl text-foreground">
              {post.title}
            </h2>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/55">
              {post.excerpt}
            </p>
            <p className="mt-4 text-[11px] text-foreground/35">
              {new Date(post.date).toLocaleDateString("fr-FR")} ·{" "}
              {post.readTime}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-gold hover:text-foreground"
            >
              Lire l’article
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}
