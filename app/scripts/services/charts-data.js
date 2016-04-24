angular.module('insightsApp')
  .service('chartsData', function () {
    var orders = {
      week: {
        data: [3, 2, 0, 0, 0, 4, 0],
        labels: ['Jan 1st', 'Jan 2nd', 'Jan 3rd', 'Jan 4th', 'Jan 5th', 'Jan 6th', 'Jan 7th']
      },
      month: {
        data: [10, 3, 7, 15, 14, 30, 24, 26, 33, 44, 25, 11],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      year: {
        data: [89, 59, 115, 23],
        labels: ['2013', '2014', '2015', '2016']
      }
    };

    var revenue = {
      week: {
        data: [35, 20, 0, 0, 0, 89, 0],
        labels: ['Jan 1st', 'Jan 2nd', 'Jan 3rd', 'Jan 4th', 'Jan 5th', 'Jan 6th', 'Jan 7th']
      },
      month: {
        data: [33, 97, 140, 664, 455, 99, 140, 89, 90, 131, 153, 256],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      year: {
        data: [467, 859, 1247, 165],
        labels: ['2013', '2014', '2015', '2016']
      }
    };

    var topProductsViewed = {
      week: {
        data: [5, 3, 3, 1, 0],
        labels: ['Red Shirt1', 'Blue Shirt ', 'Red Shirt2', 'Green Pants', 'Red Dress']
      },
      month: {
        data: [20, 15, 12, 10, 4],
        labels: ['Red Shirt1', 'Blue Shirt ', 'Red Shirt2', 'Green Pants', 'Red Dress']
      },
      year: {
        data: [140, 80, 50, 45, 15],
        labels: ['Red Shirt1', 'Blue Shirt ', 'Red Shirt2', 'Green Pants', 'Red Dress']
      }
    };

    var topProductsPurchased = {
      week: {
        data: [2, 1, 0, 0, 0],
        labels: ['Blue Shirt ', 'Red Shirt1', 'Red Shirt2', 'Green Pants', 'Red Dress']
      },
      month: {
        data: [4, 2, 1, 1, 1],
        labels: ['Blue Shirt ', 'Red Shirt1', 'Red Shirt2', 'Green Pants', 'Red Dress']
      },

      year: {
        data: [7, 6, 4, 3, 3],
        labels: ['Blue Shirt ', 'Red Shirt1', 'Red Shirt2', 'Green Pants', 'Red Dress']
      }
    };

    this.getData = function(chart) {
      switch (chart) {
        case 'orders':
          return orders;
        case 'revenue':
          return revenue;
        case 'topProductsViewed':
          return topProductsViewed;
        case 'topProductsPurchased':
          return topProductsPurchased;
      }
    };
  });
