import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const newsItems = [
  {
    title: "WKF Karate One Youth League Zimbabwe 25-29 Mar 2026",
    category: "Competition",
    date: "25 Mar 2026",
    excerpt: "National Team participation in the WKF Karate One Youth League in Zimbabwe.",
  },
  {
    title: "EKNGB HOA Meeting Leicester 22 MAR 2026",
    category: "Federation",
    date: "22 Mar 2026",
    excerpt: "House of Association meeting held in Leicester.",
  },
  {
    title: "EKNGB Referee Course Leicester 22 MAR 2026",
    category: "Education",
    date: "22 Mar 2026",
    excerpt: "Referee development course for officials.",
  },
  {
    title: "EKNGB South Region Kumite Squad Training Bath 22 Mar 2026",
    category: "Training",
    date: "22 Mar 2026",
    excerpt: "South Region kumite squad training session.",
  },
  {
    title: "EKNGB South Region Kata Squad Training Bath 22 Mar 2026",
    category: "Training",
    date: "22 Mar 2026",
    excerpt: "South Region kata squad training session.",
  },
  {
    title: "EKNGB Young Lions Kumite Squad Training Rochester 21 Mar 2026",
    category: "Training",
    date: "21 Mar 2026",
    excerpt: "Young Lions kumite squad training session.",
  },
];

export default function NewsPage() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="w-16 h-0.5 bg-[#C8102E] mb-4" />
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">UPDATES</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-4 mb-6">NEWS & RESULTS</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <article
              key={index}
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
                <h2 className="text-xl font-heading font-semibold mb-3 group-hover:text-[#C8102E] transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-white/70 text-sm mb-4">{item.excerpt}</p>
                <button className="inline-flex items-center gap-2 text-[#C8102E] text-sm opacity-60 cursor-not-allowed">
                  <span>READ MORE (Coming Soon)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
