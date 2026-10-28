export default function SafeguardingPage() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="w-16 h-0.5 bg-[#C8102E] mb-4" />
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">PROTECTION</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-4 mb-6">SAFEGUARDING</h1>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-white/90 mb-8">
            The Shito Ryu Karate Federation of England is committed to ensuring the safety and welfare 
            of all children and vulnerable adults involved in our activities.
          </p>
          
          <h2 className="font-display text-3xl text-white mt-12 mb-6">Our Commitment</h2>
          <p className="text-white/80 mb-6">
            SRKFE has a duty of care to safeguard and promote the welfare of children and vulnerable adults 
            who participate in our activities. We are committed to providing a safe and positive environment 
            for all.
          </p>

          <h2 className="font-display text-3xl text-white mt-12 mb-6">Reporting Concerns</h2>
          <p className="text-white/80 mb-6">
            If you have any concerns about the safety or welfare of a child or vulnerable adult, 
            please report them to the appropriate safeguarding officers.
          </p>

          <div className="bg-gradient-to-b from-[#171717] to-black border border-white/10 p-8 mt-12">
            <h3 className="text-xl font-heading font-semibold text-white mb-4">Safeguarding Enquiries</h3>
            <p className="text-white/80 mb-4">
              For safeguarding concerns, please contact us via email:
            </p>
            <a href="mailto:admin@shitoryuengland.uk" className="text-[#C8102E] hover:text-white transition-colors">
              admin@shitoryuengland.uk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
