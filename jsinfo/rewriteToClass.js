//Rewrite the Clock class from prototypes to the modern “class” syntax.

/*rewrite this
function Clock({ template }) {
  this._template = template;
}

Clock.prototype._render = function() {
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
};

Clock.prototype.stop = function() {
  clearInterval(this._timer);
};

Clock.prototype.start = function() {
  this._render();
  this._timer = setInterval(() => this._render(), 1000);
};

let clock = new Clock({template: 'h:m:s'});
    clock.start();
*/

class Clock {
  // ({ ... }) allows the item to be passed in as a object literal
  constructor({template}){
    //wanted to check what type of
    console.log(typeof({template}));
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
  }

//clock.start() would then restart the clock
  start() {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
  }
}

let clock = new Clock({template: 'h:m:s'});
    clock.start();
