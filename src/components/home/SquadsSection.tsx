"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const squads = [
  { name: "Youth Squad", href: "/sport-karate/youth-squad", desc: "Developing future champions" },
  { name: "Cadet & Junior Squad", href: "/sport-karate/cadet-and-junior-squad", desc: "Building competitive excellence" },
  { name: "Senior Squad", href: "/sport-karate/senior-squad", desc: "Elite performance pathway" },
  { name: "National Team", href: "/sport-karate/national-team", desc: "Representing England internationally" },
  { name: "Coaches & Staff", href: "/sport-karate/coaches-and-staff", desc: "Our dedicated team" },
];

export default function SquadsSection() {
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
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">NATIONAL SQUADS</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4">
            ELITE <span className="text-[#C8102E]">PATHWAYS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {squads.map((squad, index) => (
            <motion.div
              key={squad.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={squad.href} className="group block relative overflow-hidden h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#C8102E]/40 z-10" />
                <div className="w-full h-full bg-gradient-to-br from-[#171717] to-black" />
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  <h3 className="font-display text-2xl mb-2 group-hover:text-[#C8102E] transition-colors duration-300">
                    {squad.name}
                  </h3>
                  <p className="text-white/70 text-sm mb-4">{squad.desc}</p>
                  <div className="flex items-center gap-2 text-[#C8102E] text-sm">
                    <span>VIEW SQUAD</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-[#C8102E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/sport-karate/squad-trainings"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#C8102E] text-white hover:bg-[#C8102E] transition-all duration-300"
          >
            <span className="tracking-wider">SQUAD TRAINING INFORMATION</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
