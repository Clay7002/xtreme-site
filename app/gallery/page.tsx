import {
  BeforeAfterSection,
  FinalCTA,
  InnerHero,
  PageShell,
  SectionIntro,
  WorkGallerySection,
} from "../components";

export default function GalleryPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Gallery / Before & After"
          title="Xtreme Collision Repair Work Gallery"
          text="Browse real repair photos, before-and-after examples, finished vehicle shots, and shop equipment images from Xtreme Collision Repair."
        />
        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Before and after"
              title="Documented repair transformations"
              text="Each card pairs visible damage with the finished repair to show the quality of the work and the care taken through the process."
            />
            <BeforeAfterSection full />
          </div>
        </section>
        <section className="section muted-section">
          <div className="container">
            <SectionIntro
              eyebrow="Work photos"
              title="Shop and repair photos"
              text="See Xtreme's repair environment, equipment, repair documentation, and completed vehicle examples."
            />
            <WorkGallerySection />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
