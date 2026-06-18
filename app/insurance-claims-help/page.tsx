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
          eyebrow="Insurance collision repair Carrollton TX"
          title="Insurance Claims Assistance for Collision Repair"
          text="Insurance estimates do not always capture the full damage after an accident. Xtreme Collision Repair helps customers understand estimates, supplements, claim documentation, and repair planning."
        />
        <section className="section">
          <div className="container split-section split-section-light">
            <div>
              <SectionIntro
                title="Claim help that belongs front and center"
                text="Customers can bring their claim number, insurer estimate, damage photos, and vehicle information. The shop can review the information, explain supplements, and help organize the repair plan."
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
