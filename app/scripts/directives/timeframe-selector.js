angular.module('insightsApp').directive('timeframeSelector', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/timeframe-selector.html',
    scope: {

    },
    controllerAs: '$ctrl',
    controller: function() {
      this.lastWeekButtonLabel = 'Last Week';
      this.lastMonthButtonLabel = 'Last Month';
      this.lastYearButtonLabel = 'Last Year';
      this.lastWeekButtonClick = function() {
        alert('lastWeekButtonClick');
      }
      this.lastMonthButtonClick = function() {
        alert('lastMonthButtonClick');
      }
      this.lastYearButtonClick = function() {
        alert('lastYearButtonClick');
      }
    }
  }
});