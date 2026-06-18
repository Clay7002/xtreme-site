export type Service = {
  title: string;
  slug: string;
  href: string;
  summary: string;
  intro: string;
  bullets: string[];
  seo: string;
};

export const siteInfo = {
  name: "Xtreme Collision Repair",
  city: "Carrollton",
  region: "Texas",
  phoneLabel: "(972) 233-0207",
  phoneHref: "tel:+19722330207",
  addressLabel: "2025 Midway Road, Suite E, Carrollton, TX 75006",
  shortAddressLabel: "2025 Midway Rd, Suite E",
  hoursLabel: "Mon-Thu: 8:00 am - 5:30 pm; Fri: partial day; Sat-Sun: Closed",
  emailLabel: "Add email address",
  googleReviewsHref: "#reviews",
  googleLeaveReviewHref: "#reviews",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=2025%20Midway%20Road%20Suite%20E%20Carrollton%20TX%2075006",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Certifications", href: "/certifications" },
  { label: "Resources/Blog", href: "/resources" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Repair Process", href: "/repair-process" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "Certifications", href: "/certifications" },
  { label: "Resources/Blog", href: "/resources" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export const socialLinks = [
  { label: "Facebook", href: "#", short: "f" },
  { label: "Instagram", href: "#", short: "ig" },
  { label: "Google", href: siteInfo.googleReviewsHref, short: "g" },
];

export const trustBadges = [
  "Lifetime limited warranty",
  "State of the art facility & equipment",
  "Expert, factory-trained technicians",
  "Works with all major insurance companies",
];

export const certificationSignals = [
  {
    label: "Factory-Correct Repairs",
    text: "Repair planning guided by manufacturer repair procedures where applicable.",
  },
  {
    label: "Computerized Measuring",
    text: "Structural and unibody measurement support for collision repair decisions.",
  },
  {
    label: "Paint & Color Match",
    text: "Refinishing and color-matching workflow for a clean finished repair.",
  },
  {
    label: "ADAS Coordination",
    text: "Coordination for calibration needs after repairs involving sensors or driver-assist systems.",
  },
  {
    label: "Lifetime Warranty",
    text: "Workmanship warranty messaging carried forward from the existing site.",
  },
];

export const nearbyAreas = [
  "Carrollton",
  "Addison",
  "Dallas",
  "Plano",
  "Frisco",
  "Richardson",
  "surrounding North Texas areas",
];

export const heroServiceArea =
  "Serving Carrollton, Addison, Dallas, Plano, Frisco, Richardson and surrounding areas.";

export const servicePanels = [
  {
    title: "Collision Repair Services",
    href: "/services",
    text: "Explore full auto body repair support, including collision repair, frame and unibody repair, refinishing, hail damage, dent repair, electrical coordination, and final quality checks.",
  },
  {
    title: "Insurance Claims Assistance",
    href: "/insurance-claims-help",
    text: "Bring the claim number, insurance estimate, and damage photos. Xtreme helps organize the claim path, explain supplements, and advocate for a proper repair plan.",
  },
  {
    title: "Certifications & Equipment",
    href: "/certifications",
    text: "Review the shop's repair capability signals, equipment placeholders, and the areas where confirmed OEM or industry credentials can be added as proof.",
  },
  {
    title: "Free Resources & FAQs",
    href: "/resources",
    text: "Helpful articles and answers for drivers comparing body shops, starting an insurance claim, preparing photos, and caring for a vehicle after repair.",
  },
];

export const whyChooseItems = [
  {
    title: "Concierge contact",
    text: "A single, clear intake path helps customers understand what information is needed and what happens after the estimate request.",
  },
  {
    title: "Hassle-free insurance claims",
    text: "The shop works with all major insurance companies, reviews estimates and supplements, and keeps claim details organized.",
  },
  {
    title: "Lifetime limited warranty",
    text: "The existing warranty value proposition is presented clearly so customers know workmanship accountability matters.",
  },
  {
    title: "Factory-correct repair planning",
    text: "Repair planning is framed around proper procedures, structural fit, finish quality, and the goal of pre-accident condition.",
  },
  {
    title: "State of the art facility & equipment",
    text: "Computerized measuring, paint refinishing, and repair-planning language give customers confidence in the shop's capabilities.",
  },
  {
    title: "Rental and transport coordination",
    text: "Rental car scheduling, pickup, and drop-off coordination can be highlighted for customers who need a smoother repair experience.",
  },
  {
    title: "Transparent communication",
    text: "The site sets expectations around estimates, approvals, supplements, quality checks, and delivery without promising unrealistic timelines.",
  },
];

export const resourceArticles = [
  {
    title: "What to Do After a Collision in North Texas",
    href: "/resources#after-collision",
    text: "A practical checklist for photos, claim numbers, estimates, towing, and the questions to ask before repairs begin.",
  },
  {
    title: "How Insurance Supplements Work",
    href: "/resources#insurance-supplements",
    text: "Plain-English guidance on hidden damage, updated estimates, approvals, and why supplements are common after teardown.",
  },
  {
    title: "Choosing a Body Shop in Carrollton",
    href: "/resources#choosing-body-shop",
    text: "What drivers should look for: warranty language, communication, repair process, equipment, reviews, and local accountability.",
  },
];

export const services: Service[] = [
  {
    title: "Collision Repair",
    slug: "collision-repair",
    href: "/services/collision-repair",
    summary:
      "Complete collision repair for North Texas drivers, from damage review and repair planning to body work, refinishing coordination, quality checks, and final delivery.",
    intro:
      "Xtreme Collision Repair helps customers in Carrollton and surrounding North Texas areas move from accident damage to a clear repair plan. The shop documents visible damage, coordinates insurance information, and focuses on restoring the vehicle with careful workmanship and communication.",
    bullets: [
      "Damage review and repair planning",
      "Body repair and refinishing coordination",
      "Insurance estimate and supplement support",
      "Quality review before vehicle delivery",
    ],
    seo: "Collision repair Carrollton TX",
  },
  {
    title: "Hail Damage & Paintless Dent Repair",
    slug: "hail-damage-paintless-dent-repair",
    href: "/services/hail-damage-repair",
    summary:
      "North Texas hail can leave dozens of small dents across hoods, roofs, trunks, and side panels. This service focuses on careful damage mapping, photo documentation, and paintless dent repair evaluation when the paint surface is still intact.",
    intro:
      "Texas storm damage needs a careful inspection before repairs begin. Xtreme Collision Repair can review hail patterns, document affected panels, help with insurance paperwork, and recommend the right repair approach for the vehicle.",
    bullets: [
      "Hail damage inspection and documentation",
      "Paintless dent repair evaluation",
      "Insurance claim photo support",
      "Panel-by-panel repair planning",
    ],
    seo: "Hail damage repair Carrollton TX",
  },
  {
    title: "Dents & Scratches Repair",
    slug: "dents-scratches-repair",
    href: "/services#dents-scratches-repair",
    summary:
      "Door dings, parking-lot scrapes, bumper scuffs, and deeper scratches are reviewed for the most practical repair path, whether that means paint-safe dent work, surface prep, or refinishing.",
    intro:
      "Small exterior damage can still affect a vehicle's appearance and value. The shop reviews dent depth, paint condition, panel access, and finish needs before recommending the repair plan.",
    bullets: [
      "Door ding and crease review",
      "Scratch depth and paint condition checks",
      "Bumper, fender, and panel scuff repair",
      "Refinish planning when paint is broken",
    ],
    seo: "Dents and scratches repair Carrollton TX",
  },
  {
    title: "Insurance Claims Assistance",
    slug: "insurance-claims-assistance",
    href: "/insurance-claims-help",
    summary:
      "The shop works with all major insurance companies, reviews claim paperwork, explains estimates and supplements, and advocates for a proper repair plan to return the vehicle to pre-accident condition.",
    intro:
      "Insurance claims can be stressful after a collision. Xtreme Collision Repair helps customers organize claim numbers, insurer estimates, photos, supplements, and approvals so the repair process is easier to understand.",
    bullets: [
      "Claim number and insurance company review",
      "Estimate and supplement explanation",
      "Damage documentation support",
      "Repair-plan advocacy through the claim process",
    ],
    seo: "Insurance collision repair Carrollton TX",
  },
  {
    title: "Auto Frame Repair",
    slug: "auto-frame-repair",
    href: "/services#auto-frame-repair",
    summary:
      "When an impact affects the vehicle's frame or structural alignment, the repair plan needs careful measuring, documentation, and correction before cosmetic work can be completed properly.",
    intro:
      "Frame-related damage should be reviewed before repairs move forward. The shop can inspect structural concerns, document findings, and plan the repair sequence around safety, alignment, and proper panel fit.",
    bullets: [
      "Structural damage review",
      "Frame repair planning",
      "Measurement documentation",
      "Panel fit and alignment checks",
    ],
    seo: "Auto frame repair Carrollton TX",
  },
  {
    title: "Unibody Repair",
    slug: "unibody-repair",
    href: "/services#unibody-repair",
    summary:
      "Many modern vehicles rely on a unibody structure, so collision damage may affect integrated structural areas. This service emphasizes precise review, measuring, and repair planning for those connected sections.",
    intro:
      "Unibody repair requires attention to how panels, rails, and structural sections work together. Xtreme Collision Repair can review impact areas and plan repairs around proper structure and fit.",
    bullets: [
      "Unibody structure inspection",
      "Repair sequence planning",
      "Integrated panel and rail review",
      "Quality checks before final delivery",
    ],
    seo: "Unibody repair Carrollton TX",
  },
  {
    title: "Airbag Services",
    slug: "airbag-services",
    href: "/services#airbag-services",
    summary:
      "Collision events can involve airbags, sensors, restraints, and warning lights. This service gives customers a clear path for inspection and coordination of safety-system repairs when applicable.",
    intro:
      "Airbag and restraint systems should be handled carefully after a collision. The site avoids unsupported certification claims while clearly explaining that safety-system needs can be reviewed and coordinated as part of the repair plan.",
    bullets: [
      "Airbag warning light review",
      "Restraint-system repair coordination",
      "Post-collision safety-system planning",
      "Documentation for completed steps",
    ],
    seo: "Airbag service Carrollton TX",
  },
  {
    title: "Computerized Frame / Unibody Measuring",
    slug: "computerized-frame-unibody-measuring",
    href: "/services#computerized-frame-unibody-measuring",
    summary:
      "Computerized measuring helps compare structural points against specifications, giving the repair team better information when hidden frame or unibody damage is suspected.",
    intro:
      "Measurement data helps support better repair decisions. Xtreme Collision Repair can use measuring information to document structural condition and guide frame or unibody correction when needed.",
    bullets: [
      "Computerized structural measuring",
      "Frame and unibody point checks",
      "Repair documentation support",
      "Data-informed quality review",
    ],
    seo: "Computerized frame measuring Carrollton TX",
  },
  {
    title: "Electrical System Repair",
    slug: "electrical-system-repair",
    href: "/services#electrical-system-repair",
    summary:
      "A collision can affect lighting, sensors, wiring, battery connections, and warning indicators. Electrical repair support focuses on identifying affected systems and coordinating the right repair steps.",
    intro:
      "Modern vehicles include many electrical components around bumpers, panels, and safety systems. The shop can review collision-related electrical issues and coordinate repairs within the broader body repair plan.",
    bullets: [
      "Lighting and sensor issue review",
      "Collision-related wiring checks",
      "Warning indicator documentation",
      "Electrical repair coordination",
    ],
    seo: "Collision electrical repair Carrollton TX",
  },
  {
    title: "Steering & Suspension",
    slug: "steering-suspension",
    href: "/services#steering-suspension",
    summary:
      "Impacts near wheels or suspension points can affect how a vehicle tracks, handles, or sits. This service highlights steering and suspension review as part of complete collision repair planning.",
    intro:
      "If a vehicle pulls, rides unevenly, or has wheel-area collision damage, steering and suspension concerns should be reviewed before delivery. Xtreme Collision Repair can coordinate the needed inspection and repair steps.",
    bullets: [
      "Wheel-area impact review",
      "Steering and suspension concern checks",
      "Alignment-related repair planning",
      "Road-readiness quality review",
    ],
    seo: "Steering and suspension repair Carrollton TX",
  },
  {
    title: "Rental Car Scheduling",
    slug: "rental-car-scheduling",
    href: "/services#rental-car-scheduling",
    summary:
      "Customers often need transportation while repairs are underway. Rental scheduling support helps reduce friction by coordinating next steps around insurance coverage, drop-off timing, and repair status.",
    intro:
      "Repair logistics matter. Xtreme Collision Repair can help customers understand rental-car next steps and coordinate scheduling details when a rental is part of the insurance claim or customer plan.",
    bullets: [
      "Rental timing guidance",
      "Insurance rental coverage coordination",
      "Drop-off and pickup planning",
      "Customer communication during repairs",
    ],
    seo: "Collision rental car scheduling Carrollton TX",
  },
  {
    title: "Color Matching & Refinishing",
    slug: "color-matching-refinishing",
    href: "/services/paint-refinishing",
    summary:
      "A quality repair should look consistent when finished. Color matching and refinishing focus on surface preparation, paint blend planning, finish quality, and final appearance review.",
    intro:
      "Paint and refinishing work is planned around a clean finish and a consistent appearance. Xtreme Collision Repair can support repaired panels with color-focused refinishing and a final visual inspection.",
    bullets: [
      "Color matching and blend planning",
      "Panel surface preparation",
      "Paint refinishing after body repair",
      "Final appearance inspection",
    ],
    seo: "Auto paint repair Carrollton TX",
  },
];

export const processSteps = [
  {
    title: "Request an Estimate",
    text: "Share contact details, vehicle information, damage notes, claim information, and photos so the shop can begin the review.",
  },
  {
    title: "Insurance Review",
    text: "Claim details, insurer estimates, coverage questions, and supplement needs are reviewed before the repair plan is finalized.",
  },
  {
    title: "Drop Off Vehicle",
    text: "The vehicle is checked in and documented so the team can confirm the visible damage and prepare for deeper inspection.",
  },
  {
    title: "Repair Planning",
    text: "Parts, structure, paint, safety-system coordination, and production steps are organized around the approved estimate.",
  },
  {
    title: "Repairs Begin",
    text: "Body, frame, unibody, electrical, refinishing, and related repairs move forward according to the repair plan.",
  },
  {
    title: "Quality Check",
    text: "Completed work is reviewed for fit, finish, function, and final delivery readiness.",
  },
  {
    title: "Vehicle Delivery",
    text: "The customer receives the vehicle back with final notes, warranty expectations, and any follow-up information.",
  },
];

export const faqs = [
  {
    question: "Do I need an appointment for an estimate?",
    answer:
      "Requesting an estimate first is the best starting point. Call (972) 233-0207 or use the form so the shop can review your vehicle details and follow up within 24-48 hours.",
  },
  {
    question: "Does Xtreme Collision Repair work with insurance companies?",
    answer:
      "Yes. The site now highlights that the shop works with all major insurance companies, helps review claim information, explains estimates and supplements, and advocates for a proper repair plan.",
  },
  {
    question: "How long will repairs take?",
    answer:
      "Repair time depends on damage severity, parts, insurance approvals, refinishing needs, and hidden damage. The shop can provide clearer expectations after reviewing the vehicle and claim details.",
  },
  {
    question: "Can I upload photos of the damage?",
    answer:
      "The form includes a photo upload placeholder. A live form handler can be connected later for real photo uploads and estimate routing.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Xtreme Collision Repair serves Carrollton, Addison, Dallas, Plano, Frisco, Richardson, and surrounding North Texas areas.",
  },
];

export const reviewPlaceholders = [
  {
    label: "Verified Google review placeholder",
    body: "Add an approved Google review excerpt here with first-name and last-initial attribution after confirming the exact text and profile source.",
  },
  {
    label: "SureCritic or customer testimonial placeholder",
    body: "Use this card for a verified comment about repair quality, communication, insurance-claim help, or final delivery experience.",
  },
  {
    label: "Before-and-after feedback placeholder",
    body: "Add another approved customer quote here. No fake reviews, invented ratings, or unsupported customer names are included.",
  },
];

export const galleryItems = [
  {
    title: "Collision repair before & after",
    damage: "Replace with the real damage photo",
    finished: "Replace with the matching delivery photo",
  },
  {
    title: "Hail damage repair example",
    damage: "Add storm-damage documentation",
    finished: "Add the completed repair photo",
  },
  {
    title: "Paint and color match example",
    damage: "Show the damaged or repaired panel before refinishing",
    finished: "Show the final color-matched finish",
  },
];
