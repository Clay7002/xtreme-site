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
          text="Share your phone number, vehicle year, make, model, insurance information, and damage notes. For the fastest response, call the shop directly."
        />
        <section className="section" id="location">
          <div className="container contact-layout">
            <div>
              <SectionIntro
                eyebrow="Estimate request"
                title="Tell us what happened"
                text="Start with the details below, then call the shop for the fastest response and next-step guidance."
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
              <div className="map-placeholder small-map" aria-label="Xtreme Collision Repair map location">
                <strong>{siteInfo.shortAddressLabel}</strong>
                <span>{siteInfo.addressLabel}</span>
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
