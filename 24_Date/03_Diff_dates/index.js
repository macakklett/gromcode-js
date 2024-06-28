function convertMilliseconds(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const remainingSeconds = seconds % 60;
  const remainingMinutes = minutes % 60;
  const remainingHours = hours % 24;

  return `${days}d ${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s`;
}

export const getDiff = (startDate, endDate) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  return convertMilliseconds(start - end);
};

console.log(getDiff(new Date(2024, 12, 20, 12, 5, 55), new Date(2024, 10, 5, 2, 55, 59)));
