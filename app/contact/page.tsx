import {
  EstimateForm,
  FinalCTA,
  InnerHero,
  PageShell,
  SectionIntro,
} from "../components";
import { siteInfo } from "../site-data";

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Contact / Get an Estimate"
          title="Request a free collision repair estimate"
          text="Share vehicle details, insurance information, claim number if available, and damage notes so the shop can review the request."
        />
        <section className="section">
          <div className="container contact-layout">
            <div>
              <SectionIntro
                eyebrow="Estimate request"
                title="Tell us what happened"
                text="The form includes the fields customers expect after a collision or hail storm. Connect it to the preferred intake tool before going live."
              />
              <EstimateForm />
            </div>
            <aside className="contact-panel">
              <h2>Business information</h2>
              <p>
                <strong>Phone:</strong> {siteInfo.phoneLabel}
              </p>
              <p>
                <strong>Address:</strong> {siteInfo.addressLabel}
              </p>
              <p>
                <strong>Hours:</strong> {siteInfo.hoursLabel}
              </p>
              <p>
                <strong>Email:</strong> {siteInfo.emailLabel}
              </p>
              <div className="map-placeholder small-map" aria-label="Map placeholder">
                <strong>Map placeholder</strong>
                <span>Add verified Google Maps embed.</span>
              </div>
            </aside>
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
