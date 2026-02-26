"use strict";
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const display = document.getElementById("display");
let time = 0;
let intervalId = null;
const fStart = () => {
    if (intervalId !== null)
        return;
    intervalId = window.setInterval(() => {
        time++;
        display.textContent = time.toString();
    }, 1000);
};
const fPause = () => {
    if (intervalId === null)
        return;
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
//# sourceMappingURL=index.js.map