'use strict';

angular.module('insightsApp').service('insights', function (trafficInsights) {

  this.INSIGHT_SOURCE = {
    TRAFFIC: 'traffic',
    STORE: 'store',
    CONTENT: 'content',
    TOP_USERS_COMPARISON: 'topUserComparison',
    SITE_METADATA: 'siteMetaData'
  };

  this.getInsights = function (sourceType) {
    switch (sourceType) {
      case this.INSIGHT_SOURCE.TRAFFIC:
        return trafficInsights.getInsights();
      case this.INSIGHT_SOURCE.STORE:
        return this.getStoreInsights();
      case this.INSIGHT_SOURCE.CONTENT:
        return this.getContentInsights();
      case this.INSIGHT_SOURCE.TOP_USERS_COMPARISON:
        return this.getTopUsersComparison();
    }
  };

  this.getStoreInsights = function () {
    return [];
  };

  this.getContentInsights = function () {
    return [];
  };

  this.getTopUsersComparison = function () {
    return [];
  };


});