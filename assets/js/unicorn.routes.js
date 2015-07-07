angular.module('unicorn')

// Configure UI Router
.config([
  '$stateProvider',
  '$urlRouterProvider',

  function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    /******************************
    * Configure state machine
    *******************************/

    .state('home', {
      url: '/',
      templateUrl: 'templates/brochure/home.html',
      controller: 'HomeCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/account/login.html',
      controller: 'LoginCtrl'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'templates/account/forgot.html',
      controller: 'ForgotCtrl'
    })
    .state('reset', {
      url: '/reset/:authToken',
      templateUrl: 'templates/account/reset.html',
      controller: 'ResetCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/account/signup.html',
      controller: 'SignupCtrl'
    })
      .state('listyourown', {
      url: '/listyourown',
      templateUrl: 'templates/account/listyourown.html',
      controller: 'ListYourOwnCtrl'
    })
    .state('products', {
      url: '/products',
      templateUrl: 'templates/brochure/products.html',
      controller: 'ProductsCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'templates/account/profile.html',
      controller: 'ProfileCtrl'
    });


    /******************************
    * Standard url routing
    *******************************/

    $urlRouterProvider

    .otherwise('/');
  }
]);

