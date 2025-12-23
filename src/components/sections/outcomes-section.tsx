"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Zap, ClipboardCheck, Database, Eye, Users } from "lucide-react";

const outcomes = [
  {
    icon: Zap,
    title: "Faster lead response & follow-ups",
  },
  {
    icon: ClipboardCheck,
    title: "Reduced manual admin work",
  },
  {
    icon: Database,
    title: "Centralized knowledge & data access",
  },
  {
    icon: Eye,
    title: "Clear visibility across operations",
  },
  {
    icon: Users,
    title: "Teams that actually use AI",
  },
];

export function OutcomesSection() {
  return (
    <section className="relative py-32 bg-black">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-cyan-400 mb-3 tracking-wider uppercase">
              Outcomes
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What This Unlocks
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Not features. Real business results.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {outcomes.map((outcome, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  <outcome.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-white font-medium">{outcome.title}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6}>
          <p className="text-center text-white/40 italic">
            Every system is tied to time saved or revenue gained.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
