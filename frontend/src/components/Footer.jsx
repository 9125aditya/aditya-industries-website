function Footer() {
  return (
    <footer className="bg-black text-white py-10">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-red-500">
            Aditya Industries
          </h2>

          <p className="text-gray-400 mt-3">
            Precision manufacturing services including moulding dies,
            jigs manufacturing, fixture moulding bases and VMC machining.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Moulding Die</li>
            <li>Jigs Manufacturing</li>
            <li>Fixture Moulding Base</li>
            <li>Wire Cut (W/CUT)</li>
            <li>VMC Work</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>

          <p className="text-gray-400">Owner: Pradeep Kumar</p>
          <p className="text-gray-400">Phone: 9899718381</p>
          <p className="text-gray-400">Email: adityaindus9@gmail.com</p>
          <p className="text-gray-400">Noida, Uttar Pradesh</p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-5">
        © 2026 Aditya Industries. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer