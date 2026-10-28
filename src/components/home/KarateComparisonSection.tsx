"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function KarateComparisonSection() {
  const [activePanel, setActivePanel] = useState<"traditional" | "sport">("traditional");

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-0.5 bg-[#C8102E] mx-auto mb-4" />
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">TWO PATHS</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4">
            TRADITIONAL VS <span className="text-[#C8102E]">SPORT</span> KARATE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[500px] lg:h-[600px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden cursor-pointer group transition-all duration-700 ${
              activePanel === "traditional" ? "lg:flex-[2]" : "lg:flex-[1]"
            }`}
            onMouseEnter={() => setActivePanel("traditional")}
            onClick={() => setActivePanel("traditional")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#C8102E]/30 z-10" />
            <div className="w-full h-full bg-gradient-to-br from-[#171717] to-black flex items-center justify-center">
              <div className="text-center p-8 relative z-20">
                <h3 className="font-display text-4xl lg:text-5xl mb-4">TRADITIONAL KARATE</h3>
                <p className={`text-white/80 mb-6 transition-all duration-500 ${
                  activePanel === "traditional" ? "opacity-100 max-h-40" : "opacity-0 max-h-0 lg:opacity-100 lg:max-h-40"
                } overflow-hidden`}>
                  Preserving the classical forms, techniques and philosophical aspects of Shito Ryu Karate. 
                  Focus on kata, bunkai, and the development of character through traditional practice.
                </p>
                <Link
                  href="/traditional-karate"
                  className={`inline-flex items-center gap-2 text-[#C8102E] hover:text-white transition-colors ${
                    activePanel === "traditional" ? "opacity-100" : "opacity-0 lg:opacity-100"
                  }`}
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C8102E]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden cursor-pointer group transition-all duration-700 ${
              activePanel === "sport" ? "lg:flex-[2]" : "lg:flex-[1]"
            }`}
            onMouseEnter={() => setActivePanel("sport")}
            onClick={() => setActivePanel("sport")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-[#C8102E]/30 z-10" />
            <div className="w-full h-full bg-gradient-to-br from-[#0a0a0a] to-[#171717] flex items-center justify-center">
              <div className="text-center p-8 relative z-20">
                <h3 className="font-display text-4xl lg:text-5xl mb-4">SPORT KARATE</h3>
                <p className={`text-white/80 mb-6 transition-all duration-500 ${
                  activePanel === "sport" ? "opacity-100 max-h-40" : "opacity-0 max-h-0 lg:opacity-100 lg:max-h-40"
                } overflow-hidden`}>
                  Competitive excellence through WKF-aligned kumite and kata. 
                  National and international pathways for athletes representing England with distinction.
                </p>
                <Link
                  href="/sport-karate"
                  className={`inline-flex items-center gap-2 text-[#C8102E] hover:text-white transition-colors ${
                    activePanel === "sport" ? "opacity-100" : "opacity-0 lg:opacity-100"
                  }`}
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C8102E]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
