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
              title="Built around repair quality, communication, and practical claim help"
              text="After a collision, customers need more than a number on a repair estimate. They need clear next steps, organized insurance communication, and a shop that treats the repair plan seriously."
            />
            <p>
              Xtreme Collision Repair is a trusted collision repair and auto
              body repair shop in Carrollton, Texas. Customers can expect clear
              communication, lifetime limited workmanship warranty support,
              modern facility and equipment, experienced technicians, insurance
              claim assistance, and service across Carrollton, Addison, Dallas,
              Plano, Frisco, Richardson, and nearby North Texas communities.
            </p>
            <p>
              Drivers can also look for shop photos, team details, awards,
              community involvement, and verified customer reviews as Xtreme
              continues sharing more about the people and process behind the
              repairs.
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
              text="Interested in joining Xtreme Collision Repair? Future openings for technicians, estimators, and office roles can be shared here when positions are available."
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
