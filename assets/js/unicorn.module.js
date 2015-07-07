/**
 * Module dependencies
 */

/**
 * Unicorn
 *
 * @class        {angular.module}
 * @module       Unicorn
 * @type         {Function}
 * @description  An angular module for a web UI.
 */

angular.module('unicorn', [
  'ui.router',
  'ngTouch',
  'ngAnimate',
  'ngMaterial',
  'cloudsdk',
  'lodash'
]);

// Config angular material design
angular.module('unicorn').config(function($mdThemingProvider, $locationProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('pink')
    .warnPalette('red');
});