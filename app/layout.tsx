import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { SkipLink } from "@/components/layout/SkipLink";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Fatou Kiné Thiam — Plume d’Or",
    template: "%s · Fatou Kiné Thiam",
  },
  description:
    "Écrivaine sénégalaise. « Autour des épines » — littérature, lettres & ateliers.",
  openGraph: {
    title: "Fatou Kiné Thiam — Plume d’Or",
    description:
      "Les mots guérissent ce que le silence détruit. Livre, blog et rencontres.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <SkipLink />
          <Navbar />
          <main
            id="main-content"
            className="relative z-[1] flex-1 pt-24 md:pt-28"
            tabIndex={-1}
          >
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
