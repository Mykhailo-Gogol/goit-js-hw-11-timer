class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = document.querySelector(selector);
    this.targetDate = new Date(targetDate);
    this.start();
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  start() {
    const daysRef = document.querySelector("[data-value='days']");
    const hoursRef = document.querySelector("[data-value='hours']");
    const minsRef = document.querySelector("[data-value='mins']");
    const secsRef = document.querySelector("[data-value='secs']");

    const targetDate = Date.parse(this.targetDate);

    const myInterval = setInterval(() => {
      const currentDate = new Date();
      const time = targetDate - currentDate;
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      secsRef.textContent = this.pad(secs);
      minsRef.textContent = this.pad(mins);
      hoursRef.textContent = this.pad(hours);
      daysRef.textContent = days;

      if (days <= 0 && hours <= 0 && mins < 0) {
        clearInterval(myInterval);
        secsRef.textContent = "00";
        minsRef.textContent = "00";
        hoursRef.textContent = "00";
        daysRef.textContent = "0";
      }
    }, 1000);
  }
}

const timer = new CountdownTimer("#timer-1", "Jul 21, 2021");
