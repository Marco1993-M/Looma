"use client";
import Button from "./Button";

export default function Hero() {
  function scrollToPlans(duration: number = 800): void {
    const plansSection = document.getElementById("plans");
    if (!plansSection) return;

    const navbarHeight = 64; // adjust to your navbar height
    const targetPosition = plansSection.offsetTop - navbarHeight;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    function animation(currentTime: number): void {
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
    <section className="relative top-0 left-0 w-full h-[90vh] flex flex-col justify-center items-center text-center text-black px-2">
      <div className="flex flex-col justify-center items-center h-full pt-8">
        {/* Eyebrow Section */}
        <p className="text-sm md:text-base regular tracking-wide text-black/60 mb-2">
          Quality designs in under 48 hours.
        </p>

        <h1 className="text-5xl text-black md:text-7xl font-bold leading-tight mb-4">
          <span className="serif italic font-thin">Unlimited</span>{" "}
          <span className="font-sans">Design Requests,</span>
          <br />
          <span className="font-sans">One Flat Fee</span>
        </h1>

        <p className="text-xl text-black md:text-2xl mb-8 max-w-xl">
          Fast, high-quality design work. Cancel anytime.
        </p>

        <div className="flex flex-col items-center gap-6 mt-2 w-full max-w-md">
          {/* See Pricing Button Section */}
          <div
            className="w-full bg-white/80 rounded-xl text-black p-4 flex justify-center hover:bg-black hover:text-white transition"
            onClick={() => scrollToPlans(1000)} // duration in ms
          >
            <Button className="w-full text-center">See Pricing</Button>
          </div>

          {/* Book a 15-min Intro Call Section */}
          <div className="flex items-center gap-4 border-2 border-black/20 border-dashed rounded-lg px-3 py-2 w-full justify-between">
            {/* Left: Avatar / emoji */}
            <div className="text-3xl">👋</div>

            {/* Middle: Text */}
            <div className="flex flex-col text-left">
              <span className="font-semibold text-black text-lg">Book a 15-min Intro Call</span>
              <span className="text-sm text-black/20">Schedule now</span>
            </div>

            {/* Right: Round button with arrow */}
            <button className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
              ➔
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
