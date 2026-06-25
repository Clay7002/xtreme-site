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

  return Response.json({
    message: "Your repair plan request was received. Xtreme will review the details and follow up soon.",
    stored: false,
    photoCount: fileEntries.length,
  });
}
