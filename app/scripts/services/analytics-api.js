'use strict';

angular.module('insightsApp').service('analyticsApi', function () {

  this.userId = 'userId';

  this.setUserId = function (userId) {
    this.userId = userId;
  };

  this.siteVisits = {
    getCountOfTimeRange: function (timeFrame /*by Days/Week/Month/Year */, startDate, endDate) {
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
    getCountOfTimeRange: function (pageId, timeFrame /*by Days/Week/Month/Year */, startDate, endDate) {
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
    getCountOfTimeRange: function (productId, timeFrame /*by Days/Week/Month/Year */, startDate, endDate) {
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
    getCountOfTimeRange: function (productId, timeFrame /*by Days/Week/Month/Year */, startDate, endDate) {
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
    getCountOfTimeRange: function (productId, timeFrame /*by Days/Week/Month/Year */, startDate, endDate) {
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
    getCountOfTimeRange: function (productId, timeFrame /*by Days/Week/Month/Year */, startDate, endDate) {
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


});