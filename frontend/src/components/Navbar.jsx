import { useState } from "react"

function Navbar() {

const [menuOpen,setMenuOpen] = useState(false)

return (

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/70 text-white">

<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex justify-between items-center py-4">

<h1 className="text-xl font-bold text-red-500">
ADITYA INDUSTRIES
</h1>

{/* Desktop Menu */}

<ul className="hidden md:flex gap-8">

<li><a href="#home">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#contact">Contact</a></li>

</ul>

{/* Mobile Button */}

<button
className="md:hidden text-2xl"
onClick={()=>setMenuOpen(!menuOpen)}
>
☰
</button>

</div>

{/* Mobile Menu */}

{menuOpen && (

<div className="md:hidden bg-black text-center py-4 space-y-4">

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