let daysRef = document.querySelector("[data-value='days']");
let hoursRef = document.querySelector("[data-value='hours']");
let minsRef = document.querySelector("[data-value='mins']");
let secsRef = document.querySelector("[data-value='secs']");

function pad(value) {
  return String(value).padStart(2, "0");
}

class CountdownTimer {
  selector = document.querySelector("#timer-1");
  targetDate = new Date("Jan 1, 2021");

  start() {
    const targetDate = Date.parse(this.targetDate);

    setInterval(() => {
      const currentDate = new Date();
      const time = targetDate - currentDate;

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      secsRef.textContent = pad(secs);
      minsRef.textContent = pad(mins);
      hoursRef.textContent = pad(hours);
      daysRef.textContent = days;
      console.log(`${days} : ${pad(hours)} : ${pad(mins)} : ${pad(secs)}`);
    }, 1000);
  }
}

const timer = new CountdownTimer();

timer.start();

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */

//
