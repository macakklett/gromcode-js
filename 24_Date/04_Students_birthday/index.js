const students = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const studentsBirthDays = students => {
  return students.reduce((acc, { name, birthDate }) => {
    // const [month] = birthDate.split('/').map(str => Math.floor(Number(str)));
    // const monthText = months[month - 1];
    const month = new Date(birthDate).getMonth();
    const monthText = months[month];

    if (!acc[monthText]) {
      acc[monthText] = [];
    }
    acc[monthText].push(name);

    return acc;
  }, {});
};

console.log(studentsBirthDays(students));
