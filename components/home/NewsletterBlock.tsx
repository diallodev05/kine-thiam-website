"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { FadeIn } from "@/components/ui/FadeIn";

export function NewsletterBlock() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setOpen(true);
    setEmail("");
  }

  return (
    <>
      <Section className="border-t border-border/30 pb-24 md:pb-32">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.4em] text-gold/80">
              Lettre confidentielle
            </p>
            <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
              Recevez mes lettres privées
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground/50">
              Textes inédits, coulisses d’écriture, dates d’ateliers — une fois
              par mois, sans bruit.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row sm:items-end"
            >
              <div className="flex-1 text-left">
                <Input
                  type="email"
                  name="email"
                  placeholder="Votre adresse e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  aria-label="Adresse e-mail"
                />
              </div>
              <Button type="submit" className="shrink-0 sm:min-w-[160px]">
                S’inscrire
              </Button>
            </form>
          </div>
        </FadeIn>
      </Section>

      <Modal open={open} onClose={() => setOpen(false)} title="Merci">
        <p>
          Votre inscription est enregistrée (démonstration). Connectez un
          service d’e-mailing pour envoyer de vraies lettres.
        </p>
      </Modal>
    </>
  );
}
