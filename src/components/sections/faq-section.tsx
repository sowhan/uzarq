"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take?",
    answer:
      "The AI Audit typically takes 1-2 weeks. Full implementation depends on scope—simple automations can go live in 2-4 weeks, while comprehensive systems take 2-3 months. We'll give you a clear timeline after the audit.",
  },
  {
    question: "Do we need technical knowledge?",
    answer:
      "No. We handle all the technical work. Your role is to help us understand your workflows and validate that what we build solves real problems. We also train your team on everything we implement.",
  },
  {
    question: "Is our data safe?",
    answer:
      "Absolutely. We follow strict security protocols, use enterprise-grade tools, and can work within your existing security requirements. We never share client data and sign NDAs as standard practice.",
  },
  {
    question: "What does pricing depend on?",
    answer:
      "Pricing is based on complexity and scope—the number of workflows, integrations needed, and level of customization. After the audit, you'll get a detailed proposal with fixed pricing. No surprises.",
  },
  {
    question: "Do you replace employees?",
    answer:
      "No. We help employees work smarter by removing repetitive tasks and giving them better tools. The goal is leverage, not replacement. Teams typically become more effective and can focus on higher-value work.",
  },
  {
    question: "What's the first step?",
    answer:
      "Book an AI Audit. It's a deep-dive session where we map your operations, identify bottlenecks, and create a prioritized roadmap. You'll walk away with clarity—even if we never work together beyond that.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="relative py-32 bg-black">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-cyan-400 mb-3 tracking-wider uppercase">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Questions We Get Asked
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
