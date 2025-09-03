"use client";

import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const marqueeImages = [
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center mb-24 p-6">
      <Head>
        <title>Design Services</title>
      </Head>

      <div className="flex gap-8 w-full max-w-6xl items-stretch">
       
        {/* Left Card - wider, no padding */}
        <div className="bg-white border border-black rounded-lg shadow-lg flex-1 flex flex-col h-[600px] p-0">
          <div className="flex-1 flex flex-col justify-between">

{/* Diagonal Rolling Banner */}
<div className="relative w-full h-72 overflow-hidden mb-0"> {/* increased from h-32 → h-48 */}
  <div className="marquee-diagonal-wrapper absolute inset-0">
    <div className="marquee-diagonal-track flex">
      {marqueeImages.concat(marqueeImages).map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Banner ${i}`}
          width={200}
          height={200}
          className="mx-2 object-cover rounded-lg"
        />
      ))}
    </div>
  </div>
</div>


{/* Awards Section */}
<div className="flex items-center justify-left mt-0 px-6 gap-4"> {/* removed mb-4 */}
  {/* Container 1 */}
  <div className="flex-0 border-2 border-dashed border-black/20 rounded-xl p-3 text-left">
    <p className="text-yellow-500">🌞 Founder-led 🌞 </p>
    <p className="text-gray-600">No outsourcing</p>
    <p className="text-gray-400">No compromises</p>
  </div>

  {/* Container 2 */}
  <div className="flex-0 border-2 border-dashed border-black/20 rounded-xl p-3 text-left">
    <p className="text-green-500">🌱 Quick Designs 🌱</p>
    <p className="text-gray-600">High-quality design — every time</p>
    <p className="text-gray-400">We scale with you</p>
  </div>
</div>



            {/* CTA Section */}
            <div className="mt-6 mb-12 px-6">
              <h1 className="text-xl text-black font-semibold">Recent work</h1>
              <p className="text-gray-600">
                See how we catapult our clients.
              </p>
              <button className="bg-gradient-to-t from-black to-gray-800 text-white px-6 mt-6 py-3 rounded-lg border border-black shadow-inner shadow-white/80 hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.35),0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300">
                See recent work
              </button>
            </div>
          </div>
        </div>

        {/* Right Card - thinner */}
        <div className="bg-white border border-black rounded-lg shadow-lg flex-2 flex flex-col h-[600px] p-6">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="text-center w-full max-w-sm">
              <div className="bg-pink-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">😊</span>
              </div>

              {/* Services */}
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "Web design",
                  "Logos",
                  "Slide decks",
                  "Branding",
                  "Social media",
                  "UI/UX design",
                  "Webflow development",
                  "Mobile apps",
                  "Print design",
                  "Email",
                  "Display ads",
                  "Icons",
                  "Brand guides",
                  "+ more",
                ].map((service, idx) => (
                  <button
                    key={idx}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition text-sm"
                  >
                    {service}
                  </button>
                ))}
              </div>

              <h2 className="text-xl font-semibold mt-6">
                Apps, websites, logos & more
              </h2>
              <p className="text-gray-600">
                We cover it all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
