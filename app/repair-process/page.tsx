import {
  ButtonLink,
  FAQSection,
  FinalCTA,
  InnerHero,
  PageShell,
  ProcessPreview,
  SectionIntro,
} from "../components";

export default function RepairProcessPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Repair process"
          title="A clear repair process from estimate to delivery"
          text="Customers can understand each step before they call, request an estimate, or drop off a vehicle."
        />
        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Repair workflow"
              title="Know what happens next"
              text="The process is written to explain estimate review, insurance coordination, repairs, quality checks, and final delivery without promising exact repair times before the vehicle is reviewed."
            />
            <ProcessPreview full />
            <div className="section-cta-row">
              <ButtonLink href="/contact" track="estimate:repair-process">Ready to start? Get a Free Estimate</ButtonLink>
            </div>
          </div>
        </section>
        <section className="section muted-section">
          <div className="container faq-container">
            <SectionIntro
              eyebrow="Common questions"
              title="Helpful answers for repair planning"
              text="Use this area to answer questions about estimates, insurance, photos, appointments, and nearby service areas."
            />
            <FAQSection />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
