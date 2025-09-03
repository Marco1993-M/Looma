"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Workflow() {
  const steps = [
    {
      title: "Subscribe",
      description: "Subscribe to a plan & request as many designs as you’d like.",
      img: "/subscribe.jpg",
    },
    {
      title: "Request",
      description: "Share your requirements and get custom designs fast.",
      img: "/subscribe.jpg",
    },
    {
      title: "Receive",
      description: "Receive and download your finalized design files.",
      img: "/subscribe.jpg",
    },
  ];

  const services = [
    "Emails", "Logos", "Presentations", "Pitch Decks", "Social Media",
    "Brochures", "Websites", "Ads", "Infographics", "Reports",
    "Business Cards", "Flyers", "Newsletters", "Banners", "Packaging",
  ];

  return (
    <section id="workflow" className="py-5">
      <h3 className="text-4xl text-black md:text-6xl font-bold mb-16 leading-tight text-center">
        <span className="serif italic font-thin">Redefining</span>{" "}
        <span className="font-sans">how design was meant to be.</span>
      </h3>

      {/* Container with max 80% width on mobile */}
      <div className="w-[80%] md:w-full max-w-5xl mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-black overflow-hidden shadow-inner shadow-white/80
                         hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.35),0_4px_12px_rgba(0,0,0,0.5)]
                         transition-all duration-300"
            >
              {/* Card Image */}
              <div className="w-full h-full">
                <Image
                  src={step.img}
                  alt={step.title}
                  width={500}
                  height={625} // 4:5 ratio
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Step title & description at bottom */}
              <div className="absolute bottom-0 left-0 w-full text-white text-left py-5 px-5">
                <h4 className="text-xl font-bold">{step.title}</h4>
                <p className="text-sm mt-1">{step.description}</p>
              </div>

              {/* Rolling services banner ONLY on middle card */}
              {idx === 1 && (
                <div className="absolute inset-0 flex flex-col items-center gap-4 p-0 justify-start mt-16">
                  <Marquee gradient={false} speed={50} className="w-full">
                    {services.slice(0, 5).map((service, i) => (
                      <span
                        key={i}
                        className="mx-4 px-6 py-2 bg-white/50 rounded-full text-m text-black"
                      >
                        {service}
                      </span>
                    ))}
                  </Marquee>
                  <Marquee gradient={false} speed={50} direction="right" className="w-full">
                    {services.slice(5, 10).map((service, i) => (
                      <span
                        key={i}
                        className="mx-4 px-6 py-2 bg-white/50 rounded-full text-m text-black"
                      >
                        {service}
                      </span>
                    ))}
                  </Marquee>
                  <Marquee gradient={false} speed={50} className="w-full">
                    {services.slice(10, 15).map((service, i) => (
                      <span
                        key={i}
                        className="mx-4 px-6 py-1 bg-white/50 rounded-full text-m text-black"
                      >
                        {service}
                      </span>
                    ))}
                  </Marquee>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-1xl text-black md:text-3xl font-bold mt-12 mb-12 leading-snug text-center">
        <span className="serif italic font-thin">One step forward</span>{" "}
        <span className="font-sans">no steps back.</span>
      </p>
    </section>
  );
}
