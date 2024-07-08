const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = url =>
  new Promise(resolve => {
    const delay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, delay);
  });

export const getUserASAP = userId => {
  const usersUrls = servers.map(server => `${server}/${userId}`);
  const requests = usersUrls.map(url => request(url));

  return Promise.race(requests);
};

getUserASAP('user-id-2').then(data => console.log(data));
