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
                text="Provide customer, vehicle, claim, authorization, payment direction, signature, and date details so the shop can review the next step."
              />
              <RepairAuthorizationForm />
            </div>
            <aside className="contact-panel">
              <h2>Before you submit</h2>
              <p>
                This form is for customers who are ready to move beyond an
                estimate. Xtreme will confirm final repair authorization details
                directly before work proceeds.
              </p>
            </aside>
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
