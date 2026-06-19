import {
  CertificationStrip,
  FinalCTA,
  InnerHero,
  PageShell,
  SectionIntro,
  ValuePropsStrip,
} from "../components";

export default function CertificationsPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Certifications & equipment"
          title="OEM Certifications & Repair Equipment"
          text="Review the brand certification badges, repair equipment, and quality standards that support Xtreme Collision Repair's workmanship."
        />
        <CertificationStrip />
        <section className="section">
          <div className="container narrow-content">
            <SectionIntro
              eyebrow="Factory-correct repair planning"
              title="Standards behind the repair"
              text="Manufacturer and repair-program badges help explain why repair planning, documentation, equipment, and final quality checks matter after a collision."
            />
            <p>
              Xtreme maintains certification and repair-program information so
              drivers can better understand the standards, equipment, and repair
              planning behind the work.
            </p>
            <p className="certification-note">
              Certification and program details should always reflect current
              credentials and active manufacturer program participation.
            </p>
          </div>
        </section>
        <ValuePropsStrip />
        <FinalCTA />
      </main>
    </PageShell>
  );
}
