import {
  AreasLine,
  CompanyStorySection,
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
          title="A local Carrollton body shop focused on clarity, confidence, and accountable repairs"
          text="Learn how Xtreme Collision Repair supports North Texas drivers with insurance help, repair planning, workmanship warranty messaging, and a customer-friendly estimate process."
        />
        <TrustBadges />
        <section className="section">
          <div className="container narrow-content">
            <SectionIntro
              title="Built around repair quality, communication, and practical claim help"
              text="After a collision, customers need more than a number on a repair estimate. They need clear next steps, organized insurance communication, and a shop that treats the repair plan seriously."
            />
            <p>
              Xtreme Collision Repair is positioned as a trustworthy collision
              repair and auto body repair shop in Carrollton, Texas. The site
              keeps customer-facing proof points close to the top: lifetime
              limited warranty, modern facility and equipment, expert
              technicians, insurance claim assistance, and service across
              Carrollton, Addison, Dallas, Plano, Frisco, Richardson, and nearby
              North Texas communities.
            </p>
            <p>
              Confirmed founding year, owner or team photography, awards,
              dealership relationships, community involvement, and verified
              reviews can be added here when available. That keeps the site
              honest today and ready to become more persuasive as real proof is
              gathered.
            </p>
            <AreasLine />
          </div>
        </section>
        <CompanyStorySection />
        <section className="section" id="careers">
          <div className="container narrow-content">
            <SectionIntro
              eyebrow="Careers"
              title="Careers at Xtreme Collision Repair"
              text="Use this section for future hiring needs, technician openings, estimator roles, office positions, and application instructions when the business is ready to publish them."
            />
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
