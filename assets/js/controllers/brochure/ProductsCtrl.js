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

// $scope.hover= false;
// $scope.showdescription= false;
// $scope.showcharity= false;

//   $scope.showDetails = function(){
//     $scope.hover= true;
//     $scope.showdescription= true;
//     $scope.showcharity= true;
//   }

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
//other//

  console.log(uiProducts);

}]);
