export const formatDate = (isoDate) => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  return `${month}/${day}/${year.slice(-2)}`;
};

export const formatTime = (dateStr, timeStr) => {
  if (!dateStr || !timeStr) return "";
  const [year, month, day] = dateStr.split("-");
  const [hour, minute] = timeStr.split(":");
  // Create a date in local time
  const date = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute)
  );
  return date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
