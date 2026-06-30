import {
  CertificationStrip,
  HeroSection,
  HomepageServicesSection,
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
        <HomepageServicesSection />
        <ReviewsSection />
        <LocationContactSection />
      </main>
    </PageShell>
  );
}
