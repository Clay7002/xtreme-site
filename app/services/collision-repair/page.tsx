import {
  BeforeAfterSection,
  ButtonLink,
  FinalCTA,
  InnerHero,
  LocationContactSection,
  PageShell,
  ProcessPreview,
  ReviewsSection,
  SectionIntro,
  ScheduleEvaluationSection,
} from "../../components";

export const metadata = {
  title: "Collision Repair in Carrollton, TX | Xtreme Collision Repair",
  description:
    "Collision repair in Carrollton, TX with structural repair planning, paint and refinishing, insurance claim support, quality control, and lifetime limited workmanship warranty support.",
};

export default function CollisionRepairPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Collision repair Carrollton TX"
          title="Collision Repair in Carrollton, TX"
          text="After an accident, proper collision repair is about more than appearance. Your vehicle's structure, safety systems, alignment, and finish all need to be repaired with care."
        />
        <section className="section">
          <div className="container split-section split-section-light">
            <div>
              <SectionIntro
                title="Restore safety, structure, appearance, and long-term value"
                text="Xtreme Collision Repair helps restore your vehicle as close as possible to pre-accident condition while keeping you informed throughout the process. The repair plan can include damage documentation, structural review, body repair, refinishing, quality control, and insurance claim support."
              />
              <div className="hero-actions compact-actions">
                <ButtonLink href="/contact" track="estimate:collision-page">Schedule Your Free Repair Plan</ButtonLink>
                <ButtonLink href="/insurance-claims-assistance" variant="light">
                  Insurance Claim Help
                </ButtonLink>
              </div>
            </div>
            <div className="check-list light-list">
              <span>Major collision and body damage</span>
              <span>Frame and unibody repair planning</span>
              <span>Paint and refinishing after body work</span>
              <span>Fit, finish, function, and delivery quality checks</span>
            </div>
          </div>
        </section>
        <section className="section muted-section">
          <div className="container">
            <SectionIntro
              eyebrow="Repair process"
              title="From inspection to final delivery"
              text="Customers can understand the major milestones before authorizing repairs, including hidden-damage checks, insurance review, paint, reassembly, and quality control."
            />
            <ProcessPreview full />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Before and after"
              title="Before-and-after repair examples"
              text="See repair examples that show visible damage, repair progress, finished panel fit, and the completed exterior appearance."
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
              eyebrow="Collision evaluation"
              title="Tell us what happened"
              text="Share vehicle details, insurance information, and damage photos so the shop can review the next step."
            />
            <ScheduleEvaluationSection />
          </div>
        </section>
        <LocationContactSection />
        <FinalCTA />
      </main>
    </PageShell>
  );
}
