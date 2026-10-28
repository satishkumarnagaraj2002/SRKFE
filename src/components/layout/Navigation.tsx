"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structureLinks = [
    { href: "/structure/about-us", label: "About Us" },
    { href: "/structure/srkfe-affiliations", label: "SRKFE Affiliations" },
    { href: "/structure/committees", label: "Committees" },
  ];

  const sportLinks = [
    { href: "/sport-karate/youth-squad", label: "Youth Squad" },
    { href: "/sport-karate/cadet-and-junior-squad", label: "Cadet & Junior Squad" },
    { href: "/sport-karate/senior-squad", label: "Senior Squad" },
    { href: "/sport-karate/national-team", label: "National Team" },
    { href: "/sport-karate/coaches-and-staff", label: "Coaches & Staff" },
    { href: "/sport-karate/squad-trainings", label: "Squad Trainings" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md border-b border-[#C8102E]/20 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 pt-2">
            <Link href="/" className="flex items-center gap-3 group mt-2">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-transparent p-0">
                <Image
                  src="/images/logo.png"
                  alt="SRKFE logo"
                  width={112}
                  height={112}
                  className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]"
                  priority
                />
              </div>
              <div className="text-[10px] sm:text-xs font-display tracking-[0.18em] text-white uppercase leading-tight">
                SHITO RYU KARATE FEDERATION OF ENGLAND
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-white hover:text-[#C8102E] transition-colors duration-300"
              >
                HOME
              </Link>

              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("structure")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-white hover:text-[#C8102E] transition-colors duration-300 flex items-center gap-1">
                  STRUCTURE
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "structure" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md border border-[#C8102E]/20 shadow-xl"
                    >
                      {structureLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-3 text-sm text-white hover:bg-[#C8102E]/10 hover:text-[#C8102E] transition-colors duration-200 border-b border-white/5 last:border-0"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/members" className="px-4 py-2 text-sm font-medium text-white hover:text-[#C8102E] transition-colors duration-300">
                MEMBERS
              </Link>
              <Link href="/safeguarding" className="px-4 py-2 text-sm font-medium text-white hover:text-[#C8102E] transition-colors duration-300">
                SAFEGUARDING
              </Link>
              <Link href="/traditional-karate" className="px-4 py-2 text-sm font-medium text-white hover:text-[#C8102E] transition-colors duration-300">
                TRADITIONAL KARATE
              </Link>

              <div
                className="relative group"
                onMouseEnter={() => setActiveDropdown("sport")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-white hover:text-[#C8102E] transition-colors duration-300 flex items-center gap-1">
                  SPORT KARATE
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "sport" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-[#C8102E]/20 shadow-xl"
                    >
                      {sportLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-3 text-sm text-white hover:bg-[#C8102E]/10 hover:text-[#C8102E] transition-colors duration-200 border-b border-white/5 last:border-0"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/news" className="px-4 py-2 text-sm font-medium text-white hover:text-[#C8102E] transition-colors duration-300">
                NEWS
              </Link>
              <Link href="/events" className="px-4 py-2 text-sm font-medium text-white hover:text-[#C8102E] transition-colors duration-300">
                CALENDAR
              </Link>
              <Link href="/contact" className="px-4 py-2 text-sm font-medium text-white hover:text-[#C8102E] transition-colors duration-300">
                CONTACT
              </Link>
              <Link
                href="/join-us"
                className="ml-4 px-6 py-2 bg-[#C8102E] text-white text-sm font-semibold hover:bg-[#a00d24] transition-all duration-300 border border-[#C8102E] hover:shadow-lg hover:shadow-[#C8102E]/30"
              >
                JOIN US
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#C8102E] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 right-0 w-full h-full bg-black overflow-y-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full border border-white/10 bg-white/5 p-1">
                    <Image src="/images/logo.png" alt="SRKFE logo" width={40} height={40} className="h-full w-full object-contain" />
                  </div>
                  <div className="text-xs font-display tracking-[0.18em] text-white uppercase">SHITO RYU KARATE FEDERATION OF ENGLAND</div>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                  <X size={24} />
                </button>
              </div>
              <div className="px-6 py-4 space-y-4">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-white py-2">
                  HOME
                </Link>
                <div className="space-y-2">
                  <div className="text-[#C8102E] text-sm font-semibold">STRUCTURE</div>
                  {structureLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90 pl-4 py-1">
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Link href="/members" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-white py-2">
                  MEMBERS
                </Link>
                <Link href="/safeguarding" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-white py-2">
                  SAFEGUARDING
                </Link>
                <Link href="/traditional-karate" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-white py-2">
                  TRADITIONAL KARATE
                </Link>
                <div className="space-y-2">
                  <div className="text-[#C8102E] text-sm font-semibold">SPORT KARATE</div>
                  {sportLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90 pl-4 py-1">
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Link href="/news" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-white py-2">
                  NEWS
                </Link>
                <Link href="/events" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-white py-2">
                  CALENDAR
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-white py-2">
                  CONTACT
                </Link>
                <Link href="/join-us" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-6 py-3 bg-[#C8102E] text-white font-semibold mt-4">
                  JOIN US
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
