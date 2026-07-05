import type { Metadata } from "next";
import { FAQSection, FinalCTA, InnerHero, PageShell } from "../components";

export const metadata: Metadata = {
  title: "FAQ | Xtreme Collision Repair",
  description:
    "Frequently asked questions about collision repair, hail repair, insurance support, and repair planning at Xtreme Collision Repair in Carrollton, TX.",
};

export default function FAQPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="FAQ"
          title="Answers before you schedule a repair evaluation"
          text="These are the questions drivers usually ask before calling about collision repair, hail repair, insurance help, and timing."
        />
        <section className="section" id="faq">
          <div className="container faq-container">
            <FAQSection />
          </div>
        </section>
        <FinalCTA />
      </main>
    </PageShell>
  );
}
