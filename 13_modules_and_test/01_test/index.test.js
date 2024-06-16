it('17 is equal 17', () => {
  expect(17).toEqual(17);
});

it('18 is not equal 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = arr => arr.filter(el => el % 2 === 0);

it('should get filtered array with only even numbers', () => {
  const result = getEvenNumbers([5, 8, 10, 13, 2, 5, 9]);
  expect(result).toEqual([8, 10, 2]);
});
