import type { Metadata } from "next";
import {
  ButtonLink,
  FinalCTA,
  InnerHero,
  PageShell,
  RepairStartChecklist,
  SectionIntro,
} from "../components";
import { RepairPlanRequestForm } from "../repair-plan-request-form";
import { siteInfo } from "../site-data";

export const metadata: Metadata = {
  title: "Contact Xtreme Collision Repair | Call, Get Directions, or Request Service",
  description:
    "Contact Xtreme Collision Repair in Carrollton, TX for collision repair, hail repair, insurance help, phone support, and directions to the shop.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Contact / Schedule a Repair Evaluation"
          title="Schedule a Repair Evaluation"
          text="Call the shop for the fastest response or use the contact details below to plan your visit, share vehicle information, and get directions."
        />
        <div className="container contact-hero-actions">
          <ButtonLink href={siteInfo.phoneHref} track="phone:contact-hero">
            Call Now
          </ButtonLink>
          <ButtonLink href={siteInfo.mapsHref} track="directions:contact-hero" variant="light">
            Get Directions
          </ButtonLink>
        </div>
        <section className="section" id="location">
          <div className="container contact-layout">
            <div>
              <SectionIntro
                eyebrow="Repair evaluation"
                title="Start with a quick call or visit."
                text="Use the contact details below for collision, hail, or insurance-related repair planning. Call if you need the fastest response."
              />
              <RepairPlanRequestForm />
              <div style={{ marginTop: "28px" }}>
                <RepairStartChecklist />
              </div>
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
                <strong>Concierge support:</strong> Rental car scheduling,
                pickup/drop-off coordination, and insurance communication can
                be discussed when you schedule your repair evaluation.
              </p>
              <div className="small-map">
                <iframe
                  title="Xtreme Collision Repair map location"
                  src={siteInfo.mapsEmbedHref}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a className="text-link" data-track="directions:contact-map" href={siteInfo.mapsHref}>
                  Open in Google Maps
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
