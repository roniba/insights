'use strict';

angular.module('insightsApp')
  .directive('visitorsCharts', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/visitors-charts.html'
    }
  });
