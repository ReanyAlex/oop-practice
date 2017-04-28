class Clock {
  // ({ ... }) allows the item to be passed in as a object literal
  constructor({template}){
  this._template = template;
  }
// prototype not allowed in classes. bound to the class function
  _render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) min = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this._template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

//clock.stop() will stop the clock
  stop() {
    clearInterval(this._timer);
    console.log('clocked stopped');
  };

//clock.start() would then restart the clock
  start() {
    this._render();
    //setInterval(function, milliseconds, param1, param2, ...)
    this._timer = setInterval(() => this._render(), this._precision);

    //this._timer = setInterval(this._render, this._precision);

    var myfunc = () => this._render();
    setInterval(myfunc, 5000);

    this._timer = setInterval(function() {
      return this._render();
    }, this._precision);
  }
}

// pass inheritence from Clock to ExtendedClock
class ExtendedClock extends Clock {

  constructor(val) {
    //allows for the inheritence to be manipulated
    super(val);
    //set the variable
    let {precision=1000} = val;
    this._precision = precision;
  }
}

let clock = new ExtendedClock({
  template: 'h:m:s',
  precision: 1000
});
    clock.start();
