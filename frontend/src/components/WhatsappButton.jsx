import { FaWhatsapp } from "react-icons/fa"

function WhatsappButton() {

  const phoneNumber = "918851529310"

  const message = "Hello, I want to know more about your manufacturing services."

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp size={28} color="white" />
    </a>
  )
}

export default WhatsappButton