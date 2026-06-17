import {
  BeforeAfterSection,
  FinalCTA,
  InnerHero,
  PageShell,
  SectionIntro,
} from "../components";

export default function GalleryPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Gallery / Before & After"
          title="Repair photo placeholders ready for real shop work"
          text="Use this page for actual before-and-after repair photography, hail damage documentation, paint refinishing examples, and customer-approved delivery photos."
        />
        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Before and after"
              title="Show real transformation photos when available"
              text="Each card is structured for a matched before photo, matching after photo, and short repair note. Replace placeholder visuals with actual shop images."
            />
            <BeforeAfterSection full />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
