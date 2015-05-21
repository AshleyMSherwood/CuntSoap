angular.module('cloudsdk', []);
angular.module('cloudsdk').factory('Cloud', [

/**
 * File Dependencies
 */

         '$http', '$timeout', '$q', 'cloudsdk_endpoints', 'cloudstrapper_endpoints',
function( $http,  $timeout, $q, cloudsdk_endpoints, cloudstrapper_endpoints) {


  // Construct fake request objects that are compatible with
  // the utilities created for real cloudSdk endpoints.
  var bootstrapRoutes = [];
  Object.keys(cloudstrapper_endpoints).forEach(function(oneRouteAndMethod){
    var fakeRequest = {
      method: oneRouteAndMethod.replace(/^\s*([^\/\s]+)\s*\/.*$/, '$1'),
      url: oneRouteAndMethod.replace(/^\s*[^\/\s]+\s*\/(.*)$/, '/$1'),
      fn: cloudstrapper_endpoints[oneRouteAndMethod]
    };
    fakeRequest.urlParams = fakeRequest.url.match(/:([^\/\s]+)/ig);
    bootstrapRoutes.push(fakeRequest);
  });

  // Enabling `withCredentials` will cause the browser to send cookies
  // $http.defaults.withCredentials = true;
  $http.defaults.useXDomain = true;

  // TODO: remove this once API login flow is set up
  $http.defaults.headers.common['x-auth'] = 'abc123';

  // Attempt to get a CSRF token right away, so that requests that might need one don't have
  // to wait for it.
  var getCSRF = $http.get('/csrfToken', { withCredentials: true })
  .then(function(res) {
    $http.defaults.headers.common['x-csrf-token'] = res.data._csrf;
  })
  .catch(function(res) {
    return res;
  });

  /**
   * Cloud
   *
   * @class        {angular.factory}
   * @module       cloudsdk
   * @type         {Object}
   * @description  Collection of methods for storing, retrieving, modifying
   *               and deleting data, amongst pretty  much whatever else you
   *               can imagine.
   */

  var api = {};

  Object.keys(cloudsdk_endpoints).forEach(function(methodName) {
    var appLevelSdkEndpointDef = cloudsdk_endpoints[methodName];
    api[methodName] = function( /* ... */ ) {

      var requestObj;
      var runtimeArgs = Array.prototype.slice.apply(arguments);

      //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
      // There are 3 ways to define an SDK wrapper for a cloud endpoint.
      //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


      // e.g. function (/* runtime arguments */){
      //   return {
      //     method: 'post',
      //     url: '/foo/bar',
      //     params: {
      //       whatever: 'you want' + ' in here'
      //     }
      //   }
      // }
      if (typeof appLevelSdkEndpointDef === 'function') {
        requestObj = appLevelSdkEndpointDef.apply(this, runtimeArgs);
      }

      // e.g. {
      //   method: 'post',
      //   url: '/foo/bar'
      // }
      else if (typeof appLevelSdkEndpointDef === 'object') {
        requestObj = angular.extend(appLevelSdkEndpointDef, {
          params: runtimeArgs[0]
        });
      }

      // e.g. "POST /api/v1/users/:id/friends/:friendId"
      else if (typeof appLevelSdkEndpointDef === 'string') {
        requestObj = {
          method: appLevelSdkEndpointDef.replace(/^\s*([^\/\s]+)\s*\/.*$/, '$1'),
          url: appLevelSdkEndpointDef.replace(/^\s*[^\/\s]+\s*\/(.*)$/, '/$1'),
          params: runtimeArgs[0]
        };
      }

      // Check and see if a bootstrapped method is being called.
      // If so, return a promise which resolves after a random timeout
      // and calls the provided utility method.
      var isBootstrapped;
      bootstrapRoutes.forEach(function(oneBoostrapRouteObject){
        if (oneBoostrapRouteObject.method == requestObj.method && oneBoostrapRouteObject.url == requestObj.url){
          isBootstrapped = oneBoostrapRouteObject;
        }
      });

      if (isBootstrapped){
        return buildBootstrappedPromise(requestObj,isBootstrapped);
      } else {
        return buildCloudRequestPromise(requestObj);
      }

    };
  }, api);

  return api;

  // Fake http call for bootstrapped cloud methods.
  function buildBootstrappedPromise(request,bootstrappedRequest){
    var routeParameters = getRouteParameters({
      urlTemplate: request.url,
      params: request.params
    });

    // Then delete them from the `params` object
    Object.keys(routeParameters).forEach(function (paramName){
      delete request.params[paramName];
    });

    var deferred = $q.defer();

    var howLong = Math.floor(Math.random()*2500+1200);

    window.setTimeout(function(){
      // console.log('calling:',bootstrappedRequest.fn,'with params:',routeParameters);
      deferred.resolve(bootstrappedRequest.fn.apply(this,[routeParameters]));

    },howLong);

    return deferred.promise;
  }

  function buildCloudRequestPromise(request) {

    //??
    // if (request.url.substr(0,4) != 'http') {
    //   request.url = request.url;
    // }


    // Find keys in `params` which are route parameters
    // (e.g. referenced by the endpoint URL)
    var routeParameters = getRouteParameters({
      urlTemplate: request.url,
      params: request.params
    });

    // Then delete them from the `params` object
    Object.keys(routeParameters).forEach(function (paramName){
      delete request.params[paramName];
    });

    // Now stick the route parameters into the destination url
    request.url = templateRouteParameters({
      urlTemplate: request.url,
      routeParams: routeParameters
    });

    // Determine appropriate base url from global CONSTANTS obj
    // (if relevant) then prepend it to `request.url`
    var CONSTANTS = window.CONSTANTS || {};
    var baseurl = (CONSTANTS||{}).apiUrl || (location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: ''));
    request.url = baseurl + request.url;

    // Default to GET method
    request.method = (request.method || 'get').toLowerCase();

    // If this is not a GET request, use `data` instead of `params`
    if (request.method !== 'get') {
      request.data = request.params;
      delete request.params;
    }

    // Create a new deferred object
    var deferred = $q.defer();

    // If this is a get request, just set up the promise
    if (request.method == 'get') {
      setupPromise();
    }

    // Otherwise make sure that we have the CSRF token first
    else {
      getCSRF.then(setupPromise);
    }

    // Return the promise
    return deferred.promise;

    // Set up the promise which wraps an HTTP request
    function setupPromise() {
      // Create the HTTP request
      var _promise = $http(request);

      // Forward $http success / error to standard then() / catch()
      // q promise methods.
      _promise.success(function(data, status, headers, config) {
        deferred.resolve(data, status, headers, config);
      });
      _promise.error(function(data, status, headers, config) {
        deferred.reject(anAPIError(data, status, headers, config));
      });
    }
  }

  /**
   * Build an API error object.
   *
   * @param  {HTTP} res
   * @return {Error}
   * @private
   */

  function anAPIError(data, status, headers, config) {
    var err = new Error();
    err.name = 'APIError';
    err.code = 'E_API';
    err.status = status;
    err.headers = headers;
    err.message = 'Error communicating with API backend @ "'+(config && config.url)+'" :: ';
    err.message += status ;
    try {
      err.message += ' ('+data+') ';
    }
    catch (stringifyErr) { }
    err.data = data;
    return err;
  }


  /**
   * templateRouteParameters()
   *
   * @required {String} urlTemplate
   *                     e.g. '/api/v1/users/:id/friends/:friendId'
   *
   * @required {Object} routeParams
   *                     e.g. {id: 3, key: 'foo'}
   *
   * @return {String}
   *                     e.g. '/api/v1/users/3/friends/jimmy'
   */
  function templateRouteParameters (inputs) {
    var result = inputs.urlTemplate.replace(/(\:[^\/\:\.]+)/g, function ($all, $1){
      var routeParamName = $1.replace(/^\:/, '');
      return inputs.routeParams[routeParamName];
    });
    return result;
  }

  function getRouteParameters (inputs) {
    var routeParams = {};
    inputs.urlTemplate.replace(/(\:[^\/\:\.]+)/g, function ($all, $1){
      var routeParamName = $1.replace(/^\:/, '');
      routeParams[routeParamName] = inputs.params[routeParamName];
    });
    return routeParams;
  }


}]);


/**
 * Define `cloudsdk_endpoints` provider, to which app-level endpoints will be attached.
 * @return {Object}
 */
angular.module('cloudsdk').provider('cloudsdk_endpoints', function() {
  var endpoints = {};
  this.$get = function() {
    return endpoints;
  };
});



// Add a convenience method for adding SDK-wrapped endpoints
angular.module('cloudsdk').endpoints = function (endpointDefs) {

  return angular.module('cloudsdk').config(['cloudsdk_endpointsProvider', function(cloudsdk_endpoints) {
    return angular.extend(cloudsdk_endpoints.$get(), endpointDefs);
  }]);
};
