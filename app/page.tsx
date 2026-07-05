import {
  CertificationStrip,
  CompanyStorySection,
  FinalCTA,
  HeroSection,
  InsuranceSection,
  HomepageTrustStrip,
  LocationContactSection,
  PageShell,
  HailCollisionSpotlightSection,
  ReviewHighlightsStrip,
  SectionIntro,
  TrustAuthoritySection,
  WhyChooseSection,
} from "./components";

export default function Home() {
  return (
    <PageShell>
      <main>
        <HeroSection />
        <HomepageTrustStrip />
        <CertificationStrip />
        <TrustAuthoritySection />
        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Why drivers choose Xtreme"
              title="A straightforward repair experience with less guessing."
              text="Clear communication, repair planning, and quality checks are the details customers care about most after a collision."
            />
            <WhyChooseSection />
          </div>
        </section>
        <CompanyStorySection />
        <ReviewHighlightsStrip />
        <HailCollisionSpotlightSection />
        <InsuranceSection />
        <LocationContactSection />
        <FinalCTA />
      </main>
    </PageShell>
  );
}
