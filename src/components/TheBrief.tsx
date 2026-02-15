import SectionDivider from "./SectionDivider";

const essays = [
  { title: "The Only Enterprise Structure That Dominates the AI Era", url: "https://open.substack.com/pub/transformationbrief/p/the-only-enterprise-structure-that?r=706g1d&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true" },
  { title: "The Quiet Landgrab for Expertise", url: "https://transformationbrief.substack.com/p/the-quiet-landgrab-for-expertise?r=706g1d" },
  { title: "Why Centralized Control Is Winning the AI Era", url: "https://transformationbrief.substack.com/p/why-centralized-control-is-winning?r=706g1d" },
];

const TheBrief = () => (
  <section id="brief" className="bg-secondary py-20 md:py-[100px]">
    <div className="max-w-content mx-auto px-6">
      <h2 className="font-display text-foreground text-3xl md:text-[34px] font-semibold">
        The Transformation Brief
      </h2>
      <SectionDivider />

      <div className="space-y-6 text-foreground/90 text-[17px] md:text-lg leading-[1.7] font-sans">
        <p>
          Threshold Group publishes <em>The Transformation Brief</em>, exploring the structural shifts AI is creating across power, authority, and operating design and why most transformation efforts fall short. Practical guidance on leading AI-era restructuring without losing control of risk, culture, or accountability.
        </p>

        <p>Recent essays:</p>
        <ul className="space-y-2 pl-5 list-disc marker:text-accent">
          {essays.map((e, i) => (
            <li key={i}>
              {e.url ? (
                <a href={e.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                  {e.title}
                </a>
              ) : (
                e.title
              )}
            </li>
          ))}
        </ul>

        <p className="italic text-foreground/80">
          Written for leaders navigating the collision between technological capability and institutional readiness.
        </p>

        <div className="pt-4">
          <a
            href="https://thresholdgroup.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground border border-accent px-6 py-3 text-sm font-sans font-medium hover:border-accent/80"
          >
            Read The Transformation Brief
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default TheBrief;
