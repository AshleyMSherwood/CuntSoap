/**
 * ProductsCtrl
 *
 * @type {angular.controller}
 * @module  unicorn
 * @description  The UI controller for the Products page
 *
 *               ## Primary responsibilities:
 *               Products page data handling
 *
 */

angular.module('unicorn')
.controller('ProductsCtrl', [
        '$scope', '$rootScope', '$state', '$timeout', 'uiMe', 'uiList', 'uiErrorBus', 'uiProducts',
function($scope, $rootScope, $state, $timeout, uiMe , uiList, uiErrorBus, uiProducts) {

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  // When the application is initially rendered
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

  $scope.uiProducts = uiProducts;

  uiProducts.fetch()
  .then(function gotProducts(){

    // do something

  }).catch(function errorOccured(err){

    // do something

  })
  .finally(function eitherWay(){
    // do something
  });

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  // DOM Events
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

  $scope.intent = angular.extend($scope.intent||{}, {



  });

}]);
