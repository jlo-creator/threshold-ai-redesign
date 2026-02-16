import SectionDivider from "./SectionDivider";
import founderPhoto from "@/assets/joanne-lo-headshot.png";

const Founder = () => (
  <section id="founder" className="bg-primary py-20 md:py-[100px]">
    <div className="max-w-container mx-auto px-6">
      <h2 className="font-display text-primary-foreground text-3xl md:text-[34px] font-semibold">
        About the Founder
      </h2>
      <SectionDivider />

      <div className="md:flex md:gap-10 md:items-start">
        <div className="shrink-0 mb-8 md:mb-0">
          <img
            src={founderPhoto}
            alt="Dr. Joanne Lo, Founder of Threshold Group"
            className="w-48 h-48 md:w-56 md:h-56 rounded-sm object-cover object-top"
            loading="lazy"
          />
        </div>

        <div className="space-y-6 text-primary-foreground/80 text-[17px] md:text-lg leading-[1.7] font-sans max-w-content">
          <p>
            <strong className="text-primary-foreground">Dr. Joanne Lo</strong> founded Threshold Group after serving as the first Command Technology Officer of U.S. Special Operations Command Pacific, a senior executive role responsible for modernizing technology across the Indo-Pacific theater.
          </p>
          <p>
            She was recruited into that role as a Highly Qualified Expert, not as a traditional government technologist, but as someone who had spent a decade building and deploying large-scale AI systems across education, creative platforms, autonomous systems, and human-AI collaboration.
          </p>
          <p>
            Her PhD at UC Berkeley focused on distributed AI and human-centered system design. She built AI-powered products at Google and Adobe, then founded and sold Elysian Labs, where she deployed autonomous systems in operational environments where failure was not theoretical.
          </p>
          <p>
            At SOCPAC, she led technology transformation in contested environments where modernization couldn't unfold over years. It had to happen in months. The work required more than deploying tools. It required redesigning command structures, authority flows, and operational doctrine around what new technology made possible.
          </p>
          <p>
            That experience crystallized a realization: AI is not a software upgrade. It changes who decides what, how fast decisions get made, how value appears in financial statements, and where accountability sits when execution moves faster than traditional oversight structures.
          </p>
          <p className="font-medium text-primary-foreground">Most organizations are still approaching AI as adoption. The real challenge is redesign.</p>
          <p>
            Dr. Lo now works with executive teams to move beyond incremental AI use toward structural reinvention, aligning operating models, authority systems, and financial architecture with what AI makes possible.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Founder;
