import {
  BeforeAfterSection,
  FinalCTA,
  InnerHero,
  PageShell,
  SectionIntro,
} from "../../components";

export const metadata = {
  title: "Auto Paint & Refinishing in Carrollton, TX | Xtreme Collision Repair",
  description:
    "Auto paint repair and refinishing in Carrollton, TX with color matching, blending, clearcoat finish, and before-and-after repair photo placeholders.",
};

export default function PaintRefinishingPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Auto paint repair Carrollton TX"
          title="Auto Paint & Refinishing in Carrollton, TX"
          text="Paint and refinishing work should restore a clean, consistent appearance after body repair, hail damage, scratches, or panel replacement."
        />
        <section className="section">
          <div className="container split-section split-section-light">
            <div>
              <SectionIntro
                title="Color matching, blending, clearcoat, and final appearance review"
                text="Xtreme's refinishing content is structured around computerized color support, blend planning, surface preparation, clearcoat finish, and warranty-ready quality checks. If Sherwin-Williams certification or paint-system credentials are confirmed, verified wording and logos can be added here."
              />
            </div>
            <div className="check-list light-list">
              <span>Computerized color matching support</span>
              <span>Paint blending and clearcoat finish</span>
              <span>Panel preparation after body repair</span>
              <span>Before-and-after refinish examples ready</span>
            </div>
          </div>
        </section>
        <section className="section muted-section">
          <div className="container">
            <SectionIntro
              eyebrow="Refinish examples"
              title="Ready for real paint and color-match photos"
              text="Use this area for actual repair photos showing damaged panels, repaired surfaces, and completed color-matched delivery shots."
            />
            <BeforeAfterSection />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
