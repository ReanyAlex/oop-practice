function Bike() {
  // your code here
}

function Frame() {
  // your code here
}

function Tire(isFlat) {
    isFlat : isFlat
}

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}


Tire.prototype.isFlat = function () {
  this.isFlat = false;
  return this.isFlat
}

Tire.prototype.puncture = function () {
  this.isFlat = true;
  return this
}

Tire.prototype.repair = function () {
  this.isFlat = false;
  return this
}

Bike.prototype.isMoving = function () {
  return false
}

Bike.prototype.pedal = function () {

}

Bike.prototype.brake = function () {

}

Bike.prototype.gearSpeeds = function () {

}



const myTire = new Tire
const myBike = new Bike
