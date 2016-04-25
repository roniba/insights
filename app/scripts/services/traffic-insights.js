'use strict';

angular.module('insightsApp').service('trafficInsights', function (analyticsApi, insightsUtils) {

  this.INSIGHTS = {
    'PRODUCT_PAGE_NOT_VISITED': 'productPageNotVisited'
  };


  this.getInsights = function () {
    var ret = [];

    ret = ret.concat(this.productPageNotVisited());

    return ret;
  };

  this.productPageNotVisited = function () {
    var ret;

    var productPageId = insightsUtils.getProductPageId();
    var productPageVisits = analyticsApi.pageVisits.getCountOfLastMonth(productPageId);
    var siteVisits = analyticsApi.siteVisits.getCountOfLastMonth();

    if ((productPageVisits / siteVisits) < 0.5) {
      ret = {
        type: this.INSIGHTS.PRODUCT_PAGE_NOT_VISITED,
        CTA: ''
      };
    }

    return ret;
  };


});