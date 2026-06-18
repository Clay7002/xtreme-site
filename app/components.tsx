import Link from "next/link";
import type { ReactNode } from "react";
import {
  certificationLogos,
  faqs,
  footerQuickLinks,
  galleryItems,
  heroServiceArea,
  navLinks,
  nearbyAreas,
  processSteps,
  reviewPlaceholders,
  resourceArticles,
  servicePanels,
  services,
  siteInfo,
  socialLinks,
  trustBadges,
  workGalleryItems,
  whyChooseItems,
  type GalleryItem,
  type ResourceArticle,
  type Service,
} from "./site-data";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  track?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  track,
}: ButtonLinkProps) {
  return (
    <Link
      className={`button button-${variant}`}
      data-track={track ?? `cta:${href}`}
      href={href}
    >
      {children}
    </Link>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <TopContactBar />
      <Header />
      {children}
      <StickyBottomCTA />
      <Footer />
    </>
  );
}

function StickyBottomCTA() {
  return (
    <div className="sticky-mobile-cta" aria-label="Quick contact actions">
      <a data-track="phone:sticky-mobile" href={siteInfo.phoneHref}>
        Call Now
      </a>
      <Link data-track="estimate:sticky-mobile" href="/contact">
        Get Estimate
      </Link>
    </div>
  );
}

