import { getMinSquaredNumber } from './getMinSquaredNumber';

it('Should be get null if argument is empty array', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('Should be get null if argument is not array', () => {
  const result = getMinSquaredNumber('not array');

  expect(result).toEqual(null);
});

it('Should be get square of minimum number in array', () => {
  const result = getMinSquaredNumber([10, -9, 111, 67, -777, 99, 18.5]);

  expect(result).toEqual(81);
});
