'use strict';

angular.module('insightsApp')
  .directive('overviewCharts', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/overview-charts.html'
    }
  });
