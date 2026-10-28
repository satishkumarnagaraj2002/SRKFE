export default function AboutUsPage() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="w-16 h-0.5 bg-[#C8102E] mb-4" />
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">STRUCTURE</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-4 mb-6">ABOUT US</h1>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl text-white/90 mb-8">
            The Shito Ryu Karate Federation of England (SRKFE) is a non-profit organisation established in 2015, 
            dedicated to bringing together Shito Ryu karate clubs across England.
          </p>
          
          <h2 className="font-display text-3xl text-white mt-12 mb-6">Our Mission</h2>
          <p className="text-white/80 mb-6">
            Our mission is to support athletes, instructors, and referees while creating opportunities for Karatekas 
            to develop, compete, and achieve excellence at the highest levels.
          </p>

          <h2 className="font-display text-3xl text-white mt-12 mb-6">What We Do</h2>
          <p className="text-white/80 mb-6">
            We provide a professional pathway for students and clubs to progress from local training to national 
            and international competitions, proudly representing England. The federation works to promote the 
            traditional values of Shito Ryu Karate whilst supporting the development of sport karate in England.
          </p>

          <h2 className="font-display text-3xl text-white mt-12 mb-6">Established 2015</h2>
          <p className="text-white/80">
            Since our establishment in 2015, SRKFE has been committed to unifying Shito Ryu practitioners across 
            England under one federation, fostering excellence in both traditional and sport karate.
          </p>
        </div>
      </div>
    </div>
  );
}
