describe("breakDancer", function() {

  var breakDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    breakDancer = new BreakDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(breakDancer.$node).to.be.an.instanceof(jQuery);
  });

  xit("should have a step function that makes its node blink", function() {
    sinon.spy(breakDancer.$node, 'toggle');
    breakDancer.step();
    expect(breakDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    xit("should call step at least once per second", function(){
      sinon.spy(breakDancer, "step");
      expect(breakDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(breakDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(breakDancer.step.callCount).to.be.equal(2);
    });
  });
});
