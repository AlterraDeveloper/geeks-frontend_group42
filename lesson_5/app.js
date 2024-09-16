let counterValue = document.querySelector("#counter");

let minusButton = document.querySelector(".buttons #decrease");
let resetButton = document.querySelector(".buttons #reset");
let plusButton = document.querySelector("#increase");

function increaseCounter() {
  let currentValue = Number(counterValue.innerText);
  counterValue.innerText = currentValue + 1;
  setCounterColor();
}

let resetCounter = function () {
  counterValue.innerText = 0;
  setCounterColor();
};

// plusButton.addEventListener("click", increaseCounter);
resetButton.addEventListener("click", resetCounter);

minusButton.onclick = function () {
  let currentValue = Number(counterValue.innerText);
  counterValue.innerText = currentValue - 1;
  setCounterColor();
};

function setCounterColor() {
  let value = Number(counterValue.innerText);
  let className;
  if (value > 0) {
    className = "positive";
    // counterValue.style.color = "green";
  } else if (value < 0) {
    className = "negative";
    // counterValue.style.color = "red";
  } else {
    className = "zero";
    // counterValue.style.color = "cyan";
  }
  counterValue.className = "counter " + className;
}
