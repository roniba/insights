'use strict';

angular.module('insightsApp')
  .directive('topProductsCharts', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/top-products-charts.html'
    }
  });
