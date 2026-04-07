"use client";

import { motion } from "framer-motion";
import { quotes } from "@/lib/data";
import { Section } from "@/components/ui/Section";

export default function QuotesPage() {
  return (
    <Section className="pb-24 md:pb-32">
      <div className="mb-14 text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
          Citations
        </p>
        <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
          Pensées à partager
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-foreground/55">
          Passez le curseur — chaque carte respire. Capturez une phrase pour vos
          moments de silence.
        </p>
      </div>

      <div className="masonry">
        {quotes.map((q, i) => (
          <motion.div
            key={q.id}
            layout
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.45 }}
            whileHover={{ scale: 1.02 }}
            className="masonry-item group cursor-default rounded-sm border border-border bg-muted p-8 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.1)] transition-shadow duration-500 hover:border-gold/30 hover:shadow-[0_32px_100px_-40px_rgba(198,169,107,0.15)] dark:shadow-[0_24px_80px_-48px_rgba(0,0,0,0.8)]"
          >
            <p className="font-serif text-lg leading-relaxed text-gold md:text-xl">
              « {q.text} »
            </p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-foreground/30 opacity-0 transition-opacity group-hover:opacity-100">
              Plume d’Or
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
