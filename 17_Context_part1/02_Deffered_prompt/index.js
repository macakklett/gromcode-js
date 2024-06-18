const callbackPrompt = {
  message: 'Please enter your phone number',

  showPrompt() {
    const result = prompt(this.message);
    console.log(result);
  },

  showDeferredPrompt(ms) {
    // setTimeout(this.showPrompt.bind(this), ms);
    setTimeout(() => {
      // console.log(this);
      this.showPrompt();
    }, ms);
  },
};

callbackPrompt.showDeferredPrompt(2000);
