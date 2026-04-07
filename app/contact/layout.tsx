import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact & collaborations — Fatou Kiné Thiam.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
