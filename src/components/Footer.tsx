const Footer = () =>
<footer className="bg-primary py-10">
    <div className="max-w-content mx-auto px-6 text-center space-y-3">
      <p className="font-display text-primary-foreground text-lg font-semibold">
        Threshold Group
      </p>
      


      <div className="flex items-center justify-center gap-4 text-sm font-sans">
        <a
        href="mailto:contact@thresholdgroup.com"
        className="text-primary-foreground/70 hover:text-primary-foreground">
        contact@thresholdgroup.ai

      </a>
        <span className="text-primary-foreground/30">|</span>
        <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-foreground/70 hover:text-primary-foreground">

          LinkedIn
        </a>
      </div>
    </div>
  </footer>;


export default Footer;