define(['chai', '../src/person'], function(chai, Person) {
  var expect = chai.expect;

  describe('Person', function() {
    it('exists', function() {
      expect(Person).to.be.a('function');
    });

    describe('firstName', function() {
      it('has a "firstName" property', function() {
        var andrew = new Person('Andrew', 'Noyes');
        expect(andrew)
          .to.have.property('firstName')
          .that.equals('Andrew');
      });
    });

    describe('lastName', function() {
      it('has a "lastName" property', function() {
        var andrew = new Person('Andrew', 'Noyes');
        expect(andrew)
          .to.have.property('lastName')
          .that.equals('Noyes');
      });
    });

    describe('fullName', function() {
      it('has a "fullName" property', function() {
        var andrew = new Person('Andrew', 'Noyes');
        expect(andrew)
          .to.have.property('fullName')
          .that.equals('Andrew Noyes');
      });
    });
  });
});
