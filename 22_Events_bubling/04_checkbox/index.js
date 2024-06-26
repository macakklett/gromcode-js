const checkboxElem = document.querySelector('.task-status');

checkboxElem.addEventListener('checked', () => {
  console.log(checkboxElem.checked);
});
