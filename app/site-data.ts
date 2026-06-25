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

export type GalleryItem = {
  title: string;
  category: string;
  damage: string;
  finished: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export type WorkGalleryItem = {
  title: string;
  tag: string;
  text: string;
  src: string;
  alt: string;
};

export type CertificationLogo = {
  name: string;
  src: string;
  alt: string;
  tone?: "light" | "dark";
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
  googleReviewsHref: "#reviews",
  googleLeaveReviewHref: "#reviews",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=2025%20Midway%20Road%20Suite%20E%20Carrollton%20TX%2075006",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Hail Repair", href: "/hail-inspection" },
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
  { label: "Google reviews", href: siteInfo.googleReviewsHref, short: "g" },
];

export const trustBadges = [
  "5-Star Google Reviews",
  "Lifetime limited workmanship warranty",
  "OEM certifications & equipment",
  "Concierge pickup & delivery",
  "Collision & hail repair planning",
  "Deductible assistance",
  "Free loaner available",
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
    text: "Lifetime limited workmanship warranty support on qualifying repairs."
  },
];

export const certificationLogos: CertificationLogo[] = [
  {
    name: "Kia",
    src: "/certifications/kia-certified.webp",
    alt: "Kia certified collision repair logo",
  },
  {
    name: "Hyundai",
    src: "/certifications/hyundai-certified.webp",
    alt: "Hyundai certified collision center logo",
    tone: "dark",
  },
  {
    name: "Jeep",
    src: "/certifications/jeep-certified.webp",
    alt: "Jeep certified collision center logo",
  },
  {
    name: "Chrysler",
    src: "/certifications/chrysler-certified.webp",
    alt: "Chrysler certified collision center logo",
  },
  {
    name: "Dodge",
    src: "/certifications/dodge-certified.webp",
    alt: "Dodge certified collision center logo",
  },
  {
    name: "GMC",
    src: "/certifications/gmc-certified.webp",
    alt: "GMC certified collision repair logo",
  },
  {
    name: "Chevrolet",
    src: "/certifications/chevrolet-certified.webp",
    alt: "Chevrolet certified collision repair logo",
  },
  {
    name: "Cadillac",
    src: "/certifications/cadillac-certified.webp",
    alt: "Cadillac certified collision repair logo",
  },
  {
    name: "Buick",
    src: "/certifications/buick-certified.webp",
    alt: "Buick certified collision repair logo",
  },
  {
    name: "Subaru",
    src: "/certifications/subaru-certified.webp",
    alt: "Subaru certified collision repair logo",
  },
  {
    name: "Nissan",
    src: "/certifications/nissan-certified.webp",
    alt: "Nissan certified collision repair logo",
  },
  {
    name: "INFINITI",
    src: "/certifications/infiniti-certified.webp",
    alt: "INFINITI certified collision repair logo",
  },
  {
    name: "Ford",
    src: "/certifications/ford-certified.webp",
    alt: "Ford certified collision center logo",
  },
  {
    name: "Lincoln",
    src: "/certifications/lincoln-certified.webp",
    alt: "Lincoln certified collision repair logo",
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
    title: "Collision & Hail Repair Services",
    href: "/services",
    cta: "View Services",
    text: "Explore collision repair, hail repair, frame and unibody work, refinishing, dent repair, electrical coordination, and final quality checks.",
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
    text: "See OEM certification logos, repair equipment, paint systems, and repair standards that help support quality collision repairs.",
  },
];