function TopContactBar() {
  return (
    <div className="top-contact">
      <div className="container top-contact-inner">
        <div className="top-contact-links">
          <a data-track="phone:top-bar" href={siteInfo.phoneHref}>
            <strong>Call:</strong> {siteInfo.phoneLabel}
          </a>
          <Link href="/contact#hours">
            <strong>Hours:</strong> {siteInfo.hoursLabel}
          </Link>
          <a data-track="directions:top-bar" href={siteInfo.mapsHref}>
            <strong>Address:</strong> {siteInfo.addressLabel}
          </a>
          <span className="top-service-area">Serving North Texas</span>
        </div>
        <div className="social-links" aria-label="Social media links">
          {socialLinks.map((link) => (
            <a
              className="social-icon"
              href={link.href}
              key={link.label}
              aria-label={link.label}
            >
              {link.short}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Xtreme Collision Repair home">
          <span className="brand-mark">X</span>
          <span>
            <strong>{siteInfo.name}</strong>
            <small>{siteInfo.city}, {siteInfo.region}</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            link.label === "Services" ? (
              <details className="nav-dropdown" key={link.href}>
                <summary>Services</summary>
                <div className="dropdown-menu">
                  <Link href="/services">All Services</Link>
                  {services.slice(0, 8).map((service) => (
                    <Link href={service.href} key={service.title}>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            )
          ))}
          </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">Menu</summary>
          <div className="mobile-menu-panel">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <div className="mobile-menu-services">
              <strong>Services</strong>
              {services.slice(0, 8).map((service) => (
                <Link href={service.href} key={service.title}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </details>
        <div className="header-cta">
          <ButtonLink href="/contact">Get a Free Estimate</ButtonLink>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <section>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">X</span>
            <span>
              <strong>{siteInfo.name}</strong>
              <small>Collision repair in {siteInfo.city}, TX</small>
            </span>
          </Link>
          <p>
            Factory-correct collision repair messaging, insurance claim support,
            lifetime warranty positioning, and a clear estimate path for North
            Texas drivers.
          </p>
          <p className="footer-note">
            Serving {nearbyAreas.join(", ")}.
          </p>
          <div className="footer-social social-links" aria-label="Footer social links">
            {socialLinks.map((link) => (
              <a
                className="social-icon"
                href={link.href}
                key={link.label}
                aria-label={link.label}
              >
                {link.short}
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2>Contact</h2>
          <ul className="footer-list">
            <li>
              Phone: <a data-track="phone:footer" href={siteInfo.phoneHref}>{siteInfo.phoneLabel}</a>
            </li>
            <li>
              Address: <a data-track="directions:footer" href={siteInfo.mapsHref}>{siteInfo.addressLabel}</a>
            </li>
            <li>
              Hours: <Link href="/contact#hours">{siteInfo.hoursLabel}</Link>
            </li>
            <li>Email: {siteInfo.emailLabel}</li>
          </ul>
          <div className="footer-cta">
            <ButtonLink href="/contact">Get a Free Estimate</ButtonLink>
          </div>
        </section>

        <section>
          <h2>Company</h2>
          <ul className="footer-list">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Services</h2>
          <ul className="footer-list">
            {services
              .filter((service) =>
                [
                  "collision-repair",
                  "hail-damage-paintless-dent-repair",
                  "auto-frame-repair",
                  "insurance-claims-assistance",
                  "color-matching-refinishing",
                ].includes(service.slug),
              )
              .map((service) => (
              <li key={service.title}>
                <Link href={service.href}>{service.title}</Link>
              </li>
            ))}
          </ul>
          <div className="footer-started">
            <h2>Get Started</h2>
            <Link data-track="estimate:footer" href="/contact">Get a Free Estimate</Link>
            <a data-track="phone:footer-started" href={siteInfo.phoneHref}>Call Now</a>
            <a data-track="directions:footer-started" href={siteInfo.mapsHref}>Directions</a>
          </div>
        </section>
      </div>

      <div className="container footer-map-row">
        <div className="map-placeholder" aria-label="Google Map placeholder">
          <strong>{siteInfo.shortAddressLabel}</strong>
          <span>{siteInfo.addressLabel}</span>
          <Link className="text-link" data-track="directions:footer-map" href={siteInfo.mapsHref}>
            Get directions
          </Link>
        </div>
        <p className="copyright">
          Copyright {new Date().getFullYear()} {siteInfo.name}. Contact details
          shown from the provided existing-site information.
        </p>
      </div>
    </footer>
  );
}

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <div className="hero-photo" />
      </div>
      <div className="container hero-content">
        <p className="eyebrow">5-Star collision repair in North Texas</p>
        <h1>5-Star Collision Repair in North Texas Backed by a Lifetime Limited Warranty</h1>
        <p className="hero-subheadline">
          Xtreme Collision Repair restores cars, trucks, and SUVs to factory
          standards with expert technicians, advanced equipment, and insurance
          claim support.
        </p>
        <p className="hero-service-area">{heroServiceArea}</p>
        <div className="hero-actions">
          <ButtonLink href="/contact" track="estimate:hero-primary">Get a Free Estimate</ButtonLink>
          <ButtonLink href={siteInfo.phoneHref} track="phone:hero-secondary" variant="secondary">
            Call Now
          </ButtonLink>
        </div>
        <Link className="hero-location-link" data-track="directions:hero-location" href="/contact#location">
          View Our Location
        </Link>
        <div className="hero-meta">
          <span>Carrollton auto body repair</span>
          <span>Works with all major insurance companies</span>
          <span>Lifetime limited workmanship warranty</span>
        </div>
      </div>
    </section>
  );
}

export function CertificationStrip() {
  return (
    <section className="certification-strip" aria-label="OEM certification logos">
      <div className="container certification-heading">
        <div>
          <p className="eyebrow">OEM certifications & repair programs</p>
          <h2>Brand Certifications Customers Can Recognize</h2>
        </div>
        <p>
          Xtreme Collision Repair displays manufacturer and repair program
          badges here so customers can quickly recognize familiar brands before
          they start an estimate.
        </p>
      </div>
      <div className="container certification-row">
        {certificationLogos.map((logo) => (
          <article
            className={`certification-logo-card certification-logo-card-${logo.tone ?? "light"}`}
            key={logo.name}
          >
            <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
            <span>{logo.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ValuePropsStrip() {
  return (
    <section className="trust-strip">
      <div className="container trust-grid">
        {trustBadges.map((badge) => (
          <div className="trust-badge" key={badge}>
            <span />
            {badge}
          </div>
        ))}
      </div>
    </section>
  );
}

export function TrustBadges() {
  return <ValuePropsStrip />;
}

export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-intro section-intro-${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export function IntroSection() {
  return (
    <section className="section intro-section" id="intro">
      <div className="container intro-layout">
        <div>
          <p className="eyebrow">Carrollton collision repair</p>
          <h2>Premium auto body repair with clear communication from start to finish.</h2>
        </div>
        <div>
          <p>
            Xtreme Collision Repair is a trusted auto body and collision repair
            shop serving Carrollton and the surrounding North Texas area. Our
            team repairs vehicles with a focus on safety, appearance, structure,
            and long-term value. From minor dents and scratches to major
            collision damage, we help customers navigate the repair process with
            clear communication and insurance claim support.
          </p>
          <div className="intro-bullets">
            <span>Lifetime limited warranty</span>
            <span>State-of-the-art facility and equipment</span>
            <span>Expert repair technicians</span>
            <span>Insurance claims assistance</span>
            <span>Repairs for cars, trucks, and SUVs</span>
          </div>
          <ButtonLink href="/contact" track="estimate:intro">Start the Process</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function ServicePanels() {
  return (
    <div className="service-panel-grid">
      {servicePanels.map((panel) => (
        <article className="service-panel" key={panel.title}>
          <h3>{panel.title}</h3>
          <p>{panel.text}</p>
          <Link className="text-link" href={panel.href}>
            {panel.cta}
          </Link>
        </article>
      ))}
    </div>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <div className="service-grid">
      {items.map((service) => (
        <article className="service-card" id={service.slug} key={service.title}>
          <div>
            <p className="service-seo">{service.seo}</p>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
          </div>
          <Link className="text-link" href={service.href}>
            Learn More
          </Link>
        </article>
      ))}
    </div>
  );
}

export function CompanyStorySection() {
  return (
    <section className="section story-section">
      <div className="container story-layout">
        <div className="team-photo-placeholder" aria-label="Team photo placeholder">
          <span>Shop Equipment</span>
        </div>
        <div>
          <p className="eyebrow">Local shop story</p>
          <h2>Local Collision Repair With a Reputation for Quality</h2>
          <p>
            Xtreme Collision Repair is proud to serve drivers throughout
            Carrollton and North Texas. The shop focuses on honest
            communication, quality repairs, and helping customers get back on
            the road safely after an accident.
          </p>
          <div className="story-proof-grid">
            <span>Local Carrollton presence</span>
            <span>Real repair bay photos</span>
            <span>Gallery-ready repair work</span>
          </div>
          <ButtonLink href="/about" track="cta:about-story">About Xtreme</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function ResourcesPreview() {
  return (
    <div className="resource-grid">
      {resourceArticles.map((article) => (
        <article className="resource-card" key={article.title}>
          <h3>{article.title}</h3>
          <p>{article.text}</p>
          <Link className="text-link" href={article.href}>
            Read Resource
          </Link>
        </article>
      ))}
    </div>
  );
}

export function LocationContactSection() {
  return (
    <section className="section location-section" id="location">
      <div className="container location-layout">
        <div>
          <p className="eyebrow">Location info</p>
          <h2>Visit Xtreme Collision Repair</h2>
          <p>
            Conveniently located in Carrollton, Xtreme Collision Repair serves
            drivers from Addison, Dallas, Plano, Frisco, Richardson, and
            surrounding North Texas communities. Use the estimate form, call the
            shop, or get directions before drop off.
          </p>
          <div className="location-actions">
            <ButtonLink href="/contact" track="estimate:location">Start the Process</ButtonLink>
            <ButtonLink href={siteInfo.mapsHref} track="directions:location" variant="light">
              Get Directions
            </ButtonLink>
          </div>
        </div>
        <aside className="location-card">
          <h3>Shop Information</h3>
          <p>
            <strong>Phone:</strong>{" "}
            <a className="text-link" data-track="phone:location" href={siteInfo.phoneHref}>
              {siteInfo.phoneLabel}
            </a>
          </p>
          <p>
            <strong>Address:</strong>{" "}
            <a className="text-link" data-track="directions:location-card" href={siteInfo.mapsHref}>
              {siteInfo.addressLabel}
            </a>
          </p>
          <p id="hours">
            <strong>Hours:</strong> {siteInfo.hoursLabel}
          </p>
          <p>
            <strong>Email:</strong> {siteInfo.emailLabel}
          </p>
          <div className="map-placeholder small-map" aria-label="Google Map placeholder">
            <strong>Google Map</strong>
            <span>Embed the verified map for {siteInfo.shortAddressLabel}.</span>
            <a className="text-link" data-track="directions:map-placeholder" href={siteInfo.mapsHref}>
              Open in Google Maps
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function ProcessPreview({ full = false }: { full?: boolean }) {
  const steps = full ? processSteps : processSteps.slice(0, 4);

  return (
    <div className={full ? "process-grid process-grid-full" : "process-grid"}>
      {steps.map((step, index) => (
        <article className="process-step" key={step.title}>
          <span>{index + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>
      ))}
    </div>
  );
}

export function InsuranceSection() {
  return (
    <section className="section dark-section">
      <div className="container split-section">
        <div>
          <p className="eyebrow">Insurance claim assistance</p>
          <h2>We work with all major insurance companies</h2>
          <p>
            After an accident, Xtreme Collision Repair helps customers review
            claim details, understand estimates and supplements, and advocate
            for a proper repair plan that returns the vehicle to pre-accident
            condition.
          </p>
          <div className="hero-actions compact-actions">
            <ButtonLink href="/insurance-claims-assistance" track="insurance:home-banner">Start Your Claim Repair</ButtonLink>
            <ButtonLink href={siteInfo.phoneHref} track="phone:insurance-banner" variant="secondary">
              Call {siteInfo.phoneLabel}
            </ButtonLink>
          </div>
        </div>
        <div className="check-list">
          <span>All major insurance companies</span>
          <span>Estimate and supplement support</span>
          <span>Damage documentation and photo review</span>
          <span>Clear communication from estimate to delivery</span>
        </div>
      </div>
    </section>
  );
}

export function BeforeAfterSection({ full = false }: { full?: boolean }) {
  const items = full ? galleryItems : galleryItems.slice(0, 3);

  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <article className="before-after-card" key={item.title}>
          <BeforeAfterVisual item={item} />
          <div className="before-after-copy">
            <p className="gallery-category">{item.category}</p>
            <h3>{item.title}</h3>
            <p>
              <strong>Before:</strong> {item.damage}
            </p>
            <p>
              <strong>After:</strong> {item.finished}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function BeforeAfterVisual({ item }: { item: GalleryItem }) {
  return (
    <div className="before-after-visual photo-compare" aria-label={`${item.title} before and after photos`}>
      <figure className="before-panel before-after-panel">
        <img src={item.beforeSrc} alt={item.beforeAlt} loading="lazy" decoding="async" />
        <figcaption>Before</figcaption>
      </figure>
      <figure className="after-panel before-after-panel">
        <img src={item.afterSrc} alt={item.afterAlt} loading="lazy" decoding="async" />
        <figcaption>After</figcaption>
      </figure>
    </div>
  );
}

export function WorkGallerySection({ limit }: { limit?: number }) {
  const items = limit ? workGalleryItems.slice(0, limit) : workGalleryItems;

  return (
    <div className="work-gallery-grid">
      {items.map((item) => (
        <article className="work-photo-card" key={`${item.title}-${item.src}`}>
          <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
          <div className="work-photo-body">
            <p>{item.tag}</p>
            <h3>{item.title}</h3>
            <span>{item.text}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <div className="reviews-block" id="reviews">
      <div className="review-summary">
        <p className="eyebrow">Testimonials & Google reviews</p>
        <h2>From Our Customers</h2>
        <p>
          Add real Google Reviews, SureCritic feedback, or approved customer
          testimonials here. The placeholders show the intended format without
          inventing customer names or ratings.
        </p>
        <div className="review-actions">
          <ButtonLink href="/reviews" track="review:read-more">Read More Reviews</ButtonLink>
          <ButtonLink href={siteInfo.googleLeaveReviewHref} track="review:leave-review" variant="light">
            Leave a Review
          </ButtonLink>
        </div>
      </div>
      <div className="review-carousel" aria-label="Review carousel placeholder">
        {reviewPlaceholders.map((review, index) => (
          <article className="review-card" key={`${review.label}-${index}`}>
            <div className="stars" aria-label="Star rating placeholder">
              <span aria-hidden="true">&#9733;</span>
              <span aria-hidden="true">&#9733;</span>
              <span aria-hidden="true">&#9733;</span>
              <span aria-hidden="true">&#9733;</span>
              <span aria-hidden="true">&#9733;</span>
            </div>
            <h3>{review.label}</h3>
            <p>{review.body}</p>
            <p className="review-attribution">First name L. - verified review placeholder</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function WhyChooseSection() {
  return (
    <div className="reason-grid">
      {whyChooseItems.map((reason, index) => (
        <article className="reason-card" key={reason.title}>
          <span className="reason-icon" aria-hidden="true">
            {index + 1}
          </span>
          <h3>{reason.title}</h3>
          <p>{reason.text}</p>
        </article>
      ))}
    </div>
  );
}

export function FAQSection() {
  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <details className="faq-item" key={faq.question}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <div>
          <p className="eyebrow">Ready for a clear next step?</p>
          <h2>Get a free collision repair estimate in Carrollton, TX.</h2>
          <p>
            Call {siteInfo.phoneLabel} or send vehicle details, photos, and
            insurance information. We&apos;ll get back to you within 24-48
            business hours.
          </p>
        </div>
        <div className="cta-actions">
          <ButtonLink href="/contact" track="estimate:final">Get a Free Estimate</ButtonLink>
          <ButtonLink href={siteInfo.phoneHref} track="phone:final" variant="secondary">
            Call {siteInfo.phoneLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function EstimateForm() {
  return (
    <form className="estimate-form" id="contact" action="/contact" data-track="form:estimate" method="get">
      <h2>Request a Free Estimate</h2>
      <div className="form-grid">
        <label>
          First Name
          <input name="first-name" type="text" required />
        </label>
        <label>
          Last Name
          <input name="last-name" type="text" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Vehicle year
          <input name="vehicle-year" type="text" inputMode="numeric" />
        </label>
        <label>
          Vehicle make
          <input name="vehicle-make" type="text" />
        </label>
        <label>
          Vehicle model
          <input name="vehicle-model" type="text" />
        </label>
        <label>
          Insurance company, optional
          <input name="insurance-company" type="text" />
        </label>
        <label>
          Claim number, optional
          <input name="claim-number" type="text" />
        </label>
        <label className="form-wide">
          Description of damage
          <textarea name="damage-description" rows={5} required />
        </label>
        <label className="form-wide">
          Upload photos placeholder
          <input name="damage-photos" type="file" multiple />
        </label>
        <label>
          Preferred appointment date
          <input name="preferred-date" type="date" />
        </label>
        <label>
          Preferred contact method
          <select name="preferred-contact">
            <option>Phone call</option>
            <option>Text message</option>
            <option>Email</option>
          </select>
        </label>
        <label className="form-wide consent-label">
          <input name="follow-up-consent" type="checkbox" required />
          <span>
            I agree that Xtreme Collision Repair may contact me by phone, text,
            or email about my estimate request.
          </span>
        </label>
      </div>
      <p className="form-note">
        We&apos;ll review your request and follow up within 24-48 business
        hours. Need help now?{" "}
        <a className="text-link" data-track="phone:form-note" href={siteInfo.phoneHref}>
          Call {siteInfo.phoneLabel}
        </a>
        .
      </p>
      <button className="button button-primary" data-track="form-submit:estimate" type="submit">
        Get a Free Estimate
      </button>
    </form>
  );
}

export function RepairAuthorizationForm() {
  return (
    <form className="estimate-form" id="repair-authorization" action="/repair-authorization" data-track="form:repair-authorization" method="get">
      <h2>Repair Authorization</h2>
      <p className="form-note">
        This form is for customers ready to proceed with repairs. Final
        authorization language, direction of pay wording, and digital signature
        handling should be reviewed by the business before live use.
      </p>
      <div className="form-grid">
        <label>
          Customer name
          <input name="customer-name" type="text" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" required />
        </label>
        <label>
          Email
          <input name="email" type="email" required />
        </label>
        <label>
          Address
          <input name="address" type="text" />
        </label>
        <label>
          Vehicle year / make / model
          <input name="vehicle" type="text" required />
        </label>
        <label>
          VIN
          <input name="vin" type="text" />
        </label>
        <label>
          Insurance company
          <input name="insurance-company" type="text" />
        </label>
        <label>
          Claim number
          <input name="claim-number" type="text" />
        </label>
        <label className="form-wide">
          Direction of pay notes, if appropriate
          <textarea name="direction-of-pay" rows={4} />
        </label>
        <label className="form-wide consent-label">
          <input name="authorization" type="checkbox" required />
          <span>
            I authorize Xtreme Collision Repair to review repair needs and
            contact me about next steps for this vehicle.
          </span>
        </label>
        <label>
          Digital signature
          <input name="digital-signature" type="text" required />
        </label>
        <label>
          Date
          <input name="date" type="date" required />
        </label>
      </div>
      <button className="button button-primary" data-track="form-submit:repair-authorization" type="submit">
        Submit Authorization
      </button>
    </form>
  );
}

export function ResourceArticleDetail({ article }: { article: ResourceArticle }) {
  return (
    <>
      <InnerHero
        eyebrow="Collision repair resources"
        title={article.title}
        text={article.text}
      />
      <section className="section">
        <div className="container service-detail-layout">
          <article className="article-content">
            <div className="article-callout">
              <strong>Need help with a repair now?</strong>
              <p>
                Xtreme Collision Repair serves Carrollton and nearby North Texas
                communities with estimate requests, insurance claim support, and
                clear repair planning.
              </p>
              <ButtonLink href="/contact" track={`estimate:article:${article.slug}`}>Get a Free Estimate</ButtonLink>
            </div>
            {article.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="article-links">
              <h2>Related next steps</h2>
              {article.relatedLinks.map((link) => (
                <Link className="text-link" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </article>
          <aside className="estimate-panel">
            <h2>Local help in Carrollton</h2>
            <p>
              Questions about damage, insurance estimates, supplements, or the
              repair process? Call or send an estimate request.
            </p>
            <ButtonLink href="/contact" track={`estimate:article-sidebar:${article.slug}`}>Start the Process</ButtonLink>
          </aside>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

export function InnerHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="inner-hero">
      <div className="container inner-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <>
      <InnerHero eyebrow={service.seo} title={service.title} text={service.intro} />
      <section className="section">
        <div className="container service-detail-layout">
          <div>
            <SectionIntro
              title={`${service.title} in Carrollton, TX`}
              text={`This page is structured for customers searching for ${service.seo.toLowerCase()} and related auto body repair support in ${nearbyAreas.join(", ")}.`}
            />
            <div className="check-list light-list">
              {service.bullets.map((bullet) => (
                <span key={bullet}>{bullet}</span>
              ))}
            </div>
          </div>
          <aside className="estimate-panel">
            <h2>Need an estimate?</h2>
            <p>
              Share vehicle details, insurance information, claim number if
              available, and damage photos so the shop can review the request.
            </p>
            <ButtonLink href="/contact">Get a Free Estimate</ButtonLink>
          </aside>
        </div>
      </section>
      <section className="section muted-section">
        <div className="container">
          <SectionIntro
            eyebrow="Repair process"
            title="A clear path from estimate to delivery"
            text="The same customer-friendly process supports collision repair, paint work, hail damage, and insurance repair planning."
          />
          <ProcessPreview />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

export function AreasLine() {
  return (
    <p className="areas-line">
      Nearby service areas: {nearbyAreas.join(", ")}.
    </p>
  );
}
