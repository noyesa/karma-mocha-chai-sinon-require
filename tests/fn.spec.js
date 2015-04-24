define(['chai', 'sinon', '../src/fn'], function(chai, sinon, fn) {
  var expect = chai.expect;

  describe('fn', function() {
    it('exists', function() {
      expect(fn).to.exist;
    });

    describe('map', function() {
      it('exists', function() {
        expect(fn)
          .to.have.property('map')
          .that.is.a('function');
      });

      describe('passing an array as the first parameter', function() {
        it('does not call the mapper function if the list is empty', function() {
          var mapper = sinon.spy();
          fn.map([], mapper);
          sinon.assert.notCalled(mapper);
        });

        it('calls the mapper function for each element in the array if non-empty', function() {
          var mapper = sinon.spy();
          fn.map([1, 2, 3], mapper);
          sinon.assert.callCount(mapper, 3);
          sinon.assert.calledWith(mapper, 1);
          sinon.assert.calledWith(mapper, 2);
          sinon.assert.calledWith(mapper, 3);
        });

        it('returns an array containing the return values of the mapper function', function() {
          var mapper,
              result;

          mapper = sinon.spy(function(x) {
            return x + 1;
          });

          result = fn.map([1, 2, 3], mapper);
          expect(result)
            .to.be.instanceof(Array)
            .that.has.length(3)
            .that.has.members([2, 3, 4]);
        });
      });
    });
  });
});