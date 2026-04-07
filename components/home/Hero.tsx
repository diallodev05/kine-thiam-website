"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { site, authorPortrait } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 64, damping: 18 });
  const sy = useSpring(my, { stiffness: 64, damping: 18 });
  const imgX = useTransform(sx, (v) => v * 0.05);
  const imgY = useTransform(sy, (v) => v * 0.05);
  const bgX = useTransform(sx, (v) => v * 0.015);
  const bgY = useTransform(sy, (v) => v * 0.015);

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mx.set(e.clientX - cx);
      my.set(e.clientY - cy);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduceMotion]);

  return (
    <section className="relative min-h-[calc(100vh-6rem)] overflow-hidden">
      {reduceMotion ? (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(198,169,107,0.1),transparent_55%),radial-gradient(ellipse_60%_50%_at_80%_60%,rgba(198,169,107,0.05),transparent_50%)]"
          aria-hidden
        />
      ) : (
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(198,169,107,0.12),transparent_55%),radial-gradient(ellipse_60%_50%_at_80%_60%,rgba(198,169,107,0.06),transparent_50%)]"
          aria-hidden
        />
      )}
      <div className="absolute inset-0 bg-linear-to-b from-background/30 to-background dark:from-black/25" />

      <div className="relative z-10 mx-auto grid min-h-[inherit] max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="order-2 max-w-xl lg:order-1"
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-gold/90">
            {site.alias}
          </p>
          <h1 className="text-balance font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {site.name}
          </h1>
          <p className="mt-8 max-w-md font-serif text-xl italic leading-relaxed text-foreground/75 md:text-2xl">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/livre">Lire le livre</Button>
            <Button href="/a-propos" variant="secondary">
              Découvrir mon univers
            </Button>
          </div>
        </motion.div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          {reduceMotion ? (
            <div className="relative aspect-3/4 w-full max-w-[min(100%,380px)] overflow-hidden rounded-sm border border-border shadow-[0_40px_120px_-40px_rgba(0,0,0,0.12)] dark:shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
              <Image
                src={authorPortrait}
                alt={site.name}
                fill
                className="object-cover grayscale-25 contrast-[1.05] sepia-[0.12]"
                sizes="(max-width: 1024px) 90vw, 380px"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent" />
            </div>
          ) : (
            <motion.div
              style={{ x: imgX, y: imgY }}
              className="relative aspect-3/4 w-full max-w-[min(100%,380px)] overflow-hidden rounded-sm border border-border shadow-[0_40px_120px_-40px_rgba(0,0,0,0.12)] dark:shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]"
            >
              <Image
                src={authorPortrait}
                alt={site.name}
                fill
                className="object-cover grayscale-25 contrast-[1.05] sepia-[0.12]"
                sizes="(max-width: 1024px) 90vw, 380px"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/50 via-transparent to-transparent" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
