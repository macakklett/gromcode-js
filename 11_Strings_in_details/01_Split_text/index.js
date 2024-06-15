const splitText = (str, n = 10) => {
  if (typeof str !== 'string') return null;
  let startIndex = 0;
  const arrFromStrings = [];

  while (true) {
    const subStr = str.substring(startIndex, startIndex + n);
    if (subStr === '') break;

    arrFromStrings.push(subStr[0].toUpperCase() + subStr.slice(1));
    startIndex += n;
  }

  return arrFromStrings.join('\n');
};
console.log(
  splitText(
    'substring() extracts characters from indexStart up to but not including indexEnd. In particular If indexEnd is omitted, substrin extracts characters to the end of the string',
    5,
  ),
);
