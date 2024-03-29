//button 1
const changeValue1 = function changeValueOne() {
  let result = document.getElementById("result");
  result.textContent += 1;
};

const button1 = document
  .getElementById("button1")
  .addEventListener("click", changeValue1);
//button 2
const changeValue2 = function changeValueTwo() {
  let result = document.getElementById("result");
  result.textContent += 2;
};
const button2 = document
  .getElementById("button2")
  .addEventListener("click", changeValue2);
//button 3
const changeValue3 = function changeValueThree() {
  let result = document.getElementById("result");
  result.textContent += 3;
};
const button3 = document
  .getElementById("button3")
  .addEventListener("click", changeValue3);
// button 4
const changeValue4 = function changeValueFour() {
  let result = document.getElementById("result");
  result.textContent += 4;
};
const button4 = document
  .getElementById("button4")
  .addEventListener("click", changeValue4);
//5
const changeValue5 = function changeValueFive() {
  let result = document.getElementById("result");
  result.textContent += 5;
};
const button5 = document
  .getElementById("button5")
  .addEventListener("click", changeValue5);
//6
const changeValue6 = function changeValueSix() {
  let result = document.getElementById("result");
  result.textContent += 6;
};
const button6 = document
  .getElementById("button6")
  .addEventListener("click", changeValue6);
//7
const changeValue7 = function changeValueSeven() {
  let result = document.getElementById("result");
  result.textContent += 7;
};
const button7 = document
  .getElementById("button7")
  .addEventListener("click", changeValue7);
//button 8
const changeValue8 = function changeValueEight() {
  let result = document.getElementById("result");
  result.textContent += 8;
};
const button8 = document
  .getElementById("button8")
  .addEventListener("click", changeValue8);
//9
const changeValue9 = function changeValueNine() {
  let result = document.getElementById("result");
  result.textContent += 9;
};
const button9 = document
  .getElementById("button9")
  .addEventListener("click", changeValue9);
//button equal
let calculate = function calculate() {
  var p = (document.getElementById("result").textContent);
  console.log(p);
  var q = eval(p);
  document.getElementById("result").textContent = q;
  
}

const buttonEqual = document
  .getElementById("equal-button")
  .addEventListener("click", calculate);
//button plus
const changeValueAdd = function changeValueAdd() {
  let result = document.getElementById("result");
  result.textContent += "+";
};
const buttonAdd = document
  .getElementById("add")
  .addEventListener("click", changeValueAdd);
//button subtract
const changeValueSubtract = function changeValueSubtract() {
  let result = document.getElementById("result");
  result.textContent += "-";
};
const buttonSubtract = document
  .getElementById("subtract")
  .addEventListener("click", changeValueSubtract);
//button multiply
const changeValueMultiply = function changeValueMultiply() {
  let result = document.getElementById("result");
  result.textContent += "*";
};
const buttonMultiply = document
  .getElementById("multiply")
  .addEventListener("click", changeValueMultiply);
//button divide
const changeValueDivide = function changeValueDivide() {
  let result = document.getElementById("result");
  result.textContent += "/";
};
const buttonDivide = document
  .getElementById("divide")
  .addEventListener("click", changeValueDivide);
//button clear
const changeValueClear = function changeValueClear() {
  let result = document.getElementById("result");
  result.textContent = " ";
};
const buttonClear = document
  .getElementById("clear")
  .addEventListener("click", changeValueClear);
//add
/*
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
*/
