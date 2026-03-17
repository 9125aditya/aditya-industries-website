function About() {
  return (
    
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-red-500">Aditya Industries</span>
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Aditya Industries specializes in high-precision manufacturing including
          moulding dies, jigs manufacturing, fixture moulding bases, and advanced
          machining services such as W/CUT and VMC work. We deliver reliable,
          high-quality solutions tailored to industrial requirements.
        </p>

      </div>

      {/* Stats Section */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto text-center">

        <div>
          <h3 className="text-3xl font-bold text-red-500">15+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-red-500">500+</h3>
          <p className="text-gray-600">Happy Clients</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-red-500">2000+</h3>
          <p className="text-gray-600">Projects Completed</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-red-500">100%</h3>
          <p className="text-gray-600">Quality Commitment</p>
        </div>

      </div>
     </div>
    </section>
  )
}

export default About