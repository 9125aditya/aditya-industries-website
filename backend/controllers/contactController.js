import Contact from "../models/Contact.js"

export const createContact = async (req,res) => {

  try {

    const { name, email, phone, message } = req.body

    const contact = new Contact({
      name,
      email,
      phone,
      message
    })

    await contact.save()
    // await sendEmail({ name, email, phone, message })

    res.status(201).json({
      message: "Query submitted successfully"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Server error"
    })

  }

}

export const getContacts = async (req,res) => {

  try {

    const contacts = await Contact.find().sort({createdAt:-1})

    res.status(200).json({
      success:true,
      count: contacts.length,
      data: contacts
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success:false,
      message:"Server error"
    })

  }

}

