// import nodemailer from "nodemailer"

// const sendEmail = async (data) => {

//   const transporter = nodemailer.createTransport({

//     service: "gmail",

//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS
//     }

//   })

//   const mailOptions = {

//     from: process.env.EMAIL_USER,

//     to: process.env.EMAIL_USER,

//     subject: "New Website Enquiry",

//     html: `
//       <h2>New Contact Form Submission</h2>

//       <p><b>Name:</b> ${data.name}</p>
//       <p><b>Email:</b> ${data.email}</p>
//       <p><b>Phone:</b> ${data.phone}</p>
//       <p><b>Message:</b> ${data.message}</p>
//     `

//   }

//   await transporter.sendMail(mailOptions)

// }

// export default sendEmail