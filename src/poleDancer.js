var PoleDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node = $('<span class="poleDancer"></span>');
  this.setPosition(top, left);
};
PoleDancer.prototype = Object.create(Dancer.prototype);
PoleDancer.prototype.constructor = PoleDancer;
