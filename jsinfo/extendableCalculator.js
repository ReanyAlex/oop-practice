//Create a calculator that can take a string and return the value
function Calculator() {

//holds new method funtions
  let methods = {
    '+' : function(value1, value2){
      return parseFloat(value1) + parseFloat(value2);
    },
    //arrow function
    '-' : (value1, value2) => parseFloat(value1) - parseFloat(value2),
  };

  this.calculate = function (str) {

    let strSplit = str.split(' ');
    var value1 = strSplit[0];
    var value2 = strSplit[2];
    var operator = strSplit[1];

//return the value of the string to be operated on
    return methods[operator](value1, value2);
  };

  this.addOperator =function (name, func){
  methods[name] = func;
};
}

let calc = new Calculator;

alert( calc.calculate('3 + 7') ); // 10

let newCalc = new Calculator;

newCalc.addOperator('*', (a, b) => a * b);
newCalc.addOperator('/', (a, b) => a / b);
newCalc.addOperator('**', (a, b) => a ** b)
newCalc.addOperator('pie', (a,b) => 'I have ' + a + ' pies cut into ' + b + ' slices each');
alert(newCalc.calculate('2 * 3'));  //6
alert(newCalc.calculate('2 ** 3')); //8
alert(newCalc.calculate('6 / 2')); //3
alert(newCalc.calculate('7 pie 4'));
