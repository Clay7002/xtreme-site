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
          title="OEM Certification Logos & Repair Equipment"
          text="Customers can review the brand certification badges, repair equipment, and quality standards that support Xtreme Collision Repair's workmanship."
        />
        <CertificationStrip />
        <section className="section">
          <div className="container narrow-content">
            <SectionIntro
              eyebrow="Factory-correct repair planning"
              title="Show customers the standards behind the repair."
              text="Manufacturer and repair-program badges help customers understand that repair planning, documentation, equipment, and final quality checks matter after a collision."
            />
            <p>
              The logo section above is built to stay easy to update as
              certification status changes or additional brand credentials are
              approved. Xtreme can continue adding verified badges, equipment
              photos, training information, and warranty details in this same
              section.
            </p>
            <p className="certification-note">
              Certification logos should reflect current, business-approved
              credentials and should be reviewed whenever manufacturer program
              participation changes.
            </p>
          </div>
        </section>
        <ValuePropsStrip />
        <FinalCTA />
      </main>
    </PageShell>
  );
}
