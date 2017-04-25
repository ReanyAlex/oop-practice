function Bike(name, price) {
  alert(new.target);
  this.name = name
  this.price = price
  this.rings = [3, 7]
  this.brakes = {
    back : true,
    front : true
  },
  this.tires = [new Tire, new Tire]
  this.frame = new Frame
}

function Frame(color, size, style) {
  this.color = color ? color : "black"
  this.size = size ? size : 55
  this.style = style ? style : "street"
}

function Tire(diameter, type) {
  this.diameter = diameter ? diameter : 22
  this.type = type ? type : 'street'
  this.rings = [2, 5]
}


module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}




const myFrame = new Frame()

const myBike = new Bike()

const myTire = new Tire()
