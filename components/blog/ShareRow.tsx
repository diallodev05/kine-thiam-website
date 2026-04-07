"use client";

import { useState } from "react";

type ShareRowProps = { title: string; url: string };

export function ShareRow({ title, url }: ShareRowProps) {
  const [copied, setCopied] = useState(false);
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(title);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-4 border-t border-border pt-8">
      <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/45">
        Partager
      </span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encoded}&text=${text}`}
        target="_blank"
        rel="noreferrer"
        className="text-xs text-foreground/70 underline-offset-4 hover:text-gold hover:underline"
      >
        X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noreferrer"
        className="text-xs text-foreground/70 underline-offset-4 hover:text-gold hover:underline"
      >
        LinkedIn
      </a>
      <button
        type="button"
        onClick={copy}
        className="text-xs text-foreground/70 underline-offset-4 hover:text-gold hover:underline"
      >
        {copied ? "Copié" : "Copier le lien"}
      </button>
    </div>
  );
}
