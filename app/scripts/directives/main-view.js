'use strict';

angular.module('insightsApp')
  .directive('mainView', function () {
    return {
      restrict:    'E',
      templateUrl: 'views/main-view.html',
      scope:       {
        label:   '@',
        onClick: '&'
      }
    };
  });
