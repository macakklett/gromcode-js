const form = document.querySelector('.login-form');
const formInputEmail = document.querySelector('#email');
const formInputName = document.querySelector('#username');
const formInputPassword = document.querySelector('#password');
const buttonSubmit = document.querySelector('.submit-button');
const baseURL = 'https://668e5a7bbf9912d4c92dedb5.mockapi.io/api/v1/users';

const addUser = formData =>
  fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

const checkFormValidity = () => {
  if (form.reportValidity()) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', true);
  }
};

form.addEventListener('input', checkFormValidity);

const onSubmit = e => {
  e.preventDefault();

  const formData = [...new FormData(form)].reduce(
    (acc, [prop, value]) => ({ ...acc, [prop]: value }),
    {},
  );

  console.log(formData);

  addUser(formData)
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      form.reset();
      buttonSubmit.setAttribute('disabled', true);
    });
};

form.addEventListener('submit', onSubmit);

checkFormValidity();
