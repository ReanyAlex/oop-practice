class Frame {
// your code here
}

class Tire {

}

class Bike {
  constructor() {
    this.tires = [new Tire, new Tire];
    this.frame = new Frame;
    this.brakes = {
      back : true,
      front : true
    };
    this.rings = [3, 7]
  };
}

class MountainBike extends Bike {
  constructor() {
  super();
  this.tires[0].type = 'dirt';
  this.tires[1].type = 'dirt';
  this.frame.style = 'mountain';
  this.shocks = 20;
  }
  adjustShocks(newSagSetting){
    this.shocks = newSagSetting;
  }
}

class BMXBike extends Bike {
  constructor() {
  super();
  this.brakes.front = false;
  this.tires[0].diameter = 20;
  this.tires[1].diameter = 20;
  }
}

class RacingBike extends Bike {
  constructor() {
  super();
  this.tires[0].type = 'road';
  this.tires[1].type = 'road';
  this.frame.style = 'racing';
  //work on this below
  this.rings[0] = 3;
  this.rings[1] = 10;
  }
  gearSpeeds(){
    return this.rings[0] * this.rings[1];
  }
}



let mountainBike = new MountainBike();
let bmxBike = new BMXBike();
let racingBike = new RacingBike();
let bike = new Bike();



module.exports = {
  Bike: Bike,
  MountainBike: MountainBike,
  BMXBike: BMXBike,
  RacingBike: RacingBike
};
