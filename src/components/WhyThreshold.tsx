import SectionDivider from "./SectionDivider";

const WhyThreshold = () => (
  <section id="why" className="bg-secondary py-20 md:py-[100px]">
    <div className="max-w-content mx-auto px-6">
      <h2 className="font-display text-foreground text-3xl md:text-[34px] font-semibold">
        Why Threshold Group
      </h2>
      <SectionDivider />

      <div className="space-y-6 text-foreground/90 text-[17px] md:text-lg leading-[1.7] font-sans">
        <p>
          Threshold Group brings together leaders who have directed technology transformation in highly volatile, rapidly changing operational scenarios, both in contested environments and commercial industry.
        </p>
        <p>
          Our team has led large-scale modernization efforts where speed and sound judgment weren't competing priorities but simultaneous requirements. We've built and deployed AI systems in national laboratories, defense operations, Fortune 500 enterprises, and frontier AI environments. We understand technology at the model layer, the system layer, and the executive accountability layer.
        </p>
        <p>
          We've operated in environments where AI-enabled decisions were audited, regulated, and in some cases life-critical. That discipline translates directly to board-level AI strategy, risk governance, and regulatory disclosure requirements. We help you articulate AI's impact in a way that withstands investor, auditor, and regulator scrutiny.
        </p>
        <p>
          Most advisory firms understand AI conceptually. Most technologists understand it technically. Few have redesigned systems where authority, risk, and execution intersect at scale, where decisions made at machine speed still require human judgment, and where the stakes of getting it wrong are measured in competitive position, operational resilience, regulatory exposure, and in some cases, lives.
        </p>
        <p>
          We draw from a deep network of experts in organizational transformation and form engagement teams based on client needs, bringing the specific combination of operational, technical, and strategic expertise required for each transformation.
        </p>
        <p className="font-medium">
          Threshold Group operates at the intersection of technology capability and institutional readiness.
        </p>
      </div>
    </div>
  </section>
);

export default WhyThreshold;
