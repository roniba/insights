/// <reference path="../../../reference.ts" />
'use strict';

class TempApp {
  clicks: number;
  name: string;

  /* @ngInject */
  constructor(private $scope: ng.IScope) {

    this.clicks = 0;
  }

  onClick() {
    this.clicks++;
  }
}

angular
  .module('tempAppInternal')
  .component('tempApp', {

    templateUrl: 'views/temp-app.html',
    controller: TempApp,
    bindings: {
      name: '='
    }
  });
