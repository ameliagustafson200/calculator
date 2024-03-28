// function to clear screen ->> function clearScreen() {
  //document.getElementById("input").value = " ";
//}
//document.getElementById("clear").addEventListener("click", clearScreen());

const changeValue =function changeValueOne() {
    console.log('hello');
}

const button1 = document
  .getElementById("button1")
  .addEventListener("click", changeValue);

//add

const addNumber = function () {
  let sum = x + y;
  console.log(sum);
};
const addButton = document
  .getElementById("add")
  .addEventListener("click", addNumber);

//subtract

const subtractNumber = function () {
  let sumTwo = x - y;
  console.log(sumTwo);
};
const subtractButton = document
  .getElementById("subtract")
  .addEventListener("click", subtractNumber);

//multiply

const multiply = function () {
  let product = x * y;
  console.log(product);
};
const multiplyButton = document
  .getElementById("multiply")
  .addEventListener("click", multiply);

//divide

const divide = function () {
  let quotient = x / y;
  console.log(quotient);
};
const divideButton = document
  .getElementById("divide")
  .addEventListener("click", divide);
