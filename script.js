const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const display = document.getElementById("display");
const equation = document.getElementById("equation");
const numBtn = document.querySelectorAll(".num-btn");
const deleteBtn = document.getElementById("delete");
const clearBtn = document.getElementById("clear");
let displayValue = "0";

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
addButton.addEventListener("click", add(displayValue, b));
  subtractButton.click(subtract(a, b));
  multiplyButton.click(multiply(a, b));
  divideButton.click(divide(a, b));
}

function updateDisplay(e) {
  displayValue += e.target.innerText
  display.innerText = displayValue;
}

function clearDisplay() {
  displayValue = "";
  display.innerText="";
}

function deleteNum() {
  displayValue = displayValue.slice(0, -1);
  display.innerText = displayValue
}


numBtn.forEach(btn => btn.addEventListener("click", updateDisplay));

clearBtn.addEventListener("click", clearDisplay);

deleteBtn.addEventListener("click", deleteNum);
  

function runEvent(e) {
  e.preventDefault();
  console.log("EVENT TYPE:" + e.type);
  console.log(e.target.innerText);
}
