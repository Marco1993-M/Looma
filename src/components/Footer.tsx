export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand + Contact (2/3 width) */}
        <div className="md:col-span-2">
          <h1 className="text 12xl font-bold mt-8 mb-4">Looma</h1>
          <p className="text-gray-400 mb-16">
            Crafting clean, modern digital experiences for brands that want to stand out. We focus on creativity, usability, and elegant design solutions tailored to your needs.
          </p>

          {/* Contact info under the brand section */}
          <div>
            <p className="text-gray-400">hello@looma.com</p>
            <p className="text-gray-400">Operating from Pretoria, South Africa</p>
          </div>
        </div>

        {/* Booking / Calendar (1/3 width) */}
        <div>
          <h3 className="font-semibold mb-4">Schedule a Call</h3>
          <p className="text-gray-400 mb-2">Pick a date and time that works for you:</p>
          <div className="border rounded overflow-hidden">
            <iframe
              src="https://calendly.com/your-username/30min"
              className="w-full h-72"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Looma. All rights reserved.
      </div>
    </footer>
  );
}
