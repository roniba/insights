'use strict';

angular.module('insightsApp').service('trafficInsights', function (analyticsApi, insightsUtils) {

  this.THRESHOLDS = {
    ALLOWED_PRODUCT_PAGE_VS_SITE_VISITS_RATIO: 0.5,
    ALLOWED_PRODUCT_VIEWS_VS_PRODUCT_PAGE_RATIO: 0.8
  };

  this.INSIGHTS = {
    'PRODUCT_PAGE_NOT_VISITED': 'productPageNotVisited',
    'PRODUCTS_NOT_VIEWED': 'productsNotViewed'
  };

  this.INSIGHT_CATEGORIES = {
    SITE_FUNNEL: 'siteFunnel'
  };

  this.getInsights = function () {
    var ret = [];

    ret = ret.concat(this.productPageNotVisited());
    ret = ret.concat(this.productsNotViewed());
    ret = ret.concat(this.productsNotAddedToCart());
    ret = ret.concat(this.productsNotPurchased());
    ret = ret.concat(this.highlyPromotingProducts());
    ret = ret.concat(this.poorlyConvertingProducts());
    ret = ret.concat(this.getPotentialProduct());
    ret = ret.concat(this.problematicMobileBounceRate());
    ret = ret.concat(this.bundledProducts());
    ret = ret.concat(this.pricingEffect());
    ret = ret.concat(this.lowArrivalFromSearch());
    ret = ret.concat(this.lowArrivalFromReferral());

    return ret;
  };

  this.productPageNotVisited = function () {
    var ret = [];

    var productPageId = insightsUtils.getProductPageId();
    var siteVisitsToProductPageVisitsFunnel = analyticsApi.funnel.getSiteVisitsToProductPageVisits(productPageId);
    if (siteVisitsToProductPageVisitsFunnel < this.THRESHOLDS.ALLOWED_PRODUCT_PAGE_VS_SITE_VISITS_RATIO) {
      ret = [{
        type: this.INSIGHTS.PRODUCT_PAGE_NOT_VISITED,
        category: this.INSIGHT_CATEGORIES.SITE_FUNNEL,
        CTA: ''
      }];
    }
    return ret;
  };

  this.productsNotViewed = function () {
    var ret = [];

    var productPageId = insightsUtils.getProductPageId();
    var productPageVisitsToProductsViewsFunnel = analyticsApi.funnel.getProductPageVisitsToProductsViews(productPageId);
    if (productPageVisitsToProductsViewsFunnel < this.THRESHOLDS.ALLOWED_PRODUCT_VIEWS_VS_PRODUCT_PAGE_RATIO) {
      ret = [{
        type: this.INSIGHTS.PRODUCTS_NOT_VIEWED,
        category: this.INSIGHT_CATEGORIES.SITE_FUNNEL,
        CTA: ''
      }];
    }
    return ret;
  };

  this.productsNotAddedToCart = function() {
    return []; //TODO - funnel problem from products views to addedToCart
  };

  this.productsNotPurchased = function() {
    return []; //TODO - funnel problem from addedToCart to purchased
  };

  this.highlyPromotingProducts = function () {
    return []; // TODO - return best selling product with most views
  };

  this.poorlyConvertingProducts = function () {
    return []; // TODO - return no selling product with least views
  };

  this.getPotentialProduct = function () {
    return []; // TODO - return product with highest views/addToCart ratio
  };

  this.problematicMobileBounceRate = function () {
    return []; //TODO - compare the mobile bounce rate and desktop bounce rate; return iff mobile>>desktop
  };

  this.bundledProducts = function () {
    return []; // TODO - returns products pairs that are viewed together in the same session
  };

  this.pricingEffect = function () {
    return []; // TODO - compare product conversion in different pricings
  }

  this.lowArrivalFromSearch = function () {
    return []; //TODO - when the arrival to site from search is low, compared to some threshold
  };

  this.lowArrivalFromReferral = function () {
    return []; //TODO - when the arrival to site from referral is low, compared to some threshold
  };

});