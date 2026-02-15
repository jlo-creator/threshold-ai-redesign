import SectionDivider from "./SectionDivider";

const Contact = () => (
  <section id="contact" className="bg-muted py-20 md:py-[100px]">
    <div className="max-w-content mx-auto px-6">
      <h2 className="font-display text-foreground text-3xl md:text-[34px] font-semibold">Contact</h2>
      <SectionDivider />

      <div className="space-y-6 text-foreground/90 text-[17px] md:text-lg leading-[1.7] font-sans">
        <p>
          If you're redesigning your organization for what AI makes possible and understand the opportunity is larger than incremental adoption, reach out with a brief note describing where you are and where you need to be.
        </p>

        <div className="pt-2">
          <a
            href="mailto:contact@thresholdgroup.com"
            className="inline-block bg-primary text-primary-foreground border border-accent px-6 py-3 text-sm font-sans font-medium hover:border-accent/80"
          >
            Request a Conversation
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
