"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lightbulb, HeartHandshake } from "lucide-react";
import Link from "next/link";

const reassurances = [
  {
    icon: Shield,
    text: "No obligation",
  },
  {
    icon: Lightbulb,
    text: "No tool pushing",
  },
  {
    icon: HeartHandshake,
    text: "Pure strategy first",
  },
];

export function CTASection() {
  return (
    <section id="book" className="relative py-32 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 via-black to-black" />
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The first step isn&apos;t automation.
            <br />
            <span className="text-cyan-400">
              It&apos;s clarity.
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Start with an AI Audit. Walk away with a clear plan—even if we never work together.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Link 
            href="https://cal.com" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="group text-base px-10">
              Book an AI Audit
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {reassurances.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/50"
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
