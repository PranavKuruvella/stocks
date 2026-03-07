import nodemailer from "nodemailer";
import { NEWS_SUMMARY_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./templates";

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

export const sendNewsSummaryEmail = async (
  { email, date, newsContent }: { email: string; date: string; newsContent: string }
): Promise<void> => {
  const htmlTemplate = NEWS_SUMMARY_EMAIL_TEMPLATE
    .replace('{{date}}', date)
    .replace('{{newsContent}}', newsContent);

  const mailOptions = {
    from: "'Stocks News' <Stocks_pranavkuruvella@gmail.com>",
    to: email,
    subject: `📈 Market News Summary Today - ${date}`,
    text: `Today's market news summary from Stocks`,
    html: htmlTemplate,
  };

  await transporter.sendMail(mailOptions);
};