export const whyChooseItems = [
  {
    title: "Collision & Hail Repair",
    text: "Start online or by phone. We make it simple to get the repair process moving with the right vehicle and damage details.",
  },
  {
    title: "Deductible Assistance",
    text: "We help communicate with insurance companies and explain estimates, supplements, approvals, and repair planning clearly.",
  },
  {
    title: "Advanced Repair Equipment",
    text: "Professional tools and equipment support structural, body, measuring, and refinish repair planning.",
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
    title: "Value-Back Repair Guidance",
    text: "Clear updates help drivers understand what is happening, what has been approved, and what comes next while keeping vehicle value in mind.",
  },
  {
    title: "Rental Car Scheduling",
    text: "The shop can help customers understand rental timing and claim-related transportation details when they apply.",
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
    title: "Can I Choose My Own Body Shop in Texas?",
    slug: "do-i-have-to-use-insurance-preferred-body-shop",
    href: "/resources/do-i-have-to-use-insurance-preferred-body-shop",
    text: "A plain-language overview of repair shop choice, insurer estimates, and how to compare body shops after a collision.",
    body: [
      "After an accident, customers can ask questions, compare repair options, and choose a repair facility that explains the process clearly. Xtreme Collision Repair helps Carrollton and North Texas drivers understand estimates and the repair path without turning the conversation into legal advice.",
      "Look for a shop that explains repair planning, insurance coordination, warranty terms, structural concerns, parts decisions, and final quality control before you authorize repairs.",
      "This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "Collision repair services", href: "/services" },
      { label: "Repair process", href: "/repair-process" },
    ],
  },
  {
    title: "What Is Insurance Steering?",
    slug: "what-is-insurance-steering",
    href: "/resources/what-is-insurance-steering",
    text: "What drivers should know when an insurer recommends a preferred body shop after an accident.",
    body: [
      "Insurance steering is a term drivers may hear when an insurer strongly pushes a customer toward a preferred repair facility. A recommendation can be convenient, but customers should still understand the repair plan, warranty terms, parts decisions, and quality-control process before choosing a shop.",
      "Xtreme Collision Repair helps customers review insurer estimates, ask better repair questions, and understand what information matters before authorizing work.",
      "This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "Insurance claims assistance", href: "/insurance-claims-assistance" },
      { label: "Who guarantees the repair?", href: "/resources/who-guarantees-the-repair" },
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
      { label: "Schedule Your Free Repair Plan", href: "/contact" },
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
    text: "What customers should ask about workmanship warranty, repair responsibility, paint finish, parts, and written warranty terms.",
    body: [
      "Before authorizing repairs, customers should understand who stands behind the workmanship, what warranty terms apply, and how questions are handled after delivery.",
      "Insurance estimates can help define claim payment, but the repair facility performs the work and should explain its workmanship expectations clearly. Xtreme offers lifetime limited workmanship warranty support on qualifying repairs.",
      "Ask the shop for the written terms that apply to your repair. This article is educational and is not legal advice.",
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
      "Modern vehicles depend on structural design, airbag and restraint systems, sensors, steering, suspension, and correct panel fit. A proper repair is about more than making the vehicle look good.",
      "Repair procedures, measurements, parts decisions, refinish steps, and calibration coordination can all affect the final result. Customers should ask how the shop plans the repair and checks the vehicle before delivery.",
      "Xtreme's repair process explains inspection, documentation, structural repair planning, refinishing, and quality checks for Carrollton and North Texas drivers. This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "Collision repair", href: "/services/collision-repair" },
      { label: "Frame and unibody repair", href: "/services/frame-unibody-repair" },
    ],
  },
  {
    title: "Whose Repair Standards Should a Body Shop Follow?",
    slug: "whose-repair-standards-should-a-body-shop-follow",
    href: "/resources/whose-repair-standards-should-a-body-shop-follow",
    text: "Why manufacturer repair procedures, equipment, documentation, and quality checks matter after a collision.",
    body: [
      "Vehicle manufacturers design the structure, materials, safety systems, sensors, and repair procedures around how the vehicle is built. After a collision, repair planning should consider those standards where applicable.",
      "Customers should ask how a shop researches repair procedures, documents damage, handles structural or safety-system concerns, and verifies the finished repair before delivery.",
      "Xtreme Collision Repair focuses on clear repair planning, documentation, and quality checks for North Texas drivers. This article is educational and is not legal advice.",
    ],
    relatedLinks: [
      { label: "Certifications and equipment", href: "/certifications" },
      { label: "Repair process", href: "/repair-process" },
    ],
  },
];

export const services: Service[] = [
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
      "Frame-related damage needs careful inspection before repairs move forward. The shop can document structural concerns and plan the repair sequence around safety, alignment, and proper panel fit.",
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
      "Airbag and restraint systems should be handled carefully after a collision. Xtreme can review safety-system concerns and coordinate applicable repair steps as part of the broader collision repair plan.",
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
      "If a vehicle pulls, rides unevenly, or has wheel-area collision damage, steering and suspension concerns need attention before delivery. Xtreme Collision Repair can coordinate the needed inspection and repair steps.",
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
    text: "Share contact details, vehicle information, damage notes, claim details, and photos.",
  },
  {
    title: "Vehicle Inspection",
    text: "The shop reviews the vehicle, photos, visible damage, and customer concerns before planning begins.",
  },
  {
    title: "Insurance Review",
    text: "Claim details, insurer estimates, coverage questions, and supplement needs are organized.",
  },
  {
    title: "Disassembly / Hidden Damage Check",
    text: "When needed, damaged areas are opened so hidden damage can be documented.",
  },
  {
    title: "Repair Plan & Parts",
    text: "Parts, structure, paint, safety systems, and production steps are organized around the approved estimate.",
  },
  {
    title: "Structural & Body Repairs",
    text: "Body, frame, unibody, electrical, refinishing, and related repairs move forward as planned.",
  },
  {
    title: "Paint & Refinishing",
    text: "Repaired panels are prepped, color matched, blended, clearcoated, and checked for appearance.",
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
    text: "The customer receives final notes, warranty expectations, and any follow-up information.",
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
      "Yes. Xtreme works with all major insurance companies, helps review claim information, explains estimates and supplements, and advocates for a proper repair plan.",
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
      "Xtreme offers a lifetime limited workmanship warranty on qualifying repairs. Ask the shop for the written warranty terms that apply to your repair.",
  },
  {
    question: "Can you help with a rental car?",
    answer:
      "Rental car scheduling can be coordinated when available and when it fits the claim or customer plan. Ask about rental options when requesting your estimate.",
  },
  {
    question: "Can I upload photos of the damage?",
    answer:
      "Call the shop and the team can explain the best way to share damage photos for review.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Xtreme Collision Repair serves Carrollton, Addison, Dallas, Plano, Frisco, Richardson, and surrounding North Texas areas.",
  },
];

