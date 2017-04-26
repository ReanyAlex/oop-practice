//The Clock class is written in functional style. Rewrite it using prototypes.

/*rewrite this
function Clock({ template }) {

  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) min = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}

let clock = new Clock({template: 'h:m:s'});
   clock.start();
   */

function Clock({ template }) {
  this.template = template;
}

Clock.prototype.render = function(){
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  let mins = date.getMinutes();
  if (mins < 10) min = '0' + mins;

  let secs = date.getSeconds();
  if (secs < 10) secs = '0' + secs;

  let output = this.template
    .replace('h', hours)
    .replace('m', mins)
    .replace('s', secs);

  console.log(output);
}

Clock.prototype.stop = function() {
  clearInterval(this.timer);
};

Clock.prototype.start = function() {
  this._render();
  this.timer = setInterval(() =>this._render(), 1000);
};



let clock = new Clock({template: 'h:m:s'});
  clock.start();
