// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import About from "./components/About"
// import Services from "./components/Services"
// import Contact from "./components/Contact"
//  import Footer from "./components/Footer"
//  import WhatsappButton from "./components/WhatsappButton"


// function App() {

//   return (
//     <>
//       <Navbar/>
//       <Hero/>
//       <About/>
//       <Services/>
//       <Contact/>
//       <Footer/>
//       <WhatsappButton/>
    
//     </>
//   )

// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Admin from "./pages/Admin"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<Admin />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App