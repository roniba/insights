'use strict';

angular.module('insightsApp')
  .directive('topProductsGraphs', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/top-products-graphs.html'
    }
  });
