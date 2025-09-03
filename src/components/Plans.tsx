"use client";
import Card from "./Card";
import Button from "./Button";
import { PauseCircle, Clock } from "lucide-react";

const services = [
  "One request at a time",
  "Avg. 48 hour delivery",
  "Unlimited brands",
  "Webflow development",
  "Unlimited stock photos",
  "Up to 2 users",
  "Pause or cancel anytime",
];

export default function Plans() {
  return (
    <section id="plans" className="pt-2">
      <div className="max-w-6xl mb-32 mx-auto text-center">
        <span className="serif italic text-5xl text-black font-thin">Our </span>
        <span className="font-bold text-black text-5xl">Plans</span>
        <p className="text-2xl text-black font-200 mt-2 mb-12">
          Design quality teams rely on — pricing you'll love.
        </p>

        {/* Container to constrain mobile width for plan cards */}
        <div className="mx-auto w-[80%] md:w-full">
          <div className="grid md:grid-cols-5 gap-8 items-stretch">
            {/* Left Image container - hidden on small screens */}
            <div className="hidden md:flex col-span-1 items-center justify-center rounded-2xl overflow-hidden">
              <img
                src="/price.png"
                alt="Plans illustration"
                className="object-cover w-full h-full scale-150"
              />
            </div>

            {/* Starter Plan */}
            <div className="col-span-2 border border-black rounded-2xl overflow-hidden">
              <Card>
                <h3 className="text-black text-xl text-left font-semibold mb-4">
                  Starter
                </h3>
                <p className="text-black text-left font-bold text-3xl mb-4">
                  $399/mo
                </p>
                <p className="text-black text-left mb-6">1 active request at a time</p>
                <ul className="text-black text-left mb-8 space-y-2 flex-1">
                  {services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">✔</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-start">
                  <button className="bg-gradient-to-t from-black to-gray-800 text-white px-6 mt-6 py-3 rounded-lg border border-black shadow-inner shadow-white/80 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.35),0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300">
                    Choose Plan
                  </button>
                </div>
              </Card>
            </div>

            {/* Pro Plan */}
            <div className="col-span-2 border border-black rounded-2xl overflow-hidden">
              <Card>
                <h3 className="text-black text-xl text-left font-semibold mb-4">Pro</h3>
                <p className="text-black text-left font-bold text-3xl mb-4">$599/mo</p>
                <p className="text-black text-left mb-6">2 active request at a time</p>
                <ul className="text-black text-left mb-8 space-y-2 flex-1">
                  {services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">✔</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-start">
                  <button className="bg-gradient-to-t from-black to-gray-800 text-white px-6 mt-6 py-3 rounded-lg border border-black shadow-inner shadow-white/80 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.35),0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300">
                    Choose Plan
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Extra Section Below Plans - constrained on mobile */}
        <div className="mx-auto w-[80%] md:w-full">
          <div className="grid md:grid-cols-2 gap-8 mt-16 items-stretch">
            {/* Pause Anytime */}
            <div className="flex items-start gap-4 border border-dashed border-black/20 rounded-2xl p-6 h-full">
              <PauseCircle className="w-8 h-8 text-black flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-black">Take a Break Anytime</h4>
                <p className="text-black/50">
                  Need a pause? Put your plan on hold whenever you like—no stress, no hassle.
                </p>
              </div>
            </div>

            {/* Try for a Week */}
            <div className="flex items-start gap-4 border border-dashed border-black/20 rounded-2xl p-6 h-full">
              <Clock className="w-8 h-8 text-black flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-black">Try it Risk-Free</h4>
                <p className="text-black/50">
                  Not sure it's a fit? Test it for a week—if it's not working out, get 75% back. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
