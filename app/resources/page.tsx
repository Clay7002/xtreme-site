import {
  FAQSection,
  FinalCTA,
  InnerHero,
  PageShell,
  ResourcesPreview,
  SectionIntro,
} from "../components";

export default function ResourcesPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Resources / Blog"
          title="Collision repair resources for North Texas drivers"
          text="Helpful guidance for insurance claims, body shop comparisons, storm damage, repair photos, and vehicle care after repairs."
        />
        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="Collision repair education"
              title="Practical answers that help customers feel prepared."
              text="Use these preview cards as the starting point for real blog posts, FAQs, and customer education content."
            />
            <ResourcesPreview />
          </div>
        </section>
        <section className="section muted-section">
          <div className="container faq-container">
            <SectionIntro
              eyebrow="FAQ"
              title="Common questions before an estimate"
              text="These answers support SEO and reduce uncertainty for customers comparing local body shops."
            />
            <FAQSection />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
