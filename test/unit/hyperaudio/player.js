'use strict';

describe('Hyperaudio Player', function(){
  var player, sandbox, fixtures;
  var DEBUG = false;

  beforeEach(function(){
    sandbox = sinon.sandbox.create();

    fixtures = window.__html__['test/fixutres/player.html'];
  });

  afterEach(function(){
    sandbox.restore();
  });

  describe('new instance', function(){
    var createSpy;

    beforeEach(function(){
      createSpy = sandbox.stub(Player.prototype, 'create');
    });

    afterEach(function(){
      sandbox.restore();
    });

    it('should initialise on valid target element', function(){
      new Player({ DEBUG: DEBUG });

      expect(createSpy.calledOnce).to.be.true;
    });

    it('should initialise on a custom DOM element', function(){
      new Player({ target: document.createElement('div'), DEBUG: DEBUG });

      expect(createSpy.calledOnce).to.be.true;

    });

    it('should not initalise on invalid/unexisting target element', function(){
      new Player({ target: '#idontexist', DEBUG: DEBUG });

      expect(createSpy.calledOnce).to.be.false;
    });
  });
});