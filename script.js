const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const display = document.getElementById("display");
const equation = document.getElementById("equation");
const numBtn  = document.getElementsByClassName("num-btn");

const add = function (a, b) {
  let total = a + b;
  return total;
};

const subtract = function (a, b) {
  let total = a - b;
  return total;
};

const divide = function (a, b) {
  let total = a / b;
  return total;
};

const multiply = function (a, b) {
  let total = a * b;
  return total;
};

function operate(a, b) {
  addButton.click(add(a, b));
  subtractButton.click(subtract(a, b));
  multiplyButton.click(multiply(a, b));
  divideButton.click(divide(a, b));
}


  buttons.addEventListener("click", showDisplay(this))

  function showDisplay() {
    display.innerText += this.innerText;
  }