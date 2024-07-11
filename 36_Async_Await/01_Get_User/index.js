const baseURL = 'https://api.github.com/users';

export const fetchUser = async userId => {
  try {
    const response = await fetch(`${baseURL}/${userId}`);

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error('Failed to get user data');
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error('Failed to get user data');
  }
};

fetchUser('facebook')
  .then(data => console.log(data))
  .catch(err => alert(err.message));
