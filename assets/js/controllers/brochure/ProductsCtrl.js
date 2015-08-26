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
        '$scope', '$rootScope', '$state', '$timeout', 'uiMe', 'uiList', 'uiErrorBus', 'uiProducts', 'productControlsFactory',
function($scope, $rootScope, $state, $timeout, uiMe , uiList, uiErrorBus, uiProducts, productControlsFactory) {
  
  $scope.productControlsFactory = productControlsFactory;
window.productControlsFactory = $scope.productControlsFactory;

  $scope.fragrances = [];
  // use google to find out how to check and see if a string already exists on an array
  $scope.showThisFragrance = "";
  $scope.charities = [];
  $scope.additives = ["additives string"];

  $scope.uiProducts = uiProducts;

  uiProducts.fetch()
  .then(function gotProducts(){

  for (var x=0; x<uiProducts.length; x++) {
    if(uiProducts[x].fragrance[0]) {
      $scope.fragrances.push(uiProducts[x].fragrance[0]);
    }
  };

  for (var x=0; x<uiProducts.length; x++) {
    console.log(uiProducts[x].charity);
    if(uiProducts[x].charity) {
      if($scope.charities.indexOf(uiProducts[x].charity) === -1) {
        $scope.charities.push(uiProducts[x].charity);
      }
    }
  };

    // do something

  }).catch(function errorOccured(err){

    // do something

  })
  .finally(function eitherWay(){
    // do something
  });

  $scope.filterBy= function (oneObject) {
    console.log(oneObject);
    return
  };
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  // DOM Events
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

  $scope.intent = angular.extend($scope.intent||{}, {



  });
//other//

  console.log(uiProducts);

}]);
