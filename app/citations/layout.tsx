import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Citations",
  description: "Citations et fragments — Fatou Kiné Thiam.",
};

export default function CitationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
