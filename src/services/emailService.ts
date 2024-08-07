import { createTransport } from 'nodemailer'
import { config } from '../config'

interface SendLinkProps {
  to: string
  subject: string
  link: string
}

const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: config.env.SMTP_USER,
    pass: config.env.SMTP_PASS,
  },
})

export const sendLink = async ({ to, subject, link }: SendLinkProps) => {
  await transporter.sendMail({
    from: 'Banheiro Livre',
    to,
    subject,
    html: `<h3 style="font-weight:400">${link}</h3>`,
  })
}
