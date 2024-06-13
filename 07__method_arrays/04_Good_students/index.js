// algo
// 1. Create empty array
// 2. Method forEach -> acces to each element of array all students
// 3. Check if array studentsForRetake includes current element
// 3.1 if yes push to new array for return
// 3.2 if no - nothing

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//   const bestStudents = [];

//   allStudentsList.forEach(student => {
//     if (!studentsForRetake.includes(student)) {
//       bestStudents.push(`Good job, ${student}`);
//     }
//   });

//   return bestStudents;
// };

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
  allStudentsList
    .filter(student => !studentsForRetake.includes(student))
    .map(student => 'Good job, ' + student);

// examples
const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest1 = ['John', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1)); // ===> ['Good job, Den', 'Good job, Ann']

const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2)); // ===> []
