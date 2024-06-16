import { calc } from './calculator';

it('Should be get null if argument is not string', () => {
  const result = calc(7 + 9);

  expect(result).toEqual(null);
});

it('Should be get sum of two numbers', () => {
  const result = calc('10 + 5');

  expect(result).toEqual('10 + 5 = 15');
});

it('Should be get diffrence of two numbers', () => {
  const result = calc('10 - 5');

  expect(result).toEqual('10 - 5 = 5');
});

it('Should be get multiplication of two numbers', () => {
  const result = calc('10 * 5');

  expect(result).toEqual('10 * 5 = 50');
});

it('Should be get division of two numbers', () => {
  const result = calc('10 / 5');

  expect(result).toEqual('10 / 5 = 2');
});
