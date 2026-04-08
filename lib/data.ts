/* ------------------------------------------------------------------ */
/*  Central data store for the Fatou Kine Thiam author / literary site */
/* ------------------------------------------------------------------ */

// --------------- Types ---------------

export type BlogCategory = "Lettres" | "Réflexions" | "Poèmes";

export interface Webinar {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: string;
  spotsLeft: number;
}

interface TimelineEntry {
  year: string;
  label: string;
}

interface MediaVideo {
  id: number;
  thumb: string;
  duration: string;
  source: string;
  title: string;
}

interface PressMention {
  id: number;
  outlet: string;
  url: string;
  title: string;
  date: string;
}

interface Quote {
  id: number;
  text: string;
}

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  highlight?: string;
  body: string[];
}

interface Review {
  id: number;
  quote: string;
  author: string;
  role: string;
}

// --------------- Site ---------------

export const site = {
  name: "Fatou Kine Thiam",
  alias: "Plume d'Or",
  tagline:
    "Ecrire, c'est tendre la main a travers le silence.",
  email: "contact@fatoukinethiam.com",
  whatsapp: "221781234567",
  social: {
    instagram: "https://instagram.com/fatoukinethiam",
    youtube: "https://youtube.com/@fatoukinethiam",
    linkedin: "https://linkedin.com/in/fatoukinethiam",
  },
};

// --------------- Author portrait ---------------

export const authorPortrait = "/images/author-portrait.jpg";

// --------------- Timeline (About page) ---------------

export const timeline: TimelineEntry[] = [
  { year: "1990", label: "Naissance a Dakar, Senegal." },
  {
    year: "2010",
    label:
      "Premiers textes publies dans des revues litteraires ouest-africaines.",
  },
  {
    year: "2016",
    label: "Installation a Paris ; debut d'un atelier d'ecriture feminine.",
  },
  {
    year: "2022",
    label: "Publication de Autour des epines aux editions Harmattan.",
  },
  {
    year: "2024",
    label: "Lancement de la serie de webinaires litteraires en ligne.",
  },
];

// --------------- Book ---------------

export const book = {
  title: "Autour des epines",
  subtitle: "Recueil de reflexions et de poesie",
  description:
    "Un voyage intime entre memoire et presence, ou chaque texte cherche la beaute exigeante qui nait quand on accepte de regarder en face.",
  coverImage: "/images/book-cover.jpg",
  purchaseUrl: "#",
  excerpt:
    "Il y a des silences qui pesent plus lourd que les cris. Ce livre est ne de ces silences-la, de cette volonte de dire sans elever la voix.",
};

export const reviews: Review[] = [
  {
    id: 1,
    quote:
      "Une ecriture a la fois delicate et tranchante. On en sort transforme.",
    author: "Aminata Sow Fall",
    role: "Ecrivaine",
  },
  {
    id: 2,
    quote:
      "Fatou Kine Thiam reussit l'exploit de rendre l'intime universel.",
    author: "Boubacar Boris Diop",
    role: "Romancier et essayiste",
  },
  {
    id: 3,
    quote:
      "Ce livre est un acte de courage poetique.",
    author: "Felwine Sarr",
    role: "Philosophe et ecrivain",
  },
];

// --------------- Quotes ---------------

export const quotes: Quote[] = [
  { id: 1, text: "Le silence est parfois la plus haute forme de parole." },
  {
    id: 2,
    text: "Les cicatrices ne sont pas des faiblesses, elles sont la preuve qu'on a survecu.",
  },
  {
    id: 3,
    text: "Ecrire, c'est refuser l'oubli sans ceder a la colere.",
  },
  {
    id: 4,
    text: "La beaute vraie nait de la blessure apprivoisee.",
  },
  {
    id: 5,
    text: "Je n'ecris pas pour convaincre, j'ecris pour tendre la main.",
  },
];

// --------------- Blog ---------------

