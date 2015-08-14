angular.module('unicorn').uiArray('uiProducts', [

/**
 * Module Dependencies
 */

         'Cloud',
function( Cloud  ) {

  return {

    /**
     * Fetch new data from the server.
     *
     * @option {Number} belongingTo
     *                    the id of the user whose items we should fetch
     *                    e.g. 4
     *
     * @return {Promise}
     */
    fetch: function (options){
      var self = this;

      var somePromise = Cloud.getAllProducts()
      .then(function whenServerResponds(data) {
        self.replace(data);
      })
      .catch(function serverError(error) {
        console.log('There was an error:',error);
      })
      .finally(function eitherWay() {
        // Error or no error, this callback is always run.
      });

      // Return the promise
      return somePromise;

    }
  };
}]);

