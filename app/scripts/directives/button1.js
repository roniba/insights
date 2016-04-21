'use strict';

angular.module('insightsApp')
  .directive('button1', function () {
    return {
      restrict:    'E',
      templateUrl: 'views/button1.html',
      scope:       {
        label:   '@',
        onClick: '&'
      }
    };
  });
