const inputText = document.querySelector('.text-input');

function handleChange(e) {
  console.log(e.target.value);
}

inputText.addEventListener('change', handleChange);
