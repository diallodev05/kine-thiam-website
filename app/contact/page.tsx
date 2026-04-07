"use client";

import { useState } from "react";
import { site } from "@/lib/data";
import { Section } from "@/components/ui/Section";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { FadeIn } from "@/components/ui/FadeIn";

const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Bonjour Fatou Kiné,")}`;

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <>
      <Section className="pb-24 md:pb-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold/80">
              Contact
            </p>
            <h1 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
              Écrire ensemble
            </h1>
            <p className="mt-6 max-w-md text-foreground/55">
              Interviews, collaborations, librairies, ateliers — écrivez-moi en
              quelques lignes. Je réponds avec attention.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              <p>
                <span className="text-foreground/40">E-mail · </span>
                <a
                  href={`mailto:${site.email}`}
                  className="text-gold hover:text-foreground"
                >
                  {site.email}
                </a>
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-sm border border-gold/40 px-5 py-3 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold-dim"
              >
                WhatsApp
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-sm border border-border bg-card p-8 md:p-10"
            >
              <Input
                label="Nom"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
              <Input
                label="E-mail"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <div className="w-full space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-[0.2em] text-foreground/55"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full rounded-sm border border-border bg-card px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/35 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30"
                  placeholder="Votre message..."
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Envoyer
              </Button>
            </form>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mt-20 border-t border-border pt-16">
            <h2 className="font-serif text-2xl text-foreground">
              Collaborations
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/55">
              Festivals, médias, institutions culturelles : propositions de
              modération, lectures publiques et ateliers sur mesure. Joignez un
              dossier ou une idée claire — nous construirons un format adapté.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Modal open={sent} onClose={() => setSent(false)} title="Message envoyé">
        <p>
          Merci pour votre message (démonstration). Connectez un backend ou un
          service de formulaire pour la production.
        </p>
      </Modal>
    </>
  );
}
