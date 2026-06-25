"use client";

import { useState, type FormEvent } from "react";

const requestTypeOptions = [
  "Collision damage",
  "Hail damage",
  "Both collision and hail",
  "Not sure yet",
] as const;

const drivableOptions = [
  "Yes, it is drivable",
  "Yes, but with concerns",
  "No, it needs towing",
] as const;

type SubmissionState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

export function RepairPlanRequestForm() {
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmission({ status: "submitting", message: "" });

    try {
      const response = await fetch("/api/repair-plan", {
        method: "POST",
        body: formData,
      });

      const payload = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(payload?.message ?? "We could not send that request.");
      }

      form.reset();
      setSubmission({
        status: "success",
        message:
          payload?.message ??
          "Your repair plan request was received. The shop will follow up soon.",
      });
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "We hit a problem sending the request.",
      });
    }
  }

  return (
    <form
      className="estimate-form repair-plan-form"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <h2>Request Your Free Repair Plan</h2>
      <p className="form-note">
        Use this form for collision, hail, or insurance-related repair planning.
        Upload photos if you have them, and we&apos;ll review the vehicle details
        before following up.
      </p>
      <div className="form-callout">
        <strong>Fastest way to get started</strong>
        <span>
          Include the basics, any insurance information you already have, and a
          few photos of the damage so the team can review everything together.
        </span>
      </div>

      <div className="form-grid">
        <label>
          What kind of repair plan do you need?
          <select name="request-type" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {requestTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          Drivable status
          <select name="drivable-status" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {drivableOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          Customer name
          <input name="customer-name" type="text" autoComplete="name" required />
        </label>

        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>

        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>

        <label>
          City
          <input name="city" type="text" autoComplete="address-level2" />
        </label>

        <label className="form-wide">
          Vehicle year / make / model
          <input
            name="vehicle"
            type="text"
            autoComplete="off"
            placeholder="Example: 2021 Ford F-150"
            required
          />
        </label>

        <label>
          VIN
          <input name="vin" type="text" autoComplete="off" />
        </label>

        <label>
          Mileage
          <input name="mileage" type="text" inputMode="numeric" autoComplete="off" />
        </label>

        <label>
          Insurance company
          <input name="insurance-company" type="text" autoComplete="organization" />
        </label>

        <label>
          Claim number
          <input name="claim-number" type="text" autoComplete="off" />
        </label>

        <label className="form-wide">
          Where is the damage?
          <textarea
            name="damage-areas"
            rows={4}
            placeholder="Example: front bumper, hood, driver side doors, roof hail dents"
            required
          />
        </label>

        <label className="form-wide">
          Photo upload
          <input
            name="photos"
            type="file"
            accept="image/*"
            multiple
          />
          <span className="upload-note">
            Upload a few clear photos if you have them. Multiple images are
            okay.
          </span>
        </label>

        <label className="form-wide">
          Additional notes
          <textarea
            name="notes"
            rows={4}
            placeholder="Anything else the shop should know?"
          />
        </label>

        <label className="form-wide consent-label">
          <input name="consent" type="checkbox" required />
          <span>
            I authorize Xtreme Collision Repair to review this information and
            contact me about next steps for this vehicle.
          </span>
        </label>
      </div>

      <div className="form-actions">
        <button
          className="button button-primary"
          data-track="form-submit:repair-plan"
          type="submit"
          disabled={submission.status === "submitting"}
        >
          {submission.status === "submitting"
            ? "Sending Request..."
            : "Send Repair Plan Request"}
        </button>
      </div>

      <p
        className={`form-status form-status-${submission.status}`}
        aria-live="polite"
      >
        {submission.message || "We’ll review the details and follow up with next steps."}
      </p>
    </form>
  );
}
