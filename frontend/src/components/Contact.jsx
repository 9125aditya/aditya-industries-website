// import { useState } from "react"
// import axios from "axios"

// function Contact() {

// const [formData,setFormData] = useState({
// name:"",
// email:"",
// phone:"",
// message:""
// })

// const handleChange = (e) => {

// setFormData({
// ...formData,
// [e.target.name]:e.target.value
// })

// }

// const handleSubmit = async (e) => {

// e.preventDefault()

// try{

// await axios.post("https://aditya-backend.onrender.com/api/contact", formData)

// alert("Message Sent Successfully")

// setFormData({
// name:"",
// email:"",
// phone:"",
// message:""
// })

// }catch(error){

// console.log(error)
// alert("Something went wrong")

// }

// }

// return (

// <section id="contact" className="py-20 bg-white">
//     <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

// <div className="max-w-6xl mx-auto px-6">

// <h2 className="text-4xl font-bold text-center mb-12">
// Contact <span className="text-red-500">Us</span>
// </h2>

// <div className="grid md:grid-cols-2 gap-10">

// {/* Contact Info */}

// <div>

// <h3 className="text-2xl font-semibold mb-4">
// Aditya Industries
// </h3>

// <p className="text-gray-600 mb-4">
// Precision manufacturing services including moulding dies,
// jigs manufacturing and VMC machining.
// </p>

// <p className="mb-2"><b>Owner:</b> Pradeep Kumar</p>

// <p className="mb-2"><b>Phone:</b> 9899718381</p>

// <p className="mb-2"><b>Email:</b> adityaindus9@gmail.com</p>

// <p className="mb-2"><b>Address:</b> E-136 Sector-7 Noida (U.P.)</p>

// </div>

// {/* Contact Form */}

// <form onSubmit={handleSubmit} className="space-y-4">

// <input
// type="text"
// name="name"
// placeholder="Your Name"
// value={formData.name}
// onChange={handleChange}
// className="w-full border p-3 rounded"
// />

// <input
// type="email"
// name="email"
// placeholder="Your Email"
// value={formData.email}
// onChange={handleChange}
// className="w-full border p-3 rounded"
// />

// <input
// type="text"
// name="phone"
// placeholder="Phone Number"
// value={formData.phone}
// onChange={handleChange}
// className="w-full border p-3 rounded"
// />

// <textarea
// name="message"
// placeholder="Your Message"
// value={formData.message}
// onChange={handleChange}
// className="w-full border p-3 rounded"
// />

// <button className="bg-red-500 text-white px-6 py-3 rounded w-full">
// Send Message
// </button>

// </form>

// </div>

// </div>

// </div>


// </section>

// )

// }

// export default Contact

import { useState } from "react"
import axios from "axios"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    console.log("FORM DATA:", formData)

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill all fields")
      return
    }

    try {

      setLoading(true)

      await axios.post(
        "https://aditya-backend.onrender.com/api/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )

      alert("Message Sent Successfully")

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      })

    } catch (error) {

      console.log("ERROR:", error)

      alert("Something went wrong. Try again.")

    } finally {
      setLoading(false)
    }

  }

  return (

    <section id="contact" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <h2 className="text-4xl font-bold text-center mb-12">
          Contact <span className="text-red-500">Us</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div>

            <h3 className="text-2xl font-semibold mb-4">
              Aditya Industries
            </h3>

            <p className="text-gray-600 mb-4">
              Precision manufacturing services including moulding dies,
              jigs manufacturing and VMC machining.
            </p>

            <p className="mb-2"><b>Owner:</b> Pradeep Kumar</p>
            <p className="mb-2"><b>Phone:</b> 9899718381</p>
            <p className="mb-2"><b>Email:</b> adityaindus9@gmail.com</p>
            <p className="mb-2"><b>Address:</b> E-136 Sector-7 Noida (U.P.)</p>

          </div>

          {/* Contact Form */}

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-3 rounded"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-red-500 text-white px-6 py-3 rounded w-full hover:bg-red-600"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </section>

  )
}

export default Contact