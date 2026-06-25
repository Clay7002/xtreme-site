import type { Metadata } from "next";
import {
  FinalCTA,
  InnerHero,
  PageShell,
  ReviewsSection,
  SectionIntro,
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
          text="See the actual customer feedback Xtreme highlights on the site, with notes about repair quality, communication, and delivery."
        />
        <ReviewsSection />
        <section className="section">
          <div className="container narrow-content">
            <SectionIntro
              title="A customer experience built around clarity"
              text="Xtreme focuses on clear repair communication, organized insurance support, careful quality checks, and a smoother pickup experience."
            />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
