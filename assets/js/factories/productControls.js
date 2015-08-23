angular.module('unicorn').factory('productControls', [
  '$rootScope',
  function ($rootScope) {

    var properties = {
      key: 'someValue'
    };

    return properties;

}]);
