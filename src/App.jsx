import React from "react";

const services = [
  {
    title: "Collision Repair",
    description:
      "From minor dents to major accident damage, we restore your vehicle with precision, safety, and attention to detail.",
  },
  {
    title: "Insurance Assistance",
    description:
      "We help guide you through the claims process and keep communication clear from start to finish.",
  },
  {
    title: "Paint & Refinish",
    description:
      "Color-matched refinishing and professional paintwork designed to restore the look and value of your vehicle.",
  },
  {
    title: "Frame & Structural Repairs",
    description:
      "Accurate structural repairs completed with safety-first procedures and manufacturer-guided processes.",
  },
  {
    title: "Dent & Body Work",
    description:
      "We repair damaged panels, dents, and body components so your vehicle looks right and drives safely.",
  },
  {
    title: "Post-Repair Communication",
    description:
      "You stay informed throughout the repair process with straightforward updates and responsive service.",
  },
];

const certifications = [
  "Subaru",
  "Nissan",
  "Kia",
  "Infiniti",
  "Honda",
  "Acura",
  "Ford",
  "Lincoln",
  "GMC",
  "Chevy",
  "Buick",
  "Chrysler",
  "Jeep",
  "Dodge",
  "Ram",
  "Fiat",
  "Hyundai",
  "Genesis",
  "Cadillac",
  "Hummer",
  "Corvette",
  "Hellcat",
];

const reasons = [
  "Certified repair procedures",
  "Clear communication throughout the process",
  "Help navigating insurance claims",
  "High standards for safety and quality",
  "Customer-focused service from estimate to delivery",
  "Repairs designed to protect your vehicle’s value",
];

