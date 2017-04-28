/*Create a constructor function Calculator
that creates objects with 3 methods:
read() sum() mul() */

function Calculator() {

  this.read = function () {
    // get values
    this.value1 = parseFloat(prompt('what is the first value'));
    this.value2 = parseFloat(prompt('what is the second value'));
  };

  this.sum = function () {
    this.sumResults = this.value1 + this.value2;
    return this.sumResults;
  };

  this.mul = function () {
    this.mulResults = this.value1 * this.value2;
    return this.mulResults;
  };

}

let calculator = new Calculator();

calculator.read();

alert( 'Sum=' + calculator.sum() );
alert( 'Mul=' + calculator.mul() );
