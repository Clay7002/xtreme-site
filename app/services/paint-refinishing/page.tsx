import { PageShell, ServiceDetail } from "../../components";
import { services } from "../../site-data";

const service = services.find((item) => item.slug === "color-matching-refinishing");

export default function PaintRefinishingPage() {
  if (!service) {
    return null;
  }

  return (
    <PageShell>
      <main>
        <ServiceDetail service={service} />
      </main>
    </PageShell>
  );
}
