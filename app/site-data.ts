export type Service = {
  title: string;
  href: string;
  summary: string;
  intro: string;
  bullets: string[];
  seo: string;
};

export const siteInfo = {
  name: "Xtreme Collision Repair",
  city: "Euless",
  region: "Texas",
  phoneLabel: "Add phone number",
  phoneHref: "#contact",
  addressLabel: "Euless, TX address placeholder",
  hoursLabel: "Hours placeholder",
  emailLabel: "Add email address",
  googleReviewsHref: "#reviews",
  googleLeaveReviewHref: "#reviews",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/repair-process" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const trustBadges = [
  "Local Euless body shop",
  "Insurance claim guidance",
  "Clear repair updates",
  "Quality check before delivery",
];

export const nearbyAreas = [
  "Bedford",
  "Irving",
  "Arlington",
  "Hurst",
  "Grapevine",
  "Fort Worth",
  "the Mid-Cities",
];

export const services: Service[] = [
  {
    title: "Collision Repair",
    href: "/services/collision-repair",
    summary:
      "Repair planning, body work, refinishing coordination, and final checks after a collision.",
    intro:
      "From minor impact damage to more involved collision repair, Xtreme Collision Repair helps Euless drivers understand the next step, document the damage, and move through the repair process with clear communication.",
    bullets: [
      "Damage review and repair planning",
      "Panel repair or replacement guidance",
      "Refinish coordination for restored appearance",
      "Quality review before vehicle delivery",
    ],
    seo: "Collision repair Euless TX",
  },
  {
    title: "Auto Body Repair",
    href: "/services",
    summary:
      "Dent, scratch, bumper, panel, and exterior repair support for daily drivers and family vehicles.",
    intro:
      "Auto body repair should feel straightforward. The shop can inspect visible and hidden damage, explain practical repair options, and help customers understand what needs attention.",
    bullets: [
      "Bumper and panel damage",
      "Scratches, scuffs, and exterior blemishes",
      "Door, fender, quarter panel, and hood repairs",
      "Repair notes prepared for estimate review",
    ],
    seo: "Auto body repair Euless TX",
  },
  {
    title: "Paint & Refinishing",
    href: "/services/paint-refinishing",
    summary:
      "Color-focused refinishing support for repaired panels, scuffs, and paint damage.",
    intro:
      "Paint and refinishing work is planned around a clean finish and a consistent appearance. Xtreme Collision Repair can update this page with real paint system details, shop photos, and warranty information once confirmed.",
    bullets: [
      "Panel refinishing after body repair",
      "Paint damage review",
      "Surface preparation and finish planning",
      "Final appearance inspection",
    ],
    seo: "Auto paint repair Euless TX",
  },
  {
    title: "Hail Damage Repair",
    href: "/services/hail-damage-repair",
    summary:
      "Hail damage review, estimate support, and repair planning for North Texas storm damage.",
    intro:
      "Texas storms can leave dents across hoods, roofs, trunks, and body panels. The shop can help document hail damage and coordinate repair planning with the insurance claim process.",
    bullets: [
      "Hail damage inspection",
      "Photo documentation support",
      "Insurance estimate review",
      "Repair planning for affected panels",
    ],
    seo: "Hail damage repair Euless TX",
  },
  {
    title: "Dent Repair",
    href: "/services",
    summary:
      "Repair options for dents, dings, creases, and exterior impact marks.",
    intro:
      "Dent repair starts with a careful look at panel condition, paint condition, and access. The shop can recommend the practical repair path once the vehicle is reviewed.",
    bullets: [
      "Door dings and small dents",
      "Creases and panel impacts",
      "Painted panel repair planning",
      "Estimate notes for approval",
    ],
    seo: "Body shop Euless TX",
  },
  {
    title: "Frame / Structural Repair",
    href: "/services",
    summary:
      "Structural damage review and repair coordination when collision impact goes beyond exterior panels.",
    intro:
      "When damage may involve structural areas, the repair plan should be documented carefully. This page avoids claiming unverified equipment or certifications and can be updated with confirmed shop capabilities.",
    bullets: [
      "Structural damage review",
      "Repair plan documentation",
      "Coordination with insurance estimates",
      "Quality checks before delivery",
    ],
    seo: "Insurance collision repair Euless TX",
  },
  {
    title: "Insurance Claim Assistance",
    href: "/insurance-claims-help",
    summary:
      "Help understanding the estimate, claim number, photos, supplements, and next steps.",
    intro:
      "Insurance paperwork can be confusing after a collision. Xtreme Collision Repair can help customers organize claim information, review estimate details, and understand what happens if hidden damage is found.",
    bullets: [
      "Estimate and claim information review",
      "Damage documentation support",
      "Supplement explanation when needed",
      "Clear next-step communication",
    ],
    seo: "Insurance collision repair Euless TX",
  },
  {
    title: "ADAS Calibration Coordination",
    href: "/services",
    summary:
      "Coordination language for advanced driver assistance calibration when needed after repairs.",
    intro:
      "Modern vehicles may require calibration after certain repairs. This page should be updated with the shop's confirmed calibration process and partners, if applicable.",
    bullets: [
      "ADAS need review based on repair plan",
      "Calibration coordination when applicable",
      "Documentation for completed steps",
      "Customer-friendly explanation of next steps",
    ],
    seo: "Collision repair Euless TX",
  },
];

