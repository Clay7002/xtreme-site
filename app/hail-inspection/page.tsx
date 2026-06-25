import {
  FinalCTA,
  HailInspectionSection,
  InnerHero,
  PageShell,
  ReviewsSection,
} from "../components";

export const metadata = {
  title: "Hail Repair in Carrollton, TX | Xtreme Collision Repair",
  description:
    "Hail repair in Carrollton, TX with photo upload, paintless dent repair evaluation, and help sorting the right repair path after a North Texas storm.",
};

export default function HailInspectionPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Hail repair Carrollton TX"
          title="Hail repair in Carrollton, TX"
          text="North Texas hail can leave dents that are easy to miss until you look closely. Start with a hail-specific review so the shop can map the damage, review your photos, and recommend the right next step."
        />
        <HailInspectionSection />
        <ReviewsSection />
        <FinalCTA />
      </main>
    </PageShell>
  );
}
