"use client";

import { useState } from "react";
import type { Webinar } from "@/lib/data";
import { webinars } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { Card } from "@/components/ui/Card";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function WebinarList() {
  const [selected, setSelected] = useState<Webinar | null>(null);

  return (
    <>
      <div className="grid gap-10">
        {webinars.map((w) => (
          <Card key={w.id} className="!p-8 md:!p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-serif text-2xl text-foreground md:text-3xl">
                  {w.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                  {w.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-foreground/50">
                  <li>{formatDate(w.date)}</li>
                  <li>
                    {w.time} · {w.location}
                  </li>
                  <li className="text-gold/90">{w.price}</li>
                  <li className="text-foreground/35">
                    Places restantes : {w.spotsLeft}
                  </li>
                </ul>
              </div>
              <Button type="button" onClick={() => setSelected(w)}>
                Réserver
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected ? selected.title : ""}
      >
        {selected ? (
          <>
            <p>
              Formulaire d’inscription (démonstration). Branchez un outil de
              paiement ou un formulaire pour finaliser l’enregistrement.
            </p>
            <p className="text-foreground/50">
              {formatDate(selected.date)} · {selected.price}
            </p>
          </>
        ) : null}
      </Modal>
    </>
  );
}
