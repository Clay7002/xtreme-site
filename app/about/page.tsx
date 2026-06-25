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
          text="Learn how Xtreme Collision Repair supports North Texas drivers with insurance help, repair planning, workmanship warranty support, and a customer-friendly estimate process."
        />
        <TrustBadges />
        <section className="section">
          <div className="container narrow-content">
            <SectionIntro
              title="Built around clear estimates, accountable repairs, and real follow-through"
              text="After a collision, customers need more than a number on a page. They need clear next steps, organized communication, and a shop that treats the repair plan seriously."
            />
            <p>
              Xtreme Collision Repair is a local collision repair and auto body
              shop in Carrollton, Texas. Customers can expect clear communication,
              lifetime limited workmanship warranty support, modern equipment,
              insurance claim help, and service across Carrollton, Addison,
              Dallas, Plano, Frisco, Richardson, and nearby North Texas
              communities.
            </p>
            <p>
              Drivers should also be able to see the people, the process, and the
              proof behind the repairs. That means real shop photos, customer
              reviews, and a plain explanation of how the team handles estimate
              review, repair planning, quality checks, and delivery.
            </p>
            <div className="check-list light-list">
              <span>Real customer reviews</span>
              <span>Warranty-backed workmanship</span>
              <span>Insurance and concierge support</span>
              <span>Clear repair planning</span>
            </div>
            <AreasLine />
          </div>
        </section>
        <CompanyStorySection />
        <section className="section" id="careers">
          <div className="container narrow-content">
            <SectionIntro
              eyebrow="Careers"
              title="Careers at Xtreme Collision Repair"
              text="Interested in joining Xtreme Collision Repair? Contact the shop to ask about technician, estimator, or office opportunities."
            />
          </div>
        </section>
        <section className="section muted-section">
          <div className="container">
            <SectionIntro
              eyebrow="Why customers choose local"
              title="A repair experience that feels easier to understand"
              text="Xtreme focuses on the decisions customers care about: communication, insurance help, repair planning, and confidence before pickup."
            />
            <WhyChooseSection />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
