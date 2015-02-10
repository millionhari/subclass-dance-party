var BreakDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, 10);
  this.$node = $('<span class="breakDancer animated infinite shake"></span>');
  this.$nodeClass = $('.breakDancer');
  this.angle = 0;
  this.setPosition(top, left);
};
BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;
BreakDancer.prototype.oldStep = Dancer.prototype.step;
BreakDancer.prototype.step = function(){
  this.oldStep();
  var radius = 100;
  var x = this.left + radius * Math.cos(this.angle*Math.PI/180);
  var y = this.top + radius * Math.sin(this.angle*Math.PI/180);
  this.angle++;
  if(this.angle > 360){
    this.angle = 0;
  }
  this.setPosition(y, x);
};
