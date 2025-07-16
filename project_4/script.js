const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

let intervalId = null;

const sayHi = function () {
  if (intervalId === null) {
    // prevent multiple intervals
    intervalId = setInterval(() => {
      console.log("Hi", Date.now());
    }, 1000);
  }
};

const stopHi = function () {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

startButton.addEventListener("click", sayHi, false);
stopButton.addEventListener("click", stopHi, false);
