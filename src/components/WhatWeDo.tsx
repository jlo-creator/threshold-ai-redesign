import SectionDivider from "./SectionDivider";

const WhatWeDo = () => (
  <section id="what-we-do" className="bg-secondary py-20 md:py-[100px]">
    <div className="max-w-content mx-auto px-6">
      <h2 className="font-display text-foreground text-3xl md:text-[34px] font-semibold">What We Do</h2>
      <SectionDivider />

      <div className="space-y-6 text-foreground/90 text-[17px] md:text-lg leading-[1.7] font-sans">
        <p>
          Threshold Group works with CEOs and CFOs to redesign operating models for the AI era, translating AI capability into measurable improvements in margin, forecast accuracy, capital efficiency, and risk governance while maintaining board-level accountability.
        </p>
        <p>
          AI is not a software upgrade. It changes who decides what, how fast decisions get made, and how value appears in your P&amp;L. Organizations are no longer constrained by execution capacity. The question is whether your operating model has been redesigned to capture what's now possible.
        </p>
        <p>
          Most large enterprises have labeled AI a strategic priority. They're investing heavily, running pilots, and increasingly disclosing AI as a material risk. Yet the majority prioritize AI based on ROI while seeing value only in cost reduction, not growth or competitive advantage.
        </p>
        <p className="font-medium">The constraint isn't model capability. It's operating design.</p>
        <p>Most leadership teams are still organized for a world where execution was scarce.</p>

        <p>You may be experiencing:</p>
        <ul className="space-y-2 pl-5 list-disc marker:text-accent">
          <li>AI initiatives that show promise in pilots but can't scale to production impact</li>
          <li>Difficulty connecting AI investments to margin, revenue growth, or capital efficiency</li>
          <li>Uncertainty about who owns AI-driven decisions and how accountability flows</li>
          <li>Talent struggling to adapt while leadership lacks clarity on what skills matter</li>
          <li>Growing pressure from boards and regulators on AI risk disclosure and governance</li>
        </ul>

        <p>
          Our work helps leadership teams translate AI into durable improvements in margin, decision speed, and risk posture within 6–9 months.
        </p>
        <p>
          Decision authority was built for slower cycles. Accountability structures lag execution speed. Incentives reward incrementalism, not reinvention. Finance cannot see AI's full economic leverage. Leadership teams are aligned rhetorically, not structurally.
        </p>
        <p className="font-display text-xl md:text-[22px] leading-[1.4] text-foreground font-bold text-center">
          AI doesn't fail because it lacks intelligence.<br />
          It fails because the organization wasn't redesigned for it.
        </p>
        <p>
          Threshold Group works with CEOs and CFOs to close that gap, turning AI from experimentation and cost savings into operating leverage, growth, and structural advantage.
        </p>
        <p>
          We don't start with tools. We start with authority, incentives, capital allocation, and accountability, then align technology to that ambition.
        </p>
      </div>
    </div>
  </section>
);

export default WhatWeDo;
