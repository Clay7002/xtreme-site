import {
  AreasLine,
  BeforeAfterSection,
  FAQSection,
  FinalCTA,
  HeroSection,
  InsuranceSection,
  PageShell,
  ProcessPreview,
  ReviewsSection,
  SectionIntro,
  ServicesGrid,
  TrustBadges,
  WhyChooseSection,
} from "./components";

export default function Home() {
  return (
    <PageShell>
      <main>
        <HeroSection />
        <TrustBadges />

        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Auto body repair Euless TX"
              title="Collision repair, paint, dents, hail, and insurance help"
              text="Customers can quickly understand the shop's core services, request an estimate, and find the next step after an accident or storm."
            />
            <ServicesGrid limit={8} />
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionIntro
              eyebrow="Repair process"
              title="A simple process from estimate to vehicle delivery"
              text="The home page previews the major milestones so customers know what to expect without unrealistic repair-time promises."
            />
            <ProcessPreview />
          </div>
        </section>

        <InsuranceSection />

        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Gallery / Before & After"
              title="Ready for real repair photos"
              text="Use this section for actual shop photography, damage documentation, and finished delivery photos once available."
            />
            <BeforeAfterSection />
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
              eyebrow="Why choose Xtreme Collision Repair"
              title="A trustworthy local body shop website built for real proof"
              text="The copy keeps claims grounded while making room for verified details, real reviews, and shop photography."
            />
            <WhyChooseSection />
            <AreasLine />
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

        <FinalCTA />
      </main>
    </PageShell>
  );
}
