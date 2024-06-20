const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,

  startTimer() {
    if (this.timerId !== null) return;
    this.timerId = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
    }, 1000);
  },

  stopTimer() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  },

  getTime() {
    return `${this.minsPassed}:${this.secondsPassed > 9 ? this.secondsPassed : '0' + this.secondsPassed}`;
  },

  resetTimer() {
    this.stopTimer();
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// timer.startTimer();
// setInterval(() => console.log(timer.getTime()), 1000);
// setTimeout(() => timer.stopTimer(), 21000);
// setTimeout(() => timer.resetTime(), 22000);
// setTimeout(() => timer.getTime(), 23000);
