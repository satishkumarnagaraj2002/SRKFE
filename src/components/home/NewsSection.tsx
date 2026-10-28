"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const newsItems = [
  {
    title: "WKF Karate One Youth League Zimbabwe 25-29 Mar 2026",
    category: "Competition",
    date: "25 Mar 2026",
    excerpt: "National Team participation in international youth competition.",
  },
  {
    title: "EKNGB HOA Meeting Leicester 22 MAR 2026",
    category: "Federation",
    date: "22 Mar 2026",
    excerpt: "House of Association meeting for federation matters.",
  },
  {
    title: "EKNGB Referee Course Leicester 22 MAR 2026",
    category: "Education",
    date: "22 Mar 2026",
    excerpt: "Referee development and certification course.",
  },
];

export default function NewsSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <div className="w-16 h-0.5 bg-[#C8102E] mb-4" />
            <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">LATEST NEWS</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4">
              NEWS & <span className="text-[#C8102E]">RESULTS</span>
            </h2>
          </div>
          <Link
            href="/news"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-white hover:text-[#C8102E] transition-colors group"
          >
            <span>VIEW ALL NEWS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-b from-[#171717] to-black border border-white/10 hover:border-[#C8102E]/50 transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-48 bg-gradient-to-br from-[#C8102E]/20 to-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[#C8102E]/40 text-6xl font-display">SRKFE</div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#C8102E] text-white text-xs font-semibold tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-white/50 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-[#C8102E] transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                <Link href="/news" className="inline-flex items-center gap-2 text-[#C8102E] text-sm hover:text-white transition-colors group/link">
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
