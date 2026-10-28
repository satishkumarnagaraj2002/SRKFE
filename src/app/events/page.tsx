import { Calendar } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="w-16 h-0.5 bg-[#C8102E] mb-4" />
          <span className="text-[#C8102E] text-sm tracking-[0.3em] font-semibold">CALENDAR</span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-4 mb-6">EVENTS CALENDAR</h1>
        </div>

        <div className="text-center py-16 bg-gradient-to-b from-[#171717] to-black border border-white/10">
          <Calendar className="w-16 h-16 text-[#C8102E]/50 mx-auto mb-6" />
          <h2 className="text-2xl font-heading mb-4">Events Calendar</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Competition dates, squad training, seminars, referee courses and federation meetings will be displayed here.
          </p>
          <p className="text-white/50 text-sm">
            Please check back for updates or contact us for the latest information.
          </p>
        </div>
      </div>
    </div>
  );
}
