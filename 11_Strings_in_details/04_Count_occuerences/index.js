// const countOccurrences = (text = '', str) => {
//   if (typeof str !== 'string') return null;
//   let count = 0;
//   let workingText = text;

//   while (true) {
//     const index = workingText.indexOf(str);
//     if (index === -1) break;

//     workingText = workingText.slice(index + str.length);
//     count += 1;
//   }

//   return count;
// };

const countOccurrences = (text = '', str) => {
  if (str === '') return null;

  let count = 0;
  let position = 0;

  while (true) {
    const index = text.indexOf(str, position);
    if (index === -1) break;
    count += 1;
    position = index + str.length;
  }

  return count;
};

console.log(
  countOccurrences(
    'substring() extracts characters from indexStart up to but not including indexEnd. In particular If indexEnd is omitted, substrin extracts characters to the end of the stringfg mar',
    'in',
  ),
);
