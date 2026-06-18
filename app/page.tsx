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
  PageShell,
  ProcessPreview,
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
              text="These panels organize the most important customer journeys: collision repair, insurance claim help, equipment proof points, and practical resources."
            />
            <ServicePanels />
          </div>
        </section>

        <InsuranceSection />

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
              text="These trust signals mirror what customers look for when comparing collision repair shops after an accident."
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
              text="Resource previews improve SEO while positioning Xtreme as a clear, local guide for repair and insurance decisions."
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
        <FinalCTA />
      </main>
    </PageShell>
  );
}
