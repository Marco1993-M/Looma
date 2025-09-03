"use client";
import Button from "./Button";

export default function Hero() {
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

    function easeInOutQuad(
      t: number,
      b: number,
      c: number,
      d: number
    ): number {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  return (
    <section className="relative top-0 left-0 w-full h-[90vh] flex flex-col justify-center items-center text-center text-black px-4 sm:px-6 md:px-8">
      <div className="flex flex-col justify-center items-center h-full pt-8 gap-6">
        {/* Eyebrow */}
        <p className="text-sm md:text-base tracking-wide text-black/60">
          Quality designs in under 48 hours.
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          <span className="serif italic font-thin">Unlimited</span>{" "}
          <span className="font-sans">Design Requests,</span>
          <br />
          <span className="font-sans">One Flat Fee</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl max-w-xl">
          Fast, high-quality design work. Cancel anytime.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full max-w-md">
          {/* See Pricing */}
          <Button
            className="w-full sm:w-auto px-6 py-3 bg-white/90 text-black rounded-xl hover:bg-black hover:text-white transition"
            onClick={() => scrollToPlans(1000)}
          >
            See Pricing
          </Button>

          {/* Book a 15-min Intro Call */}
          <Button
            className="w-full sm:w-auto px-6 py-3 border-2 border-black/20 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition"
          >
            <span className="text-2xl">👋</span>
            <span className="flex flex-col text-left">
              <span className="font-semibold text-black text-base sm:text-lg">
                Book a 15-min Intro Call
              </span>
              <span className="text-black/20 text-sm">Schedule now</span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
