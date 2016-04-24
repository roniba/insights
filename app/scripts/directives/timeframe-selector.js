angular.module('insightsApp').directive('timeframeSelector', function(){
  return {
    restrict: 'E',
    templateUrl: 'views/timeframe-selector.html',
    scope: {
      weekClicked: '&',
      monthClicked: '&',
      yearClicked: '&'
    },
    controllerAs: '$ctrl',
    controller: function() {
      this.lastWeekButtonLabel = 'Last Week';
      this.lastMonthButtonLabel = 'Last Month';
      this.lastYearButtonLabel = 'Last Year';

      this.lastYearButtonClick = function() {
        console.log('lastYearButtonClick');
      };
    }
  }
});
