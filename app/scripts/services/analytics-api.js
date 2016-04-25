'use strict';

angular.module('insightsApp').service('analyticsApi', function (insightsUtils) {

  this.userId = 'userId';

  this.setUserId = function (userId) {
    this.userId = userId;
  };

  this.siteVisits = {
    getCountOfTimeRange: function (timeFrame /*by Days/Week/Month/Year */, dateRange) {
      return 30; //TODO
    },

    getCountOfLastDays: function (numDays) {
      return numDays * 5; //TODO
    },

    getCountOfLastWeek: function () {
      return 7 * 5; //TODO
    },

    getCountOfLastMonth: function () {
      return 30 * 5; //TODO
    },

    getCountOfLastYear: function () {
      return 365 * 5; //TODO
    },

    getCompleteStats: function () {
      return {}; //TODO
    }
  };

  this.pageVisits = {
    getCountOfTimeRange: function (pageId, timeFrame /*by Days/Week/Month/Year */, dateRange) {
      return 20; //TODO
    },

    getCountOfLastDays: function (pageId, numDays) {
      return numDays * 2; //TODO
    },

    getCountOfLastWeek: function (pageId) {
      return 7 * 2; //TODO
    },

    getCountOfLastMonth: function (pageId) {
      return 30 * 2; //TODO
    },

    getCountOfLastYear: function (pageId) {
      return 365 * 2; //TODO
    },

    getCompleteStats: function (pageId) {
      return {}; //TODO
    }
  };

  this.productViews = {
    getCountOfTimeRange: function (productId, timeFrame /*by Days/Week/Month/Year */, dateRange) {
      return 20; //TODO
    },

    getCountOfLastDays: function (productId, numDays) {
      return numDays * 2; //TODO
    },

    getCountOfLastWeek: function (productId) {
      return 7 * 2; //TODO
    },

    getCountOfLastMonth: function (productId) {
      return 30 * 2; //TODO
    },

    getCountOfLastYear: function (productId) {
      return 365 * 2; //TODO
    },

    getCompleteStats: function (productId) {
      return {}; //TODO
    }
  };


  this.addToCart = {
    getCountOfTimeRange: function (productId, timeFrame /*by Days/Week/Month/Year */, dateRange) {
      return 20; //TODO
    },

    getCountOfLastDays: function (productId, numDays) {
      return numDays * 2; //TODO
    },

    getCountOfLastWeek: function (productId) {
      return 7 * 2; //TODO
    },

    getCountOfLastMonth: function (productId) {
      return 30 * 2; //TODO
    },

    getCountOfLastYear: function (productId) {
      return 365 * 2; //TODO
    },

    getCompleteStats: function (productId) {
      return {}; //TODO
    }
  };

  this.orders = {
    getCountOfTimeRange: function (productId, timeFrame /*by Days/Week/Month/Year */, dateRange) {
      return 20; //TODO
    },

    getCountOfLastDays: function (productId, numDays) {
      return numDays * 2; //TODO
    },

    getCountOfLastWeek: function (productId) {
      return 7 * 2; //TODO
    },

    getCountOfLastMonth: function (productId) {
      return 30 * 2; //TODO
    },

    getCountOfLastYear: function (productId) {
      return 365 * 2; //TODO
    },

    getCompleteStats: function (productId) {
      return {}; //TODO
    }
  };

  this.revenue = {
    getCountOfTimeRange: function (productId, timeFrame /*by Days/Week/Month/Year */, dateRange) {
      return 20; //TODO
    },

    getCountOfLastDays: function (productId, numDays) {
      return numDays * 2; //TODO
    },

    getCountOfLastWeek: function (productId) {
      return 7 * 2; //TODO
    },

    getCountOfLastMonth: function (productId) {
      return 30 * 2; //TODO
    },

    getCountOfLastYear: function (productId) {
      return 365 * 2; //TODO
    },

    getCompleteStats: function (productId) {
      return {}; //TODO
    }
  };

  this.bounceRate = {
      getRateOfTimeRange: function (timeFrame /*by Days/Week/Month/Year */, dateRange) {
        return 0.8; //TODO
      }
  };

  this.byPlatform = {
    siteVisits: {
      getCountOfTimeRange: function (timeFrame /*by Days/Week/Month/Year */, dateRange) {
        return {
          mobile: 10,
          desktop: 20
        }; //TODO
      },

      getCountOfLastDays: function (numDays) {
        return {
            mobile: numDays * 2,
            desktop: numDays * 3,
          }; //TODO
      }
    },
    bounceRate: {
      getRateOfTimeRange: function (timeFrame /*by Days/Week/Month/Year */, dateRange) {
        return {
          mobile: 0.8,
          desktop: 0.6
        }; //TODO
      }
    }
  };

  this.byChannel = {
    siteVisits: {
      getCountOfTimeRange: function (timeFrame /*by Days/Week/Month/Year */, dateRange) {
        return {
          search: 10,
          referral: 20,
          campaign: 20,
          email: 20,
          direct: 20,
          other: 20
        }; //TODO
      },

      getCountOfLastDays: function (numDays) {
        return {
          search: 10,
          referral: 20,
          campaign: 20,
          email: 20,
          direct: 20,
          other: 20
        }; //TODO
      }
    }
  };

  this.byVisitors = {
    siteVisits: {
      getCountOfTimeRange: function (timeFrame /*by Days/Week/Month/Year */, dateRange) {
        return {
          uouId1: 10,
          uouId2: 20,
          uouId3: 20
        }; //TODO
      },

      getCountOfLastDays: function (numDays) {
        return {
          uouId1: 10,
          uouId2: 20,
          uouId3: 20
        }; //TODO
      }
    }
  };

  this.funnel = {
    getSiteVisitsToProductPageVisits: function (productPageId /*, dateRange*/) {
      var productPageVisits = this.pageVisits.getCountOfLastDays(productPageId, 100);
      var siteVisits = this.siteVisits.getCountOfLastDays(100);
      return productPageVisits / siteVisits;
    },

    getProductPageVisitsToProductsViews: function (productPageId /*, dateRange*/) {
      var productPageVisits = this.pageVisits.getCountOfLastDays(productPageId, 100);
      var productsViews = this.productViews.getCountOfLastDays(100);
      return productsViews / productPageVisits;
    },

    getProductsViewsToAddedToCart: function (/*dateRange*/) {
      return 0.3; //TODO
    },

    getAddedToCartToPurchased: function (/*dateRange*/) {
      return 0.3; //TODO
    }

  };

  this.visitor = {

  };

});