define(function() {
  var map = function(list, mapper) {
    var acc = [],
        i;
        
    for (i = 0; i < list.length; ++i) {
      acc.push(mapper(list[i]));
    }

    return acc;
  };

  return {
    map: map
  };
});