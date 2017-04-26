/*We have two hamsters: speedy and lazy inheriting from the general hamster object.
When we feed one of them, the other one is also full. Why? How to fix it?
*/

 let hamster = {
  stomach: [],

  eat(food) {
    //this adds apple to the hamster constructor function
    //this.stomach.push(food)

    //This adds apple to the stomach of the hamster object that called the method
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple
