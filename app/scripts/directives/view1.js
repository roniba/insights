'use strict';

angular.module('tempApp')
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
