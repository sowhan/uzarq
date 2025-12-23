"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Search, FileText, Wrench, GraduationCap, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Audit",
    description: "Deep dive into your workflows and pain points",
  },
  {
    icon: FileText,
    title: "Strategy Blueprint",
    description: "What to build—and what not to build",
  },
  {
    icon: Wrench,
    title: "Incremental Build & Testing",
    description: "Phased implementation with validation",
  },
  {
    icon: GraduationCap,
    title: "Training & Handover",
    description: "Your team learns to own the systems",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Optimization",
    description: "Optional continuous improvement",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="relative py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-cyan-400 mb-3 tracking-wider uppercase">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Operate
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              A structured approach that delivers results, not surprises.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative flex items-start gap-6 md:ml-6 group">
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-300">
                    <step.icon className="w-5 h-5 text-white/70 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-white/50">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.6}>
          <div className="mt-16 p-6 rounded-xl bg-cyan-500/5 border border-white/10 text-center">
            <p className="text-lg text-white">
              We don&apos;t sell random automations.{" "}
              <span className="text-white/60">
                We design systems around your business.
              </span>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
