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
