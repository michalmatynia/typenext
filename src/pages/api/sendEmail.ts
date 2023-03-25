import nodemailer from 'nodemailer'

const handler = async (req, res) => {
  const { email, message } = req.body as { email: string; message: string }

  // create transporter
  const transporter = nodemailer.createTransport({
    host: 'mail.milkbardesigners.com', // mail.tryzna.pl // milkbardesigners.com,
    port: 465,
    secure: true,
    auth: {
      user: 'info@milkbardesigners.com',
      pass: 'toblerone1982', // add as Server ENV

      //   pass: process.env.EMAIL_PASS, // add as Server ENV
    },
  }) as nodemailer.Transporter

  // create email message
  const mailOptions = {
    from: email,
    // from: process.env.EMAIL_USER,
    to: 'mmatynia@gmail.com',
    subject: 'New message from contact form',
    text: message,
  }

  try {
    // send email
    await transporter.sendMail(mailOptions)

    // respond with success message
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error sending email' })
  }
}

export default handler
