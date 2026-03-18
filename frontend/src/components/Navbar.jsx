import { useState } from "react"

function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false)

  return (

    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/80 text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center py-5">

        {/* Logo */}
        <h1 className="text-xl lg:text-2xl font-bold tracking-wide">
          <span className="text-red-500">ADITYA</span> INDUSTRIES
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm lg:text-base font-medium">

          <li><a href="#home" className="hover:text-red-500">HOME</a></li>
          <li><a href="#about" className="hover:text-red-500">ABOUT</a></li>
          <li><a href="#services" className="hover:text-red-500">SERVICES</a></li>
          <li><a href="#contact" className="hover:text-red-500">CONTACT</a></li>

        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block bg-red-500 px-5 py-2 text-sm font-semibold rounded hover:bg-red-600"
        >
          Get Quote
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={()=>setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-center py-5 space-y-4">

          <a href="#home" className="block">Home</a>
          <a href="#about" className="block">About</a>
          <a href="#services" className="block">Services</a>
          <a href="#contact" className="block">Contact</a>

        </div>
      )}

    </nav>

  )
}

export default Navbar