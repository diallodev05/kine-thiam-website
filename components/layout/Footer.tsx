import Link from "next/link";
import { site } from "@/lib/data";

const footLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/livre", label: "Livre" },
  { href: "/blog", label: "Blog" },
  { href: "/webinaires", label: "Webinaires" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-16 sm:px-8 lg:flex-row lg:justify-between lg:px-10">
        <div className="max-w-sm space-y-4">
          <p className="font-serif text-2xl text-foreground">{site.name}</p>
          <p className="text-sm leading-relaxed text-foreground/55">
            {site.tagline}
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href={site.social.instagram}
              className="rounded-sm text-xs uppercase tracking-[0.2em] text-foreground/45 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-muted-deep"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href={site.social.youtube}
              className="rounded-sm text-xs uppercase tracking-[0.2em] text-foreground/45 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-muted-deep"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
            <a
              href={site.social.linkedin}
              className="rounded-sm text-xs uppercase tracking-[0.2em] text-foreground/45 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-muted-deep"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <nav
          className="flex flex-wrap gap-x-10 gap-y-3"
          aria-label="Pied de page"
        >
          {footLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-sm text-xs uppercase tracking-[0.2em] text-foreground/45 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-muted-deep"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-border/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-[11px] text-foreground/35 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>
            © {year} {site.name}. Tous droits réservés.
          </p>
          <p className="text-foreground/25">Plume d’Or · Sénégal</p>
        </div>
      </div>
    </footer>
  );
}
