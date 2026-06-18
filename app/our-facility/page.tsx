import {
  FinalCTA,
  InnerHero,
  PageShell,
  SectionIntro,
} from "../components";

const areas = [
  {
    title: "Estimating Area",
    text: "Use this placeholder for real intake, office, and customer communication photos.",
  },
  {
    title: "Body Repair Area",
    text: "Show technicians, repair bays, panel repair, dent work, and production workflow.",
  },
  {
    title: "Frame / Unibody Equipment",
    text: "Add verified photos of measuring equipment, frame repair areas, and structural repair documentation.",
  },
  {
    title: "Paint & Refinishing Area",
    text: "Use real paint booth, prep, color-matching, and refinishing photography when available.",
  },
  {
    title: "Quality Control",
    text: "Show final fit, finish, function, cleanliness, and delivery inspection areas.",
  },
  {
    title: "Finished Vehicle Gallery",
    text: "Feature customer-approved delivery photos and before-and-after repair examples.",
  },
];

export default function OurFacilityPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Shop tour"
          title="Take a Look Inside Xtreme Collision Repair"
          text="This facility page is built to showcase real Xtreme shop photos, repair bays, equipment, paint/refinishing areas, and finished vehicle examples as they become available."
        />
        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Facility overview"
              title="A professional repair environment customers can trust"
              text="Replace these labeled placeholders with real shop photography so visitors can see the people, equipment, and repair process behind the work."
            />
            <div className="facility-grid">
              {areas.map((area) => (
                <article className="facility-card" key={area.title}>
                  <div className="facility-photo-placeholder">{area.title}</div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
