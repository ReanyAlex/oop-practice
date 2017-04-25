// There’s a ladder object that allows to go up and down
/*
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;

  },
  showStep: function() { // shows the current step
    alert( this.step );
    return this;

  }
};

we need to make several calls in sequence, can do it like this:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
*/

//rewrite the code to make it chainable
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  // shows the current step
  showStep: function() {
    alert( this.step );
    return this;
  }
};
ladder.up().up().down().showStep(); // 1
