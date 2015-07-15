/*List your own soap controller
 *
 * @type {angular.controller}
 * @module  unicorn
 * @description  The UI controller for the List Your Own page
 *
 *               ## Primary responsibilities:
 *               List Your Own page data handling
 *
 */

angular.module('unicorn')
.controller('ListYourOwnCtrl', [
        '$scope', '$rootScope', '$state', '$timeout', 'uiMe', 'uiList', 'uiErrorBus'/*,'ngMaterial'*/,
function($scope, $rootScope, $state, $timeout, uiMe , uiList, uiErrorBus/*, ngMaterial*/) {

//"choose up to two additives" checkboxes:
      $scope.checkboxModel = {
       value1 : false,
       value2 : false,
       value3 : false,
       value4 : false,
      };

//dropdown choose color:
  //  $scope.options = [
  //     {"val" : 1, "name" : "Blue"},
  //     {"val" : 2, "name" : "Purple"},
  //     {"val" : 3, "name" : "Pink"},
  //     {"val" : 4, "name" : "Red"}
  // ];


}]);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
  // DOM Events
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//   $scope.intent = angular.extend($scope.intent||{}, {

// // // another way of providing options for "choose up to 2 additives":
// // // angular
// // //     .module('selectDemoOptGroups', ['ngMaterial'])
// // //     .controller('ListYourOwnCtrl', function($scope) {
// // //       $scope.sizes = [
// // //           "small (12-inch)",
// // //           "medium (14-inch)",
// // //           "large (16-inch)",
// // //           "insane (42-inch)"
// // //       ];
// // //       $scope.toppings = [
// // //         { category: 'meat', name: 'Pepperoni' },
// // //         { category: 'meat', name: 'Sausage' },
// // //         { category: 'meat', name: 'Ground Beef' },
// // //         { category: 'meat', name: 'Bacon' },
// // //         { category: 'veg', name: 'Mushrooms' },
// // //         { category: 'veg', name: 'Onion' },
// // //         { category: 'veg', name: 'Green Pepper' },
// // //         { category: 'veg', name: 'Green Olives' }
// // //       ];
// // //     });  

// // // Choose a Color dropdown:
//   angular.module('menuDemoBasic', ['ngMaterial'])
//   .config(function($mdIconProvider) {
//     $mdIconProvider
//       .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
//       .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
//   })
//   .controller('BasicDemoCtrl', DemoCtrl);
//   function DemoCtrl($mdDialog) {

//       );};
//     vm.checkVoicemail = function() {
//       // This never happens.
//     };
//   };

// // Choose your charity Radio Button list:
// angular
//   .module('radioDemo1', ['ngMaterial'])
//   .controller('AppCtrl', function($scope) {
//     $scope.data = {
//       group1 : 'Banana',
//       group2 : '2',
//       group3 : 'avatar-1'
//     };
//     $scope.avatarData = [{
//         id: "avatars:svg-1",
//         title: 'avatar 1',
//         value: 'avatar-1'
//       },{
//         id: "avatars:svg-2",
//         title: 'avatar 2',
//         value: 'avatar-2'
//       },{
//         id: "avatars:svg-3",
//         title: 'avatar 3',
//         value: 'avatar-3'
//     }];
//     $scope.radioData = [
//       { label: '1', value: 1 },
//       { label: '2', value: 2 },
//       { label: '3', value: '3', isDisabled: true },
//       { label: '4', value: '4' }
//     ];
//     $scope.submit = function() {
//       alert('submit');
//     };
//     $scope.addItem = function() {
//       var r = Math.ceil(Math.random() * 1000);
//       $scope.radioData.push({ label: r, value: r });
//     };
//     $scope.removeItem = function() {
//       $scope.radioData.pop();
//     };
//   })
//   .config(function($mdIconProvider) {
//     $mdIconProvider.iconSet("avatars", 'icons/avatar-icons.svg',128);
//   });


// });
