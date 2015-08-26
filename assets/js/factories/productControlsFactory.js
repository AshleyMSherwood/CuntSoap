angular.module('unicorn').factory('productControlsFactory', [
  '$rootScope',
  function ($rootScope) {

    var properties =  {
      fragranceFilter: 'All',
      charityFilter: 'All'
    };

    return properties;

}]);

// trying something...
// var properties = function() {
// 	if ()
// };