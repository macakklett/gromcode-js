const userAvatar = document.querySelector('.user__avatar');
const userName = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');
const nameInput = document.querySelector('.name-form__input');
const showButton = document.querySelector('.name-form__btn');

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatar.src = avatar_url;
  userName.textContent = name;
  // userLocation.textContent = location ? location : '';
};

const onClickHandler = () => {
  const searchUserName = nameInput.value;
  fetch(`https://api.github.com/users/${searchUserName}`)
    .then(response => response.json())
    .then(response => renderUserData(response));
};

showButton.addEventListener('click', onClickHandler);
