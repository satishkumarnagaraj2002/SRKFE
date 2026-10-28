export default function TraditionalKaratePage() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="w-16 h-0.5 bg-[#C8102E] mb-4" />
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">TRADITION</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-4 mb-6">TRADITIONAL KARATE</h1>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-white/90 mb-8">
            Preserving the classical forms, techniques and philosophical aspects of Shito Ryu Karate.
          </p>
          
          <p className="text-white/80 mb-6">
            Traditional Shito Ryu Karate focuses on kata (forms), bunkai (application), kihon (basics), 
            and the development of character through disciplined practice. It embodies the philosophical 
            elements of martial arts - respect, humility, perseverance and self-improvement.
          </p>

          <h2 className="font-display text-3xl text-white mt-12 mb-6">Shito Ryu Heritage</h2>
          <p className="text-white/80 mb-6">
            Shito Ryu is one of the major traditional styles of Okinawan karate, known for its combination 
            of hard and soft techniques, extensive kata syllabus, and emphasis on both speed and power.
          </p>
        </div>
      </div>
    </div>
  );
}
