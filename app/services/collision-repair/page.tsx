import { PageShell, ServiceDetail } from "../../components";
import { services } from "../../site-data";

const service = services.find((item) => item.title === "Collision Repair");

export default function CollisionRepairPage() {
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
