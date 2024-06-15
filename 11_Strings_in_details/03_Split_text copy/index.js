const splitText = (str, n = 10) => {
  if (typeof str !== 'string') return null;
  let startIndex = 0;
  const arrFromStrings = [];

  while (true) {
    const subStr = str.substring(startIndex, startIndex + n);
    if (subStr === '') break;

    arrFromStrings.push(subStr);
    startIndex += n;
  }

  if (arrFromStrings[arrFromStrings.length - 1].length < n) {
    const lastElement = arrFromStrings[arrFromStrings.length - 1];
    let newLastElement = lastElement;
    for (let i = 0; i < n - lastElement.length; i += 1) {
      console.log(lastElement);
      newLastElement += '.';
    }

    arrFromStrings[arrFromStrings.length - 1] = newLastElement;
  }

  return arrFromStrings;
};

console.log(
  splitText(
    'substring() extracts characters from indexStart up to but not including indexEnd. In particular If indexEnd is omitted, substrin extracts characters to the end of the stringfg mar',
    5,
  ),
);
