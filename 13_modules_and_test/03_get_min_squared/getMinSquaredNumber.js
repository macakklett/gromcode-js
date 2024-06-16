export const getMinSquaredNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  const newArr = arr.map(el => Math.abs(el));
  return Math.min(...newArr) ** 2;
};
