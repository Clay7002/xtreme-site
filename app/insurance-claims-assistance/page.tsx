import {
  ButtonLink,
  FAQSection,
  FinalCTA,
  InnerHero,
  PageShell,
  ProcessPreview,
  SectionIntro,
} from "../components";

export const metadata = {
  title: "Insurance Claims Assistance for Collision Repair | Carrollton, TX",
  description:
    "Insurance claims assistance for collision repair in Carrollton, TX, including estimate review, supplements, claim documentation, and rental scheduling guidance.",
};

export default function InsuranceClaimsAssistancePage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Insurance claims assistance collision repair"
          title="Insurance Claims Assistance for Collision Repair"
          text="Insurance estimates do not always capture the full damage after an accident. Xtreme Collision Repair documents visible and hidden damage, communicates with insurance companies, and helps customers understand the next steps."
        />
        <section className="section">
          <div className="container split-section split-section-light">
            <div>
              <SectionIntro
                eyebrow="Your repair choice"
                title="You have the right to ask questions and choose a repair shop"
                text="Xtreme helps customers understand claim numbers, insurer estimates, photos, supplements, approvals, rental coordination, and repair planning. This page is educational and does not provide legal advice."
              />
              <div className="hero-actions compact-actions">
                <ButtonLink href="/contact" track="estimate:insurance-page">Start Your Claim Repair</ButtonLink>
                <ButtonLink href="/resources/what-is-a-collision-repair-supplement" variant="light">
                  What Is a Supplement?
                </ButtonLink>
              </div>
            </div>
            <div className="check-list light-list">
              <span>Initial estimate review and claim documentation</span>
              <span>Hidden damage and supplement explanation</span>
              <span>Photo, parts, and repair-plan organization</span>
              <span>Rental car scheduling guidance when available</span>
            </div>
          </div>
        </section>
        <section className="section muted-section">
          <div className="container">
            <SectionIntro
              eyebrow="How Xtreme helps"
              title="Insurance support fits into the full repair process"
              text="The process keeps customers oriented from estimate request through insurance review, hidden-damage documentation, repairs, quality checks, and vehicle delivery."
            />
            <ProcessPreview full />
          </div>
        </section>
        <section className="section">
          <div className="container faq-container">
            <SectionIntro
              eyebrow="Insurance FAQ"
              title="Common claim questions"
              text="Clear answers help customers understand supplements, repair-shop choice, rental scheduling, and warranty expectations."
            />
            <FAQSection />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
