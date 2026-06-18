import {
  FinalCTA,
  InnerHero,
  PageShell,
  RepairAuthorizationForm,
  SectionIntro,
} from "../components";

export default function RepairAuthorizationPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Repair authorization"
          title="Repair Authorization for Ready-to-Proceed Customers"
          text="This page is separate from the simple estimate request and is intended for customers who are ready to authorize next repair steps."
        />
        <section className="section">
          <div className="container contact-layout">
            <div>
              <SectionIntro
                title="Complete authorization details"
                text="Collect customer, vehicle, claim, authorization, direction-of-pay notes if appropriate, digital signature, and date in one place."
              />
              <RepairAuthorizationForm />
            </div>
            <aside className="contact-panel">
              <h2>Before you submit</h2>
              <p>
                This form should only be used when a customer is ready to move
                beyond an estimate. The final authorization language should be
                approved by the business before live use.
              </p>
            </aside>
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
