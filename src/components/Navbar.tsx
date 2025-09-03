"use client";

import { useState } from "react";
import Link from "next/link";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToPlans(duration: number = 800) {
    const plansSection = document.getElementById("plans");
    if (!plansSection) return;

    const navbarHeight = 64;
    const targetPosition = plansSection.offsetTop - navbarHeight;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t: number, b: number, c: number, d: number): number {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md px-4 sm:px-8 py-4 shadow-md">
      <div className="relative h-16 flex items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black">
          Looma
        </Link>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="border border-gray-300 text-black px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
            Login
          </button>
          <button className="border border-gray-300 text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition">
            <FaPhoneAlt />
            Book a Call
          </button>
          <button
            onClick={() => scrollToPlans(1000)}
            className="bg-gradient-to-t from-black to-gray-800 text-white px-6 py-3 rounded-lg border border-black shadow-inner shadow-white/80 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.35),0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            See Pricing
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col items-center gap-4">
          <button className="border border-gray-300 text-black px-4 py-2 rounded-lg w-full text-center hover:bg-white hover:text-black transition">
            Login
          </button>
          <button className="border border-gray-300 text-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 w-full hover:bg-white hover:text-black transition">
            <FaPhoneAlt />
            Book a Call
          </button>
          <button
            onClick={() => {
              scrollToPlans(1000);
              setMenuOpen(false);
            }}
            className="bg-gradient-to-t from-black to-gray-800 text-white px-6 py-3 rounded-lg border border-black shadow-inner shadow-white/80 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.35),0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300 w-full text-center"
          >
            See Pricing
          </button>
        </div>
      )}
    </nav>
  );
}
