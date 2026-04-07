"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const primary = [
  { href: "/", label: "Accueil" },
  { href: "/livre", label: "Livre" },
  { href: "/blog", label: "Blog" },
] as const;

const discover = [
  { href: "/a-propos", label: "À propos", hint: "Parcours & mission" },
  { href: "/citations", label: "Citations", hint: "Fragments à partager" },
  { href: "/medias", label: "Médias", hint: "Vidéos & presse" },
  { href: "/webinaires", label: "Ateliers", hint: "Rencontres en ligne" },
] as const;

const contact = { href: "/contact", label: "Contact" } as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const [mobileDiscoverOpen, setMobileDiscoverOpen] = useState(false);
  const discoverRef = useRef<HTMLDivElement>(null);

  const discoverActive = discover.some((d) => pathname === d.href);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDiscoverOpen(false);
    setMobileDiscoverOpen(discover.some((d) => d.href === pathname));
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!discoverOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (!discoverRef.current?.contains(e.target as Node)) {
        setDiscoverOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDiscoverOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [discoverOpen]);

  function NavLink({
    href,
    label,
    active,
  }: {
    href: string;
    label: string;
    active: boolean;
  }) {
    return (
      <Link
        href={href}
        className={cn(
          "relative rounded-sm px-3 py-2 text-xs uppercase tracking-[0.18em] transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          active ? "text-gold" : "text-foreground/65 hover:text-foreground",
        )}
      >
        {label}
        {active ? (
          <motion.span
            layoutId="nav-pill"
            className="absolute inset-x-2 -bottom-0.5 h-px bg-gold/80"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        ) : null}
      </Link>
    );
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-500",
        scrolled
          ? "border-b border-border bg-background/92 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-md dark:shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex flex-col leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="font-serif text-lg tracking-[0.02em] text-foreground transition-colors group-hover:text-gold md:text-xl">
            {site.name}
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/45">
            {site.alias}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Principale"
        >
          {primary.map((l) => (
            <NavLink
              key={l.href}
              href={l.href}
              label={l.label}
              active={pathname === l.href}
            />
          ))}

          <div className="relative" ref={discoverRef}>
            <button
              type="button"
              id="nav-discover-trigger"
              aria-expanded={discoverOpen}
              aria-haspopup="menu"
              aria-controls="nav-discover-menu"
              onClick={() => setDiscoverOpen((o) => !o)}
              className={cn(
                "relative flex items-center gap-1 rounded-sm px-3 py-2 text-xs uppercase tracking-[0.18em] transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                discoverActive || discoverOpen
                  ? "text-gold"
                  : "text-foreground/65 hover:text-foreground",
              )}
            >
              Découvrir
              <ChevronIcon
                className={cn(
                  "h-3 w-3 transition-transform duration-200",
                  discoverOpen && "rotate-180",
                )}
              />
              {discoverActive && !discoverOpen ? (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-x-2 -bottom-0.5 h-px bg-gold/80"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              ) : null}
            </button>

            <AnimatePresence>
              {discoverOpen ? (
                <motion.div
                  id="nav-discover-menu"
                  role="menu"
                  aria-labelledby="nav-discover-trigger"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-full z-50 mt-2 w-[min(100vw-2rem,17rem)] overflow-hidden rounded-sm border border-border bg-background/95 py-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] backdrop-blur-md dark:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)]"
                >
                  {discover.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setDiscoverOpen(false)}
                      className={cn(
                        "block px-4 py-2.5 transition-colors",
                        "focus-visible:bg-gold-dim focus-visible:outline-none",
                        pathname === item.href
                          ? "bg-gold-dim/50 text-gold"
                          : "text-foreground hover:bg-card",
                      )}
                    >
                      <span className="block text-xs uppercase tracking-[0.2em]">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-[11px] font-normal normal-case tracking-normal text-foreground/45">
                        {item.hint}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <NavLink
            href={contact.href}
            label={contact.label}
            active={pathname === contact.href}
          />
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Link
            href="/livre"
            className="hidden rounded-sm border border-gold/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold-dim sm:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Commander
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-sm lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span
              className={cn(
                "h-px w-6 bg-foreground transition-transform duration-300",
                mobileOpen && "translate-y-[6px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-foreground transition-opacity duration-300",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-foreground transition-transform duration-300",
                mobileOpen && "-translate-y-[6px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto overflow-x-hidden border-t border-border bg-background/98 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col px-5 py-5" aria-label="Mobile">
              {primary.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-sm border-b border-border/30 py-3 text-sm uppercase tracking-[0.2em] transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    pathname === l.href ? "text-gold" : "text-foreground/80",
                  )}
                >
                  {l.label}
                </Link>
              ))}

              <div className="border-b border-border/30 py-1">
                <button
                  type="button"
                  aria-expanded={mobileDiscoverOpen}
                  className="flex w-full items-center justify-between rounded-sm py-3 text-left text-sm uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  onClick={() => setMobileDiscoverOpen((o) => !o)}
                >
                  Découvrir
                  <ChevronIcon
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform duration-200",
                      mobileDiscoverOpen && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileDiscoverOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden pl-3"
                    >
                      {discover.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block border-l border-gold/25 py-2.5 pl-3 text-xs uppercase tracking-[0.18em] transition-colors",
                            pathname === item.href
                              ? "text-gold"
                              : "text-foreground/60 hover:text-foreground",
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <Link
                href={contact.href}
                className={cn(
                  "rounded-sm border-b border-border/30 py-3 text-sm uppercase tracking-[0.2em] transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  pathname === contact.href
                    ? "text-gold"
                    : "text-foreground/80",
                )}
              >
                {contact.label}
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
