const counterValue = document.querySelector('.counter__value');
const counter = document.querySelector('.counter');

export const onChangeCounterValue = e => {
  if (!e.target.classList.contains('counter__button')) return;

  let value = Number(counterValue.textContent);
  const action = e.target.dataset.action;

  value = action === 'decrease' ? value - 1 : value + 1;

  localStorage.setItem('counterValue', value);
  counterValue.textContent = value;
};

counter.addEventListener('click', onChangeCounterValue);

const onStorageChange = e => {
  counterValue.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);

const onDomContentLoaded = () => {
  counterValue.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDomContentLoaded);
