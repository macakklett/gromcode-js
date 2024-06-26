export const squaredNumbers = () => {
  const items = document.querySelectorAll('.number');
  items.forEach(el => {
    const dataNumber = +el.dataset.number;
    el.dataset.squaredNumber = dataNumber ** 2;
  });
};
squaredNumbers();
