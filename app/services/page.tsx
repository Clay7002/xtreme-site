import {
  AreasLine,
  FinalCTA,
  InnerHero,
  PageShell,
  SectionIntro,
  ServicesGrid,
} from "../components";

export default function ServicesPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Services"
          title="Collision repair and auto body services in Euless, TX"
          text="Explore the core repair services customers search for after an accident, hail storm, parking-lot dent, or paint damage."
        />
        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Body shop Euless TX"
              title="Service pages built for clear decisions"
              text="Each service card gives customers a practical starting point, then routes them toward an estimate request or a deeper page where needed."
            />
            <ServicesGrid />
            <AreasLine />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
