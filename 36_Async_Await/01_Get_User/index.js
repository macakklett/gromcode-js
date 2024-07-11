const baseURL = 'https://api.github.com/users';

export const fetchUser = async userId => {
  const userData = await fetch(`${baseURL}/${userId}`);
  if (userData.ok) {
    return await userData.json();
  }
  throw new Error('Failed to get user data');
};

fetchUser('facebook')
  .then(data => console.log(data))
  .catch(err => alert(err.message));
