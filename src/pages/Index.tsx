import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import Engagements from "@/components/Engagements";
import WhyThreshold from "@/components/WhyThreshold";
import Founder from "@/components/Founder";
import TheBrief from "@/components/TheBrief";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <WhatWeDo />
      <Engagements />
      <WhyThreshold />
      <Founder />
      <TheBrief />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
