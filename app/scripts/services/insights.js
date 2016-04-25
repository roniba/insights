'use strict';

angular.module('insightsApp').service('insights', function (trafficInsights) {

  this.INSIGHT_SOURCE = {
    TRAFFIC: 'traffic', // UoU traffic
    STORE: 'store', // store inventory
    CONTENT: 'content', // site content, site history
    TOP_USERS_COMPARISON: 'topUserComparison', //comparison to top users in terms of traffic
    SITE_METADATA: 'siteMetaData', // domain name
    CALENDAR: 'calendar', // insights based on calendar events, e.g. valentines
    FEATURE_USE: 'featureUse' // which feature did the user use
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