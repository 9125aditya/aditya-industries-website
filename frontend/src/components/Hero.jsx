// import heroImage from "../assets/hero.jpg"

// function Hero() {
//   return (
//     <section
//       id="home"
//       className="h-screen bg-cover bg-center relative flex items-center text-white"
//       style={{ backgroundImage: `url(${heroImage})` }}
//     >

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/70"></div>

//       {/* Content */}
//       <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

//         <h1 className="font-extrabold leading-tight uppercase">

//           <span className="block text-3xl sm:text-4xl lg:text-6xl">
//             Precision
//           </span>

//           <span className="block text-red-500 text-4xl sm:text-5xl lg:text-7xl">
//             Manufacturing
//           </span>

//           <span className="block text-3xl sm:text-4xl lg:text-6xl">
//             Excellence
//           </span>

//         </h1>

//         <p className="mt-6 text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl">
//           Manufacturing of Moulding Die, Jigs, Fixture Moulding Base,
//           W/CUT & VMC Work with quality and precision.
//         </p>

//         <div className="mt-6 flex flex-col sm:flex-row gap-4">

//           <a
//             href="#contact"
//             className="bg-red-500 px-6 py-3 rounded font-semibold hover:bg-red-600 transition"
//           >
//             Get a Quote
//           </a>

//           <a
//             href="#services"
//             className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
//           >
//             Our Services
//           </a>

//         </div>

//       </div>

//     </section>
//   )
// }

// export default Hero

import heroVideo from "../assets/hero.mp4"

function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden text-white">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-full flex items-center">

        <div>

          <h1 className="font-extrabold uppercase leading-tight">

            <span className="block text-3xl sm:text-4xl lg:text-6xl">
              Precision
            </span>

            <span className="block text-red-500 text-4xl sm:text-5xl lg:text-7xl">
              Manufacturing
            </span>

            <span className="block text-3xl sm:text-4xl lg:text-6xl">
              Excellence
            </span>

          </h1>

          <p className="mt-6 text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl">
            Manufacturing of Moulding Die, Jigs, Fixture Moulding Base,
            W/CUT & VMC Work with quality and precision.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">

            <a
              href="#contact"
              className="bg-red-500 px-6 py-3 rounded font-semibold hover:bg-red-600"
            >
              Get a Quote
            </a>

            <a
              href="#services"
              className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black"
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