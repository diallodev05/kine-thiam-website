import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-5 py-32 text-center">
      <h1 className="font-serif text-3xl text-foreground">
        Article introuvable
      </h1>
      <p className="mt-4 text-foreground/55">
        Ce texte n’existe pas ou a été déplacé.
      </p>
      <Link
        href="/blog"
        className="mt-8 inline-block text-xs uppercase tracking-[0.2em] text-gold hover:text-foreground"
      >
        ← Retour au blog
      </Link>
    </div>
  );
}
