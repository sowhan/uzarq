"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { AlertCircle, Shuffle, Clock, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: Shuffle,
    text: "Teams experimenting with AI, but nothing sticks",
  },
  {
    icon: AlertCircle,
    text: "Too many tools, no systems",
  },
  {
    icon: Clock,
    text: "Manual follow-ups, scattered data, slow execution",
  },
  {
    icon: HelpCircle,
    text: '"We know AI is important, but don\'t know where to apply it"',
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sound familiar?
            </h2>
            <p className="text-white/50">
              You&apos;re not alone. Most businesses hit the same walls.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {problems.map((problem, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex items-start gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <div className="p-2 rounded-lg bg-white/5">
                  <problem.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg text-white/80">{problem.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-16 text-center">
            <div className="inline-block px-8 py-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <p className="text-xl md:text-2xl font-medium text-white">
                AI isn&apos;t the problem.{" "}
                <span className="text-white/50">Lack of structure is.</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
