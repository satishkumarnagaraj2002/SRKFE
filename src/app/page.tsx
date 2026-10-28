import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import KarateComparisonSection from "@/components/home/KarateComparisonSection";
import SquadsSection from "@/components/home/SquadsSection";
import NewsSection from "@/components/home/NewsSection";
import EventsSection from "@/components/home/EventsSection";
import JoinCTASection from "@/components/home/JoinCTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <PhilosophySection />
      <KarateComparisonSection />
      <SquadsSection />
      <NewsSection />
      <EventsSection />
      <JoinCTASection />
    </main>
  );
}
