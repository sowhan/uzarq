"use client";

import { AnimatedSection } from "@/components/ui/animated-section";

export function ReframeSection() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            AI is not a tool problem.
            <br />
            <span className="text-cyan-400">
              It&apos;s an operating problem.
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-4 text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            <p>Tools don&apos;t create leverage.</p>
            <p>
              <span className="text-white">Systems + adoption</span> do.
            </p>
            <p>Most companies skip thinking and jump to building.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <p className="text-white/80">
              That&apos;s why we don&apos;t start with automation.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
