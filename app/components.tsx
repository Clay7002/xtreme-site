import Link from "next/link";
import type { ReactNode } from "react";
import {
  faqs,
  galleryItems,
  navLinks,
  nearbyAreas,
  processSteps,
  reviewPlaceholders,
  services,
  siteInfo,
  trustBadges,
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
        <span>
          <strong>Call:</strong>{" "}
          <a href={siteInfo.phoneHref}>{siteInfo.phoneLabel}</a>
        </span>
        <span>
          <strong>Address:</strong> {siteInfo.addressLabel}
        </span>
        <span>
          <strong>Hours:</strong> {siteInfo.hoursLabel}
        </span>
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
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/contact">Get a Free Estimate</ButtonLink>
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
            5-Star collision repair in North Texas with estimate requests,
            insurance claim support, repair process clarity, and space for real
            Google reviews.
          </p>
          <p className="footer-note">
            Serving {nearbyAreas.join(", ")}.
          </p>
        </section>

        <section>
          <h2>Business Info</h2>
          <ul className="footer-list">
            <li>
              Phone: <a href={siteInfo.phoneHref}>{siteInfo.phoneLabel}</a>
            </li>
            <li>Address: {siteInfo.addressLabel}</li>
            <li>Hours: {siteInfo.hoursLabel}</li>
            <li>Email: {siteInfo.emailLabel}</li>
          </ul>
        </section>

        <section>
          <h2>Quick Links</h2>
          <ul className="footer-list">
            {navLinks.map((link) => (
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
        <div className="map-placeholder" aria-label="Map placeholder">
          <strong>Map placeholder</strong>
          <span>
            Add the verified Google Maps embed for {siteInfo.shortAddressLabel}.
          </span>
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
        <ShopVisual />
      </div>
      <div className="container hero-content">
        <p className="eyebrow">Collision repair Carrollton TX</p>
        <h1>5-Star Collision Repair in North Texas</h1>
        <p className="hero-subheadline">
          Xtreme Collision Repair helps restore your vehicle with quality
          workmanship, clear communication, and insurance-claim support.
          Serving Carrollton, Addison, Dallas, Plano, Frisco, Richardson and
          surrounding areas.
        </p>
        <div className="hero-actions">
          <ButtonLink href="/contact">Get a Free Estimate</ButtonLink>
          <ButtonLink href={siteInfo.phoneHref} variant="secondary">
            Call {siteInfo.phoneLabel}
          </ButtonLink>
        </div>
        <div className="hero-meta">
          <span>Auto body repair Carrollton TX</span>
          <span>Works with all major insurance companies</span>
          <span>North Texas hail and collision repair</span>
        </div>
      </div>
    </section>
  );
}

function ShopVisual() {
  return (
    <div className="shop-visual" role="img" aria-label="Shop image placeholder">
      <div className="shop-wall" />
      <div className="shop-light shop-light-one" />
      <div className="shop-light shop-light-two" />
      <div className="shop-floor" />
      <div className="lift lift-left" />
      <div className="lift lift-right" />
      <div className="vehicle">
        <div className="vehicle-glass" />
        <div className="vehicle-hood" />
        <div className="vehicle-door" />
        <div className="wheel wheel-left" />
        <div className="wheel wheel-right" />
      </div>
      <div className="toolbox" />
      <div className="spark-accent" />
    </div>
  );
}

export function TrustBadges() {
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
        <p className="eyebrow">Google reviews</p>
        <h2>Google reviews and testimonials</h2>
        <p>
          This section is ready for embedded Google reviews or approved
          customer testimonials. No fake reviews or invented customer names are
          included.
        </p>
        <div className="review-actions">
          <ButtonLink href={siteInfo.googleReviewsHref}>Read More Reviews on Google</ButtonLink>
          <ButtonLink href={siteInfo.googleLeaveReviewHref} variant="light">
            Leave a Review
          </ButtonLink>
        </div>
      </div>
      <div className="review-card-grid">
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
          </article>
        ))}
      </div>
    </div>
  );
}

export function WhyChooseSection() {
  const reasons = [
    {
      title: "Lifetime limited warranty",
      text: "A concise promise from the existing site, presented clearly near the top and reinforced before customers request an estimate.",
    },
    {
      title: "State of the art facility & equipment",
      text: "The design highlights the shop's facility and equipment as a trust signal without crowding the conversion path.",
    },
    {
      title: "Factory-trained technicians",
      text: "Customers see technician expertise called out clearly alongside repair quality, communication, and claim support.",
    },
    {
      title: "Insurance claim help",
      text: "The site keeps claim assistance front and center for customers who need guidance after an accident.",
    },
  ];

  return (
    <div className="reason-grid">
      {reasons.map((reason) => (
        <article className="reason-card" key={reason.title}>
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
