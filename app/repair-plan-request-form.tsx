import { ButtonLink } from "./components";
import { siteInfo } from "./site-data";

export function RepairPlanRequestForm() {
  return (
    <section
      className="contact-panel schedule-evaluation-panel"
      id="repair-plan-request"
    >
      <div>
        <p className="eyebrow">Schedule a Repair Evaluation</p>
        <h2>Call the shop to review your repair needs and next steps.</h2>
        <p>
          Share your vehicle details, insurance information, and damage notes by
          phone for the fastest response.
        </p>
      </div>
      <div className="hero-actions compact-actions schedule-actions">
        <ButtonLink href={siteInfo.phoneHref} track="phone:form-note" variant="secondary">
          Call {siteInfo.phoneLabel}
        </ButtonLink>
        <ButtonLink href={siteInfo.mapsHref} variant="light" track="directions:form-note">
          Get Directions
        </ButtonLink>
      </div>
    </section>
  );
}