export const customerExperienceItems = [
  {
    label: "Repair quality",
    body: "A careful repair plan, quality checks, and a clean finished repair are central to the Xtreme customer experience.",
  },
  {
    label: "Communication",
    body: "Customers should know what is happening, what information is needed, and what comes next during the repair process.",
  },
  {
    label: "Delivery experience",
    body: "Final pickup should feel organized, clear, and confidence-building before the vehicle leaves the shop.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Subaru rear bumper and quarter repair",
    category: "Before & After",
    damage: "Rear impact damage around the bumper cover, liftgate, and left rear body area.",
    finished: "Clean panel fit, refinished bumper area, and restored rear appearance.",
    beforeSrc: "/gallery/work/subaru-rear-before.webp",
    afterSrc: "/gallery/work/subaru-rear-after.webp",
    beforeAlt: "Damaged rear corner of a gray Subaru before collision repair",
    afterAlt: "Repaired rear corner of the gray Subaru after collision repair",
  },
  {
    title: "Ram front-end collision repair",
    category: "Before & After",
    damage: "Front bumper, grille, and lower front-end damage documented during intake.",
    finished: "Reassembled front end with clean grille alignment and restored exterior presentation.",
    beforeSrc: "/gallery/work/ram-front-before.webp",
    afterSrc: "/gallery/work/ram-front-after.webp",
    beforeAlt: "Damaged gray Ram truck front end before collision repair",
    afterAlt: "Repaired gray Ram truck front end after collision repair",
  },
  {
    title: "Kia Sportage front-end repair",
    category: "Before & After",
    damage: "Front impact damage with broken bumper cover components and exposed front structure.",
    finished: "Finished front-quarter view showing restored panels, lighting, and exterior fit.",
    beforeSrc: "/gallery/work/kia-front-before.webp",
    afterSrc: "/gallery/work/kia-front-after.webp",
    beforeAlt: "White Kia Sportage with front-end collision damage before repair",
    afterAlt: "White Kia Sportage after front-end collision repair",
  },
  {
    title: "Genesis front-end reconstruction",
    category: "Before & After",
    damage: "Front fascia, cooling-area, and passenger-side front-end damage documented before teardown.",
    finished: "Finished Genesis front end with restored hood, grille, and bumper alignment.",
    beforeSrc: "/gallery/work/genesis-front-before.webp",
    afterSrc: "/gallery/work/genesis-front-after.webp",
    beforeAlt: "Dark Genesis sedan with front-end collision damage before repair",
    afterAlt: "Dark Genesis sedan after front-end collision repair",
  },
  {
    title: "Toyota Tacoma front-end repair",
    category: "Before & After",
    damage: "Red Tacoma with hood, headlamp, bumper, and front-corner collision damage.",
    finished: "Finished Tacoma with restored front panels, lighting, bumper fit, and street-ready appearance.",
    beforeSrc: "/gallery/work/tacoma-red-before.webp",
    afterSrc: "/gallery/work/tacoma-red-after-angle.webp",
    beforeAlt: "Red Toyota Tacoma with front-end collision damage before repair",
    afterAlt: "Red Toyota Tacoma after front-end collision repair",
  },
  {
    title: "Honda side-impact body repair",
    category: "Before & After",
    damage: "Side damage across the doors and rocker area documented before repair planning.",
    finished: "Clean side profile with repaired panels and restored exterior appearance.",
    beforeSrc: "/gallery/work/honda-side-before.webp",
    afterSrc: "/gallery/work/honda-side-after.webp",
    beforeAlt: "White Honda sedan with side body damage before repair",
    afterAlt: "White Honda sedan side profile after body repair",
  },
  {
    title: "GMC front-end repair",
    category: "Before & After",
    damage: "Front-end damage shown during intake with bumper and lower fascia repair needs.",
    finished: "Finished GMC front end photographed at the shop with restored grille and bumper fit.",
    beforeSrc: "/gallery/work/gmc-front-before.webp",
    afterSrc: "/gallery/work/gmc-front-after.webp",
    beforeAlt: "White GMC with front-end collision damage before repair",
    afterAlt: "White GMC front end after repair at Xtreme Collision Repair",
  },
  {
    title: "Rear glass and roof-area repair",
    category: "Before & After",
    damage: "Rear glass and surrounding roof-area damage documented before repair.",
    finished: "Finished rear view showing restored glass area and clean exterior presentation.",
    beforeSrc: "/gallery/work/subaru-glass-before.webp",
    afterSrc: "/gallery/work/subaru-glass-after.webp",
    beforeAlt: "White Subaru with rear glass and roof-area damage before repair",
    afterAlt: "White Subaru rear view after glass and roof-area repair",
  },
];

