export default function JoinUsPage() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="w-16 h-0.5 bg-[#C8102E] mb-4" />
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">MEMBERSHIP</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-4 mb-6">JOIN US TODAY</h1>
          <p className="text-xl text-white/90">
            Join the Shito Ryu Karate Federation of England (SRKFE)
          </p>
          <p className="text-lg text-white/80 mt-4">
            Train. Compete. Represent Shito Ryu England on the national and international stage.
          </p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-white/80 mb-8">
            The Shito Ryu Karate Federation of England (SRKFE) is a non-profit organisation established in 2015, 
            dedicated to bringing together Shito Ryu karate clubs across England. Our mission is to support athletes, 
            instructors, and referees while creating opportunities for Karatekas to develop, compete, and achieve 
            excellence at the highest levels.
          </p>

          <p className="text-white/80 mb-8">
            We provide a professional pathway for students and clubs to progress from local training to national 
            and international competitions, proudly representing England.
          </p>

          <div className="bg-gradient-to-b from-[#171717] to-black border border-white/10 p-8 mt-12">
            <h2 className="font-display text-2xl text-white mb-4">How to Join</h2>
            <p className="text-white/80 mb-6">
              For information about joining SRKFE as a club or individual member, please get in touch with us.
            </p>
            <a href="/contact" className="inline-flex items-center px-6 py-3 bg-[#C8102E] text-white hover:bg-[#a00d24] transition-colors">
              CONTACT US FOR MEMBERSHIP ENQUIRIES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
