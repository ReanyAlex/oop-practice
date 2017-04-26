function Bike() {

  this.rings = [3, 7]
  this.brakes = {
    back : true,
    front : true
  },
  this.tires = [new Tire, new Tire],
  this.frame = new Frame,

  this._isMoving = false
}

function Frame() {
  // your code here
}

function Tire() {
    this._isFlat = false
}




Tire.prototype.isFlat = function () {
  return this._isFlat
}

Tire.prototype.puncture = function () {
  this._isFlat = true
}


Tire.prototype.repair = function () {
  this._isFlat = false;
}

Bike.prototype.isMoving = function () {
  return this._isMoving
}

Bike.prototype.pedal = function () {
  if (this.tires[0]._isFlat === true) {
      throw "Can't pedal with a flat tire"
  }else {
    this._isMoving = true
  }
}

Bike.prototype.brake = function () {
  this._isMoving = false
}

Bike.prototype.gearSpeeds = function () {
  return  this.rings[0] * this.rings[1]
}



const myTire = new Tire()
const myBike = new Bike()

module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
