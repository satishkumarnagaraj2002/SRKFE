"use client"

import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-black border-t border-[#C8102E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="text-2xl font-display tracking-wider mb-4">
              SHITO RYU KARATE FEDERATION OF ENGLAND
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              A non-profit organisation established in 2015, dedicated to bringing together Shito Ryu karate clubs across England.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:admin@shitoryuengland.uk" className="text-white/70 hover:text-[#C8102E] transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+447438052254" className="text-white/70 hover:text-[#C8102E] transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/structure/about-us" className="text-white/70 hover:text-[#C8102E] transition-colors">About Us</Link></li>
              <li><Link href="/structure" className="text-white/70 hover:text-[#C8102E] transition-colors">Federation Structure</Link></li>
              <li><Link href="/members" className="text-white/70 hover:text-[#C8102E] transition-colors">Members</Link></li>
              <li><Link href="/safeguarding" className="text-white/70 hover:text-[#C8102E] transition-colors">Safeguarding</Link></li>
              <li><Link href="/news" className="text-white/70 hover:text-[#C8102E] transition-colors">News and Results</Link></li>
              <li><Link href="/events" className="text-white/70 hover:text-[#C8102E] transition-colors">Events Calendar</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-white">Karate and Squads</h3>
            <ul className="space-y-2">
              <li><Link href="/traditional-karate" className="text-white/70 hover:text-[#C8102E] transition-colors">Traditional Karate</Link></li>
              <li><Link href="/sport-karate" className="text-white/70 hover:text-[#C8102E] transition-colors">Sport Karate</Link></li>
              <li><Link href="/join-us" className="text-white/70 hover:text-[#C8102E] transition-colors">Join Us</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-[#C8102E] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="text-center text-white/50 text-sm">
            (c) {currentYear ?? 2026} Shito Ryu Karate Federation of England. All rights reserved.
          </div>
          <div className="text-center mt-4 text-white/40 text-sm">
            Telephone: +44 7438 052 254 | Email: admin@shitoryuengland.uk
          </div>
        </div>
      </div>
    </footer>
  )
}
