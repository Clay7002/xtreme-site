import {
  CertificationStrip,
  HeroSection,
  HailCollisionSpotlightSection,
  LocationContactSection,
  PageShell,
  ReviewsSection,
} from "./components";

export default function Home() {
  return (
    <PageShell>
      <main>
        <HeroSection />
        <CertificationStrip />
        <HailCollisionSpotlightSection />
        <ReviewsSection />
        <LocationContactSection />
      </main>
    </PageShell>
  );
}
