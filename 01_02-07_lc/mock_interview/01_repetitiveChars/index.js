function getRepetitiveChars(word) {
  const arr = word.toLowerCase().split('');
  return arr.reduce((acc, letter, _, arr) => {
    if (arr.indexOf(letter) !== arr.lastIndexOf(letter) && !acc.includes(letter)) {
      return [...acc, letter];
    }
    return acc;
  }, []);
}

// examples
console.log(getRepetitiveChars('hello')); // returns ===> ['l']
console.log(getRepetitiveChars('intuition')); // returns ===> ['i', 't', 'n']
