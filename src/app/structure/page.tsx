import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StructurePage() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="w-16 h-0.5 bg-[#C8102E] mb-4" />
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">FEDERATION</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-4 mb-6">
            STRUCTURE
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Organisational structure and governance of the Shito Ryu Karate Federation of England
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/structure/about-us" className="group bg-gradient-to-b from-[#171717] to-black border border-white/10 hover:border-[#C8102E]/50 p-8 transition-all duration-300">
            <h2 className="font-display text-2xl mb-4 group-hover:text-[#C8102E] transition-colors">ABOUT US</h2>
            <p className="text-white/70 mb-6">Our history, mission and values</p>
            <div className="flex items-center gap-2 text-[#C8102E]">
              <span>LEARN MORE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          <Link href="/structure/srkfe-affiliations" className="group bg-gradient-to-b from-[#171717] to-black border border-white/10 hover:border-[#C8102E]/50 p-8 transition-all duration-300">
            <h2 className="font-display text-2xl mb-4 group-hover:text-[#C8102E] transition-colors">AFFILIATIONS</h2>
            <p className="text-white/70 mb-6">Our partnerships and affiliations</p>
            <div className="flex items-center gap-2 text-[#C8102E]">
              <span>LEARN MORE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          <Link href="/structure/committees" className="group bg-gradient-to-b from-[#171717] to-black border border-white/10 hover:border-[#C8102E]/50 p-8 transition-all duration-300">
            <h2 className="font-display text-2xl mb-4 group-hover:text-[#C8102E] transition-colors">COMMITTEES</h2>
            <p className="text-white/70 mb-6">Leadership and committee structure</p>
            <div className="flex items-center gap-2 text-[#C8102E]">
              <span>LEARN MORE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
