import heroImage from "../assets/hero.jpg"

function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center relative flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center px-6">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Precision Manufacturing
          <span className="text-red-500"> Excellence</span>
        </h1>

        <p className="max-w-xl mx-auto text-gray-200 mb-6">
          Specialized in moulding dies, jigs manufacturing,
          fixture moulding bases and high precision VMC machining.
        </p>

        <div className="flex justify-center gap-4">

          <a
            href="#contact"
            className="bg-red-500 px-6 py-3 rounded hover:bg-red-600 transition"
          >
            Get a Quote
          </a>

          <a
            href="#services"
            className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
          >
            Our Services
          </a>

        </div>

      </div>

      </div>

    </section>
  )
}

export default Hero