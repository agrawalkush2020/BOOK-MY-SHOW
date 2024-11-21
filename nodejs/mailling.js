import nodemailer from "nodemailer";
import { ADMIN_EMAIL_ID, EMAIL_PASSWORD } from "./config.js";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ADMIN_EMAIL_ID,
    pass: EMAIL_PASSWORD,
  },
});

export const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: "codebykush2024@gmail.com", // Your email address
    to,
    subject,
    text,
  };

  return await transporter.sendMail(mailOptions);
};
