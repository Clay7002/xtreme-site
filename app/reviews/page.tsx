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
          text="This page is prepared for verified Google reviews, rating data, and review links once the business adds the official profile URLs."
        />
        <section className="section reviews-section">
          <div className="container">
            <ReviewsSection />
          </div>
        </section>
        <section className="section">
          <div className="container narrow-content">
            <SectionIntro
              title="Use verified review text only"
              text="The site intentionally avoids fake reviews, invented customer names, and unsupported ratings. Add real excerpts from Google after confirming usage and accuracy."
            />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
