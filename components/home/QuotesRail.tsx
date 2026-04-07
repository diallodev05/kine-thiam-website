"use client";

import { motion } from "framer-motion";
import { quotes } from "@/lib/data";
import { Section } from "@/components/ui/Section";

export function QuotesRail() {
  return (
    <Section className="border-t border-border/30 py-16 md:py-24">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
            Fragments
          </p>
          <h2 className="mt-2 font-serif text-2xl text-foreground md:text-3xl">
            Pensées en mouvement
          </h2>
        </div>
        <p className="max-w-sm text-sm text-foreground/45">
          Faites défiler — chaque carte est une invitation à ralentir.
        </p>
      </div>

      <div className="quote-scroll -mx-5 flex gap-5 overflow-x-auto px-5 pb-4 pt-2 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10 [scrollbar-gutter:stable]">
        {quotes.map((q, i) => (
          <motion.article
            key={q.id}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="min-w-[min(85vw,320px)] shrink-0 snap-start rounded-sm border border-gold/20 bg-muted px-8 py-10 shadow-[0_24px_80px_-48px_rgba(198,169,107,0.25)] dark:shadow-[0_24px_80px_-48px_rgba(198,169,107,0.35)]"
          >
            <p className="font-serif text-lg leading-relaxed text-gold md:text-xl">
              « {q.text} »
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
