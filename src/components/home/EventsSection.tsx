"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function EventsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-0.5 bg-[#C8102E] mx-auto mb-4" />
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">UPCOMING</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4">
            EVENTS <span className="text-[#C8102E]">CALENDAR</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-16 bg-gradient-to-b from-[#171717] to-black border border-white/10"
        >
          <Calendar className="w-16 h-16 text-[#C8102E]/50 mx-auto mb-6" />
          <h3 className="text-2xl font-heading mb-4">Events Calendar</h3>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            View upcoming competitions, squad training, seminars, referee courses and federation meetings.
          </p>
          <Link
            href="/events"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C8102E] text-white hover:bg-[#a00d24] transition-all duration-300"
          >
            <span className="tracking-wider">VIEW FULL CALENDAR</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
