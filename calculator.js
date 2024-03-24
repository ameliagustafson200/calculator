let constOne;
let constTwo;
let operator;
//operate

function operate() {}
//add

const addNumber = function () {
  let x = constOne;
  let y = constTwo;
  let sum = x + y;
  console.log(sum);
};
const addButton = document
  .getElementById("add")
  .addEventListener("click", addNumber);

//subtract

const subtractNumber = function () {
  let x = constOne;
  let y = constTwo;
  let sumTwo = x - y;
  console.log(sumTwo);
};
const subtractButton = document
  .getElementById("subtract")
  .addEventListener("click", subtractNumber);

//multiply

const multiply = function () {
  let x = constOne;
  let y = constTwo;
  let product = x * y;
  console.log(product);
};
const multiplyButton = document
  .getElementById("multiply")
  .addEventListener("click", multiply);

//divide

const divide = function () {
  let x = constOne;
  let y = constTwo;
  let quotient = x / y;
  console.log(quotient);
};
const divideButton = document
  .getElementById("divide")
  .addEventListener("click", divide);
