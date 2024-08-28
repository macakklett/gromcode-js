function throttle(func, wait) {
  let isProcessing = false;

  return function (...args) {
    if (!isProcessing) {
      isProcessing = true;

      if (wait === 0) {
        isProcessing = false;
      } else {
        setTimeout(() => {
          isProcessing = false;
        }, wait);
      }

      return func.apply(this, args);
    }
  };
}

// examples
const log = throttle(() => console.log('Hello!'), 1000);
log();
log();
log(); // Only one 'Hello!' will be logged, because of 1 second limit
