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
              text="Estimate requests may include contact information, vehicle details, insurance details, damage descriptions, appointment preferences, and any photos shared with the shop for review."
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
        <section className="section muted-section" id="sms-messaging">
          <div className="container narrow-content">
            <SectionIntro
              title="SMS and text message consent"
              text="If you opt in, Xtreme Collision Repair may text you about your repair request, appointment updates, estimate status, or follow-up on the vehicle you asked us to review."
            />
            <p>
              Message frequency varies. Message and data rates may apply. Reply
              STOP to opt out and HELP for help. Consent is not a condition of
              purchase. We use the phone number you provide to support your
              service request and related repair communication.
            </p>
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
