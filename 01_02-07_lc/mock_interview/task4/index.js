'use strict';

/**
 * @param {object[]} studentsData
 * @return {object}
 */
function getTopStudent(studentsData) {
  // let topStudent = studentsData[0];

  // for (let obj of studentsData) {
  //   if (obj.points > topStudent.points) {
  //     topStudent = Object.assign({}, obj);
  //   }
  // }

  // return { id: topStudent.id, firstName: topStudent.firstName, lastName: topStudent.lastName };

  const topStudent = studentsData.reduce((topStudent, currentStudent) => {
    return currentStudent.points > topStudent.points ? currentStudent : topStudent;
  });

  return { id: topStudent.id, firstName: topStudent.firstName, lastName: topStudent.lastName };
}

// examples
const students = [
  { id: 1, firstName: 'Ivan', lastName: 'Ivanov', points: 95 },
  { id: 2, firstName: 'Petro', lastName: 'Petrov', points: 85 },
  { id: 3, firstName: 'Anna', lastName: 'Annikova', points: 98 },
  { id: 4, firstName: 'Svitlana', lastName: 'Svitlichna', points: 91 },
  { id: 5, firstName: 'Mykola', lastName: 'Mykolenko', points: 88 },
];

console.log(getTopStudent(students)); // returns { id: 3, firstName: 'Anna', lastName: 'Annikova' }
