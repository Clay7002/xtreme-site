import {
  AreasLine,
  FinalCTA,
  InnerHero,
  PageShell,
  ProcessPreview,
  SectionIntro,
} from "../components";

export default function InsuranceClaimsHelpPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Insurance collision repair Euless TX"
          title="Insurance claim help after a collision"
          text="A customer-friendly page for explaining claim numbers, insurance estimates, damage photos, supplements, and next steps without promising insurer decisions."
        />
        <section className="section">
          <div className="container split-section split-section-light">
            <div>
              <SectionIntro
                title="Make the repair claim process easier to understand"
                text="Customers can bring their claim number, insurer estimate, damage photos, and vehicle information. The shop can review the information and explain what should happen next."
              />
              <AreasLine />
            </div>
            <div className="check-list light-list">
              <span>Claim number and insurance company review</span>
              <span>Damage photos and estimate documentation</span>
              <span>Supplement explanation if hidden damage is found</span>
              <span>Clear repair planning before work moves forward</span>
            </div>
          </div>
        </section>
        <section className="section muted-section">
          <div className="container">
            <SectionIntro
              eyebrow="How it works"
              title="Insurance help fits into the full repair process"
              text="The process keeps customers oriented from estimate request through quality check and vehicle delivery."
            />
            <ProcessPreview full />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
