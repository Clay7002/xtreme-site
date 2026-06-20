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
              Modern vehicles use advanced materials, sensors, restraint systems,
              electronics, and structural designs. Certifications and repair
              programs help show that a shop is paying attention to the procedures,
              equipment, and training expectations behind proper collision repair.
            </p>
            <p>
              Xtreme maintains certification and repair-program information so
              drivers can better understand the standards, equipment, and repair
              planning behind the work before they authorize repairs.
            </p>
            <div className="check-list light-list">
              <span>Manufacturer repair procedures where applicable</span>
              <span>Structural and unibody repair planning</span>
              <span>Paint, refinish, and color-match workflow</span>
              <span>Safety-system and calibration coordination</span>
              <span>Final fit, finish, and quality checks</span>
            </div>
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
