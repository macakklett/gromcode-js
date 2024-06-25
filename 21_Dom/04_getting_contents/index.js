export const getTitle = () => {
  const title = document.querySelector('.title');
  return title.textContent;
};

export const getDescription = () => {
  const description = document.querySelector('.about');
  return description.innerText;
};

export const getPlans = () => {
  const plans = document.querySelector('.plans');
  return plans.innerHTML;
};

export const getGoal = () => {
  const goal = document.querySelector('.goal');
  return goal.outerHTML;
};

console.log(getTitle());
console.log(getDescription());
console.log(getPlans());
console.log(getGoal());
