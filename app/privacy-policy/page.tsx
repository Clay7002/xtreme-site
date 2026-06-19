import { FinalCTA, InnerHero, PageShell, SectionIntro } from "../components";

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Privacy Policy"
          title="Privacy Policy"
          text="This page explains the types of information customers may share when requesting an estimate or contacting Xtreme Collision Repair."
        />
        <section className="section">
          <div className="container narrow-content">
            <SectionIntro
              title="Information collected through the estimate form"
              text="Estimate requests may include contact information, vehicle details, insurance details, damage descriptions, appointment preferences, and photos if online upload is added in the future."
            />
            <p>
              Xtreme Collision Repair uses customer information to respond to
              estimate requests, discuss repair needs, coordinate next steps,
              and communicate about the vehicle. Customers should contact the
              shop directly with questions about how their information is used
              or updated.
            </p>
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
