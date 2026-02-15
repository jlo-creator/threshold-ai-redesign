import SectionDivider from "./SectionDivider";

const engagements = [
  {
    title: "Org design that combines AI speed with human talent",
    body: "AI had been deployed across multiple business units, but the organizational structure hadn't been redesigned to match execution speed. We built new org charts and decision frameworks that clarified ownership at machine speed, reducing cross-functional decision cycles from weeks to days, clarifying who decides what when timelines compress, and defining where human judgment is required versus where AI executes autonomously. The result was an operating model where authority and execution moved at the same speed.",
  },
  {
    title: "KPIs and measurement frameworks for AI transformation",
    body: "Successful pilots couldn't connect to P&L impact. The CFO couldn't defend AI investment beyond cost reduction narratives. We worked with finance and business unit leaders to define measurements and KPIs that track AI's impact on segment margin, forecast accuracy, cycle-time compression, and new revenue creation. This made AI transformation visible in quarterly board reports and investor communications, not just pilot presentations.",
  },
  {
    title: "Leadership training and AI governance frameworks",
    body: "Autonomous systems made small teams capable of enterprise-level execution, but leaders hadn't developed the judgment infrastructure to govern it. We designed and delivered executive training on decision-making when AI compresses timelines, how to recognize when assumptions are breaking, and how to maintain oversight without becoming a bottleneck. We also built governance frameworks that clarified risk ownership for AI-driven decisions and supported regulatory disclosure requirements.",
  },
  {
    title: "Business model audits and reinvention roadmaps",
    body: "Historical competitive advantages (proprietary processes, capital-intensive operations) were becoming increasingly replicable under AI. We conducted comprehensive audits across operations, finance, and strategy to identify which parts of the model AI made obsolete, what new opportunities it created (new service lines, outcome-based pricing models, data-driven revenue streams), and how to restructure for capture. This wasn't optimization. It was re-architecting the business model to reflect capabilities that didn't exist five years ago.",
  },
];

const Engagements = () => (
  <section id="engagements" className="bg-muted py-20 md:py-[100px]">
    <div className="max-w-content mx-auto px-6">
      <h2 className="font-display text-foreground text-3xl md:text-[34px] font-semibold">
        Representative Engagements
      </h2>
      <SectionDivider />

      <div className="space-y-10">
        {engagements.map((e, i) => (
          <div key={i}>
            <h3 className="font-display text-foreground text-xl md:text-[22px] font-semibold mb-3">
              {e.title}
            </h3>
            <p className="text-foreground/90 text-[17px] md:text-lg leading-[1.7] font-sans">
              {e.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-foreground/80 text-[17px] md:text-lg leading-[1.7] font-sans italic">
        Each engagement is tailored to the specific inflection point the organization faces. Work typically spans 6–9 months, with diagnostic assessments available for clients ready to move quickly.
      </p>
    </div>
  </section>
);

export default Engagements;
