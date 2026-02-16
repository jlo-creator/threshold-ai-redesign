const HeroSection = () => (
  <section className="bg-primary pt-32 pb-24 md:py-0 md:min-h-[70vh] flex items-center">
    <div className="max-w-container mx-auto px-6 text-center">
      <h1 className="font-display text-primary-foreground text-4xl sm:text-5xl md:text-[60px] font-semibold leading-[1.1] tracking-[-0.5px] mb-6">
        Threshold Group
      </h1>
      <h2 className="font-display text-accent text-xl sm:text-2xl md:text-[34px] font-normal leading-[1.2] max-w-[640px] mx-auto mb-10">
        AI adoption is table stakes.<br />
        Structural redesign creates the advantage.
      </h2>
      <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed max-w-[880px] mx-auto font-sans">
        We work with CEOs and CFOs of Fortune 500 and other large enterprises that have invested heavily in AI but are not yet seeing structural advantage in margin, decision speed, or risk posture.
      </p>
    </div>
  </section>
);

export default HeroSection;
