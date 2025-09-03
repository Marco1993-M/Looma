export default function Portfolio() {
  const examples = [
    "/images/sample1.png",
    "/images/sample2.png",
    "/images/sample3.png",
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {examples.map((src, idx) => (
            <img key={idx} src={src} alt={`Example ${idx+1}`} className="rounded-2xl shadow hover:scale-105 transition transform" />
          ))}
        </div>
      </div>
    </section>
  );
}
