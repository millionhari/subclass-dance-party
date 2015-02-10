var PoleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, 10);
  this.$node = $('<span class="poleDancer animated infinite swing"></span>');
  this._left = left;
  this._top = top;
  this.setPosition(top, left);
  this.up = true;
  this.inc = 0;
};
PoleDancer.prototype = Object.create(Dancer.prototype);
PoleDancer.prototype.constructor = PoleDancer;
PoleDancer.prototype.oldStep = Dancer.prototype.step;
PoleDancer.prototype.step = function(){
  this.oldStep();
  if(this.up){
    if(this.inc === 100){
      this.up = false;
    }
    this.inc++;
    this.setPosition(this._top+this.inc);
  }
  if(!this.up){
    if(this.inc === 0){
      this.up = true;
    }
    this.inc--;
    this.setPosition(this._top+this.inc);
  }
};
