"use client";

import { motion } from "framer-motion";
import { Shield, Target, Award } from "lucide-react";

const philosophies = [
  {
    icon: Shield,
    title: "TRADITION",
    description: "Preserving the heritage, values and techniques of Shito Ryu Karate for future generations.",
  },
  {
    icon: Target,
    title: "DISCIPLINE",
    description: "Developing character, respect and continuous improvement through rigorous training.",
  },
  {
    icon: Award,
    title: "EXCELLENCE",
    description: "Supporting athletes and instructors in reaching their full potential on and off the mat.",
  },
];

export default function PhilosophySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-0.5 bg-[#C8102E] mx-auto mb-4" />
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">OUR PHILOSOPHY</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4">
            THE WAY OF <span className="text-[#C8102E]">KARATE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophies.map((philosophy, index) => (
            <motion.div
              key={philosophy.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-gradient-to-b from-[#171717] to-black border border-white/10 hover:border-[#C8102E]/50 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8102E] to-transparent" />
              <div className="p-8 relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#C8102E]/10 flex items-center justify-center group-hover:bg-[#C8102E]/20 transition-colors duration-500">
                    <philosophy.icon className="w-8 h-8 text-[#C8102E]" />
                  </div>
                </div>
                <h3 className="font-display text-3xl mb-4 tracking-wider">{philosophy.title}</h3>
                <p className="text-white/70 leading-relaxed">{philosophy.description}</p>
              </div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#C8102E]/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
