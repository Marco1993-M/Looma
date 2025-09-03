"use client";
import Image from "next/image";

export default function SocialProof1() {
  return (
    <section className="w-full py-6 mb-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-12 text-center">
        
        {/* Quote 1 */}
        <div className="flex flex-col h-full justify-between items-center">
          <h3 className="font-serif font-thin text-2xl md:text-4xl lg:text-5xl italic text-black mb-4 leading-snug">
            "Looma nailed it. From website to design materials”
          </h3>

          <div className="flex justify-center items-end w-36 h-16 md:w-40">
            <div className="w-28 h-12 relative">
              <a 
                href="https://www.smartsteel.co.za" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo1.png"
                  alt="Company logo 1"
                  fill
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Quote 2 */}
        <div className="flex flex-col h-full justify-between items-center">
          <h3 className="font-serif font-thin text-2xl md:text-4xl lg:text-5xl italic text-black mb-4 leading-snug">
            “Their creativity and attention to detail is unmatched. Leave it to the pros!"
          </h3>

          <div className="flex justify-center items-end w-36 h-16 md:w-40">
            <div className="w-28 h-12 relative">
              <a 
                href="https://www.pequenohome.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo2.png"
                  alt="Company logo 2"
                  fill
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Quote 3 */}
        <div className="flex flex-col h-full justify-between items-center">
          <h3 className="font-serif font-thin text-2xl md:text-4xl lg:text-5xl italic text-black mb-4 leading-snug">
            “They are an extension of our team. Always reliable and deliver on time.”
          </h3>

          <div className="flex justify-center items-end w-36 h-16 md:w-40">
            <div className="w-28 h-12 relative">
              <Image
                src="/logo3.png"
                alt="Company logo 3"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Quote 4 */}
        <div className="flex flex-col h-full justify-between items-center">
          <h3 className="font-serif font-thin text-2xl md:text-4xl lg:text-5xl italic text-black mb-4 leading-snug">
            "Looma transformed our brand identity. Highly recommend!"
          </h3>

          <div className="flex justify-center items-end w-36 h-16 md:w-40">
            <div className="w-28 h-12 relative">
              <a 
                href="https://www.jacobsinteriors.co.za" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo4.png"
                  alt="Company logo 4"
                  fill
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
