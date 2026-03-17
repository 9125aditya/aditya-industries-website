import { motion } from "framer-motion"
import { FaCogs, FaTools, FaIndustry, FaCut, FaRobot, FaWrench } from "react-icons/fa"

const services = [
  {
    title: "Moulding Die",
    desc: "High precision moulding die manufacturing for industrial production.",
    icon: <FaCogs />
  },
  {
    title: "Jigs Manufacturing",
    desc: "Custom jigs designed to improve manufacturing accuracy and efficiency.",
    icon: <FaTools />
  },
  {
    title: "Fixture Moulding Base",
    desc: "Durable fixture moulding bases designed for precision machining.",
    icon: <FaIndustry />
  },
  {
    title: "Wire Cut (W/CUT)",
    desc: "Advanced wire cut machining for high accuracy components.",
    icon: <FaCut />
  },
  {
    title: "VMC Work",
    desc: "CNC VMC machining for complex industrial parts.",
    icon: <FaRobot />
  },
  {
    title: "Custom Solutions",
    desc: "Tailor-made industrial solutions based on your project needs.",
    icon: <FaWrench />
  }
]

function Services() {
  return (
    <section id="services" className="bg-gray-900 text-white py-20">
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
       
      <div className="max-w-6xl mx-auto px-6">

        {/* Animated Section Title */}

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          Our <span className="text-red-500">Services</span>
        </motion.h2>

        {/* Services Grid */}

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}

              className="bg-black p-8 rounded-lg border border-gray-700
              hover:border-red-500 hover:-translate-y-2 hover:shadow-2xl
              transition-all duration-300"
            >

              <div className="text-red-500 text-3xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
      </div>

    </section>
  )
}

export default Services