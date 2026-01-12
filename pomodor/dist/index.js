"use strict";
// Taking the button value
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
// haaaa fuck i don't know what to do .
function timer() {
    let count = 0;
    for (let i = 0; i <= 10; i++) {
        let timeC = count++;
        console.log(timeC);
        if (timeC == 10) {
            break;
        }
    }
}
timer();
//# sourceMappingURL=index.js.map