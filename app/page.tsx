import { Hero } from "@/components/home/Hero";
import { FeaturedBook } from "@/components/home/FeaturedBook";
import { QuotesRail } from "@/components/home/QuotesRail";
import { BlogPreview } from "@/components/home/BlogPreview";
import { WebinarTeaser } from "@/components/home/WebinarTeaser";
import { NewsletterBlock } from "@/components/home/NewsletterBlock";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedBook />
      <QuotesRail />
      <BlogPreview />
      <WebinarTeaser />
      <NewsletterBlock />
    </>
  );
}
