'use strict';

angular.module('insightsApp')
  .directive('overviewGraphs', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/overview-graphs.html'
    }
  });
