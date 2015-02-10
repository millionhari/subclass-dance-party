var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.left = left;
  this.top = top;
  this.step();
  this.setPosition(top, left);
  this.timeout;
};

Dancer.prototype.step = function(){
  this.timeout = setTimeout(this.step.bind(this), this._timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){
  clearTimeout(this.timeout);
  this.setPosition(150);
};

Dancer.prototype.collision = function(c1,c2){
  var dx = c1.x - c2.x;
  var dy = c1.y - c2.y;
  var dist = c1.radius + c2.radius;

  return (dx * dx + dy * dy <= dist * dist);
};

