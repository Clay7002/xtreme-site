import Link from "next/link";

import {
  ButtonLink,
  FAQSection,
  FinalCTA,
  InnerHero,
  PageShell,
  ProcessPreview,
  SectionIntro,
} from "../components";

export const metadata = {
  title: "Insurance Claims Assistance for Collision Repair | Carrollton, TX",
  description:
    "Insurance claims assistance for collision repair in Carrollton, TX, including estimate review, supplements, claim documentation, and rental scheduling guidance.",
};

export default function InsuranceClaimsAssistancePage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Insurance claims assistance collision repair"
          title="Insurance Claims Assistance for Collision Repair"
          text="Insurance estimates do not always capture the full damage after an accident. Xtreme Collision Repair documents visible and hidden damage, communicates with insurance companies, and helps customers understand the next steps."
        />
        <section className="section">
          <div className="container split-section split-section-light">
            <div>
              <SectionIntro
                eyebrow="Your repair choice"
                title="You have the right to ask questions and choose a repair shop"
                text="Xtreme helps customers understand claim numbers, insurer estimates, photos, supplements, approvals, rental coordination, and repair planning. This page is educational and does not provide legal advice."
              />
              <div className="hero-actions compact-actions">
                <ButtonLink href="/contact" track="estimate:insurance-page">Start Your Claim Repair</ButtonLink>
                <ButtonLink href="/resources/what-is-a-collision-repair-supplement" variant="light">
                  What Is a Supplement?
                </ButtonLink>
                <ButtonLink href="/resources/what-is-insurance-steering" variant="light">
                  Insurance Steering
                </ButtonLink>
              </div>
            </div>
            <div className="check-list light-list">
              <span>Initial estimate review and claim documentation</span>
              <span>Hidden damage and supplement explanation</span>
              <span>Photo, parts, and repair-plan organization</span>
              <span>Rental car scheduling guidance when available</span>
            </div>
          </div>
        </section>
        <section className="section muted-section">
          <div className="container">
            <SectionIntro
              eyebrow="How Xtreme helps"
              title="Insurance support fits into the full repair process"
              text="The process keeps customers oriented from estimate request through insurance review, hidden-damage documentation, repairs, quality checks, and vehicle delivery."
            />
            <ProcessPreview full />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Customer education"
              title="Helpful claim and repair-rights resources"
              text="Learn what to ask before choosing a shop, how supplements work, and why written warranty terms matter."
            />
            <div className="service-panel-grid">
              <article className="service-panel">
                <h3>Can I choose my body shop?</h3>
                <p>Understand repair-shop choice, insurer estimates, and the questions worth asking before repairs begin.</p>
                <Link className="text-link" href="/resources/do-i-have-to-use-insurance-preferred-body-shop">Read the guide</Link>
              </article>
              <article className="service-panel">
                <h3>What is insurance steering?</h3>
                <p>Learn what it means when an insurer strongly recommends a preferred repair facility after an accident.</p>
                <Link className="text-link" href="/resources/what-is-insurance-steering">Read the guide</Link>
              </article>
              <article className="service-panel">
                <h3>Who guarantees the repair?</h3>
                <p>Know what to ask about workmanship warranty, repair responsibility, and written warranty terms.</p>
                <Link className="text-link" href="/resources/who-guarantees-the-repair">Read the guide</Link>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container faq-container">
            <SectionIntro
              eyebrow="Insurance FAQ"
              title="Common claim questions"
              text="Clear answers help customers understand supplements, repair-shop choice, rental scheduling, and warranty expectations."
            />
            <FAQSection />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