export const posts: Post[] = [
  {
    slug: "silence-et-parole",
    title: "Entre silence et parole",
    excerpt:
      "Reflexion sur la frontiere fragile entre ce qu'on dit et ce qu'on tait.",
    category: "Réflexions",
    date: "2025-03-15",
    readTime: "5 min",
    highlight: "Article mis en avant",
    body: [
      "Il y a des mots qu'on porte longtemps avant de les poser sur le papier. Des mots qui pesent, qui brulent, qui refusent de sortir tant qu'on ne leur a pas trouve la bonne forme.",
      "Le silence n'est pas l'absence de parole. C'est parfois sa forme la plus intense. Quand on choisit de se taire, c'est souvent parce que ce qu'on ressent depasse le vocabulaire.",
      "Ecrire, c'est accepter cette tension. C'est habiter l'espace entre le silence et la parole, sans chercher a le resoudre.",
    ],
  },
  {
    slug: "lettre-a-ma-mere",
    title: "Lettre a ma mere",
    excerpt:
      "Une lettre jamais envoyee, enfin partagee.",
    category: "Lettres",
    date: "2025-02-20",
    readTime: "7 min",
    body: [
      "Chere Maman, je ne sais pas par ou commencer. Les annees ont passe et les mots sont restes, intacts, dans un tiroir que je n'osais pas ouvrir.",
      "Tu m'as appris la dignite du silence. Mais aujourd'hui, j'ai besoin que tu entendes ce que je n'ai jamais su te dire.",
      "Merci. Pour tout. Pour les nuits blanches, pour les sacrifices invisibles, pour cette force tranquille que tu m'as transmise sans le savoir.",
    ],
  },
  {
    slug: "poeme-dakar",
    title: "Dakar, ville ouverte",
    excerpt:
      "Un poeme en hommage a la ville qui m'a vue naitre.",
    category: "Poèmes",
    date: "2025-01-10",
    readTime: "3 min",
    body: [
      "Dakar, tu es le sel et le vent, la poussiere doree du matin, le chant des pirogues au crepuscule.",
      "Dans tes rues, j'ai appris a marcher entre les mondes. Entre la tradition et l'horizon. Entre ce qu'on herite et ce qu'on invente.",
      "Tu es ma premiere page, ma premiere encre. Tout ce que j'ecris porte ton empreinte.",
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

// --------------- Media ---------------

export const galleryImages: string[] = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
];

export const mediaVideos: MediaVideo[] = [
  {
    id: 1,
    thumb: "/images/video-thumb-1.jpg",
    duration: "12:34",
    source: "https://youtube.com/watch?v=example1",
    title: "Rencontre litteraire a Dakar",
  },
  {
    id: 2,
    thumb: "/images/video-thumb-2.jpg",
    duration: "8:15",
    source: "https://youtube.com/watch?v=example2",
    title: "Lecture publique : Autour des epines",
  },
];

export const pressMentions: PressMention[] = [
  {
    id: 1,
    outlet: "Le Monde Afrique",
    url: "#",
    title: "Fatou Kine Thiam, une plume qui reconcilie",
    date: "2025-01-20",
  },
  {
    id: 2,
    outlet: "RFI Culture",
    url: "#",
    title: "Autour des epines : le livre qui fait parler le silence",
    date: "2024-11-05",
  },
];

// --------------- Webinars ---------------

export const featuredWebinar: Webinar = {
  id: 1,
  title: "Ecrire depuis la blessure",
  description:
    "Un atelier en ligne pour explorer l'ecriture comme outil de transformation personnelle.",
  date: "2025-06-15",
  time: "18h00 GMT",
  location: "En ligne (Zoom)",
  price: "25 EUR",
  spotsLeft: 12,
};

export const webinars: Webinar[] = [
  featuredWebinar,
  {
    id: 2,
    title: "La lettre comme forme litteraire",
    description:
      "Decouvrez comment la forme epistolaire peut liberer votre voix interieure.",
    date: "2025-07-20",
    time: "17h00 GMT",
    location: "En ligne (Zoom)",
    price: "25 EUR",
    spotsLeft: 8,
  },
  {
    id: 3,
    title: "Poetique du quotidien",
    description:
      "Trouver la poesie dans les gestes simples : un atelier d'ecriture accessible a tous.",
    date: "2025-08-10",
    time: "18h00 GMT",
    location: "En ligne (Zoom)",
    price: "30 EUR",
    spotsLeft: 15,
  },
];
