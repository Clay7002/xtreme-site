import { getDb } from "@/db";
import { repairPlanRequests } from "@/db/schema";

function textValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const requestType = textValue(formData, "request-type");
  const drivableStatus = textValue(formData, "drivable-status");
  const customerName = textValue(formData, "customer-name");
  const phone = textValue(formData, "phone");
  const email = textValue(formData, "email");
  const vehicle = textValue(formData, "vehicle");
  const damageAreas = textValue(formData, "damage-areas");

  if (!requestType || !drivableStatus || !customerName || !phone || !email || !vehicle || !damageAreas) {
    return Response.json(
      { message: "Please complete the required fields before submitting." },
      { status: 400 },
    );
  }

  const fileEntries = formData.getAll("photos").filter((entry): entry is File => entry instanceof File && entry.size > 0);
  const photoNames = JSON.stringify(fileEntries.map((file) => file.name));
  const notes = textValue(formData, "notes");
  let stored = false;

  try {
    const db = getDb();
    await db.insert(repairPlanRequests).values({
      requestType,
      drivableStatus,
      customerName,
      phone,
      email,
      city: textValue(formData, "city"),
      vehicle,
      vin: textValue(formData, "vin"),
      mileage: textValue(formData, "mileage"),
      insuranceCompany: textValue(formData, "insurance-company"),
      claimNumber: textValue(formData, "claim-number"),
      damageAreas,
      notes,
      photoCount: fileEntries.length,
      photoNames,
      consent: textValue(formData, "consent") || "yes",
    });
    stored = true;
  } catch (error) {
    console.warn("Repair plan request storage skipped:", error);
  }

  return Response.json({
    message: stored
      ? "Your repair plan request was received and saved. Xtreme will review the details and follow up soon."
      : "Your repair plan request was received. Xtreme will review the details and follow up soon.",
    stored,
    photoCount: fileEntries.length,
  });
}
