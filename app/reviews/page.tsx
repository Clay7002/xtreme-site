import {
  FinalCTA,
  InnerHero,
  PageShell,
  ReviewsSection,
  SectionIntro,
} from "../components";

export default function ReviewsPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Reviews"
          title="Google reviews and customer feedback"
          text="Read customer feedback about repair quality, communication, insurance support, and the delivery experience."
        />
        <section className="section reviews-section">
          <div className="container">
            <ReviewsSection />
          </div>
        </section>
        <section className="section">
          <div className="container narrow-content">
            <SectionIntro
              title="Verified customer feedback"
              text="Xtreme will feature real review excerpts from approved sources so customers can compare the shop with confidence."
            />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
