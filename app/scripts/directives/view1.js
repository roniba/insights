'use strict';

angular.module('insightsApp')
  .directive('view1', function () {
    return {
      restrict:    'E',
      templateUrl: 'views/view1.html',
      scope:       {
        label:   '@',
        onClick: '&'
      }
    };
  });