function LogoMark() {
  return (
    <div style={styles.logoWrap}>
      <div style={styles.logoX}>X</div>
      <div>
        <div style={styles.logoMain}>XTREME</div>
        <div style={styles.logoSub}>COLLISION REPAIR</div>
        <div style={styles.logoTag}>Our business is a wreck!</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={styles.page}>
      <div style={styles.topBar}>
        <div style={styles.containerTop}>
          <div style={styles.topBarLeft}>
            <a href="tel:9722332007" style={styles.topLink}>
              (972) 233-2007
            </a>
            <span style={styles.topDivider}>|</span>
            <a
              href="https://maps.google.com/?q=2025+Midway+Road+Suite+E+Carrollton+TX+75006"
              target="_blank"
              rel="noreferrer"
              style={styles.topLink}
            >
              2025 Midway Road, Suite E, Carrollton, TX 75006
            </a>
          </div>
          <div style={styles.topBarRight}>Mon–Thu 8–5 | Fri 8–12</div>
        </div>
      </div>

      <header style={styles.header}>
        <div style={styles.container}>
          <LogoMark />
          <nav style={styles.nav}>
            <a href="#services" style={styles.navLink}>
              Services
            </a>
            <a href="#certifications" style={styles.navLink}>
              Certifications
            </a>
            <a href="#why-choose-us" style={styles.navLink}>
              Why Choose Us
            </a>
            <a href="#contact" style={styles.navLink}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <div style={styles.containerHero}>
            <div style={styles.heroText}>
              <p style={styles.kicker}>Certified Collision Repair in Carrollton, Texas</p>
              <h1 style={styles.heroTitle}>
                Safe, high-quality repairs with clear communication every step of the way.
              </h1>
              <p style={styles.heroDescription}>
                At Xtreme Collision Repair, we help drivers get back on the road with
                certified repair processes, responsive service, and a repair experience
                built around trust.
              </p>
              <div style={styles.heroButtons}>
                <a href="tel:9722332007" style={styles.primaryButton}>
                  Call Now
                </a>
                <a
                  href="https://calendly.com/ourbusinessisawreck/30min"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.secondaryButton}
                >
                  Schedule Appointment
                </a>
              </div>
              <div style={styles.heroHighlights}>
                <span style={styles.highlightPill}>Certified Repairs</span>
                <span style={styles.highlightPill}>Insurance Guidance</span>
                <span style={styles.highlightPill}>Customer-First Service</span>
              </div>
            </div>

            <div style={styles.heroCard}>
              <h3 style={styles.cardTitle}>Why drivers choose Xtreme</h3>
              <ul style={styles.cardList}>
                <li>Safety-focused repair standards</li>
                <li>Clear and timely communication</li>
                <li>Help with the insurance process</li>
                <li>Trusted workmanship and attention to detail</li>
              </ul>
              <a href="#contact" style={styles.cardButton}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Services</p>
            <h2 style={styles.sectionTitle}>Complete collision repair services</h2>
            <p style={styles.sectionText}>
              We focus on safe, professional repairs and a customer experience that keeps
              you informed from drop-off to delivery.
            </p>
          </div>

          <div style={styles.serviceGrid}>
            {services.map((service) => (
              <div key={service.title} style={styles.serviceCard}>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceText}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" style={styles.sectionAlt}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Certifications</p>
            <h2 style={styles.sectionTitle}>Manufacturer certifications and brand experience</h2>
            <p style={styles.sectionText}>
              We work to meet high repair standards and follow procedures designed to
              protect vehicle safety, performance, and value.
            </p>
          </div>

          <div style={styles.certGrid}>
            {certifications.map((name) => (
              <div key={name} style={styles.certCard}>
                <span style={styles.certName}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-choose-us" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Why Choose Us</p>
            <h2 style={styles.sectionTitle}>
              Certified Repairs, Trusted Service, and Clear Communication
            </h2>
            <p style={styles.sectionText}>
              Our process is built around quality workmanship, safety, and making the
              repair experience easier for every customer.
            </p>
          </div>

          <div style={styles.reasonGrid}>
            {reasons.map((reason) => (
              <div key={reason} style={styles.reasonCard}>
                <div style={styles.checkMark}>✓</div>
                <p style={styles.reasonText}>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={styles.promiseSection}>
        <div style={styles.container}>
          <div style={styles.promiseCard}>
            <p style={styles.sectionKicker}>Customer Promise</p>
            <h2 style={styles.promiseTitle}>
              We repair vehicles with safety, certified processes, and honest communication in mind.
            </h2>
            <p style={styles.promiseText}>
              When you choose Xtreme Collision Repair, you can expect professional repairs,
              straightforward updates, and a team that treats your vehicle and your time
              with care and respect.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" style={styles.contactSection}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <p style={styles.sectionKicker}>Contact</p>
            <h2 style={styles.sectionTitle}>Let’s get your repair started</h2>
            <p style={styles.sectionText}>
              Call us, schedule online, or stop by during business hours.
            </p>
          </div>

          <div style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <h3 style={styles.contactTitle}>Contact Information</h3>
              <p style={styles.contactLine}>
                <strong>Phone:</strong>{" "}
                <a href="tel:9722332007" style={styles.inlineLink}>
                  (972) 233-2007
                </a>
              </p>
              <p style={styles.contactLine}>
                <strong>Address:</strong>{" "}
                <a
                  href="https://maps.google.com/?q=2025+Midway+Road+Suite+E+Carrollton+TX+75006"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.inlineLink}
                >
                  2025 Midway Road, Suite E, Carrollton, TX 75006
                </a>
              </p>
              <p style={styles.contactLine}>
                <strong>Hours:</strong> Mon–Thu: 8–5 | Fri: 8–12
              </p>
              <p style={styles.contactLine}>
                <strong>After-hours towing:</strong> Jordan Towing{" "}
                <a href="tel:9723806300" style={styles.inlineLink}>
                  (972) 380-6300
                </a>
              </p>
            </div>

            <div style={styles.contactCard}>
              <h3 style={styles.contactTitle}>Schedule Your Appointment</h3>
              <p style={styles.contactText}>
                Book online using our scheduling page or call us directly to get started.
              </p>
              <div style={styles.contactButtons}>
                <a
                  href="https://calendly.com/ourbusinessisawreck/30min"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.primaryButton}
                >
                  Open Booking Page
                </a>
                <a href="tel:9722332007" style={styles.secondaryButtonDark}>
                  Speak With Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.containerFooter}>
          <div>
            <div style={styles.footerBrand}>Xtreme Collision Repair</div>
            <div style={styles.footerTag}>Our business is a wreck!</div>
          </div>
          <div style={styles.footerRight}>Serving Carrollton and surrounding areas</div>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: "#0f172a",
    backgroundColor: "#ffffff",
    lineHeight: 1.5,
  },
  topBar: {
    backgroundColor: "#0b1220",
    color: "#e2e8f0",
    fontSize: "14px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  containerTop: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
  },
  topBarLeft: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  topBarRight: {
    color: "#cbd5e1",
  },
  topLink: {
    color: "#e2e8f0",
    textDecoration: "none",
  },
  topDivider: {
    opacity: 0.5,
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backgroundColor: "rgba(255,255,255,0.96)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid #e2e8f0",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  containerFooter: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "18px 0",
  },
  logoX: {
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    background:
      "linear-gradient(135deg, #1d4ed8 0%, #0f172a 50%, #64748b 100%)",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontSize: "26px",
    boxShadow: "0 12px 30px rgba(15, 23, 42, 0.18)",
  },
  logoMain: {
    fontWeight: 900,
    letterSpacing: "1px",
    fontSize: "22px",
    color: "#0f172a",
  },
  logoSub: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "2px",
    color: "#475569",
  },
  logoTag: {
    fontSize: "12px",
    color: "#1d4ed8",
    fontWeight: 600,
    marginTop: "2px",
  },
  nav: {
    display: "flex",
    gap: "22px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  navLink: {
    textDecoration: "none",
    color: "#0f172a",
    fontWeight: 600,
    fontSize: "15px",
  },
  hero: {
    background:
      "linear-gradient(135deg, #eff6ff 0%, #ffffff 45%, #e2e8f0 100%)",
  },
  heroOverlay: {
    padding: "72px 0 56px",
  },
  containerHero: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "1.4fr 0.9fr",
    gap: "32px",
    alignItems: "center",
  },
  heroText: {
    maxWidth: "760px",
  },
  kicker: {
    color: "#1d4ed8",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "1.3px",
    fontSize: "13px",
    marginBottom: "14px",
  },
  heroTitle: {
    fontSize: "54px",
    lineHeight: 1.05,
    margin: 0,
    color: "#0f172a",
    fontWeight: 900,
  },
  heroDescription: {
    fontSize: "19px",
    color: "#334155",
    maxWidth: "680px",
    marginTop: "20px",
    marginBottom: "28px",
  },
  heroButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "24px",
  },
  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1d4ed8",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700,
    padding: "14px 22px",
    borderRadius: "12px",
    boxShadow: "0 12px 30px rgba(29, 78, 216, 0.24)",
  },
  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    color: "#0f172a",
    textDecoration: "none",
    fontWeight: 700,
    padding: "14px 22px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
  },
  secondaryButtonDark: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700,
    padding: "14px 22px",
    borderRadius: "12px",
  },
  heroHighlights: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  highlightPill: {
    backgroundColor: "#ffffff",
    border: "1px solid #dbeafe",
    color: "#1e293b",
    padding: "8px 12px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 600,
  },
  heroCard: {
    backgroundColor: "#0f172a",
    color: "#ffffff",
    borderRadius: "24px",
    padding: "28px",
    boxShadow: "0 20px 50px rgba(15, 23, 42, 0.18)",
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: "16px",
    fontSize: "26px",
  },
  cardList: {
    paddingLeft: "18px",
    marginTop: 0,
    marginBottom: "24px",
    color: "#cbd5e1",
  },
  cardButton: {
    display: "inline-block",
    textDecoration: "none",
    color: "#ffffff",
    backgroundColor: "#1d4ed8",
    padding: "12px 18px",
    borderRadius: "12px",
    fontWeight: 700,
  },
  section: {
    padding: "84px 0",
  },
  sectionAlt: {
    padding: "84px 0",
    backgroundColor: "#f8fafc",
  },
  sectionHeader: {
    maxWidth: "760px",
    marginBottom: "34px",
  },
  sectionKicker: {
    color: "#1d4ed8",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "1.3px",
    fontSize: "13px",
    marginBottom: "10px",
  },
  sectionTitle: {
    fontSize: "40px",
    lineHeight: 1.1,
    margin: 0,
    color: "#0f172a",
    fontWeight: 800,
  },
  sectionText: {
    marginTop: "16px",
    fontSize: "18px",
    color: "#475569",
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  serviceCard: {
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 10px 28px rgba(15, 23, 42, 0.05)",
  },
  serviceTitle: {
    marginTop: 0,
    marginBottom: "10px",
    fontSize: "22px",
    color: "#0f172a",
  },
  serviceText: {
    margin: 0,
    color: "#475569",
    fontSize: "16px",
  },
  certGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "14px",
  },
  certCard: {
    backgroundColor: "#ffffff",
    border: "1px solid #dbeafe",
    borderRadius: "16px",
    minHeight: "90px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14px",
    textAlign: "center",
    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.04)",
  },
  certName: {
    fontWeight: 700,
    color: "#1e293b",
  },
  reasonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
  },
  reasonCard: {
    display: "flex",
    gap: "14px",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "18px",
    padding: "22px",
  },
  checkMark: {
    width: "28px",
    height: "28px",
    borderRadius: "999px",
    backgroundColor: "#dbeafe",
    color: "#1d4ed8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    flexShrink: 0,
  },
  reasonText: {
    margin: 0,
    fontWeight: 600,
    color: "#1e293b",
  },
  promiseSection: {
    padding: "0 0 84px",
  },
  promiseCard: {
    background:
      "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #64748b 100%)",
    color: "#ffffff",
    borderRadius: "28px",
    padding: "42px",
    boxShadow: "0 22px 50px rgba(15, 23, 42, 0.18)",
  },
  promiseTitle: {
    fontSize: "34px",
    lineHeight: 1.15,
    margin: 0,
    maxWidth: "900px",
  },
  promiseText: {
    fontSize: "18px",
    color: "#dbeafe",
    maxWidth: "820px",
    marginTop: "16px",
    marginBottom: 0,
  },
  contactSection: {
    padding: "84px 0",
    backgroundColor: "#f8fafc",
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  contactCard: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    border: "1px solid #e2e8f0",
    padding: "28px",
    boxShadow: "0 10px 28px rgba(15, 23, 42, 0.05)",
  },
  contactTitle: {
    marginTop: 0,
    marginBottom: "16px",
    fontSize: "24px",
    color: "#0f172a",
  },
  contactLine: {
    margin: "0 0 12px",
    color: "#334155",
    fontSize: "16px",
  },
  contactText: {
    color: "#475569",
    fontSize: "16px",
    marginBottom: "20px",
  },
  inlineLink: {
    color: "#1d4ed8",
    textDecoration: "none",
    fontWeight: 600,
  },
  contactButtons: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  footer: {
    backgroundColor: "#0b1220",
    color: "#cbd5e1",
    padding: "26px 0",
  },
  footerBrand: {
    color: "#ffffff",
    fontWeight: 800,
    fontSize: "18px",
  },
  footerTag: {
    color: "#60a5fa",
    fontSize: "14px",
    marginTop: "4px",
  },
  footerRight: {
    color: "#cbd5e1",
  },
};