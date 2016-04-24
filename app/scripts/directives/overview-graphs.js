'use strict';

angular.module('insightsApp')
  .directive('overviewGraphs', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/overview-graphs.html',
      scope: {},
      controllerAs: '$ctrl',
      controller: function () {
        this.ordersGraph = {};
        this.ordersGraph.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.ordersGraph.series = ['Series A', 'Series B'];
        this.ordersGraph.data = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];
        this.ordersGraph.onClick = function (points, evt) {
          console.log(points, evt);
        };

        this.revenueGraph = {};
        this.revenueGraph.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.revenueGraph.series = ['Series C', 'Series D'];
        this.revenueGraph.data = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];
        this.revenueGraph.onClick = function (points, evt) {
          console.log(points, evt);
        };
      }
    }
  });
