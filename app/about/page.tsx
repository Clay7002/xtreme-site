import {
  AreasLine,
  FinalCTA,
  InnerHero,
  PageShell,
  SectionIntro,
  TrustBadges,
  WhyChooseSection,
} from "../components";

export default function AboutPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="About Xtreme Collision Repair"
          title="A local Euless body shop focused on clarity and confidence"
          text="This page introduces the shop in a professional, customer-friendly way while leaving room for verified owner history, team photos, equipment details, and real credentials once provided."
        />
        <TrustBadges />
        <section className="section">
          <div className="container narrow-content">
            <SectionIntro
              title="Built around repair quality, communication, and practical help"
              text="After a collision, customers need more than a repair estimate. They need a clear explanation of damage, help understanding insurance paperwork, and a shop that keeps the process organized."
            />
            <p>
              Xtreme Collision Repair is positioned as a trustworthy collision
              repair and auto body repair shop in Euless, Texas. The website
              keeps claims grounded and avoids listing certifications, warranty
              terms, or repair-time promises until those details are confirmed by
              the business.
            </p>
            <p>
              Real shop photography, team bios, equipment details, and verified
              Google reviews can be added to this page when available. That
              keeps the site honest today and ready to become more persuasive as
              the business adds proof.
            </p>
            <AreasLine />
          </div>
        </section>
        <section className="section muted-section">
          <div className="container">
            <SectionIntro
              eyebrow="Why customers choose local"
              title="A repair experience that feels easier to understand"
              text="The site emphasizes the decisions customers care about: communication, insurance help, repair planning, and confidence before pickup."
            />
            <WhyChooseSection />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
