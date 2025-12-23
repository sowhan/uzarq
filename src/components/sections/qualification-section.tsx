"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Check, X } from "lucide-react";

const forYou = [
  "Businesses with real operations",
  "Teams willing to change workflows",
  "Owners who care about ROI",
];

const notForYou = [
  "Tool collectors",
  '"Quick AI hacks"',
  "Businesses with no processes",
];

export function QualificationSection() {
  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Is This For You?
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {/* This is for */}
          <AnimatedSection delay={0.1}>
            <div className="h-full p-8 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-cyan-500/20">
                  <Check className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">This is for:</h3>
              </div>
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* This is NOT for */}
          <AnimatedSection delay={0.2}>
            <div className="h-full p-8 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-white/10">
                  <X className="w-5 h-5 text-white/60" />
                </div>
                <h3 className="text-xl font-semibold text-white">This is NOT for:</h3>
              </div>
              <ul className="space-y-4">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <X className="w-4 h-4 text-white/40 flex-shrink-0" />
                    <span className="text-white/50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
