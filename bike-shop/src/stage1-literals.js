const myBike = {
  name : 'Roadster',
  price : 199.99,
  frame : {
    color : 'blue',
    height: 55,
    style : 'cruiser'
          },
  brakes : {
    back : true,
    front : false
  },
  tires : {
    diameter : 22,
    type : 'fat'
  },
  rings : [2, 5]
};

module.exports = myBike;
