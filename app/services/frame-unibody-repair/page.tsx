import {
  ButtonLink,
  FinalCTA,
  InnerHero,
  PageShell,
  SectionIntro,
} from "../../components";

export const metadata = {
  title: "Frame & Unibody Repair in Carrollton, TX | Xtreme Collision Repair",
  description:
    "Frame and unibody repair planning, computerized measuring, structural documentation, and collision repair support in Carrollton, TX.",
};

export default function FrameUnibodyRepairPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Auto frame repair Carrollton TX"
          title="Frame & Unibody Repair in Carrollton, TX"
          text="Structural repair planning matters after a collision because frame and unibody alignment can affect fit, safety systems, handling, and long-term vehicle value."
        />
        <section className="section">
          <div className="container split-section split-section-light">
            <div>
              <SectionIntro
                title="Why structural alignment matters"
                text="A collision can affect structural points that are not obvious from the outside. Computerized measuring, documentation, frame straightening planning, and quality checks help guide repairs when frame or unibody damage is suspected."
              />
              <div className="hero-actions compact-actions">
                <ButtonLink href="/contact" track="estimate:frame-page">Get a Free Estimate</ButtonLink>
                <ButtonLink href="/resources/why-frame-measuring-matters-after-an-accident" variant="light">
                  Why Measuring Matters
                </ButtonLink>
              </div>
            </div>
            <div className="check-list light-list">
              <span>Computerized frame and unibody measuring</span>
              <span>Frame straightening and repair documentation</span>
              <span>Panel fit, suspension, and alignment considerations</span>
              <span>Future collision performance and resale value awareness</span>
            </div>
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
