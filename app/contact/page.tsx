import type { Metadata } from "next";
import {
  FinalCTA,
  InnerHero,
  PageShell,
  ReviewsSection,
  RepairStartChecklist,
  SectionIntro,
} from "../components";
import { RepairPlanRequestForm } from "../repair-plan-request-form";
import { siteInfo } from "../site-data";

export const metadata: Metadata = {
  title: "Contact Xtreme Collision Repair | Schedule Your Free Repair Plan",
  description:
    "Contact Xtreme Collision Repair in Carrollton, TX for collision repair, hail repair, insurance help, and a free repair-plan review with photo upload.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Contact / Schedule Your Free Repair Plan"
          title="Schedule Your Free Repair Plan"
          text="Share your phone number, vehicle details, insurance information, and damage photos so the team can review the repair plan."
        />
        <ReviewsSection />
        <section className="section" id="location">
          <div className="container contact-layout">
            <div>
              <SectionIntro
                eyebrow="Repair plan request"
                title="Share the basics and upload your photos."
                text="Use the form below to start a collision or hail repair review. The more details you include, the easier it is for the shop to prepare the next step."
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
