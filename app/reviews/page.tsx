import type { Metadata } from "next";
import {
  FinalCTA,
  InnerHero,
  PageShell,
  ReviewsSection,
} from "../components";

export const metadata: Metadata = {
  title: "Real Google Reviews | Xtreme Collision Repair",
  description:
    "Read featured Google review excerpts from Xtreme Collision Repair customers in Carrollton, TX about communication, craftsmanship, and delivery.",
};

export default function ReviewsPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Real customer reviews"
          title="Featured Google review excerpts from local customers"
          text="See featured customer feedback Xtreme highlights on the site, then jump to the public Google profile or review form for the full record."
        />
        <ReviewsSection />
        <FinalCTA />
      </main>
    </PageShell>
  );
}
