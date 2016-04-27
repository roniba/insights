angular.module('insightsApp')
  .service('chartsData', function () {
    var visitors = {
      week: {
        data: [30, 143, 10, 20, 2, 114, 310],
        labels: ['Jan 1st', 'Jan 2nd', 'Jan 3rd', 'Jan 4th', 'Jan 5th', 'Jan 6th', 'Jan 7th']
      },
      month: {
        data: [437, 414, 345, 619],
        labels: ['1st-7th', '8th-14th', '15th-21th', '22th-28th']
      },
      year: {
        data: [6520, 3636, 7314, 16332, 2528, 16760, 8948, 4452, 5566, 7788, 23450, 14322],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    };

    var desktopVsMobile = {
      week: {
        data: [80, 20],
        labels: ['Desktop', 'Mobile']
      },
      month: {
        data: [75, 25],
        labels: ['Desktop', 'Mobile']
      },
      year: {
        data: [82, 18],
        labels: ['Desktop', 'Mobile']
      }
    };

    var orders = {
      week: {
        data: [3, 1, 0, 0, 0, 4, 0],
        labels: ['Jan 1st', 'Jan 2nd', 'Jan 3rd', 'Jan 4th', 'Jan 5th', 'Jan 6th', 'Jan 7th']
      },
      month: {
        data: [7, 14, 5, 19],
        labels: ['1st-7th', '8th-14th', '15th-21th', '22th-28th']
      },
      year: {
        data: [20, 6, 14, 32, 28, 60, 48, 52, 66, 88, 50, 22],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    };

    var revenue = {
      week: {
        data: [35, 20, 0, 0, 0, 89, 0],
        labels: ['Jan 1st', 'Jan 2nd', 'Jan 3rd', 'Jan 4th', 'Jan 5th', 'Jan 6th', 'Jan 7th']
      },
      month: {
        data: [115, 145, 500, 190],
        labels: ['1st-7th', '8th-14th', '15th-21th', '22th-28th']
      },
      year: {
        data: [330, 970, 1400, 664, 855, 990, 140, 589, 590, 531, 753, 456],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
        case 'visitors':
          return visitors;
        case 'desktopVsMobile':
          return desktopVsMobile;
      }
    };
  });
