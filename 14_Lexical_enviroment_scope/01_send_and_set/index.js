let message = 'Just learn it';
const sendMessage = name => {
  console.log(`${name}, ${message}! Your Gromcode`);
};

const setMessage = text => {
  message = text;
};

sendMessage('Ann');
setMessage('Good job');
sendMessage('Ann');
