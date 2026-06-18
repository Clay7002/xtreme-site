import { FinalCTA, InnerHero, PageShell, SectionIntro } from "../components";

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Privacy Policy"
          title="Privacy policy placeholder"
          text="Replace this page with the business-approved privacy policy before connecting live analytics, forms, review embeds, or advertising pixels."
        />
        <section className="section">
          <div className="container narrow-content">
            <SectionIntro
              title="Information collected through the estimate form"
              text="The form is structured to collect contact information, vehicle details, insurance details, damage descriptions, appointment preferences, and photo uploads once a live form handler is connected."
            />
            <p>
              This placeholder page should be reviewed by the business and its
              legal advisor before launch. It should explain how estimate
              requests are stored, how photos are handled, how customers can
              request updates, and which third-party tools are used for maps,
              reviews, analytics, CRM, email, or advertising.
            </p>
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
