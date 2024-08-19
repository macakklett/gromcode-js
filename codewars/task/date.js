console.log(new Date()); // Wed Aug 07 2024 16:19:10 GMT+0300 (Восточная Европа, летнее время)
console.log(new Date().getDay()); // 3 - day of week(sunday is 0)
console.log(new Date().getDate()); // 7 - day of month
console.log(new Date(2020, 8, 15, 10, 15).getHours()); // 10 - hours
console.log(new Date(2024, 8, 7, 10, 15)); // 10 - hours
// const hours = Array(24)
//   .fill()
//   .map((val, index) => index);
// console.log(hours);
// export const getWeekStartDate = date => {
//   const dateCopy = new Date(date);
//   const dayOfWeek = dateCopy.getDay();
//   const difference =
//     dayOfWeek === 0
//       ? -6 // for Sunday
//       : 1 - dayOfWeek;

//   const monday = new Date(dateCopy.setDate(date.getDate() + difference));
//   return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
// };

// export const generateWeekRange = startDate => {
//   const result = [];
//   for (let i = 0; i < 7; i += 1) {
//     const base = new Date(startDate);
//     result.push(new Date(base.setDate(base.getDate() + i)));
//   }
//   return result;
// };

// console.log(generateWeekRange(getWeekStartDate(new Date())));

// 0 Mon Aug 05 2024 00:00:00 GMT+0300 (Восточная Европа, летнее время)
// 1 Tue Aug 06 2024 00:00:00 GMT+0300 (Восточная Европа, летнее время)
// 2 Wed Aug 07 2024 00:00:00 GMT+0300 (Восточная Европа, летнее время)
// 3 Thu Aug 08 2024 00:00:00 GMT+0300 (Восточная Европа, летнее время)
// 4 Fri Aug 09 2024 00:00:00 GMT+0300 (Восточная Европа, летнее время)
// 5 Sat Aug 10 2024 00:00:00 GMT+0300 (Восточная Европа, летнее время)
// 6 Sun Aug 11 2024 00:00:00 GMT+0300 (Восточная Европа, летнее время)
