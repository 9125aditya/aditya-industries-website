import { useEffect, useState } from "react"
import axios from "axios"

function Admin() {

  const [contacts,setContacts] = useState([])

  useEffect(() => {

    axios.get("http://localhost:8081/api/contact")
    .then(res => {
      setContacts(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })

  },[])

  return (

    <div className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border">

          <thead className="bg-gray-200">

            <tr>

              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Message</th>

            </tr>

          </thead>

          <tbody>

            {contacts.map(contact => (

              <tr key={contact._id}>

                <td className="p-3 border">{contact.name}</td>
                <td className="p-3 border">{contact.email}</td>
                <td className="p-3 border">{contact.phone}</td>
                <td className="p-3 border">{contact.message}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  )

}

export default Admin