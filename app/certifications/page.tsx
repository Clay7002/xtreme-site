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
          title="Repair capability signals ready for verified credentials"
          text="This page gives Xtreme a professional place to display confirmed OEM certifications, I-CAR credentials, equipment details, and warranty information as they are provided."
        />
        <CertificationStrip />
        <section className="section">
          <div className="container narrow-content">
            <SectionIntro
              eyebrow="Factory-correct repair planning"
              title="Show customers the standards behind the repair."
              text="Customers want to know that collision repairs are planned carefully, documented clearly, and reviewed before delivery. Add verified certification logos here when Xtreme confirms them."
            />
            <p>
              The site currently uses service-related trust signals instead of
              unsupported manufacturer or industry certification claims. This
              keeps the presentation polished, accurate, and ready for real
              proof such as OEM badges, I-CAR Gold Class status, equipment
              photography, or documented training information.
            </p>
          </div>
        </section>
        <ValuePropsStrip />
        <FinalCTA />
      </main>
    </PageShell>
  );
}
