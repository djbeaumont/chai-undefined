'use strict';

describe('undefined test', function() {

  context('when using dirty chai', function() {
    it('should fail an undefined expect', function() {
      expect(undefined).to.have.been.called();
    });
  });

  context('when using normal chai', function() {
    it('should fail an undefined expect', function() {
      expect(undefined).to.have.been.called;
    });
  });
});
