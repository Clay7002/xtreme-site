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
          eyebrow="Customer experience"
          title="Repair quality, communication, and confidence at delivery"
          text="Learn what Xtreme prioritizes during the repair experience, from estimate review to final pickup."
        />
        <section className="section reviews-section">
          <div className="container">
            <ReviewsSection />
          </div>
        </section>
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
