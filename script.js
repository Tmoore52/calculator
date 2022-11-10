const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const display = document.getElementById("display");
const operationBtns = document.querySelectorAll(".operator");
const equation = document.getElementById("equation");
const numBtn = document.querySelectorAll(".num-btn");
const deleteBtn = document.getElementById("delete");
const clearBtn = document.getElementById("clear");
const allClearBtn = document.getElementById("all-clear");
const equalsBtn = document.getElementById("equals");

let displayValue = "";
let firstEquation = "";
let total = "";

const add = function () {
  total = +firstEquation + +displayValue;
  equation.innerText = `${firstEquation}+${displayValue}=`;
  display.innerText = total;
  displayValue = total;
};

const subtract = function (a, b) {
  total = +firstEquation - +displayValue;
  equation.innerText = `${firstEquation}-${displayValue}=`;
  display.innerText = total;
  displayValue = total;
};

const divide = function (a, b) {
  total = +firstEquation / +displayValue;
  equation.innerText = `${firstEquation}/${displayValue}=`;
  display.innerText = total;
  displayValue = total;
};

const multiply = function (a, b) {
  total = +firstEquation * +displayValue;
  equation.innerText = `${firstEquation}*${displayValue}=`;
  display.innerText = total;
  displayValue = total;
};

function operate() {
  if (equation.innerText.includes("+") === true) {
    add();
  } else if (equation.innerText.includes("-") === true) {
    subtract();
  } else if (equation.innerText.includes("*") === true) {
    multiply();
  } else if (equation.innerText.includes("/") === true) {
    divide();
  }
}

function operation(e) {
  equation.innerText = `${displayValue}${e.target.innerText}`;
  firstEquation = displayValue;
  displayValue = "";

}

function equals() {}

function updateDisplay(e) {
  displayValue += e.target.innerText;
  display.innerText = displayValue;
}

function clearDisplay() {
  displayValue = "";
  display.innerText = "";
}

function allClear() {
  displayValue = "";
  display.innerText = "";
  firstEquation = "";
  equation.innerText = "";
}

function deleteNum() {
  displayValue = displayValue.slice(0, -1);
  display.innerText = displayValue;
}

numBtn.forEach((btn) => btn.addEventListener("click", updateDisplay));

clearBtn.addEventListener("click", clearDisplay);

deleteBtn.addEventListener("click", deleteNum);

allClearBtn.addEventListener("click", allClear);

operationBtns.forEach((btn) => btn.addEventListener("click", operation));

equalsBtn.addEventListener("click", operate);

function runEvent(e) {
  e.preventDefault();
  console.log("EVENT TYPE:" + e.type);
  console.log(e.target.innerText);
}
