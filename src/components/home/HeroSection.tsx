"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,16,46,0.3),_transparent_22%),linear-gradient(135deg,_rgba(0,0,0,0.98)_0%,_rgba(0,0,0,0.88)_35%,_rgba(22,22,22,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_45%)]" />
        <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-[#C8102E]/25 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-24 h-1 bg-[#C8102E] mx-auto mb-6 rounded-full shadow-[0_0_20px_rgba(200,16,46,0.7)]" />
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] leading-[0.82] tracking-[0.08em] mb-4 text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="block"
            >
              TRADITION.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="block"
            >
              DISCIPLINE.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="block text-[#f2d7d7] drop-shadow-[0_0_25px_rgba(200,16,46,0.55)]"
            >
              EXCELLENCE.
            </motion.span>
          </h1>
          <div className="w-24 h-1 bg-[#C8102E] mx-auto mt-6 rounded-full shadow-[0_0_20px_rgba(200,16,46,0.7)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-light tracking-[0.26em] mb-4 text-white/90">
            SHITO RYU KARATE FEDERATION OF ENGLAND
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Preserving tradition. Developing champions. Inspiring the next generation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/structure/about-us"
            className="group relative overflow-hidden px-8 py-4 border border-white/30 bg-white/5 text-white font-semibold tracking-[0.18em] shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:bg-white hover:text-black"
          >
            <span className="relative z-10">EXPLORE THE FEDERATION</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-white/80 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
          </Link>
          <Link
            href="/join-us"
            className="group relative overflow-hidden px-8 py-4 bg-[#C8102E] border border-[#C8102E] text-white font-semibold tracking-[0.18em] shadow-[0_18px_50px_rgba(200,16,46,0.35)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_55px_rgba(200,16,46,0.5)]"
          >
            <span className="relative z-10">JOIN THE FEDERATION</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff2b4d] via-[#C8102E] to-[#8b0f26] translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/70 animate-bounce">
          <span className="text-[10px] tracking-[0.45em] mb-2">SCROLL</span>
          <ChevronDown size={20} className="drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
        </div>
      </motion.div>
    </section>
  );
}
