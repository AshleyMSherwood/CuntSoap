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

  $scope.fragrances = [];
  // use google to find out how to check and see if a string already exists on an array
  $scope.showThisFragrance = "";
  $scope.charities = ["charity string"];
  $scope.additives = ["additives string"];

  $scope.uiProducts = uiProducts;

  uiProducts.fetch()
  .then(function gotProducts(){

  var a=uiProducts; 
  for (var x=0; x<a.length; x++) { 
    if(a[x].fragrance[0]) {
      $scope.fragrances.push(a[x].fragrance[0]); 
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
