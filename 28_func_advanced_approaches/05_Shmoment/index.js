export const shmoment = date => {
  const newDate = new Date(date);

  const calculator = {
    add(dateUnit, num) {
      switch (dateUnit) {
        case 'years':
          newDate.setFullYear(newDate.getFullYear() + num);
          break;
        case 'months':
          newDate.setMonth(newDate.getMonth() + num);
          break;
        case 'days':
          newDate.setDate(newDate.getDate() + num);
          break;
        case 'hours':
          newDate.setHours(newDate.getHours() + num);
          break;
        case 'minutes':
          newDate.setMinutes(newDate.getMinutes() + num);
          break;
        case 'seconds':
          newDate.setSeconds(newDate.getSeconds() + num);
          break;
        case 'milliseconds':
          newDate.setMilliseconds(newDate.getMilliseconds() + num);
          break;
        default:
          return;
      }
      return this;
    },

    subtract(dateUnit, num) {
      return this.add(dateUnit, -num);
    },

    result() {
      return new Date(newDate);
    },
  };

  return calculator;
};

const date = new Date('2020-01-01');
const newDate = shmoment(date).add('years', 2).subtract('months', 3).add('days', 5).result();

console.log(newDate);
