"use client";

import { AnimatedSection, ScaleIn } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { Search, Users, Cog, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "AI Audit",
    description: "We map workflows, bottlenecks, and revenue leaks. Identify where AI creates real leverage.",
    output: "A clear, prioritized AI roadmap",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
  {
    step: "02",
    icon: Users,
    title: "AI Training & Adoption",
    description: "Align the team. Teach how to think in workflows, not prompts.",
    output: "Faster execution, no resistance, no chaos",
    color: "text-white",
    bgColor: "bg-white/10",
    borderColor: "border-white/20",
  },
  {
    step: "03",
    icon: Cog,
    title: "Custom AI Systems",
    description: "Build only what matters. Integrate with existing tools.",
    output: "Systems that run daily without manual effort",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
];

export function FrameworkSection() {
  return (
    <section id="how-it-works" className="relative py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-20">
            <p className="text-sm font-medium text-cyan-400 mb-3 tracking-wider uppercase">
              Our Framework
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              How We Actually Work
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((item, index) => (
            <ScaleIn key={index} delay={index * 0.15}>
              <div className={`relative h-full p-8 rounded-2xl bg-white/[0.02] border ${item.borderColor} hover:bg-white/[0.04] transition-all duration-300 group`}>
                {/* Step number */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.bgColor} mb-6`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>

                {/* Content */}
                <p className="text-sm text-white/40 font-medium mb-2">Step {item.step}</p>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 mb-6">{item.description}</p>

                {/* Output */}
                <div className="flex items-start gap-2 pt-4 border-t border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <p className="text-white/80 font-medium">{item.output}</p>
                </div>

                {/* Connector line on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </div>
            </ScaleIn>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="text-center">
            <Link href="#book">
              <Button size="lg" className="group">
                Start with an AI Audit
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
