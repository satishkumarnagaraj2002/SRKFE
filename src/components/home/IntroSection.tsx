"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="w-full h-full bg-gradient-to-br from-[#C8102E]/20 to-black flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-display text-[#C8102E] mb-4">2015</div>
                  <div className="text-xl font-heading text-white">ESTABLISHED</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#C8102E]/30 hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <div className="w-16 h-0.5 bg-[#C8102E] mb-4" />
              <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">INTRODUCING</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              THE SHITO RYU KARATE
              <br />
              <span className="text-[#C8102E]">FEDERATION OF ENGLAND</span>
            </h2>
            <div className="space-y-4 text-white/80 mb-8">
              <p className="text-lg">
                The Shito Ryu Karate Federation of England (SRKFE) is a non-profit organisation established in 2015, 
                dedicated to bringing together Shito Ryu karate clubs across England.
              </p>
              <p>
                Our mission is to support athletes, instructors, and referees while creating opportunities for Karatekas 
                to develop, compete, and achieve excellence at the highest levels.
              </p>
              <p>
                We provide a professional pathway for students and clubs to progress from local training to national 
                and international competitions, proudly representing England with distinction.
              </p>
            </div>
            <Link
              href="/structure/about-us"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/30 text-white hover:border-[#C8102E] hover:text-[#C8102E] transition-all duration-300"
            >
              <span className="tracking-wider">DISCOVER OUR STORY</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
