import getSum, { getSquaredArray, getOddNumbers } from './calculator';

it('should get array with squared numbers', () => {
  const result = getSquaredArray([5, 8, 10, 2, 9]);
  expect(result).toEqual([25, 64, 100, 4, 81]);
});

it('should get filtered array with only odd numbers', () => {
  const result = getOddNumbers([5, 8, 10, 2, 9, 3, 22, 17]);
  expect(result).toEqual([5, 9, 3, 17]);
});

it('should get sum of two numbers', () => {
  const result = getSum(5, 10);
  expect(result).toEqual(15);
});
