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
          eyebrow="Contact / Get a Free Estimate"
          title="Request a free collision repair estimate"
          text="Share your phone number, vehicle year, make, model, insurance information, and damage notes. We'll get back to you within 24-48 hours."
        />
        <section className="section" id="location">
          <div className="container contact-layout">
            <div>
              <SectionIntro
                eyebrow="Estimate request"
                title="Tell us what happened"
                text="The form improves lead quality by collecting contact details, vehicle information, insurance details, damage photos, and preferred appointment timing."
              />
              <EstimateForm />
            </div>
            <aside className="contact-panel">
              <h2>Business information</h2>
              <p>
                <strong>Phone:</strong>{" "}
                <a className="text-link" href={siteInfo.phoneHref}>
                  {siteInfo.phoneLabel}
                </a>
              </p>
              <p>
                <strong>Address:</strong>{" "}
                <a className="text-link" href={siteInfo.mapsHref}>
                  {siteInfo.addressLabel}
                </a>
              </p>
              <p id="hours">
                <strong>Hours:</strong> {siteInfo.hoursLabel}
              </p>
              <p>
                <strong>Email:</strong> {siteInfo.emailLabel}
              </p>
              <p>
                <strong>Concierge support:</strong> Rental car scheduling,
                pickup/drop-off coordination, and insurance communication can
                be discussed when you request your estimate.
              </p>
              <div className="map-placeholder small-map" aria-label="Map placeholder">
                <strong>Google Map</strong>
                <span>Add verified Google Maps embed for the Carrollton shop.</span>
                <a className="text-link" href={siteInfo.mapsHref}>
                  Get directions
                </a>
              </div>
            </aside>
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
