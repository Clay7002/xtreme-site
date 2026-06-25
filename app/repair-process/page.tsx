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
          title="A clear repair process from repair plan to delivery"
          text="Customers can understand each step before they call, schedule a free repair plan, or drop off a vehicle."
        />
        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Repair workflow"
              title="Know what happens next"
              text="The process is written to explain repair-plan review, insurance coordination, repairs, quality checks, and final delivery without promising exact repair times before the vehicle is reviewed."
            />
            <ProcessPreview full />
            <div className="section-cta-row">
              <ButtonLink href="/contact" track="estimate:repair-process">Schedule Your Free Repair Plan</ButtonLink>
            </div>
          </div>
        </section>
        <section className="section muted-section">
          <div className="container faq-container">
            <SectionIntro
              eyebrow="Common questions"
              title="Helpful answers for repair planning"
              text="Use this area to answer questions about repair plans, insurance, photos, appointments, and nearby service areas."
            />
            <FAQSection />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