export const processSteps = [
  {
    title: "Request an Estimate",
    text: "Share contact details, vehicle information, damage notes, and photos if available.",
  },
  {
    title: "Insurance Review",
    text: "The claim, estimate, and coverage details are reviewed so expectations are clear.",
  },
  {
    title: "Drop Off Vehicle",
    text: "Once approved and scheduled, the vehicle is received and checked in for repair planning.",
  },
  {
    title: "Repair Planning",
    text: "Visible damage is reviewed and the plan is adjusted if hidden damage is discovered.",
  },
  {
    title: "Repairs Begin",
    text: "Body repair, refinishing coordination, and related work move forward according to the plan.",
  },
  {
    title: "Quality Check",
    text: "Completed work is reviewed before the vehicle is prepared for pickup.",
  },
  {
    title: "Vehicle Delivery",
    text: "You receive your vehicle back with final notes and any next-step information.",
  },
];

export const faqs = [
  {
    question: "Do I need an appointment for an estimate?",
    answer:
      "The site is set up for estimate requests first. Add the shop's real walk-in and appointment policy here once confirmed.",
  },
  {
    question: "Can Xtreme Collision Repair help with insurance claims?",
    answer:
      "Yes. The site positions the shop to help customers review claim information, damage documentation, estimates, and next steps without making promises about insurer decisions.",
  },
  {
    question: "How long will repairs take?",
    answer:
      "Repair time depends on damage, parts, insurer approval, and refinishing needs. The copy avoids overpromising and encourages customers to request an estimate for a clearer plan.",
  },
  {
    question: "Can I upload photos of the damage?",
    answer:
      "The form includes an upload placeholder. A live form handler can be connected later for real photo uploads and estimate routing.",
  },
  {
    question: "Do you serve drivers outside Euless?",
    answer:
      "The site naturally mentions nearby areas including Bedford, Irving, Arlington, Hurst, Grapevine, Fort Worth, and the Mid-Cities.",
  },
];

export const reviewPlaceholders = [
  {
    label: "Google review placeholder",
    body: "Real Google review excerpt will be added here after the business approves the exact text.",
  },
  {
    label: "Google review placeholder",
    body: "Use this card for a customer comment about communication, repair quality, or insurance help once verified.",
  },
  {
    label: "Google review placeholder",
    body: "Add another verified review here. No fake ratings or invented customer stories are included.",
  },
];

export const galleryItems = [
  {
    title: "Front bumper repair placeholder",
    damage: "Replace with a real before photo",
    finished: "Replace with a matching after photo",
  },
  {
    title: "Door and quarter panel placeholder",
    damage: "Show documented damage",
    finished: "Show completed repair",
  },
  {
    title: "Hail damage placeholder",
    damage: "Add storm damage photos",
    finished: "Add final delivery photos",
  },
];
