import { NextApiRequest, NextApiResponse } from 'next'

import { Transporter, createTransport } from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import SMTPTransport, { SentMessageInfo } from 'nodemailer/lib/smtp-transport'

interface EmailRequestBody {
  email: string
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, message } = req.body as EmailRequestBody

  const transporterOptions: SMTPTransport.Options = {
    host: 'mail.milkbardesigners.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USER,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const transporter: Transporter<SentMessageInfo> = createTransport(
    transporterOptions
  ) as Mail<SentMessageInfo>

  const mailOptions = {
    from: email,
    to: process.env.NEXT_PUBLIC_EMAIL_USER,
    subject: 'New message from contact form',
    text: message,
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    await transporter.sendMail(mailOptions)

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error sending email' })
  }
}

export default handler
