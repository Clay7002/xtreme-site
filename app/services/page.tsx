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
          title="Collision repair and auto body services in Carrollton, TX"
          text="Explore the full service mix customers need after an accident, hail storm, parking-lot dent, insurance claim, or paint damage."
        />
        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Body shop Carrollton TX"
              title="Core services with clear, unique descriptions"
              text="Each service explains a specific repair need and includes a Learn More link so customers can move from research to a free estimate."
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
