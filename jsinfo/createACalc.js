// Create an object calculator with three methods: read , sum, mul

let calculator = {
   read() {
  // get values
      this.value1 = parseFloat(prompt('what is the first value'));
      this.value2 = parseFloat(prompt('what is the second value'));
  },

  sum() {
    return this.value1 + this.value2;
  },

  mul() {
    return this.value1 * this.value2;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
