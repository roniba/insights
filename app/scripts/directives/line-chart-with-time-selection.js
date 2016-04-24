angular.module('insightsApp').directive('lineChartWithTimeSelection', function(chartsData){
  return {
    restrict: 'E',
    templateUrl: 'views/line-chart-with-time-selection.html',
    scope: {
      chartName: '@',
      chartTitle: '@'
    },
    controllerAs: '$ctrl',
    controller: function($scope) {

      this.changeChartView = function(timeframe) {
        console.log('changeChartView: ' + timeframe);
        this.chart.labels = this.chart.allData[timeframe].labels;
        this.chart.data = [this.chart.allData[timeframe].data];
      };

      this.chart = {};
      this.chart.title = $scope.chartTitle;
      this.chart.allData = chartsData.getData($scope.chartName);
      this.chart.series = ['Series A'];
      this.changeChartView('year');


      this.chart.onClick = function (points, evt) {
        console.log(points, evt);
      };

    }
  }
});