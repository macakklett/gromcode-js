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

const onClickHandler = () => {
  const searchUserName = nameInput.value;
  clearReposList();
  showSpinner();
  fetchUserData(searchUserName)
    .then(response => {
      renderUserData(response);
      return response.repos_url;
    })
    .then(url => fetchUserRepos(url))
    .then(data => renderRepos(data))
    .catch(err => alert(err.message))
    .finally(closeSpinner);
};

showButton.addEventListener('click', onClickHandler);
