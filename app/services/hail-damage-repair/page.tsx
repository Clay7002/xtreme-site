import { PageShell, ServiceDetail } from "../../components";
import { services } from "../../site-data";

const service = services.find(
  (item) => item.slug === "hail-damage-paintless-dent-repair",
);

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
