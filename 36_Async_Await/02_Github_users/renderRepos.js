const repoList = document.querySelector('.repo-list');

export const clearReposList = () => (repoList.innerHTML = '');

export const renderRepos = repos => {
  const listElements = repos.map(({ name }) => {
    const element = document.createElement('li');
    element.classList.add('repo-list__item');
    element.textContent = name;
    return element;
  });

  clearReposList();
  repoList.append(...listElements);
};
