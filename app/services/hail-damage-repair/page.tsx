import { PageShell, ServiceDetail } from "../../components";
import { services } from "../../site-data";

const service = services.find((item) => item.title === "Hail Damage Repair");

export default function HailDamageRepairPage() {
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
