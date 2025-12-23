"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Bot, Workflow, MessageSquare, Database } from "lucide-react";

const techCategories = [
  {
    icon: Bot,
    title: "AI Models & Agents",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Workflow,
    title: "Automation & Orchestration",
    color: "from-cyan-600 to-cyan-400",
  },
  {
    icon: MessageSquare,
    title: "CRMs & Communication Tools",
    color: "from-white to-gray-400",
  },
  {
    icon: Database,
    title: "Knowledge & Databases",
    color: "from-cyan-400 to-teal-400",
  },
];

export function TechSection() {
  return (
    <section className="relative py-32 bg-black">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-cyan-400 mb-3 tracking-wider uppercase">
              Technology
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Modern Stack, Secure Integration
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              We use modern AI models, automation platforms, and secure integrations 
              to connect your tools, data, and workflows.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {techCategories.map((tech, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex items-center gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-lg text-white font-medium">{tech.title}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
