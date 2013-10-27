'use strict';

describe('Hyperaudio.core', function(){
  var instance;

  beforeEach(function(){
    instance = new hyperaudio();
  });

  it('should contain core events', function(){
    expect(hyperaudio.event).to.have.keys('ready', 'load', 'save', 'error');
  });
});
