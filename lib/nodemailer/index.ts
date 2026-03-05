import nodemailer from "nodemailer";
import { WELCOME_EMAIL_TEMPLATE } from "./templates";

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  }
})

export const sendWelcomeEmail = async ({ email, name, intro }: WelcomeEmailData) => {
  const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replace('{{name}}', name).replace('{{intro}}', intro)

  const mailOptions = {
    from: "'Stocks' <Stocks_pranavkuruvella@gmail.com>",
    to: email,
    subject: "Welcome to Stocks - your stock market toolkit",
    text: 'Thanks for joining Stocks! As someone focused on technology growth stocks, you\'ll love our real-time alerts for companies like the ones you\'re tracking. We\'ll help you spot opportunities before they become mainstream news.',
    html: htmlTemplate
  }

  await transporter.sendMail(mailOptions)
} 