/*
Find an error in the prototypal inheritance below.
What’s wrong? What are consequences going to be?
*/

function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  alert(this.name + ' walks');
};

function Rabbit(name) {
  this.name = name;
}

//Error it will overwrite all of Rabbit's prototype to Animal's
Rabbit.prototype = Animal.prototype;

//This will overwrite the previous walk prototype and animals will now bounce and not walk
Rabbit.prototype.walk = function() {
  alert(this.name + ' bounces!');
};

let rabbit = new Rabbit;
let animal = new Animal('skunk');
