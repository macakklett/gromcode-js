const spinner = document.querySelector('.spinner');

export const showSpinner = () => {
  spinner.classList.remove('spinner_hidden');
};

export const closeSpinner = () => {
  spinner.classList.add('spinner_hidden');
};
