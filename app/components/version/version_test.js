'use strict';

describe('showapp.version module', function() {
  beforeEach(module('showapp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
