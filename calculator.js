let constOne;
let constTwo;
//add
const buttonOne = document.getElementById("add");
console.log(buttonOne);

const addNumber = function () {
  let x = constOne;
  let y = constTwo;
  let sum = x + y;
  console.log(sum);
};
buttonOne.addEventListener("click", addNumber);
//subtract
const buttonTwo = document.getElementById("subtract");
console.log(buttonTwo);
const subtract = function () {
    let x = constOne;
    let y = constTwo;
  let sumTwo = x - y;
  console.log(sumTwo);
};
buttonTwo.addEventListener("click", subtract);

//multiply
const buttonThree = document.getElementById("multiply");
console.log(buttonThree);
const multiply = function () {
    let x = constOne;
    let y = constTwo;
  let product = x * y;
  console.log(product);
};
buttonThree.addEventListener("click", multiply);

//divide
const buttonFour = document.getElementById("divide");
console.log(buttonFour);
const divide = function () {
    let x = constOne;
    let y = constTwo;
  let quotient = x / y;
  console.log(quotient);
};
buttonFour.addEventListener("click", divide);