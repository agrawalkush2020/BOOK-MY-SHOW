// import { sendEmail } from "../mailling";


export const getCurrentBookingTime = () => {
  const now = new Date();
  const offset = -now.getTimezoneOffset(); // Timezone offset in minutes
  const sign = offset >= 0 ? "+" : "-";
  const pad = (n) => String(n).padStart(2, "0");

  const timezoneOffset = `${sign}${pad(
    Math.floor(Math.abs(offset) / 60)
  )}:${pad(Math.abs(offset) % 60)}`;
  return now.toISOString().replace("Z", timezoneOffset);
};

export const sendEmailWithRetry = async (
  to,
  subject,
  body,
  retries = 5,
  delay = 2000
) => {
  let attempts = 0;

  while (attempts < retries) {
    try {
      // Send the email
      const info = await sendEmail(to, subject, body);
      return true; // Email sent successfully
    } catch (error) {
      attempts++;
      console.log(`Attempt ${attempts} to send email failed`);
      if (attempts >= retries) {
        return false; // Failed after all retries
      }
      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, delay)); 
    }
  }
};

 
