const Footer = () =>
<footer className="bg-[#f8f6f3] py-10">
    <div className="max-w-content mx-auto px-6 text-center space-y-3">
      <p className="font-display text-[#1F2937] text-lg font-semibold">
        Threshold Group
      </p>
      


      <div className="flex items-center justify-center gap-4 text-sm font-sans">
        <a
          href="mailto:contact@thresholdgroup.ai"
          className="text-[#1F2937]/70 hover:text-[#1F2937]">
          contact@thresholdgroup.ai
        </a>
        <span className="text-[#C5A74E]/30">|</span>
        <a
          href="https://www.linkedin.com/company/thresholdgrp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1F2937]/70 hover:text-[#1F2937]">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>;


export default Footer;