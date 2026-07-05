import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  certificationLogos,
  faqs,
  footerQuickLinks,
  galleryItems,
  navLinks,
  nearbyAreas,
  processSteps,
  featuredReviewItems,
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

function LiveMapEmbed({
  className,
  title,
}: {
  className?: string;
  title: string;
}) {
  return (
    <div className={`map-embed ${className ?? ""}`.trim()}>
      <iframe
        title={title}
        src={siteInfo.mapsEmbedHref}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a className="map-embed-link text-link" data-track="directions:map-embed" href={siteInfo.mapsHref}>
        Open in Google Maps
      </a>
    </div>
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
        Schedule a Repair Evaluation
      </Link>
    </div>
  );
}

function TopContactBar() {
  return (
    <div className="top-contact">
      <div className="container top-contact-inner">
        <div className="top-contact-links">
          <a className="top-contact-item top-contact-call" data-track="phone:top-bar" href={siteInfo.phoneHref}>
            <strong>Call:</strong>
            <span className="top-contact-value">{siteInfo.phoneLabel}</span>
          </a>
          <Link className="top-contact-item" href="/contact#hours">
            <span className="top-contact-icon top-contact-icon-clock" aria-hidden="true" />
            <span>{siteInfo.hoursLabel}</span>
          </Link>
          <a className="top-contact-item top-contact-address" data-track="directions:top-bar" href={siteInfo.mapsHref}>
            <span className="top-contact-icon top-contact-icon-pin" aria-hidden="true" />
            <span>{siteInfo.addressLabel}</span>
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
          <Image
            className="brand-logo"
            src="/brand/xtreme-logo.webp"
            alt="Xtreme Collision & Hail"
            width={768}
            height={256}
            priority
          />
          <span className="brand-copy">
            <small>{siteInfo.city}, {siteInfo.region}</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link className="nav-active" href="/">Home</Link>
          <div className="nav-dropdown">
            <Link className="nav-dropdown-trigger" href="/services">Services</Link>
            <div className="dropdown-menu">
              <Link href="/services">All Services</Link>
              <Link href="/hail-inspection">Hail Repair</Link>
              {services.slice(0, 8).map((service) => (
                <Link href={service.href} key={service.title}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about">About Us</Link>
          <Link href="/about#careers">Careers</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact#location">Find A Location</Link>
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
          <ButtonLink href="/contact">Schedule a Repair Evaluation</ButtonLink>
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
            <Image
              className="brand-logo"
              src="/brand/xtreme-logo.webp"
              alt="Xtreme Collision & Hail"
              width={768}
              height={256}
            />
            <span>
              <strong>{siteInfo.name}</strong>
              <small>Collision repair in {siteInfo.city}, TX</small>
            </span>
          </Link>
          <p>
            Factory-correct collision repair, insurance claim support, lifetime
            limited workmanship warranty, and a clear estimate path for North
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
          </ul>
          <div className="footer-cta">
            <ButtonLink href={siteInfo.phoneHref}>Call Now</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Schedule a Repair Evaluation</ButtonLink>
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
            <a data-track="phone:footer-started" href={siteInfo.phoneHref}>Call Now</a>
            <Link data-track="estimate:footer" href="/contact">Schedule a Repair Evaluation</Link>
            <a data-track="directions:footer-started" href={siteInfo.mapsHref}>Directions</a>
          </div>
        </section>
      </div>

      <div className="container footer-map-row">
        <LiveMapEmbed className="footer-map" title="Xtreme Collision Repair location map" />
        <p className="copyright">
          Copyright {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
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
        <p className="eyebrow">Trusted collision repair in Carrollton, TX</p>
        <h1>Trusted Collision Repair for Carrollton Drivers</h1>
        <p className="hero-subheadline">
          Xtreme Collision Repair helps drivers move from damage to delivery with
          clear communication, insurance support, and repair planning that keeps
          the next step simple.
        </p>
        <div className="hero-actions">
          <ButtonLink href={siteInfo.phoneHref} track="phone:hero-primary">
            Call Now
          </ButtonLink>
          <ButtonLink href="/contact" track="estimate:hero-secondary" variant="secondary">
            Schedule a Repair Evaluation
          </ButtonLink>
        </div>
        <p className="hero-action-note">
          Fastest response by phone. We&apos;ll review damage, insurance details,
          and next steps before repair planning begins.
        </p>
        <div className="hero-meta" aria-label="Hero trust signals">
          <span>Carrollton, TX</span>
          <span>Insurance claim support</span>
          <span>Lifetime limited warranty</span>
        </div>
        <Link className="hero-location-link" data-track="directions:hero-location" href="/contact#location">
          Get Directions
        </Link>
      </div>
    </section>
  );
}

export function CertificationStrip() {
  return (
    <section className="certification-strip" aria-label="OEM certification logos">
      <div className="container certification-heading">
        <h2>Manufacturer Certifications</h2>
      </div>
      <div className="container certification-row">
        {certificationLogos.map((logo) => (
          <article
            className={`certification-logo-card certification-logo-card-${logo.tone ?? "light"}`}
            key={logo.name}
          >
            <Image src={logo.src} alt={logo.alt} width={353} height={170} />
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

const homepageTrustSignals = [
  "Lifetime limited warranty",
  "Certified collision repair",
  "Insurance claim support",
  "Carrollton / North Texas service area",
  "Fast phone response",
];

export function HomepageTrustStrip() {
  return (
    <section className="trust-strip trust-strip-home" aria-label="Trust signals">
      <div className="container trust-strip-home-inner">
        <div className="trust-strip-copy">
          <p className="eyebrow">Why drivers trust Xtreme</p>
          <h2>Warranty support, local expertise, and a fast next step.</h2>
          <p>
            Customers get a clearer first conversation with warranty coverage,
            insurance help, and a local team that answers the phone quickly.
          </p>
        </div>
        <div className="trust-grid trust-grid-home">
          {homepageTrustSignals.map((signal) => (
            <div className="trust-badge" key={signal}>
              <span />
              {signal}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustBadges() {
  return <ValuePropsStrip />;
}

export function ReviewHighlightsStrip() {
  return (
    <section className="section reviews-showcase-section reviews-showcase-compact" id="reviews">
      <div className="container">
        <div className="reviews-showcase-header">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2>Real Google reviews from local customers.</h2>
          </div>
        </div>
        <ReviewCardsDeck compact />
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

export function IntroSection() {
  return (
    <section className="section intro-section" id="intro">
      <div className="container intro-layout">
        <div>
          <p className="eyebrow">Carrollton collision & hail repair</p>
          <h2>Premium auto body repair that helps protect your vehicle&apos;s value.</h2>
        </div>
        <div>
          <p>
            Xtreme Collision Repair serves Carrollton and North Texas with
            collision repair, hail repair, and clear repair planning that keeps
            safety, appearance, structure, and value in view.
          </p>
          <div className="intro-bullets">
            <span>Collision & hail repair</span>
            <span>Deductible assistance</span>
            <span>Free loaner available</span>
            <span>Manufacturer-certified repairs</span>
          </div>
          <ButtonLink href="/contact" track="estimate:intro">Schedule a Repair Evaluation</ButtonLink>
        </div>
      </div>
    </section>
  );
}

const trustAuthorityItems = [
  {
    title: "Repair standards matter",
    text: "Modern collision repair affects structure, safety systems, panel fit, refinish quality, and long-term vehicle value — not just the visible damage.",
  },
  {
    title: "Documentation protects the repair plan",
    text: "Damage photos, measurements, insurer estimates, supplements, and repair notes help keep the process clear from intake to delivery.",
  },
  {
    title: "The shop should explain the process",
    text: "Customers deserve plain-English answers about parts, insurance steps, hidden damage, warranty terms, and what happens before pickup.",
  },
];

export function TrustAuthoritySection() {
  return (
    <section className="section muted-section">
      <div className="container">
        <SectionIntro
          eyebrow="Collision repair as it should be"
          title="A hometown repair experience with clear standards."
          text="Xtreme helps North Texas drivers understand the repair plan and the checks that matter after an accident or hail storm."
        />
        <div className="reason-grid">
          {trustAuthorityItems.map((item, index) => (
            <article className="reason-card" key={item.title}>
              <span className="reason-icon" aria-hidden="true">{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
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

const serviceSpotlightCards = [
  {
    title: "Collision repair",
    eyebrow: "Accident damage",
    text: "Start with a photo-based repair plan for structural review, body work, refinishing, or insurance support.",
    href: "/services/collision-repair",
    cta: "View collision repair",
  },
  {
    title: "Hail inspection",
    eyebrow: "Storm damage",
    text: "Use a dedicated hail path when the paint is intact and you want a fast inspection before repair decisions.",
    href: "/hail-inspection",
    cta: "Request hail inspection",
  },
];

export function HailCollisionSpotlightSection() {
  return (
    <section className="section muted-section">
      <div className="container">
        <SectionIntro
          eyebrow="Pick your next step"
          title="Start with the path that fits the damage."
          text="Collision and hail damage need slightly different first steps, so choose the path that matches what happened."
        />
        <div className="spotlight-grid">
          {serviceSpotlightCards.map((card) => (
            <article className="spotlight-card" key={card.title}>
              <p className="eyebrow">{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <ButtonLink href={card.href} track={`cta:spotlight:${card.href}`}>
                {card.cta}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
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
        <div className="team-photo-placeholder" aria-label="Xtreme Collision Repair shop equipment">
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
            <span>Documented repair work</span>
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


const repairStartItems = [
  {
    title: "Vehicle details",
    text: "Year, make, model, VIN if available, and the best contact number for follow-up.",
  },
  {
    title: "Insurance information",
    text: "Claim number, insurance estimate, adjuster contact, and rental details if a claim is already open.",
  },
  {
    title: "Damage notes",
    text: "Where the vehicle was hit, warning lights, drivability concerns, and any photos you can discuss with the shop.",
  },
  {
    title: "Timing needs",
    text: "Preferred drop-off timing, rental needs, and any deadline the shop should know before repair planning starts.",
  },
];

export function RepairStartChecklist() {
  return (
    <div className="repair-start-card">
      <div>
        <p className="eyebrow">Before you schedule your repair evaluation</p>
        <h3>Have these details ready to speed up the first call.</h3>
        <p>
          A clear first request helps Xtreme review the situation faster and
          explain the right next step without overpromising before inspection.
        </p>
      </div>
      <div className="repair-start-grid">
        {repairStartItems.map((item) => (
          <article key={item.title}>
            <strong>{item.title}</strong>
            <span>{item.text}</span>
          </article>
        ))}
      </div>
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
            drivers from Addison, Dallas, Plano, Frisco, Richardson, and nearby
            North Texas communities. Call for the fastest response, schedule a
            repair evaluation, or get directions before drop off.
          </p>
          <div className="location-actions">
            <ButtonLink href={siteInfo.phoneHref} track="phone:location">
              Call Now
            </ButtonLink>
            <ButtonLink href="/contact" track="estimate:location" variant="secondary">
              Schedule a Repair Evaluation
            </ButtonLink>
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
          <LiveMapEmbed className="small-map" title="Xtreme Collision Repair map location" />
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

export function WarrantyEducationSection() {
  return (
    <section className="section">
      <div className="container split-section light-split-section">
        <div>
          <p className="eyebrow">Warranty & repair responsibility</p>
          <h2>Know who stands behind the repair.</h2>
          <p>
            A proper repair should come with clear workmanship expectations and
            written warranty terms. Xtreme offers lifetime limited workmanship
            warranty support on qualifying repairs and can explain what applies
            before authorization.
          </p>
          <div className="hero-actions compact-actions">
            <ButtonLink href="/resources/who-guarantees-the-repair" track="warranty:learn-more">Warranty Questions</ButtonLink>
            <ButtonLink href="/contact" track="warranty:estimate" variant="light">Ask the Shop</ButtonLink>
          </div>
        </div>
        <div className="check-list light-list">
          <span>Written warranty terms matter</span>
          <span>Workmanship expectations should be clear</span>
          <span>Insurance estimates may not explain repair responsibility</span>
          <span>Ask questions before authorizing repairs</span>
        </div>
      </div>
    </section>
  );
}

const convenienceItems = [
  {
    title: "Drop-off planning",
    text: "Call before you come in so the team can help with timing, vehicle details, claim information, and the right next step.",
  },
  {
    title: "Rental coordination guidance",
    text: "If rental coverage is part of the claim, Xtreme can help customers understand timing and what information may be needed.",
  },
  {
    title: "Photo and claim intake",
    text: "Damage photos, insurer estimates, claim numbers, and contact details help the shop prepare for a more productive first conversation.",
  },
  {
    title: "Repair updates",
    text: "Clear communication helps customers stay oriented as estimates, supplements, parts, repairs, refinish work, and quality checks move forward.",
  },
];

export function ConvenienceSupportSection() {
  return (
    <section className="section muted-section">
      <div className="container">
        <div className="repair-start-card convenience-card">
          <div>
            <p className="eyebrow">Convenience & repair logistics</p>
            <h3>Make the first step easier before the vehicle arrives.</h3>
            <p>
              Xtreme helps customers line up the practical details around drop-off,
              insurance information, rental timing, photos, and communication so
              the first step feels organized.
            </p>
          </div>
          <div className="repair-start-grid">
            {convenienceItems.map((item) => (
              <article key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
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
            for a proper repair plan.
          </p>
          <div className="hero-actions compact-actions">
            <ButtonLink href={siteInfo.phoneHref} track="phone:insurance-banner">
              Call Now
            </ButtonLink>
            <ButtonLink href="/insurance-claims-assistance" track="insurance:home-banner" variant="secondary">
              Start Your Claim Repair
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
        <Image src={item.beforeSrc} alt={item.beforeAlt} width={1200} height={820} />
        <figcaption>Before</figcaption>
      </figure>
      <figure className="after-panel before-after-panel">
        <Image src={item.afterSrc} alt={item.afterAlt} width={1200} height={820} />
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
          <Image src={item.src} alt={item.alt} width={1200} height={820} />
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
    <section className="section reviews-showcase-section" id="reviews">
      <div className="container">
        <div className="reviews-showcase-header reviews-showcase-header-full">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2>We take pride in our work through transparency of public reviews and accountability.</h2>
            <p className="reviews-showcase-subtitle">
              Featured Google review excerpts from local customers, with direct links to the public Google profile and review form.
            </p>
          </div>
        </div>
        <ReviewCardsDeck />
        <div className="cta-actions" style={{ marginTop: "24px" }}>
          <ButtonLink href={siteInfo.googleReviewsHref} track="reviews:google-profile" variant="secondary">
            Read More Reviews on Google
          </ButtonLink>
          <ButtonLink href={siteInfo.googleLeaveReviewHref} track="reviews:google-review" variant="light">
            Leave a Review
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function ReviewCardsDeck({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`review-showcase-grid${compact ? " review-showcase-grid-compact" : ""}`} aria-label="Customer review cards">
      {featuredReviewItems.map((review) => (
        <article className="review-showcase-card" key={`${review.name}-${review.date}`}>
          <div className="review-avatar" aria-hidden="true">
            <span>{review.initials}</span>
          </div>
          <h3 className="review-name">{review.name}</h3>
          <p className="review-date">{review.date}</p>
          <div className="review-stars" aria-label="5 out of 5 stars">
            <span>★★★★★</span>
          </div>
          <p className="review-quote">&quot;{review.quote}&quot;</p>
          <p className="review-posted-on">
            <span>POSTED ON</span>
            <span className="google-mark" aria-hidden="true">G</span>
          </p>
        </article>
      ))}
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
          <h2>Schedule a Repair Evaluation in Carrollton, TX.</h2>
          <p>
            Call {siteInfo.phoneLabel} first, or send vehicle details, photos,
            and insurance information. We&apos;ll review the request and follow up
            with the next step.
          </p>
        </div>
        <div className="cta-actions">
          <ButtonLink href={siteInfo.phoneHref} track="phone:final">
            Call Now
          </ButtonLink>
          <ButtonLink href="/contact" track="estimate:final" variant="secondary">
            Schedule a Repair Evaluation
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function ScheduleEvaluationSection() {
  return (
    <section className="contact-panel schedule-evaluation-panel" id="calendar-coming-soon">
      <div>
        <p className="eyebrow">Schedule a Repair Evaluation</p>
        <h2>Choose a convenient time for our team to review your repair needs.</h2>
        <p>
          Online scheduling will be available soon. Call {siteInfo.phoneLabel}{" "}to get started.
        </p>
      </div>
      <div className="hero-actions compact-actions schedule-actions">
        <ButtonLink href={siteInfo.phoneHref} track="phone:form-note">
          Call {siteInfo.phoneLabel}
        </ButtonLink>
        <ButtonLink href="#calendar-coming-soon" variant="light" track="calendar:coming-soon">
          Calendar Link Coming Soon
        </ButtonLink>
      </div>
    </section>
  );
}

export function RepairAuthorizationForm() {
  return (
    <form className="estimate-form" id="repair-authorization" action="/repair-authorization" data-track="form:repair-authorization" method="get">
      <h2>Repair Authorization</h2>
      <p className="form-note">
        This form is for customers ready to proceed with repairs. Final authorization
        details, payment direction, and signature handling will be confirmed with the
        shop before repair authorization is completed.
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
              <ButtonLink href="/contact" track={`estimate:article:${article.slug}`}>Schedule a Repair Evaluation</ButtonLink>
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
            <ButtonLink href="/contact" track={`estimate:article-sidebar:${article.slug}`}>Schedule a Repair Evaluation</ButtonLink>
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
  const isHailService = service.slug === "hail-damage-paintless-dent-repair";

  return (
    <>
      <InnerHero eyebrow={service.seo} title={service.title} text={service.intro} />
      <section className="section">
        <div className="container service-detail-layout">
          <div>
            <SectionIntro
              title={`${service.title} in Carrollton, TX`}
              text={`Learn how Xtreme supports ${service.title.toLowerCase()} needs for drivers in ${nearbyAreas.join(", ")} with clear repair planning, insurance coordination, and quality checks.`}
            />
            <div className="check-list light-list">
              {service.bullets.map((bullet) => (
                <span key={bullet}>{bullet}</span>
              ))}
            </div>
            {isHailService ? (
              <div className="hero-actions compact-actions service-detail-actions">
                <ButtonLink href="/hail-inspection" track="hail:service-detail">
                  Request a Hail Inspection
                </ButtonLink>
                <ButtonLink href="/contact" track="estimate:service-hail" variant="light">
                  Schedule a Repair Evaluation
                </ButtonLink>
              </div>
            ) : null}
          </div>
          <aside className="estimate-panel">
            <h2>Need an estimate?</h2>
            <p>
              Share vehicle details, insurance information, claim number if
              available, and damage photos so the shop can review the request.
            </p>
            <ButtonLink href="/contact">Schedule a Repair Evaluation</ButtonLink>
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

export function HailInspectionSection() {
  return (
    <section className="section">
      <div className="container split-section split-section-light">
        <div>
          <SectionIntro
            eyebrow="Dedicated hail repair"
            title="Need hail repair after a North Texas storm?"
            text="If the paint is still intact, hail damage may be a good fit for paintless dent repair. If the dents are deeper or the finish is broken, the shop can explain when conventional repair makes more sense."
          />
          <div className="hero-actions compact-actions">
            <ButtonLink href="/contact" track="hail:inspection-primary">Start Hail Repair Review</ButtonLink>
            <p className="hero-action-note">
              <Link className="text-link" href="/services/hail-damage-repair" data-track="hail:inspection-secondary">
                See how the shop handles hail repair
              </Link>
            </p>
          </div>
        </div>
        <div className="check-list light-list">
          <span>Map the roof, hood, trunk, and side panels that took the hit</span>
          <span>PDR vs conventional repair guidance</span>
          <span>Photo upload for faster hail triage</span>
          <span>Insurance claim and estimate support</span>
        </div>
      </div>
    </section>
  );
}

export function AreasLine() {
  return (
    <p className="areas-line">
      Nearby service areas: {nearbyAreas.join(", ")}.
    </p>
  );
}
