const formElem = document.querySelector('.login-form');
const formInputName = document.querySelector('#email');
const formInputPassword = document.querySelector('#password');
const errorTextEmail = document.querySelector('.error-text_email');
const errorTextPassword = document.querySelector('.error-text_password');

const isRequired = text => (text ? undefined : 'Required');
const isEmail = text => (text.includes('@') ? undefined : 'Should be an email');

const inputValidators = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validator = (inputName, targetValue) => {
  return inputValidators[inputName]
    .map(validator => validator(targetValue))
    .filter(errorText => errorText)
    .join(', ');
};

const onEmailChange = e => {
  const errorText = validator(e.target.name, e.target.value);
  errorTextEmail.textContent = errorText;
};

const onPasswordChange = e => {
  const errorText = validator(e.target.name, e.target.value);
  errorTextPassword.textContent = errorText;
};

const onSubmit = e => {
  e.preventDefault();

  const formFields = [...new FormData(formElem)];

  const formData = formFields.reduce((acc, [prop, value]) => ({ ...acc, [prop]: value }), {});
  alert(JSON.stringify(formData));
};

formInputName.addEventListener('input', onEmailChange);
formInputPassword.addEventListener('input', onPasswordChange);
formElem.addEventListener('submit', onSubmit);
