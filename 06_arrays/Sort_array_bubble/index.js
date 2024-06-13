//                                                                         Сортування бульбашкою
function sortAsc(array) {
  if (!Array.isArray(array)) return null;
  const arrForWork = [...array];

  for (let i = 0, value; i < arrForWork.length - 1; i++) {
    for (let j = 0; j < arrForWork.length - 1; j++) {
      if (arrForWork[j] > arrForWork[j + 1]) {
        value = arrForWork[j];
        arrForWork[j] = arrForWork[j + 1];
        arrForWork[j + 1] = value;
      }
    }
  }

  return arrForWork;
}

function sortDesc(array) {
  if (!Array.isArray(array)) return null;
  const arrForWork = [...array];

  for (let i = 0, value; i < arrForWork.length - 1; i++) {
    for (let j = 0; j < arrForWork.length - 1; j++) {
      if (arrForWork[j] < arrForWork[j + 1]) {
        value = arrForWork[j];
        arrForWork[j] = arrForWork[j + 1];
        arrForWork[j + 1] = value;
      }
    }
  }

  return arrForWork;
}

const arr = [10, 5, 8, 18, 6, 8, 12, 13, 4];

console.log(sortAsc(arr));
