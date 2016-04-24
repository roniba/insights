angular.module('insightsApp').directive('chartWithTimeSelection', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/chart-with-time-selection.html',
    scope: {},
    controllerAs: '$ctrl',
    controller: function() {

      this.changeChartView = function(timeframe) {
        console.log('changeChartView: ' + timeframe);
        this.chart.labels = allData[timeframe].labels;
        this.chart.data = [allData[timeframe].data];
      };


      var allData = {
        week: {
          data: [3, 2, 0, 0, 0, 4, 0],
          labels: ['Jan 1st', 'Jan 2nd', 'Jan 3rd', 'Jan 4th', 'Jan 5th', 'Jan 6th', 'Jan 7th']
        },
        month: {
          data: [10, 3, 7, 15, 14, 30, 24, 26, 33, 44, 25, 11],
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        year: {
          data: [89, 59, 115, 23],
          labels: ['2013', '2014', '2015', '2016']
        }
      };

      this.chart = {};
      this.chart.series = ['Series A'];
      this.changeChartView('year');

      this.chart.onClick = function (points, evt) {
        console.log(points, evt);
      };

    }
  }
});