export const workGalleryItems: WorkGalleryItem[] = [
  {
    title: "Frame Rack Setup",
    tag: "Facility",
    text: "Shop equipment photo showing structural repair and measuring workflow support.",
    src: "/gallery/work/facility-frame-rack.webp",
    alt: "Vehicle on a frame rack inside the Xtreme Collision Repair facility",
  },
  {
    title: "Alignment Rack Work",
    tag: "Facility",
    text: "Repair equipment used for vehicle setup, inspection, and post-repair checks.",
    src: "/gallery/work/facility-alignment-rack.webp",
    alt: "Truck on an alignment rack inside a collision repair facility",
  },
  {
    title: "Subaru Rear Damage",
    tag: "Damage Documentation",
    text: "Rear bumper and quarter-area impact documented before repair work begins.",
    src: "/gallery/work/subaru-rear-before.webp",
    alt: "Subaru rear corner damage before repair",
  },
  {
    title: "Subaru Rear Repair",
    tag: "Finished Repair",
    text: "Completed rear repair with restored bumper and panel alignment.",
    src: "/gallery/work/subaru-rear-after.webp",
    alt: "Subaru rear corner after repair",
  },
  {
    title: "Ram Front Damage",
    tag: "Damage Documentation",
    text: "Front bumper and grille damage documented for repair planning.",
    src: "/gallery/work/ram-front-before.webp",
    alt: "Ram truck front-end damage before repair",
  },
  {
    title: "Ram Front Repair",
    tag: "Finished Repair",
    text: "Repaired front end with restored grille, bumper, and chrome finish.",
    src: "/gallery/work/ram-front-after.webp",
    alt: "Ram truck front end after repair",
  },
  {
    title: "Kia Front Damage",
    tag: "Damage Documentation",
    text: "Front impact damage with damaged bumper and exposed components.",
    src: "/gallery/work/kia-front-before.webp",
    alt: "Kia Sportage front-end damage before repair",
  },
  {
    title: "Kia Front Repair",
    tag: "Finished Repair",
    text: "Finished front-quarter repair with clean panel and light alignment.",
    src: "/gallery/work/kia-front-after.webp",
    alt: "Kia Sportage after front-end repair",
  },
  {
    title: "Genesis Front Damage",
    tag: "Damage Documentation",
    text: "Front-end teardown view showing cooling-area and fascia damage.",
    src: "/gallery/work/genesis-front-before.webp",
    alt: "Genesis front-end damage before repair",
  },
  {
    title: "Genesis Hood Finish",
    tag: "Paint & Finish",
    text: "Finished hood and front-end view showing a clean, reflective finish.",
    src: "/gallery/work/genesis-hood-after.webp",
    alt: "Genesis hood and front end after refinishing",
  },
  {
    title: "Genesis Front Repair",
    tag: "Finished Repair",
    text: "Completed Genesis front-end repair with restored grille and bumper presentation.",
    src: "/gallery/work/genesis-front-after.webp",
    alt: "Genesis front end after repair",
  },
  {
    title: "Honda Side Damage",
    tag: "Damage Documentation",
    text: "Side-impact damage across door and lower body areas before repair.",
    src: "/gallery/work/honda-side-before.webp",
    alt: "Honda side body damage before repair",
  },
  {
    title: "Honda Side Repair",
    tag: "Finished Repair",
    text: "Finished side profile after body repair and exterior cleanup.",
    src: "/gallery/work/honda-side-after.webp",
    alt: "Honda side profile after body repair",
  },
  {
    title: "GMC Front Damage",
    tag: "Damage Documentation",
    text: "Night intake photo documenting front bumper and fascia repair needs.",
    src: "/gallery/work/gmc-front-before.webp",
    alt: "GMC front-end damage before repair",
  },
  {
    title: "GMC Front Repair",
    tag: "Finished Repair",
    text: "Finished GMC front end photographed in front of the shop signage.",
    src: "/gallery/work/gmc-front-after.webp",
    alt: "GMC front end after repair at Xtreme Collision Repair",
  },
  {
    title: "Tacoma Front Damage",
    tag: "Damage Documentation",
    text: "Red Tacoma with front-corner impact damage before repair.",
    src: "/gallery/work/tacoma-red-before.webp",
    alt: "Red Toyota Tacoma front-end damage before repair",
  },
  {
    title: "Tacoma Finished Front",
    tag: "Finished Repair",
    text: "Finished front view after bumper, light, and panel repair.",
    src: "/gallery/work/tacoma-red-after-front.webp",
    alt: "Red Toyota Tacoma front end after repair",
  },
  {
    title: "Tacoma Finished Angle",
    tag: "Finished Repair",
    text: "Final angled view showing restored front-end fit and exterior finish.",
    src: "/gallery/work/tacoma-red-after-angle.webp",
    alt: "Red Toyota Tacoma after front-end repair",
  },
  {
    title: "Rear Glass Damage",
    tag: "Damage Documentation",
    text: "Rear glass and roof-area damage documented before repair planning.",
    src: "/gallery/work/subaru-glass-before.webp",
    alt: "White Subaru rear glass damage before repair",
  },
  {
    title: "Rear Glass Repair",
    tag: "Finished Repair",
    text: "Completed rear-area repair with restored glass and clean rear view.",
    src: "/gallery/work/subaru-glass-after.webp",
    alt: "White Subaru rear view after repair",
  },
];
