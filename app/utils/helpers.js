export const formatTime = (dateTimeStr) => {
  if (!dateTimeStr || typeof dateTimeStr !== "string") {
    console.warn("Invalid dateTimeStr:", dateTimeStr);
    return "";
  }

  const match = dateTimeStr.match(/\d{1,2}:\d{2}:\d{2} (AM|PM)/);
  if (!match) {
    console.warn("Time format mismatch for:", dateTimeStr);
    return "";
  }

  const [time, period] = match[0].split(" ");
  const [hour] = time.split(":");

  return `${parseInt(hour)} ${period}`;
};
