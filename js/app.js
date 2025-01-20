class Calculator {
  constructor() {
    this.calculateBtn = document.getElementById("calculateBtn");
    this.calculateBtn.addEventListener("click", () => this.calculate());
  }
  calculate() {
    this.operation = document.getElementById("operation");
    const operationValue = this.operation.value;
    this.performOperation(operationValue);
  }
  performOperation(operationValue) {
    const numArray = this.getValueFromInput();
    switch (operationValue) {
      case "add":
        this.add(numArray);
        break;
      case "subtract":
        this.subtract(numArray);
        break;
      case "multiply":
        this.multiply(numArray);
        break;
      case "divide":
        this.divide(numArray);
        break;
      default:
        console.error("Unknown operation");
    }
  }
  showResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
  }
  getValueFromInput() {
    const number1 = document.getElementById("num1").value;
    const number2 = document.getElementById("num2").value;
    return [number1, number2];
  }

  add(array) {
    const result = parseInt(array[0]) + parseInt(array[1]);
    this.showResult(result);
  }
  subtract(array) {
    const result = parseInt(array[0]) - parseInt(array[1]);
    this.showResult(result);
  }
  multiply(array) {
    const result = parseInt(array[0]) * parseInt(array[1]);
    this.showResult(result);
  }
  divide(array) {
    const result = parseInt(array[0]) / parseInt(array[1]);
    this.showResult(result);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const calculator = new Calculator();
});
