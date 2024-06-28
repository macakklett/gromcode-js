const nameDaysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
const dayOfWeek = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return nameDaysOfWeek[newDate.getDay()];
};

console.log(dayOfWeek(new Date(), 5));
