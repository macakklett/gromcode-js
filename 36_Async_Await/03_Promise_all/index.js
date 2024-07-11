const baseURL = 'https://api.github.com/users';

export const getUsersBlogs = async users => {
  try {
    const result = await Promise.all(
      users.map(async user => {
        const response = await fetch(`${baseURL}/${user}`);
        if (!response.ok) {
          throw new Error('Failed to load data');
        }
        const data = await response.json();
        return data.blog;
      }),
    );
    return result;
  } catch (error) {
    throw new Error('Failed to load data');
  }
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs'])
  .then(linksList => console.log(linksList)) // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
  .catch(error => console.error(error.message));

getUsersBlogs(['microsoft'])
  .then(linksList => console.log(linksList)) // ==> ["https://opensource.microsoft.com"]
  .catch(error => console.error(error.message));
