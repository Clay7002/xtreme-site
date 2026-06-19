import {
  EstimateForm,
  FinalCTA,
  InnerHero,
  PageShell,
  RepairStartChecklist,
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
          text="Share your phone number, vehicle year, make, model, insurance information, and damage notes. For the fastest response while this preview form is not connected to a live backend, call the shop directly."
        />
        <section className="section" id="location">
          <div className="container contact-layout">
            <div>
              <SectionIntro
                eyebrow="Estimate request"
                title="Tell us what happened"
                text="The form shows the intended estimate intake flow for review. Live submission and photo upload still need backend approval before launch."
              />
              <RepairStartChecklist />
              <EstimateForm />
            </div>
            <aside className="contact-panel">
              <h2>Business information</h2>
              <p>
                <strong>Phone:</strong>{" "}
                <a className="text-link" data-track="phone:contact-panel" href={siteInfo.phoneHref}>
                  {siteInfo.phoneLabel}
                </a>
              </p>
              <p>
                <strong>Address:</strong>{" "}
                <a className="text-link" data-track="directions:contact-panel" href={siteInfo.mapsHref}>
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
                <a className="text-link" data-track="directions:contact-map" href={siteInfo.mapsHref}>
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
