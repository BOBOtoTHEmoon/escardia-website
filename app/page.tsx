import Hero from "@/components/landing/Hero";
import { Faq, FinalCta, HowItWorks, Vendors, WhyEscardia } from "@/components/landing/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyEscardia />
      <Vendors />
      <Faq />
      <FinalCta />
    </>
  );
}
