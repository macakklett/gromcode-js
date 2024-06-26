const formatter = new Intl.DateTimeFormat('en', {
  timezone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export const getGreenwichTime = date => formatter.format(date);
console.log(getGreenwichTime(new Date()));
