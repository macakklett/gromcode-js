import { renderUserData } from './renderData.js';
import { renderRepos, clearReposList } from './renderRepos.js';
import { fetchUserData, fetchUserRepos } from './gateways.js';
import { showSpinner, closeSpinner } from './spinner.js';

const nameInput = document.querySelector('.name-form__input');
const showButton = document.querySelector('.name-form__btn');

const defaultUserData = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUserData);

const onClickHandler = async () => {
  const searchUserName = nameInput.value;
  clearReposList();
  showSpinner();

  try {
    const userData = await fetchUserData(searchUserName);
    renderUserData(userData);
    const userRepos = await fetchUserRepos(userData.repos_url);
    renderRepos(userRepos);
  } catch (err) {
    alert(err.message);
  } finally {
    closeSpinner();
  }
};

showButton.addEventListener('click', onClickHandler);
