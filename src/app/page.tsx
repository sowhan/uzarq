import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { ReframeSection } from "@/components/sections/reframe-section";
import { FrameworkSection } from "@/components/sections/framework-section";
import { OutcomesSection } from "@/components/sections/outcomes-section";
import { ProcessSection } from "@/components/sections/process-section";
import { QualificationSection } from "@/components/sections/qualification-section";
import { TechSection } from "@/components/sections/tech-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ReframeSection />
      <FrameworkSection />
      <OutcomesSection />
      <ProcessSection />
      <QualificationSection />
      <TechSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
