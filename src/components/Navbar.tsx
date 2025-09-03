"use client";

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
    function scrollToPlans(duration = 800) {
    const plansSection = document.getElementById("plans");
    if (!plansSection) return;

    const navbarHeight = 64; // adjust to your navbar height
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

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  return (
    <nav className="top-0 left-0 w-full z-50 bg-transparent px-8 py-4">
      <div className="relative h-16 flex items-center">
        {/* Logo positioned 12px from left and top */}
        <Link
          href="/"
          className="absolute top-3 left-3 text-2xl font-bold text-black z-10"
        >
          Looma
        </Link>

        {/* Buttons centered */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
          {/* Login Button */}
          <button className="border border-gray-300 text-black px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
            Login
          </button>

          {/* Book a Call */}
          <button className="border border-gray-300 text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition">
            <FaPhoneAlt />
            Book a Call
          </button>

          {/* See Pricing */}
   <button
            onClick={() => scrollToPlans(1000)} // duration in ms
            className="bg-gradient-to-t from-black to-gray-800 text-white px-6 py-3 rounded-lg border border-black shadow-inner shadow-white/80 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.35),0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            See Pricing
          </button>


        </div>
      </div>
    </nav>
  );
}
