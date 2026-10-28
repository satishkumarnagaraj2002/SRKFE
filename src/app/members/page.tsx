export default function MembersPage() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="w-16 h-0.5 bg-[#C8102E] mb-4" />
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">MEMBERSHIP</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-4 mb-6">MEMBERS</h1>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-white/90 mb-8">
            Information about SRKFE membership for clubs and individual practitioners.
          </p>
          
          <div className="bg-gradient-to-b from-[#171717] to-black border border-white/10 p-8 mt-12">
            <h2 className="font-display text-2xl text-white mb-4">Membership Enquiries</h2>
            <p className="text-white/80 mb-6">
              For membership enquiries, please contact us through our Join Us page or email.
            </p>
            <a href="/join-us" className="inline-flex items-center px-6 py-3 bg-[#C8102E] text-white hover:bg-[#a00d24] transition-colors">
              JOIN THE FEDERATION
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
