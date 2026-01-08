const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const heading = document.querySelector("h1");

if (heading) {
  // Store the original text as a data attribute
  heading.dataset.value = heading.innerText;
  
  heading.onmouseover = event => {
    let iteration = 0;
    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 24)];
        })
        .join("");
      
      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }
      iteration += 1/3;
    }, 30);
  };
}