// put your code here
const button = document.querySelector('.single-use-btn');
function showClicked() {
  console.log('clicked');

  button.removeEventListener('click', showClicked);
}

button.addEventListener('click', showClicked);
