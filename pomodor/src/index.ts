const start = document.getElementById("start") as HTMLButtonElement;
const pause = document.getElementById("pause") as HTMLButtonElement;
const reset = document.getElementById("reset") as HTMLButtonElement;
const display = document.getElementById("display") as HTMLDivElement;

let time = 0;
let intervalId: number | null = null;

const fStart = () => {
  if (intervalId !== null) return;

  intervalId = window.setInterval(() => {
    time++;
    display.textContent = time.toString();
  }, 1000);
};

const fPause = () => {
  if (intervalId === null) return;

  clearInterval(intervalId);
  intervalId = null;
};

const fReset = () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }

  time = 0;
  display.textContent = "0";
};

function timer() {
  start.addEventListener("click", fStart);
  pause.addEventListener("click", fPause);
  reset.addEventListener("click", fReset);
}

timer();


