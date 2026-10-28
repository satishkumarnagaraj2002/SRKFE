"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function JoinCTASection() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-[#C8102E]/20" />
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-0.5 bg-[#C8102E] mx-auto mb-6" />
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
            YOUR JOURNEY
            <br />
            <span className="text-[#C8102E]">STARTS HERE</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Become part of a community dedicated to tradition, development and excellence. 
            Train. Compete. Represent Shito Ryu England on the national and international stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join-us"
              className="group relative px-10 py-4 bg-[#C8102E] border-2 border-[#C8102E] text-white font-semibold tracking-wider hover:bg-transparent transition-all duration-500"
            >
              <span className="relative z-10">JOIN SRKFE</span>
            </Link>
            <Link
              href="/contact"
              className="group relative px-10 py-4 bg-transparent border-2 border-white text-white font-semibold tracking-wider hover:bg-white hover:text-black transition-all duration-500"
            >
              <span className="relative z-10">CONTACT US</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
