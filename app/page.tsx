import {
  AreasLine,
  BeforeAfterSection,
  ButtonLink,
  CertificationStrip,
  CompanyStorySection,
  FAQSection,
  FinalCTA,
  HeroSection,
  InsuranceSection,
  IntroSection,
  LocationContactSection,
  LaunchReadinessSection,
  PageShell,
  ProcessPreview,
  RepairStartChecklist,
  ReviewsSection,
  ResourcesPreview,
  SectionIntro,
  ServicePanels,
  ValuePropsStrip,
  WhyChooseSection,
  WorkGallerySection,
} from "./components";

export default function Home() {
  return (
    <PageShell>
      <main>
        <HeroSection />
        <CertificationStrip />

        <IntroSection />
        <ValuePropsStrip />

        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Auto body repair Carrollton TX"
              title="Start with the service path that fits your repair."
              text="Choose the path that best matches your situation, from collision repair and insurance help to certifications, equipment, and repair resources."
            />
            <ServicePanels />
          </div>
        </section>

        <InsuranceSection />

        <section className="section">
          <div className="container">
            <RepairStartChecklist />
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionIntro
              eyebrow="Repair process"
              title="A simple process from estimate to vehicle delivery."
              text="Customers can see the major milestones before they call, including insurance review, repair planning, quality checks, and final delivery."
            />
            <ProcessPreview />
            <div className="section-cta-row">
              <ButtonLink href="/contact" track="estimate:process-preview">Ready to start? Get a Free Estimate</ButtonLink>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Why choose Xtreme"
              title="Why Choose Xtreme Collision Repair"
              text="Xtreme focuses on the details drivers care about after an accident: clear communication, proper repair planning, workmanship, and confidence at pickup."
            />
            <WhyChooseSection />
            <AreasLine />
          </div>
        </section>

        <CompanyStorySection />

        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Gallery / Before & After"
              title="Real repair work from the Xtreme shop"
              text="See recent damage documentation, finished repairs, paint finish examples, and shop equipment photos from real Xtreme Collision Repair work."
            />
            <BeforeAfterSection />
            <div className="gallery-preview-spacer">
              <WorkGallerySection limit={6} />
            </div>
            <div className="section-cta-row">
              <ButtonLink href="/gallery" track="gallery:home-preview">View Full Gallery</ButtonLink>
            </div>
          </div>
        </section>

        <section className="section reviews-section">
          <div className="container">
            <ReviewsSection />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Resources / Blog"
              title="Helpful answers before customers start a claim."
              text="Helpful repair and insurance answers for Carrollton and North Texas drivers before they start the claim or repair process."
            />
            <ResourcesPreview />
          </div>
        </section>

        <section className="section muted-section">
          <div className="container faq-container">
            <SectionIntro
              eyebrow="FAQ"
              title="Clear answers before customers call"
              text="These questions reduce uncertainty around estimates, insurance, photos, repair timing, and service areas."
            />
            <FAQSection />
          </div>
        </section>

        <LocationContactSection />
        <LaunchReadinessSection />
        <FinalCTA />
      </main>
    </PageShell>
  );
}
