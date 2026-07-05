import {
  ButtonLink,
  FinalCTA,
  InnerHero,
  PageShell,
  ProcessPreview,
  SectionIntro,
  ValuePropsStrip,
} from "../components";
import { siteInfo } from "../site-data";

export const metadata = {
  title: "Hail Repair in Carrollton, TX | Xtreme Collision Repair",
  description:
    "Learn what hail repair and paintless dent repair mean, how insurance help works, and the next step to request an estimate from Xtreme Collision Repair in Carrollton, TX.",
};

const hailRepairPoints = [
  {
    title: "Paintless dent repair, in plain language",
    text: "PDR can often help when hail dents are shallow and the paint surface is still intact. It aims to move the metal back into shape without repainting the panel.",
  },
  {
    title: "When conventional repair may be better",
    text: "If the paint is broken, the metal is stretched, or the damage is too deep, the shop can explain when standard body repair is the more practical option.",
  },
  {
    title: "A careful inspection decides the path",
    text: "The right answer comes from looking panel by panel at the roof, hood, trunk, and sides so the repair plan fits the actual damage, not just the storm headline.",
  },
];

const hailFaqs = [
  {
    question: "What is paintless dent repair?",
    answer:
      "Paintless dent repair, or PDR, is a method that can help remove small dents without repainting the panel when the paint surface is still in good shape.",
  },
  {
    question: "Do I need to know whether the hail damage is severe before calling?",
    answer:
      "No. Share a few photos or call the shop and the team can help you understand the next step after a quick review.",
  },
  {
    question: "Can Xtreme help with insurance?",
    answer:
      "Yes. The shop can help organize claim details, estimate information, and repair documentation. Insurance outcomes still depend on your carrier and coverage.",
  },
  {
    question: "Will every hail dent be fixed the same way?",
    answer:
      "Not always. Some dents may be good candidates for PDR, while others may need conventional repair or refinishing if the panel is damaged more deeply.",
  },
  {
    question: "What should I do next if I want an estimate?",
    answer:
      "Call {phone} or request an estimate online. A simple first conversation is usually the fastest way to start.",
  },
];

export default function HailRepairPage() {
  return (
    <PageShell>
      <main>
        <InnerHero
          eyebrow="Hail repair Carrollton TX"
          title="Hail damage? We can help you repair it and navigate the process."
          text="North Texas storms can leave a lot of small damage across the roof, hood, trunk, and doors. Start with a simple review, learn what paintless dent repair means, and get clear help with the next step."
        />

        <ValuePropsStrip />

        <section className="section">
          <div className="container split-section split-section-light">
            <div>
              <SectionIntro
                eyebrow="Hail repair basics"
                title="What PDR means and when it makes sense"
                text="The goal is to keep the repair explanation simple. If the paint is intact and the dent is shallow, paintless dent repair may be a good fit. If the panel is torn, stretched, or cracked, conventional repair may be the better path."
              />
              <div className="hero-actions compact-actions">
                <ButtonLink href="/contact" track="hail-repair:estimate-primary">
                  Request an Estimate
                </ButtonLink>
                <ButtonLink href={siteInfo.phoneHref} track="hail-repair:call-secondary" variant="secondary">
                  Call Now
                </ButtonLink>
              </div>
            </div>
            <div className="check-list light-list">
              <span>Roof, hood, trunk, and side-panel review</span>
              <span>Plain-English PDR explanation</span>
              <span>When repair needs repainting or body work</span>
              <span>Simple next step for your estimate</span>
            </div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionIntro
              eyebrow="Simple guidance"
              title="How hail repair decisions are made"
              text="A careful inspection helps the shop decide whether the dents can be worked out with PDR or whether the panel needs conventional repair. No jargon required."
            />
            <div className="reason-grid">
              {hailRepairPoints.map((point, index) => (
                <article className="reason-card" key={point.title}>
                  <span className="reason-icon" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div>
              <SectionIntro
                eyebrow="Insurance help"
                title="Clear claim support, without overpromising"
                text="If you already started a claim, bring the claim number and estimate. Xtreme can help organize the information, explain supplements, and keep the repair path clear. The outcome still depends on your insurer and coverage."
              />
              <div className="hero-actions compact-actions">
                <ButtonLink href="/insurance-claims-assistance" track="hail-repair:insurance-primary">
                  Learn About Claim Help
                </ButtonLink>
                <ButtonLink href="/contact" track="hail-repair:insurance-secondary" variant="light">
                  Schedule a Visit
                </ButtonLink>
              </div>
            </div>
            <div className="check-list">
              <span>Help reviewing claim details</span>
              <span>Damage photos and documentation</span>
              <span>Supplement support when hidden damage appears</span>
              <span>Plain-English updates from review to repair</span>
            </div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionIntro
              eyebrow="Repair process"
              title="A short path from review to repair"
              text="The process stays focused: look at the damage, explain the options, organize the claim details if needed, and then move into repair once the plan is clear."
            />
            <ProcessPreview />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="FAQ"
              title="Common questions after a hail storm"
              text="A few quick answers can make the next step easier."
            />
            <div className="faq-list">
              {hailFaqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer.replace("{phone}", siteInfo.phoneLabel)}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
    </PageShell>
  );
}
