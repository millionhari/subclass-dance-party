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
Dancer.prototype.stop = function (){
  clearTimeout(this.timeout);
}

Dancer.prototype.collision = function(){
  return Math.sqrt(Math.pow((this.top/2), 2) + Math.pow((this.left/2), 2));
};

