var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="blinkyDancer"></span>');
  this.setPosition(top, left);
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.oldStep = Dancer.prototype.step;
BlinkyDancer.prototype.step = function(){
  this.oldStep();
  this.$node.toggle();
};
