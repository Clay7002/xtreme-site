import Link from "next/link";
import type { ReactNode } from "react";
import {
  certificationSignals,
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
  whyChooseItems,
  type Service,
} from "./site-data";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link className={`button button-${variant}`} href={href}>
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
      <Footer />
    </>
  );
}

function TopContactBar() {
  return (
    <div className="top-contact">
      <div className="container top-contact-inner">
        <div className="top-contact-links">
          <a href={siteInfo.phoneHref}>
            <strong>Call:</strong> {siteInfo.phoneLabel}
          </a>
          <Link href="/contact#hours">
            <strong>Hours:</strong> {siteInfo.hoursLabel}
          </Link>
          <a href={siteInfo.mapsHref}>
            <strong>Address:</strong> {siteInfo.addressLabel}
          </a>
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
          <h2>Business Info</h2>
          <ul className="footer-list">
            <li>
              Phone: <a href={siteInfo.phoneHref}>{siteInfo.phoneLabel}</a>
            </li>
            <li>
              Address: <a href={siteInfo.mapsHref}>{siteInfo.addressLabel}</a>
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
          <h2>Quick Links</h2>
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
            {services.slice(0, 6).map((service) => (
              <li key={service.title}>
                <Link href={service.href}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="container footer-map-row">
        <div className="map-placeholder" aria-label="Google Map placeholder">
          <strong>{siteInfo.shortAddressLabel}</strong>
          <span>{siteInfo.addressLabel}</span>
          <Link className="text-link" href={siteInfo.mapsHref}>
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
        <h1>Factory-Certified Auto Body Repair Backed by a Lifetime Warranty.</h1>
        <p className="hero-subheadline">
          {heroServiceArea}
        </p>
        <div className="hero-actions">
          <ButtonLink href="/contact">Get a Free Estimate</ButtonLink>
          <ButtonLink href="/contact#location" variant="secondary">
            Location Info
          </ButtonLink>
        </div>
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
    <section className="certification-strip" aria-label="Repair capability signals">
      <div className="container certification-row">
        {certificationSignals.map((signal) => (
          <article className="certification-badge" key={signal.label}>
            <span aria-hidden="true">{signal.label.slice(0, 1)}</span>
            <div>
              <h2>{signal.label}</h2>
              <p>{signal.text}</p>
            </div>
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
          <h2>North Texas body repair built around confidence after a collision.</h2>
        </div>
        <div>
          <p>
            Xtreme Collision Repair serves Carrollton, Addison, Dallas, Plano,
            Frisco, Richardson, and surrounding North Texas communities with
            careful repair planning, insurance claim support, and a lifetime
            limited workmanship warranty. Confirmed founding year, OEM
            certifications, awards, and team photography can be added here as
            soon as the business provides them.
          </p>
          <ButtonLink href="/contact">Start the Process</ButtonLink>
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
            Learn More
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
          <span>Team Photo</span>
        </div>
        <div>
          <p className="eyebrow">Local shop story</p>
          <h2>Built for drivers who want a real shop, clear answers, and accountable work.</h2>
          <p>
            This section is structured for Xtreme&apos;s local or family-owned
            story, including the confirmed founding year, owner or team photo,
            awards, dealership relationships, and community involvement. The
            current copy stays honest while giving the business a polished place
            to add real proof.
          </p>
          <div className="story-proof-grid">
            <span>Local Carrollton presence</span>
            <span>Owner/team photo ready</span>
            <span>Awards and community proof ready</span>
          </div>
          <ButtonLink href="/about">Learn More</ButtonLink>
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
          <h2>Visit Xtreme Collision Repair in Carrollton.</h2>
          <p>
            Use the estimate form, call the shop, or get directions before drop
            off. Concierge services can include rental car scheduling,
            pickup/drop-off coordination, and claim communication support when
            applicable.
          </p>
          <div className="location-actions">
            <ButtonLink href="/contact">Get a Free Estimate</ButtonLink>
            <ButtonLink href={siteInfo.mapsHref} variant="light">
              Get Directions
            </ButtonLink>
          </div>
        </div>
        <aside className="location-card">
          <h3>Shop Information</h3>
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
          <div className="map-placeholder small-map" aria-label="Google Map placeholder">
            <strong>Google Map</strong>
            <span>Embed the verified map for {siteInfo.shortAddressLabel}.</span>
            <a className="text-link" href={siteInfo.mapsHref}>
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
            <ButtonLink href="/contact">Get a Free Estimate</ButtonLink>
            <ButtonLink href={siteInfo.phoneHref} variant="secondary">
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
  const items = full ? galleryItems : galleryItems.slice(0, 2);

  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <article className="before-after-card" key={item.title}>
          <BeforeAfterVisual />
          <div className="before-after-copy">
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

function BeforeAfterVisual() {
  return (
    <div className="before-after-visual" aria-label="Before and after photo placeholder">
      <div className="before-panel">
        <span>Before</span>
        <div className="mini-car damaged">
          <i />
        </div>
      </div>
      <div className="after-panel">
        <span>After</span>
        <div className="mini-car repaired">
          <i />
        </div>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  return (
    <div className="reviews-block" id="reviews">
      <div className="review-summary">
        <p className="eyebrow">Testimonials & Google reviews</p>
        <h2>Social proof ready for verified reviews.</h2>
        <p>
          Add real Google Reviews, SureCritic feedback, or approved customer
          testimonials here. The placeholders show the intended format without
          inventing customer names or ratings.
        </p>
        <div className="review-actions">
          <ButtonLink href="/reviews">Read More Reviews</ButtonLink>
          <ButtonLink href={siteInfo.googleLeaveReviewHref} variant="light">
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
            insurance information. We&apos;ll get back to you within 24-48 hours.
          </p>
        </div>
        <div className="cta-actions">
          <ButtonLink href="/contact">Get a Free Estimate</ButtonLink>
          <ButtonLink href={siteInfo.phoneHref} variant="secondary">
            Call {siteInfo.phoneLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function EstimateForm() {
  return (
    <form className="estimate-form" id="contact" action="/contact" method="get">
      <div className="form-grid">
        <label>
          Name
          <input name="name" type="text" required />
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
          Insurance company
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
          Preferred appointment time
          <input name="preferred-time" type="datetime-local" />
        </label>
        <label>
          Preferred contact method
          <select name="preferred-contact">
            <option>Phone call</option>
            <option>Text message</option>
            <option>Email</option>
          </select>
        </label>
      </div>
      <p className="form-note">
        We&apos;ll get back to you within 24-48 hours. Form routing placeholder:
        connect this form to the shop email, CRM, or estimate intake tool before
        publishing for customers.
      </p>
      <button className="button button-primary" type="submit">
        Get a Free Estimate
      </button>
    </form>
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
