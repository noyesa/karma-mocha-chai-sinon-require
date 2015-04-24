define(function() {
  var Person = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  };

  Object.defineProperties(Person.prototype, {
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.lastName;
      }
    }
  });

  return Person;
});