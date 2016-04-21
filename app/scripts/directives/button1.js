'use strict';

angular.module('tempApp')
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
