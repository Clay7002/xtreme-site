import {
  FinalCTA,
  InnerHero,
  PageShell,
  SectionIntro,
} from "../components";

const areas: { title: string; text: string; image?: string; alt?: string }[] = [
  {
    title: "Estimating Area",
    text: "Add intake, office, and customer communication photos when available.",
  },
  {
    title: "Body Repair Area",
    text: "Show repair bays, panel repair, dent work, and production workflow.",
  },
  {
    title: "Frame / Unibody Equipment",
    text: "Real shop equipment photo showing structural repair and measuring workflow support.",
    image: "/gallery/work/facility-frame-rack.webp",
    alt: "Vehicle on a frame rack inside the Xtreme Collision Repair facility",
  },
  {
    title: "Paint & Refinishing Area",
    text: "Add paint booth, prep, color-matching, and refinishing photography when available.",
  },
  {
    title: "Quality Control",
    text: "Repair equipment used for vehicle setup, inspection, and post-repair checks.",
    image: "/gallery/work/facility-alignment-rack.webp",
    alt: "Truck on an alignment rack inside a collision repair facility",
  },
  {
    title: "Finished Vehicle Gallery",
    text: "Feature delivery photos and before-and-after repair examples from real Xtreme work.",
    image: "/gallery/work/gmc-front-after.webp",
    alt: "Finished GMC front-end repair photographed at Xtreme Collision Repair",
  },
];

export default function OurFacilityPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Shop tour"
          title="Take a Look Inside Xtreme Collision Repair"
          text="See real Xtreme shop equipment, repair bays, and finished vehicle examples as the facility gallery continues to grow."
        />
        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Facility overview"
              title="A professional repair environment customers can trust"
              text="Real facility and repair photos help customers see the equipment, process, and workmanship behind the shop."
            />
            <div className="facility-grid">
              {areas.map((area) => (
                <article className="facility-card" key={area.title}>
                  {area.image ? (
                    <img className="facility-photo" src={area.image} alt={area.alt ?? area.title} loading="lazy" decoding="async" />
                  ) : (
                    <div className="facility-photo-placeholder">{area.title}</div>
                  )}
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
