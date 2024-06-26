// put your code here
const buttons = document.querySelectorAll('.btn');
function handlerBtn(e) {
  console.log(e.target.textContent);
}
buttons.forEach(btn => {
  btn.addEventListener('click', handlerBtn);
});
