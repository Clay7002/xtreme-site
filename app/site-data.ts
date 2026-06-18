export type Service = {
  title: string;
  slug: string;
  href: string;
  summary: string;
  intro: string;
  bullets: string[];
  seo: string;
};

export type ResourceArticle = {
  title: string;
  slug: string;
  href: string;
  text: string;
  body: string[];
  relatedLinks: { label: string; href: string }[];
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
  { label: "Certifications & Equipment", href: "/certifications" },
  { label: "Repair Process", href: "/repair-process" },
  { label: "Insurance Claims", href: "/insurance-claims-assistance" },
  { label: "Resources", href: "/resources" },
  { label: "Reviews", href: "/reviews" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Repair Process", href: "/repair-process" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Facility", href: "/our-facility" },
  { label: "Certifications & Equipment", href: "/certifications" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/about#careers" },
  { label: "Repair Authorization", href: "/repair-authorization" },
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
  "Expert repair technicians",
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
  "Serving Carrollton, Addison, Dallas, Plano, Frisco, Richardson, and surrounding North Texas communities.";

export const servicePanels = [
  {
    title: "Collision Repair Services",
    href: "/services",
    cta: "View Services",
    text: "Explore full auto body repair support, including collision repair, frame and unibody repair, refinishing, hail damage, dent repair, electrical coordination, and final quality checks.",
  },
  {
    title: "Insurance Claims Assistance",
    href: "/insurance-claims-assistance",
    cta: "Get Help With a Claim",
    text: "Bring the claim number, insurance estimate, and damage photos. Xtreme helps organize the claim path, explain supplements, and advocate for a proper repair plan.",
  },
  {
    title: "Customer Resources",
    href: "/resources",
    cta: "Visit Resources",
    text: "Learn what to do after an accident, how repair estimates work, what supplements are, and why proper structural repair matters.",
  },
  {
    title: "Certifications & Equipment",
    href: "/certifications",
    cta: "Learn More",
    text: "See the equipment, training placeholders, paint systems, and repair standards that help support quality collision repairs.",
  },
];

export const whyChooseItems = [
  {
    title: "Easy Estimate Process",
    text: "Start online or by phone. We make it simple to get the repair process moving with the right vehicle and damage information.",
  },
  {
    title: "Insurance Claim Support",
    text: "We help communicate with insurance companies and explain estimates, supplements, approvals, and repair planning clearly.",
  },
  {
    title: "Advanced Repair Equipment",
    text: "The facility is presented around professional tools and equipment for structural, body, measuring, and refinish repairs.",
  },
  {
    title: "Paint Color Matching",
    text: "The refinishing process focuses on color matching, blend planning, clearcoat finish, and final appearance review.",
  },
  {
    title: "Lifetime Limited Warranty",
    text: "Xtreme stands behind qualifying workmanship for as long as you own the vehicle, subject to warranty terms.",
  },
  {
    title: "Clear Communication",
    text: "Customers are kept oriented around what is happening, what has been approved, and what comes next.",
  },
  {
    title: "Rental Car Scheduling",
    text: "The shop can help coordinate rental options when available so repairs are less disruptive.",
  },
  {
    title: "Local North Texas Shop",
    text: "Proudly serving Carrollton, Addison, Dallas, Plano, Frisco, Richardson, and nearby communities.",
  },
];

export const resourceArticles: ResourceArticle[] = [
  {
    title: "What to Do After a Car Accident in Texas",
    slug: "what-to-do-after-a-car-accident-in-texas",
    href: "/resources/what-to-do-after-a-car-accident-in-texas",
    text: "A practical checklist for photos, claim numbers, estimates, towing, and questions to ask before repairs begin.",
    body: [
      "After a collision in Carrollton or anywhere in North Texas, start with safety, photos, exchange information, and claim details. Keep the insurer estimate, claim number, and damage photos together before you request repair help.",
      "Xtreme Collision Repair can review visible damage, explain the repair intake process, and help you understand what information is useful before drop off.",
      "This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "Request an estimate", href: "/contact" },
      { label: "Insurance claims assistance", href: "/insurance-claims-assistance" },
    ],
  },
  {
    title: "Do I Have to Use the Insurance Company’s Preferred Body Shop?",
    slug: "do-i-have-to-use-insurance-preferred-body-shop",
    href: "/resources/do-i-have-to-use-insurance-preferred-body-shop",
    text: "A plain-language overview of repair shop choice, insurer estimates, and how to compare body shops.",
    body: [
      "Many drivers do not realize they can ask questions and compare repair options before choosing a body shop. Xtreme Collision Repair helps Carrollton and North Texas customers understand estimates and the repair path without turning the conversation into legal advice.",
      "Look for a shop that explains repair planning, insurance coordination, warranty terms, structural concerns, and quality control clearly.",
      "This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "Collision repair services", href: "/services" },
      { label: "Repair process", href: "/repair-process" },
    ],
  },
  {
    title: "What Is a Collision Repair Supplement?",
    slug: "what-is-a-collision-repair-supplement",
    href: "/resources/what-is-a-collision-repair-supplement",
    text: "What supplements mean, why hidden damage matters, and how updated estimates fit into collision repair.",
    body: [
      "A supplement is an update to the original estimate when additional damage or repair needs are identified. Hidden damage can appear after inspection or disassembly, especially after a major collision.",
      "Xtreme Collision Repair documents visible and hidden damage, communicates repair-plan needs, and helps customers understand the next step in the claim process.",
      "This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "Insurance claims assistance", href: "/insurance-claims-assistance" },
      { label: "Collision repair", href: "/services/collision-repair" },
    ],
  },
  {
    title: "Why Frame Measuring Matters After an Accident",
    slug: "why-frame-measuring-matters-after-an-accident",
    href: "/resources/why-frame-measuring-matters-after-an-accident",
    text: "Why structural measurement can matter for alignment, panel fit, safety systems, and long-term vehicle value.",
    body: [
      "Collision damage is not always cosmetic. Frame and unibody points can affect alignment, panel fit, suspension behavior, and how future repair decisions are made.",
      "Computerized measuring helps support repair planning for North Texas vehicles when structural damage is suspected.",
      "This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "Frame and unibody repair", href: "/services/frame-unibody-repair" },
      { label: "Repair process", href: "/repair-process" },
    ],
  },
  {
    title: "OEM vs Aftermarket Parts: What Drivers Should Know",
    slug: "oem-vs-aftermarket-parts-what-drivers-should-know",
    href: "/resources/oem-vs-aftermarket-parts-what-drivers-should-know",
    text: "A customer-friendly explanation of parts terminology and why part selection should be discussed during repair planning.",
    body: [
      "Parts decisions can affect fit, finish, cost, availability, and insurer approvals. Customers should ask what parts are included in the estimate and whether any alternatives are being considered.",
      "Xtreme can help customers understand the estimate language and how parts fit into the overall repair plan.",
      "This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "Collision repair", href: "/services/collision-repair" },
      { label: "Insurance help", href: "/insurance-claims-assistance" },
    ],
  },
  {
    title: "How Long Does Collision Repair Take?",
    slug: "how-long-does-collision-repair-take",
    href: "/resources/how-long-does-collision-repair-take",
    text: "Why repair timing depends on damage severity, parts, approvals, refinishing, supplements, and quality checks.",
    body: [
      "Repair time depends on the vehicle, visible and hidden damage, parts availability, insurance approvals, paint/refinish needs, calibration coordination, and final quality control.",
      "The best estimate comes after the vehicle and claim details have been reviewed. Xtreme avoids unrealistic promises before the repair plan is clear.",
      "This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "Repair process", href: "/repair-process" },
      { label: "Get a free estimate", href: "/contact" },
    ],
  },
  {
    title: "What Is Paintless Dent Repair?",
    slug: "what-is-paintless-dent-repair",
    href: "/resources/what-is-paintless-dent-repair",
    text: "How paintless dent repair may help with hail damage and small dents when the paint surface is intact.",
    body: [
      "Paintless dent repair can be a good option for certain dents where the paint surface is still intact and access to the panel allows careful reshaping.",
      "North Texas hail damage should be inspected panel by panel before deciding whether PDR, conventional repair, or refinishing is appropriate.",
      "This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "Hail damage repair", href: "/services/hail-damage-repair" },
      { label: "Paint and refinishing", href: "/services/paint-refinishing" },
    ],
  },
  {
    title: "What If the Insurance Estimate Is Too Low?",
    slug: "what-if-the-insurance-estimate-is-too-low",
    href: "/resources/what-if-the-insurance-estimate-is-too-low",
    text: "How estimate reviews, documentation, and supplements can help when the initial number does not appear to match the damage.",
    body: [
      "Initial insurance estimates may be based on visible damage only. Once the repair process begins, additional damage may be documented and submitted through the appropriate supplement process.",
      "Xtreme helps customers understand what the estimate includes and what may need review during repair planning.",
      "This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "Insurance claims assistance", href: "/insurance-claims-assistance" },
      { label: "Start your estimate", href: "/contact" },
    ],
  },
  {
    title: "Who Guarantees the Repair?",
    slug: "who-guarantees-the-repair",
    href: "/resources/who-guarantees-the-repair",
    text: "What customers should ask about workmanship warranty, paint finish, parts, and written warranty terms.",
    body: [
      "Warranty language should be clear before customers authorize repairs. Ask what is covered, what is excluded, and how long workmanship coverage applies.",
      "Xtreme presents a lifetime limited workmanship warranty message while leaving final terms for the business-approved warranty language.",
      "This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "About Xtreme", href: "/about" },
      { label: "Contact the shop", href: "/contact" },
    ],
  },
  {
    title: "Why Proper Collision Repair Is a Safety Issue",
    slug: "why-proper-collision-repair-is-a-safety-issue",
    href: "/resources/why-proper-collision-repair-is-a-safety-issue",
    text: "Why repairs should consider structure, restraints, sensors, steering, suspension, refinishing, and quality control.",
    body: [
      "Modern vehicles depend on structural design, airbag/restraint systems, sensors, steering, suspension, and correct panel fit. A proper repair is about more than making the vehicle look good.",
      "Xtreme's repair process explains inspection, documentation, structural repair planning, refinishing, and quality checks for Carrollton and North Texas drivers.",
      "This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "Collision repair", href: "/services/collision-repair" },
      { label: "Frame and unibody repair", href: "/services/frame-unibody-repair" },
    ],
  },
];

export const services: Service[] = [
  {
    title: "Collision Repair",
    slug: "collision-repair",
    href: "/services/collision-repair",
    summary:
      "Complete collision repair for cars, trucks, and SUVs, from damage review and structural repair planning to refinishing, quality checks, and final delivery.",
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
    href: "/insurance-claims-assistance",
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
    href: "/services/frame-unibody-repair",
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
    href: "/services/frame-unibody-repair",
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
    href: "/services/frame-unibody-repair",
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
    title: "Electrical Wiring Auto Repair",
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
    title: "Steering & Suspension Repair",
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
      "A quality repair should look consistent when finished. Color matching and refinishing focus on computerized color support, surface preparation, paint blend planning, clearcoat finish, and final appearance review.",
    intro:
      "Paint and refinishing work is planned around a clean finish and a consistent appearance. Xtreme Collision Repair can support repaired panels with color-focused refinishing and a final visual inspection.",
    bullets: [
      "Computerized color matching support",
      "Color matching and blend planning",
      "Panel surface preparation",
      "Paint refinishing after body repair",
      "Final appearance inspection",
    ],
    seo: "Auto paint repair Carrollton TX",
  },
  {
    title: "Additional Services",
    slug: "additional-services",
    href: "/services#additional-services",
    summary:
      "Additional collision-related support may include damage documentation, repair logistics, calibration coordination, photo review, and customer communication from estimate through delivery.",
    intro:
      "Collision repair often involves more than one service category. Xtreme Collision Repair can help customers understand related needs such as documentation, calibration coordination, rental scheduling, and delivery planning.",
    bullets: [
      "Damage photo and estimate intake",
      "Calibration coordination when applicable",
      "Repair logistics and delivery planning",
      "Customer communication support",
    ],
    seo: "Auto body repair Carrollton TX",
  },
];

export const processSteps = [
  {
    title: "Request an Estimate",
    text: "Share contact details, vehicle information, damage notes, claim information, and photos so the shop can begin the review.",
  },
  {
    title: "Vehicle Inspection",
    text: "The vehicle details, photos, visible damage, claim information, and customer concerns are reviewed before planning begins.",
  },
  {
    title: "Insurance Review",
    text: "Claim details, insurer estimates, coverage questions, and supplement needs are organized and explained.",
  },
  {
    title: "Disassembly / Hidden Damage Check",
    text: "When needed, damaged areas are opened up so hidden damage can be documented and reviewed.",
  },
  {
    title: "Repair Plan & Parts",
    text: "Parts, structure, paint, safety-system coordination, and production steps are organized around the approved estimate.",
  },
  {
    title: "Structural & Body Repairs",
    text: "Body, frame, unibody, electrical, refinishing, and related repairs move forward according to the repair plan.",
  },
  {
    title: "Paint & Refinishing",
    text: "Repaired panels are prepped, color matched, blended, clearcoated, and reviewed for appearance.",
  },
  {
    title: "Reassembly & Calibration Coordination",
    text: "The vehicle is reassembled and calibration needs are coordinated when sensors or driver-assist systems are affected.",
  },
  {
    title: "Quality Control",
    text: "Completed work is reviewed for fit, finish, function, cleanliness, and delivery readiness.",
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
    question: "Can I choose my own body shop?",
    answer:
      "Customers can ask questions and compare repair options before choosing a shop. Xtreme Collision Repair can explain the estimate, repair plan, and insurance coordination steps in plain language. This is educational information, not legal advice.",
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
    question: "What is a supplement?",
    answer:
      "A supplement is an update to the original estimate when hidden damage or additional repair needs are found. The shop can document the issue and explain what happens next in the claim process.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "The site carries forward the existing lifetime limited warranty message. Warranty details should be confirmed with the shop and reflected in the final business-approved warranty terms.",
  },
  {
    question: "Can you help with a rental car?",
    answer:
      "Rental car scheduling can be coordinated when available and when it fits the claim or customer plan. Ask about rental options when requesting your estimate.",
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
