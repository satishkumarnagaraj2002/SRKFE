import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SportKaratePage() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="w-16 h-0.5 bg-[#C8102E] mb-4" />
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">COMPETITION</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-4 mb-6">SPORT KARATE</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Competitive excellence through WKF-aligned kumite and kata. National and international pathways for athletes representing England.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/sport-karate/youth-squad" className="group bg-gradient-to-b from-[#171717] to-black border border-white/10 hover:border-[#C8102E]/50 p-6 transition-all duration-300">
            <h2 className="font-display text-xl mb-3 group-hover:text-[#C8102E] transition-colors">Youth Squad</h2>
            <p className="text-white/70 mb-4 text-sm">Developing future champions</p>
            <div className="flex items-center gap-2 text-[#C8102E] text-sm">
              <span>VIEW</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link href="/sport-karate/cadet-and-junior-squad" className="group bg-gradient-to-b from-[#171717] to-black border border-white/10 hover:border-[#C8102E]/50 p-6 transition-all duration-300">
            <h2 className="font-display text-xl mb-3 group-hover:text-[#C8102E] transition-colors">Cadet & Junior Squad</h2>
            <p className="text-white/70 mb-4 text-sm">Building competitive excellence</p>
            <div className="flex items-center gap-2 text-[#C8102E] text-sm">
              <span>VIEW</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link href="/sport-karate/senior-squad" className="group bg-gradient-to-b from-[#171717] to-black border border-white/10 hover:border-[#C8102E]/50 p-6 transition-all duration-300">
            <h2 className="font-display text-xl mb-3 group-hover:text-[#C8102E] transition-colors">Senior Squad</h2>
            <p className="text-white/70 mb-4 text-sm">Elite performance pathway</p>
            <div className="flex items-center gap-2 text-[#C8102E] text-sm">
              <span>VIEW</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link href="/sport-karate/national-team" className="group bg-gradient-to-b from-[#171717] to-black border border-white/10 hover:border-[#C8102E]/50 p-6 transition-all duration-300">
            <h2 className="font-display text-xl mb-3 group-hover:text-[#C8102E] transition-colors">National Team</h2>
            <p className="text-white/70 mb-4 text-sm">Representing England internationally</p>
            <div className="flex items-center gap-2 text-[#C8102E] text-sm">
              <span>VIEW</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link href="/sport-karate/coaches-and-staff" className="group bg-gradient-to-b from-[#171717] to-black border border-white/10 hover:border-[#C8102E]/50 p-6 transition-all duration-300">
            <h2 className="font-display text-xl mb-3 group-hover:text-[#C8102E] transition-colors">Coaches & Staff</h2>
            <p className="text-white/70 mb-4 text-sm">Our dedicated team</p>
            <div className="flex items-center gap-2 text-[#C8102E] text-sm">
              <span>VIEW</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
          <Link href="/sport-karate/squad-trainings" className="group bg-gradient-to-b from-[#171717] to-black border border-white/10 hover:border-[#C8102E]/50 p-6 transition-all duration-300">
            <h2 className="font-display text-xl mb-3 group-hover:text-[#C8102E] transition-colors">Squad Trainings</h2>
            <p className="text-white/70 mb-4 text-sm">Training schedules and information</p>
            <div className="flex items-center gap-2 text-[#C8102E] text-sm">
              <span>VIEW</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
