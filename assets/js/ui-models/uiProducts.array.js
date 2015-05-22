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

      return Cloud.getAllProducts()
      .then(function whenServerResponds(data) {
        self.replace(data);
      });

    }
  };
}]);

