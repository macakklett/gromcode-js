export const asyncCalculator = numbr => {
  const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Initial value ${numbr}`);
      resolve(numbr);
    }, 2500);
  })
    .then(
      numbr =>
        new Promise(resolve => {
          const squaredValue = numbr * numbr;
          setTimeout(() => {
            console.log(`Squared value: ${squaredValue}`);
            resolve(squaredValue);
          }, 2500);
        }),
    )
    .then(squaredValue => console.log(`Doubled value: ${squaredValue * 2}`));

  return pr;
};

asyncCalculator(5);
