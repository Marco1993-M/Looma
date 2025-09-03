"use client";
import Image from "next/image";

export default function SocialProof1() {
  return (
    <section className="w-full py-6 mb-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
        
        {/* Quote 1 */}
        <div className="flex flex-col h-full justify-between items-center">
          <h3 className="font-serif font-thin text-4xl md:text-5xl italic text-black mb-4">
            “Looma nailed it. From website to design materials”
          </h3>

          <div className="flex justify-center items-end w-40 h-16">
            <div className="w-32 h-12 relative">
             <a 
    href="https://www.smartsteel.co.za" 
    target="Smart Steel" 
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
          <h3 className="font-serif font-thin text-4xl md:text-5xl italic text-black mb-4">
            “Their creativity and attention to detail is unmatched. Leave it to the pros!”
          </h3>

          <div className="flex justify-center items-end w-40 h-16">
            <div className="w-32 h-12 relative">
             <a 
    href="https://www.pequenohome.com" 
    target="Pequeno" 
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
          <h3 className="font-serif font-thin text-4xl md:text-5xl italic text-black mb-4">
            “They are an extension of our team. Always reliable and deliver on time.”
          </h3>

          <div className="flex justify-center items-end w-40 h-16">
            <div className="w-32 h-12 relative">
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
          <h3 className="font-serif font-thin text-4xl md:text-5xl italic text-black mb-4">
            ”Looma transformed our brand identity. Highly recommend!”
          </h3>

          <div className="flex justify-center items-end w-40 h-16">
            <div className="w-32 h-12 relative">
  <a 
    href="https://www.jacobsinteriors.co.za" 
    target="Jacobs Interiors" 
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
