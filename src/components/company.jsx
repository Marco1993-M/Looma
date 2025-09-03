"use client";

export default function Company() {
  return (
    <section className="w-full py-16 px-6 flex justify-center">
      <div className="max-w-4xl w-full border-2 border-dashed border-black/20 rounded-xl p-10 text-center">
        <p className="text-l md:text-2xl text-black/20 mb-6">
          Founded in 2021, <span className="serif italic font-thin">Looma</span>{" "} set out to transform how businesses approach creative design. 
          Our subscription-based model ensures fast, high-quality work without the hassle of hiring multiple freelancers.
          <span className="serif italic font-thin">Looma</span>{" "} is led entirely by our founding team, with no external contractors. This allows us 
          to maintain a consistent, premium standard for every client we work with.
          We focus on delivering exceptional design to a carefully selected roster of clients, 
          ensuring every project receives our full attention and expertise.
        </p>
      </div>
    </section>
  );
}
